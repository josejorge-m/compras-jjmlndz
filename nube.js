/*
 * Conexión con Supabase: inicio de sesión, invitaciones, perfiles y kits en la nube.
 * Requiere config.js con SUPABASE_CONFIG (url y anonKey). Ninguna clave secreta debe estar en esta app.
 */
const NUBE = (() => {
  const cfg = (typeof SUPABASE_CONFIG !== "undefined") ? SUPABASE_CONFIG : { url: "", anonKey: "" };
  const valida = cfg.url && !cfg.url.includes("PEGAR") && /^https:\/\/.+\.supabase\.co$/.test(cfg.url)
    && cfg.anonKey && !cfg.anonKey.includes("PEGAR") && (cfg.anonKey.startsWith("sb_publishable_") || cfg.anonKey.startsWith("eyJ"));
  const sb = (valida && window.supabase) ? window.supabase.createClient(cfg.url, cfg.anonKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
  }) : null;

  const correoUsuario = async () => {
    const { data } = await sb.auth.getUser();
    return data && data.user ? data.user : null;
  };

  return {
    configurado: !!sb,
    sb,
    async sesion() { const { data } = await sb.auth.getSession(); return data.session; },
    async perfil() {
      const u = await correoUsuario(); if (!u) return null;
      const { data, error } = await sb.from("perfiles").select("id,email,rol").eq("id", u.id).maybeSingle();
      if (error) throw error;
      return data;
    },
    async entrar(email, password) {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
    },
    async crearCuenta(email, password) {
      const { data, error } = await sb.auth.signUp({ email, password });
      if (error) throw error;
      return !!data.session;   // true si no requiere confirmar correo
    },
    async salir() { await sb.auth.signOut(); },
    async canjear(codigo) {
      const { data, error } = await sb.rpc("canjear_invitacion", { p_codigo: codigo });
      if (error) throw error;
      return data === true;
    },
    async cargarKits() {
      const { data, error } = await sb.from("kits").select("id,datos").order("id");
      if (error) throw error;
      return (data || []).map((r) => r.datos);
    },
    async guardarKits(kits) {
      const u = await correoUsuario();
      const filas = kits.map((k) => ({ id: k.id, datos: k, actualizado_en: new Date().toISOString(), actualizado_por: u.id }));
      if (filas.length) {
        const { error } = await sb.from("kits").upsert(filas);
        if (error) throw error;
      }
      const { data: existentes, error: e2 } = await sb.from("kits").select("id");
      if (e2) throw e2;
      const ids = new Set(kits.map((k) => k.id));
      const sobran = (existentes || []).map((r) => r.id).filter((id) => !ids.has(id));
      if (sobran.length) {
        const { error } = await sb.from("kits").delete().in("id", sobran);
        if (error) throw error;
      }
    },
    async crearInvitacion(email) {
      const u = await correoUsuario();
      const { data, error } = await sb.from("invitaciones")
        .insert({ email_destino: email || null, creada_por: u.id }).select("codigo").single();
      if (error) throw error;
      return data.codigo;
    },
    async listarInvitaciones() {
      const { data, error } = await sb.from("invitaciones")
        .select("codigo,email_destino,usada,creada_en").order("creada_en", { ascending: false }).limit(50);
      if (error) throw error;
      return data || [];
    }
  };
})();
