/* Calculadora de compras de obra civil. Todo se procesa en el dispositivo; ningún archivo sale de la app. */

const BASE_ACTIVIDADES = [...BASE_ACTIVIDADES_BASE, ...BASE_ACTA_N6, ...BASE_ACTA_N6_AUTO];

const _clon = (o) => JSON.parse(JSON.stringify(o));
let KITS = _clon(KITS_BASE);   // se reemplaza con los kits de la nube al iniciar sesión
let ES_ADMIN = false;

async function guardarKits() {
  try {
    await NUBE.guardarKits(KITS);
    mostrarMensaje("Kits guardados en la nube.", "ok");
  } catch (err) {
    mostrarMensaje("No se pudieron guardar los kits: " + err.message, "error");
  }
}

const UNIDADES_DISCRETAS = new Set(["und", "unidad", "bulto", "varilla", "caja", "gal", "galon", "rollo", "bolsa", "lata"]);
const $ = (id) => document.getElementById(id);

let actividadesDetectadas = [];   // [{codigo, nombre, unidad, cantidad, fuente}]
let lineasNoReconocidas = [];     // [{fuente, texto}]
let informeActual = null;         // resultado del cálculo

// ---------- Utilidades ----------
const normalizar = (t) => String(t ?? "")
  .normalize("NFD").replace(/[̀-ͯ]/g, "")
  .toUpperCase().replace(/\s+/g, " ").trim();

function parseNumero(valor) {
  if (typeof valor === "number") return isFinite(valor) ? valor : null;
  let s = String(valor ?? "").trim().replace(/\s/g, "");
  if (!/^-?[\d.,]+$/.test(s)) return null;
  if (s.includes(",") && s.includes(".")) {
    s = s.lastIndexOf(",") > s.lastIndexOf(".") ? s.replace(/\./g, "").replace(",", ".") : s.replace(/,/g, "");
  } else if (s.includes(",")) {
    s = s.replace(",", ".");               // formato colombiano: coma decimal
  }
  const n = Number(s);
  return isFinite(n) ? n : null;
}

const fmt = (n, dec = 2) => Number(n).toLocaleString("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: dec });

function redondearCompra(valor, unidad) {
  if (UNIDADES_DISCRETAS.has(String(unidad).trim().toLowerCase())) return Math.ceil(Number((valor).toFixed(6)));
  return Math.ceil(Number((valor * 100).toFixed(6))) / 100;
}

function detectarKits(nombre) {
  const N = normalizar(nombre);
  return KITS.filter((k) =>
    (k.palabras || []).some((p) => N.includes(normalizar(p))) &&
    !(k.excluir || []).some((e) => N.includes(normalizar(e))));
}

function mostrarMensaje(texto, tipo = "info") {
  const m = $("mensaje");
  m.textContent = texto;
  m.className = "mensaje " + tipo;
  m.hidden = !texto;
}

// ---------- Búsqueda de actividades en filas ----------
function buscarActividad(celda) {
  const c = normalizar(celda);
  if (!c) return null;
  return BASE_ACTIVIDADES.find((a) => normalizar(a.codigo) === c)
      || BASE_ACTIVIDADES.find((a) => normalizar(a.nombre) === c)
      || null;
}

/*
 * Recibe filas (arrays de celdas) de un archivo y extrae pares actividad/cantidad.
 * Regla de "tabla fija": la fila debe tener el código (o nombre exacto) de la actividad
 * y una cantidad numérica. Si existe una fila de encabezado con "cantidad", se usa esa columna.
 */
function extraerDeFilas(filas, fuente) {
  const hallazgos = [];
  let colCantidad = -1;

  for (const fila of filas) {
    const celdas = fila.map((c) => (c === null || c === undefined ? "" : c));
    const enc = celdas.map((c) => normalizar(c));
    const idxCant = enc.findIndex((c) => c === "CANTIDAD" || c === "CANT" || c === "CANT.");
    if (idxCant >= 0 && enc.some((c) => c === "CODIGO" || c === "ACTIVIDAD" || c === "ITEM" || c === "CÓDIGO")) {
      colCantidad = idxCant;
      continue;
    }

    const idxAct = celdas.findIndex((c) => buscarActividad(c));
    if (idxAct < 0) {
      // Ignora partidas con código y sin cantidad (avance 0) y filas de títulos sin valores
      const primera = celdas.findIndex((c) => String(c).trim() !== "");
      const esCodigo = (i) => i === primera && /^\s*\d+(\.\d+)?\s*$/.test(String(celdas[i]));
      const valores = celdas.filter((c, i) => !esCodigo(i) && parseNumero(c) !== null && parseNumero(c) !== 0);
      const texto = celdas.filter((c) => String(c).trim()).join(" | ");
      if (texto && valores.length > 0) {
        lineasNoReconocidas.push({ fuente, texto });
      }
      continue;
    }

    const actividad = buscarActividad(celdas[idxAct]);
    let cantidad = null;
    if (colCantidad >= 0 && parseNumero(celdas[colCantidad]) !== null) {
      cantidad = parseNumero(celdas[colCantidad]);
    } else {
      // primer valor numérico a la derecha del código; si no, a la izquierda
      for (let i = idxAct + 1; i < celdas.length && cantidad === null; i++) cantidad = parseNumero(celdas[i]);
      for (let i = idxAct - 1; i >= 0 && cantidad === null; i--) cantidad = parseNumero(celdas[i]);
    }
    if (cantidad !== null) cantidad = Math.round(cantidad * 10000) / 10000;   // evita residuos de decimales
    if (cantidad === 0) continue;   // partida del acta sin avance: no es un error
    if (cantidad === null) {
      lineasNoReconocidas.push({ fuente, texto: celdas.filter((c) => String(c).trim()).join(" | ") + "  (sin cantidad válida)" });
      continue;
    }
    hallazgos.push({ codigo: actividad.codigo, nombre: actividad.nombre, unidad: actividad.unidad, cantidad, fuente });
  }
  return hallazgos;
}

// ---------- Lectores por formato ----------
async function leerExcel(archivo) {
  const wb = XLSX.read(await archivo.arrayBuffer(), { type: "array" });
  let filas = [];
  const actas = wb.SheetNames.filter((n) => /^acta/i.test(n.trim()));
  const hojas = actas.length ? actas : wb.SheetNames;
  for (const nombre of hojas) {
    const hoja = XLSX.utils.sheet_to_json(wb.Sheets[nombre], { header: 1, defval: "", raw: true });
    filas = filas.concat(hoja);
  }
  return extraerDeFilas(filas, archivo.name);
}

async function leerCSV(archivo) {
  const texto = await archivo.text();
  const filas = texto.split(/\r?\n/).filter((l) => l.trim()).map((l) => l.split(/[;\t,]/).map((c) => c.trim()));
  return extraerDeFilas(filas, archivo.name);
}

async function leerPDF(archivo) {
  const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(await archivo.arrayBuffer()) }).promise;
  const filas = [];
  for (let p = 1; p <= pdf.numPages; p++) {
    const pagina = await pdf.getPage(p);
    const contenido = await pagina.getTextContent();
    // agrupar por línea (coordenada y)
    const lineas = new Map();
    for (const it of contenido.items) {
      if (!it.str || !it.str.trim()) continue;
      const y = Math.round(it.transform[5]);
      if (!lineas.has(y)) lineas.set(y, []);
      lineas.get(y).push({ x: it.transform[4], w: it.width, s: it.str });
    }
    const ys = [...lineas.keys()].sort((a, b) => b - a);
    for (const y of ys) {
      const items = lineas.get(y).sort((a, b) => a.x - b.x);
      const celdas = [];
      let actual = "", finPrev = null;
      for (const it of items) {
        if (finPrev !== null && it.x - finPrev > 12) { celdas.push(actual.trim()); actual = ""; }
        actual += (actual ? " " : "") + it.s;
        finPrev = it.x + it.w;
      }
      if (actual.trim()) celdas.push(actual.trim());
      filas.push(celdas);
    }
  }
  return extraerDeFilas(filas, archivo.name);
}

async function leerWord(archivo) {
  const { value: html } = await mammoth.convertToHtml({ arrayBuffer: await archivo.arrayBuffer() });
  const doc = new DOMParser().parseFromString(html, "text/html");
  const filas = [];
  doc.querySelectorAll("tr").forEach((tr) => {
    filas.push([...tr.querySelectorAll("td,th")].map((td) => td.textContent.trim()));
  });
  doc.querySelectorAll("p").forEach((p) => {
    if (p.closest("table")) return;
    const partes = p.textContent.split(/\t|\s{2,}|;/).map((x) => x.trim()).filter(Boolean);
    if (partes.length) filas.push(partes);
  });
  return extraerDeFilas(filas, archivo.name);
}

async function leerArchivo(archivo) {
  const ext = archivo.name.split(".").pop().toLowerCase();
  if (["xlsx", "xls", "xlsm"].includes(ext)) return leerExcel(archivo);
  if (ext === "csv") return leerCSV(archivo);
  if (ext === "pdf") return leerPDF(archivo);
  if (ext === "docx") return leerWord(archivo);
  throw new Error(`Formato no compatible: .${ext}`);
}

// ---------- Interfaz de archivos ----------
async function procesarArchivos(lista) {
  const archivos = [...lista];
  if (!archivos.length) return;
  mostrarMensaje("Leyendo archivos…", "info");
  for (const a of archivos) {
    try {
      const hallazgos = await leerArchivo(a);
      actividadesDetectadas.push(...hallazgos);
    } catch (err) {
      lineasNoReconocidas.push({ fuente: a.name, texto: "No se pudo leer el archivo: " + err.message });
    }
  }
  renderArchivos(archivos);
  renderActividades();
  mostrarMensaje(actividadesDetectadas.length
    ? "Revise y ajuste las cantidades antes de generar el informe."
    : "No se encontraron actividades válidas. Revise las observaciones.", actividadesDetectadas.length ? "ok" : "error");
}

function renderArchivos(archivos) {
  const cont = $("listaArchivos");
  cont.innerHTML = "";
  archivos.forEach((a) => {
    const li = document.createElement("li");
    li.textContent = `${a.name} (${Math.round(a.size / 1024)} KB)`;
    cont.appendChild(li);
  });
}

function renderActividades() {
  const tbody = $("tablaActividades").querySelector("tbody");
  tbody.innerHTML = "";
  // consolidar por código
  const grupos = new Map();
  actividadesDetectadas.forEach((h) => {
    if (!grupos.has(h.codigo)) grupos.set(h.codigo, { ...h, cantidad: 0, fuentes: new Set() });
    const g = grupos.get(h.codigo);
    g.cantidad += h.cantidad;
    g.fuentes.add(h.fuente);
  });
  actividadesDetectadas = [...grupos.values()].map(({ fuentes, ...h }) => h);
  // Cantidades netas negativas o cero (ajustes del acta) no generan compra: se informan y se quitan de la lista
  actividadesDetectadas.filter((h) => !(h.cantidad > 0)).forEach((h) =>
    lineasNoReconocidas.push({ fuente: "Ajuste neto", texto: `${h.codigo} ${h.nombre}: cantidad neta ${fmt(h.cantidad)} ${h.unidad} (no genera compra)` }));
  actividadesDetectadas = actividadesDetectadas.filter((h) => h.cantidad > 0);
  actividadesDetectadas.forEach((h, i) => {
    if (!h.kitsSel) h.kitsSel = detectarKits(h.nombre).map((k) => k.id);
    const posibles = detectarKits(h.nombre);
    const casillas = posibles.length
      ? posibles.map((k) => `<label class="kit-op"><input type="checkbox" class="kit-chk" data-i="${i}" data-kit="${k.id}" ${h.kitsSel.includes(k.id) ? "checked" : ""}> ${k.nombre}</label>`).join("<br>")
      : "<span class='aviso'>Sin kit</span>";
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${h.codigo}</td><td>${h.nombre}</td>
      <td><input type="number" step="any" min="0" value="${h.cantidad}" data-i="${i}" class="cant"></td>
      <td>${h.unidad}</td>
      <td>${casillas}</td>
      <td><button type="button" class="quitar" data-i="${i}">Quitar</button></td>`;
    tbody.appendChild(tr);
  });
  $("seccionActividades").hidden = actividadesDetectadas.length === 0;
  $("seccionObs").hidden = lineasNoReconocidas.length === 0;
  const ul = $("listaObs");
  ul.innerHTML = "";
  lineasNoReconocidas.slice(0, 100).forEach((l) => {
    const li = document.createElement("li");
    li.textContent = `${l.fuente}: ${l.texto}`;
    ul.appendChild(li);
  });
  $("btnGenerar").disabled = actividadesDetectadas.length === 0;
}

// ---------- Cálculo del informe ----------
function calcularInforme() {
  const filas = [];
  const actividadesUsadas = [];
  const sinCompra = [];
  const nombresPartidas = actividadesDetectadas.map((a) => normalizar(a.nombre));
  for (const act of actividadesDetectadas) {
    const base = BASE_ACTIVIDADES.find((b) => b.codigo === act.codigo);
    if (!base || !(act.cantidad > 0)) continue;
    actividadesUsadas.push({ ...act });
    const kitsAplicados = KITS.filter((k) => (act.kitsSel || []).includes(k.id));
    if (base.materiales.length === 0 && kitsAplicados.length === 0) { sinCompra.push({ ...act }); continue; }
    for (const m of base.materiales) {
      const neta = act.cantidad * m.rendimiento;
      const conMerma = neta * (1 + m.merma);
      filas.push({ codigo: act.codigo, actividad: base.nombre, categoria: m.categoria, material: m.material,
        unidad: m.unidad, neta, conMerma, presentacion: m.presentacion, unidadCompra: m.unidadCompra, contenido: m.contenido });
    }
    for (const kit of kitsAplicados) {
      for (const c of kit.componentes) {
        // Componente que no aplica si la obra ya tiene una partida propia (ej.: grifería)
        if ((c.omitirSi || []).some((p) => nombresPartidas.some((n) => n.includes(normalizar(p))))) continue;
        const neta = act.cantidad * c.rendimiento;
        const conMerma = neta * (1 + (c.merma || 0));
        const uc = c.unidadCompra || c.unidad;
        filas.push({ codigo: act.codigo, actividad: base.nombre, categoria: c.categoria || kit.disciplina, material: c.material,
          unidad: c.unidad, neta, conMerma, presentacion: c.presentacion || c.material, unidadCompra: uc, contenido: c.contenido || 1 });
      }
    }
  }
  // consolidar por material
  const mapa = new Map();
  for (const f of filas) {
    const clave = f.material + "|" + f.unidadCompra;
    if (!mapa.has(clave)) mapa.set(clave, { ...f, neta: 0, conMerma: 0, actividades: new Set() });
    const g = mapa.get(clave);
    g.neta += f.neta; g.conMerma += f.conMerma; g.actividades.add(f.codigo);
  }
  const compras = [...mapa.values()].map((g) => ({
    ...g,
    unidadesComprar: redondearCompra(g.conMerma / g.contenido, g.unidadCompra),
    actividades: [...g.actividades].join(", ")
  })).sort((a, b) => a.categoria.localeCompare(b.categoria, "es") || a.material.localeCompare(b.material, "es"));

  return { compras, actividades: actividadesUsadas, sinCompra, observaciones: lineasNoReconocidas.slice(), fecha: new Date() };
}

function renderInforme(inf) {
  const tbody = $("tablaCompras").querySelector("tbody");
  tbody.innerHTML = "";
  let catAnt = null;
  inf.compras.forEach((c) => {
    if (c.categoria !== catAnt) {
      const tr = document.createElement("tr");
      tr.className = "categoria";
      tr.innerHTML = `<td colspan="6">${c.categoria}</td>`;
      tbody.appendChild(tr);
      catAnt = c.categoria;
    }
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${c.material}</td><td>${fmt(c.conMerma)} ${c.unidad}</td>
      <td>${c.presentacion}</td><td>${fmt(c.contenido, 2)}</td><td><strong>${fmt(c.unidadesComprar, 2)}</strong> ${c.unidadCompra}</td>
      <td>${c.actividades}</td>`;
    tbody.appendChild(tr);
  });
  $("seccionInforme").hidden = false;
  $("seccionInforme").scrollIntoView({ behavior: "smooth" });
}

// ---------- Exportación ----------
function nombreBase() {
  const proy = ($("proyecto").value || "obra").trim().replace(/[^\w\-]+/g, "_");
  const f = new Date().toISOString().slice(0, 10);
  return `informe_compras_${proy}_${f}`;
}

function descargarBlob(blob, nombre) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = nombre;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function exportarPDF(inf) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "letter" });
  const proyecto = $("proyecto").value || "—";
  const responsable = $("responsable").value || "—";

  doc.setFont("helvetica", "bold").setFontSize(15).text("INFORME DE COMPRAS - OBRA CIVIL", 14, 16);
  doc.setFont("helvetica", "normal").setFontSize(10);
  doc.text(`Proyecto: ${proyecto}`, 14, 23);
  doc.text(`Responsable: ${responsable}`, 14, 28);
  doc.text(`Fecha: ${inf.fecha.toLocaleDateString("es-CO")}`, 200, 23);

  doc.autoTable({
    startY: 34,
    head: [["Actividad", "Cantidad de obra", "Código"]],
    body: inf.actividades.map((a) => [a.nombre, `${fmt(a.cantidad)} ${a.unidad}`, a.codigo]),
    theme: "striped", headStyles: { fillColor: [31, 78, 120] }, styles: { fontSize: 9 },
  });

  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 8,
    head: [["Categoría", "Material", "Cantidad necesaria (incl. merma)", "Presentación de compra", "Contenido", "Unidades a comprar", "Actividades"]],
    body: inf.compras.map((c) => [c.categoria, c.material, `${fmt(c.conMerma)} ${c.unidad}`, c.presentacion,
      fmt(c.contenido), `${fmt(c.unidadesComprar)} ${c.unidadCompra}`, c.actividades]),
    theme: "striped", headStyles: { fillColor: [31, 78, 120] }, styles: { fontSize: 8.5 },
    columnStyles: { 5: { fontStyle: "bold" } },
  });

  if (inf.sinCompra.length) {
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 8,
      head: [["Partidas que no generan compra (servicios)", "Cantidad de obra"]],
      body: inf.sinCompra.map((a) => [a.nombre, `${fmt(a.cantidad)} ${a.unidad}`]),
      styles: { fontSize: 8.5 }, headStyles: { fillColor: [90, 90, 90] },
    });
  }

  if (inf.observaciones.length) {
    doc.addPage();
    doc.setFont("helvetica", "bold").setFontSize(12).text("Observaciones de lectura (revisar manualmente)", 14, 16);
    doc.autoTable({
      startY: 22,
      head: [["Archivo", "Contenido no reconocido"]],
      body: inf.observaciones.slice(0, 300).map((o) => [o.fuente, o.texto]),
      styles: { fontSize: 8.5 }, headStyles: { fillColor: [150, 90, 0] },
    });
  }

  const y = doc.internal.pageSize.getHeight() - 30;
  doc.setFontSize(10).setFont("helvetica", "normal");
  doc.text("Elaborado por: ____________________________", 14, y);
  doc.text("Revisado / aprobado por: ____________________________", 150, y);
  doc.setFontSize(8).text("Cantidades calculadas con rendimientos de referencia. Validar antes de comprar.", 14, y + 10);

  doc.save(nombreBase() + ".pdf");
}

function exportarExcel(inf) {
  const wb = XLSX.utils.book_new();
  const compras = inf.compras.map((c) => ({
    "Categoría": c.categoria, "Material": c.material, "Actividades": c.actividades,
    "Cantidad necesaria (incl. merma)": Number(c.conMerma.toFixed(2)), "Unidad": c.unidad,
    "Presentación de compra": c.presentacion, "Contenido por unidad": c.contenido,
    "Unidad de compra": c.unidadCompra, "Unidades a comprar": c.unidadesComprar
  }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(compras), "Listado de compras");

  const act = inf.actividades.map((a) => ({ "Código": a.codigo, "Actividad": a.nombre, "Cantidad": a.cantidad, "Unidad": a.unidad }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(act), "Actividades");

  const obs = inf.observaciones.map((o) => ({ "Archivo": o.fuente, "Contenido": o.texto }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(obs.length ? obs : [{ Observación: "Sin observaciones" }]), "Observaciones");

  const bytes = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  descargarBlob(new Blob([bytes], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }), nombreBase() + ".xlsx");
}


// ---------- Editor de kits ----------
const ESC = (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const _lista = (t) => String(t || "").split(",").map((x) => x.trim()).filter(Boolean);

function renderEditorKits() {
  const cont = $("editorKits");
  cont.innerHTML = "";
  KITS.forEach((k) => {
    const det = document.createElement("details");
    det.dataset.kit = k.id;
    det.innerHTML = `
      <summary><strong>${ESC(k.nombre)}</strong> · ${ESC(k.disciplina)}</summary>
      <div class="campos">
        <div><label>Nombre del kit</label><input type="text" data-f="nombre" value="${ESC(k.nombre)}"></div>
        <div><label>Disciplina</label><input type="text" data-f="disciplina" value="${ESC(k.disciplina)}"></div>
        <div><label>Palabras clave (separadas por coma)</label><input type="text" data-f="palabras" value="${ESC((k.palabras || []).join(", "))}"></div>
        <div><label>Excluir si contiene (separadas por coma)</label><input type="text" data-f="excluir" value="${ESC((k.excluir || []).join(", "))}"></div>
      </div>
      <div class="tabla-wrap"><table>
        <thead><tr><th>Componente</th><th>Unidad</th><th>Cantidad por unidad de partida</th><th>Merma (%)</th><th></th></tr></thead>
        <tbody>${(k.componentes || []).map((c, i) => `
          <tr data-c="${i}">
            <td><input type="text" data-f="material" value="${ESC(c.material)}"></td>
            <td><input type="text" data-f="unidad" value="${ESC(c.unidad)}" style="width:80px"></td>
            <td><input type="number" step="any" min="0" data-f="rendimiento" value="${c.rendimiento}" style="width:110px"></td>
            <td><input type="number" step="any" min="0" data-f="merma" value="${(c.merma || 0) * 100}" style="width:80px"></td>
            <td><button type="button" class="boton secundario pequeno" data-act="del-comp">Quitar</button></td>
          </tr>`).join("")}
        </tbody></table></div>
      <div class="acciones">
        <button type="button" class="boton secundario pequeno" data-act="add-comp" ${ES_ADMIN ? "" : "disabled"}>Añadir componente</button>
        <button type="button" class="boton secundario pequeno" data-act="del-kit" ${ES_ADMIN ? "" : "disabled"}>Eliminar kit</button>
      </div>`;
    cont.appendChild(det);
  });
}

function leerEditorKits() {
  document.querySelectorAll("#editorKits details").forEach((det) => {
    const k = KITS.find((x) => x.id === det.dataset.kit);
    if (!k) return;
    const campo = (f) => det.querySelector(`.campos [data-f="${f}"]`).value;
    k.nombre = campo("nombre").trim() || k.nombre;
    k.disciplina = campo("disciplina").trim() || "Otros";
    k.palabras = _lista(campo("palabras"));
    k.excluir = _lista(campo("excluir"));
    k.componentes = [...det.querySelectorAll("tbody tr")].map((tr) => {
      const f = (n) => tr.querySelector(`[data-f="${n}"]`).value;
      const unidad = f("unidad").trim() || "und";
      const uc = unidad.toLowerCase() === "un" ? "und" : unidad;
      return { material: f("material").trim(), unidad, rendimiento: parseNumero(f("rendimiento")) || 0,
        categoria: k.disciplina, presentacion: f("material").trim(), unidadCompra: uc, contenido: 1,
        merma: (parseNumero(f("merma")) || 0) / 100 };
    }).filter((c) => c.material);
  });
}

function iniciarEditorKits() {
  $("btnNuevoKit").addEventListener("click", () => {
    leerEditorKits();
    KITS.push({ id: "kit-" + Date.now(), disciplina: "Otros", nombre: "Nuevo kit", palabras: [], excluir: [], componentes: [] });
    renderEditorKits();
  });
  $("btnGuardarKits").addEventListener("click", () => {
    leerEditorKits(); guardarKits().then(() => { renderEditorKits(); renderActividades(); });
  });
  $("btnRestaurarKits").addEventListener("click", () => {
    KITS = _clon(KITS_BASE); guardarKits().then(() => { renderEditorKits(); renderActividades(); });
  });
  $("btnExportarKits").addEventListener("click", () => {
    leerEditorKits();
    descargarBlob(new Blob([JSON.stringify(KITS, null, 2)], { type: "application/json" }), "kits_obra.json");
  });
  $("inputKits").addEventListener("change", async (e) => {
    const f = e.target.files[0]; if (!f) return;
    try {
      const datos = JSON.parse(await f.text());
      if (!Array.isArray(datos)) throw new Error("el archivo debe contener una lista de kits");
      KITS = datos; guardarKits().then(() => { renderEditorKits(); renderActividades(); });
    } catch (err) { mostrarMensaje("No se pudieron importar los kits: " + err.message, "error"); }
    e.target.value = "";
  });
  $("editorKits").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-act]"); if (!btn) return;
    const det = btn.closest("details");
    const k = KITS.find((x) => x.id === det.dataset.kit);
    leerEditorKits();
    if (btn.dataset.act === "add-comp") k.componentes.push({ material: "Nuevo componente", unidad: "und", rendimiento: 1, categoria: k.disciplina, presentacion: "Nuevo componente", unidadCompra: "und", contenido: 1, merma: 0 });
    if (btn.dataset.act === "del-comp") k.componentes.splice(Number(btn.closest("tr").dataset.c), 1);
    if (btn.dataset.act === "del-kit") KITS = KITS.filter((x) => x.id !== k.id);
    renderEditorKits();
  });
  renderEditorKits();
}


// ---------- Acceso, invitaciones y administración ----------
const PENDIENTE_KEY = "invitacion_pendiente";

function codigoInvitacion() {
  return new URLSearchParams(location.search).get("invitacion") || localStorage.getItem(PENDIENTE_KEY) || null;
}

function mostrarLogin(msg = "", tipo = "info") {
  $("contenidoApp").hidden = true;
  $("seccionLogin").hidden = false;
  $("btnSalir").hidden = true;
  $("usuarioActual").textContent = "";
  const m = $("mensajeLogin");
  m.textContent = msg; m.className = "mensaje " + tipo; m.hidden = !msg;
  const inv = codigoInvitacion();
  $("btnCrearCuenta").hidden = !inv;
  $("avisoInvitacion").hidden = !inv;
}

async function verificarSesion() {
  const sesion = await NUBE.sesion();
  if (!sesion) return mostrarLogin();
  let perfil = await NUBE.perfil();
  const cod = codigoInvitacion();
  if (!perfil && cod) {
    const ok = await NUBE.canjear(cod).catch(() => false);
    localStorage.removeItem(PENDIENTE_KEY);
    if (ok) perfil = await NUBE.perfil();
  }
  if (!perfil) {
    await NUBE.salir();
    return mostrarLogin("Su cuenta no tiene acceso. Pida una invitación al administrador.", "error");
  }
  await entrarApp(perfil);
}

async function entrarApp(perfil) {
  ES_ADMIN = perfil.rol === "admin";
  $("seccionLogin").hidden = true;
  $("contenidoApp").hidden = false;
  $("btnSalir").hidden = false;
  $("usuarioActual").textContent = perfil.email + (ES_ADMIN ? " (administrador)" : "");
  $("seccionAdmin").hidden = !ES_ADMIN;
  $("inputKits").disabled = !ES_ADMIN;
  $("btnNuevoKit").disabled = !ES_ADMIN;
  $("btnGuardarKits").disabled = !ES_ADMIN;
  $("btnRestaurarKits").disabled = !ES_ADMIN;
  try {
    const nube = await NUBE.cargarKits();
    KITS = nube.length ? nube : _clon(KITS_BASE);
  } catch (err) {
    KITS = _clon(KITS_BASE);
    mostrarMensaje("No se pudieron cargar los kits de la nube; se usan los predeterminados.", "error");
  }
  renderEditorKits();
  renderActividades();
  if (ES_ADMIN) cargarInvitaciones();
}

async function cargarInvitaciones() {
  try {
    const lista = await NUBE.listarInvitaciones();
    const tb = $("tablaInvitaciones").querySelector("tbody");
    tb.innerHTML = "";
    lista.forEach((i) => {
      const enlace = `${location.origin}${location.pathname}?invitacion=${i.codigo}`;
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${ESC(i.email_destino || "(cualquiera)")}</td>
        <td>${i.usada ? "Usada" : "Disponible"}</td>
        <td>${new Date(i.creada_en).toLocaleDateString("es-CO")}</td>
        <td>${i.usada ? "" : `<button type="button" class="boton secundario pequeno" data-enlace="${enlace}">Copiar enlace</button>`}</td>`;
      tb.appendChild(tr);
    });
  } catch (err) {
    mostrarMensaje("No se pudieron cargar las invitaciones: " + err.message, "error");
  }
}

function copiarEnlace(enlace) {
  navigator.clipboard.writeText(enlace)
    .then(() => mostrarMensaje("Enlace copiado. Envíelo a la persona invitada.", "ok"))
    .catch(() => mostrarMensaje("Copie este enlace: " + enlace, "info"));
}

function iniciarAcceso() {
  if (!NUBE.configurado) {
    mostrarLogin("La app todavía no está conectada a Supabase. Revise el archivo config.js.", "error");
    return;
  }
  $("btnEntrar").addEventListener("click", async () => {
    try {
      await NUBE.entrar($("loginCorreo").value.trim(), $("loginClave").value);
      await verificarSesion();
    } catch (err) {
      mostrarLogin("Correo o contraseña incorrectos, o la conexión falló. Intente de nuevo.", "error");
    }
  });
  $("btnCrearCuenta").addEventListener("click", async () => {
    const cod = codigoInvitacion();
    if (!cod) return mostrarLogin("Necesita un enlace de invitación para crear la cuenta.", "error");
    try {
      const correo = $("loginCorreo").value.trim();
      const clave = $("loginClave").value;
      const conectada = await NUBE.crearCuenta(correo, clave);
      localStorage.setItem(PENDIENTE_KEY, cod);
      if (conectada) return await verificarSesion();
      mostrarLogin("Revise su correo y confirme la cuenta. Luego ingrese aquí con su correo y contraseña.", "ok");
    } catch (err) {
      mostrarLogin("No se pudo crear la cuenta: " + err.message, "error");
    }
  });
  $("btnSalir").addEventListener("click", async () => {
    await NUBE.salir();
    mostrarLogin("Sesión cerrada.", "ok");
  });
  $("btnCrearInvitacion").addEventListener("click", async () => {
    try {
      const cod = await NUBE.crearInvitacion($("correoInvitado").value.trim());
      $("correoInvitado").value = "";
      copiarEnlace(`${location.origin}${location.pathname}?invitacion=${cod}`);
      cargarInvitaciones();
    } catch (err) {
      mostrarMensaje("No se pudo crear la invitación: " + err.message, "error");
    }
  });
  $("tablaInvitaciones").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-enlace]");
    if (b) copiarEnlace(b.dataset.enlace);
  });
  verificarSesion().catch((err) => mostrarLogin("Error de conexión: " + err.message, "error"));
}

// ---------- Eventos ----------
function iniciar() {
  const zona = $("zonaArchivos");
  const input = $("inputArchivos");

  input.addEventListener("change", (e) => procesarArchivos(e.target.files));
  zona.addEventListener("dragover", (e) => { e.preventDefault(); zona.classList.add("activa"); });
  zona.addEventListener("dragleave", () => zona.classList.remove("activa"));
  zona.addEventListener("drop", (e) => { e.preventDefault(); zona.classList.remove("activa"); procesarArchivos(e.dataTransfer.files); });

  $("tablaActividades").addEventListener("input", (e) => {
    if (e.target.classList.contains("cant")) {
      const v = parseNumero(e.target.value);
      actividadesDetectadas[e.target.dataset.i].cantidad = v ?? 0;
    }
  });
  $("tablaActividades").addEventListener("change", (e) => {
    if (e.target.classList.contains("kit-chk")) {
      const h = actividadesDetectadas[e.target.dataset.i];
      const id = e.target.dataset.kit;
      h.kitsSel = e.target.checked ? [...new Set([...(h.kitsSel || []), id])] : (h.kitsSel || []).filter((x) => x !== id);
    }
  });
  $("tablaActividades").addEventListener("click", (e) => {
    if (e.target.classList.contains("quitar")) {
      actividadesDetectadas.splice(Number(e.target.dataset.i), 1);
      renderActividades();
    }
  });

  $("btnGenerar").addEventListener("click", () => {
    const sinCantidad = actividadesDetectadas.filter((a) => !(a.cantidad > 0));
    if (sinCantidad.length) { mostrarMensaje("Hay actividades con cantidad en cero o vacía. Corríjalas o quítelas.", "error"); return; }
    informeActual = calcularInforme();
    renderInforme(informeActual);
    mostrarMensaje("Informe generado. Puede descargarlo en PDF o Excel.", "ok");
  });

  $("btnPDF").addEventListener("click", () => informeActual && exportarPDF(informeActual));
  $("btnExcel").addEventListener("click", () => informeActual && exportarExcel(informeActual));

  $("btnLimpiar").addEventListener("click", () => {
    actividadesDetectadas = []; lineasNoReconocidas = []; informeActual = null;
    input.value = ""; $("listaArchivos").innerHTML = "";
    $("seccionInforme").hidden = true;
    renderActividades();
    mostrarMensaje("", "info");
  });

  // Instalación como app
  let eventoInstalar = null;
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); eventoInstalar = e; $("btnInstalar").hidden = false; });
  $("btnInstalar").addEventListener("click", async () => {
    if (!eventoInstalar) return;
    eventoInstalar.prompt();
    await eventoInstalar.userChoice;
    eventoInstalar = null; $("btnInstalar").hidden = true;
  });
  window.addEventListener("appinstalled", () => { $("btnInstalar").hidden = true; });

  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
  iniciarEditorKits();
  renderActividades();
  iniciarAcceso();
}

if (window.pdfjsLib) pdfjsLib.GlobalWorkerOptions.workerSrc = "vendor/pdf.worker.min.js";
document.addEventListener("DOMContentLoaded", iniciar);
