/*
 * Kits de componentes por tipo de partida, organizados por disciplina.
 * Cada kit se aplica a las partidas cuyo nombre contiene alguna de sus "palabras" y no contiene ninguna de "excluir".
 * Rendimiento = cantidad del componente por UNA unidad de la partida (ej.: 2 acoples por lavamanos).
 * Son valores de referencia: el usuario puede activar/desactivar cada kit y editarlo en la app.
 */
const KITS_BASE = [
  // ---------- HIDRÁULICO Y SANITARIO ----------
  { id: "hid-lavamanos", disciplina: "Hidráulico y sanitario", nombre: "Lavamanos: acople, sifón con canastilla, grifería y tubería",
    palabras: ["LAVAMANOS"], excluir: ["GRIFER", "DISPENSADOR"],
    componentes: [
      { material: "Acople flexible de alimentación para lavamanos", unidad: "und", rendimiento: 1, categoria: "Hidráulico y sanitario", presentacion: "Acople flexible para lavamanos", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Sifón con canastilla para lavamanos", unidad: "und", rendimiento: 1, categoria: "Hidráulico y sanitario", presentacion: "Sifón con canastilla", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Grifería para lavamanos", unidad: "und", rendimiento: 1, categoria: "Hidráulico y sanitario", presentacion: "Grifería para lavamanos", unidadCompra: "und", contenido: 1, merma: 0, omitirSi: ["GRIFER"] },
      { material: "Tubo PVC presión 1/2\" x 6 m", unidad: "und", rendimiento: 0.3333, categoria: "Hidráulico y sanitario", presentacion: "Tubo PVC 1/2\" x 6 m", unidadCompra: "und", contenido: 1, merma: 0.05 },
      { material: "Accesorios PVC 1/2\" (codos, tees, uniones)", unidad: "und", rendimiento: 2, categoria: "Hidráulico y sanitario", presentacion: "Accesorios PVC 1/2\"", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Tubo PVC sanitario 2\" x 6 m (desagüe)", unidad: "und", rendimiento: 0.1667, categoria: "Hidráulico y sanitario", presentacion: "Tubo PVC 2\" x 6 m", unidadCompra: "und", contenido: 1, merma: 0.05 },
      { material: "Accesorios PVC 2\" (desagüe)", unidad: "und", rendimiento: 1, categoria: "Hidráulico y sanitario", presentacion: "Accesorios PVC 2\"", unidadCompra: "und", contenido: 1, merma: 0 }
    ] },
  { id: "hid-sanitario", disciplina: "Hidráulico y sanitario", nombre: "Sanitario (taza): acople de alimentación",
    palabras: ["SANITARIO", "TAZA"], excluir: [],
    componentes: [
      { material: "Acople flexible de alimentación para sanitario", unidad: "und", rendimiento: 1, categoria: "Hidráulico y sanitario", presentacion: "Acople flexible para sanitario", unidadCompra: "und", contenido: 1, merma: 0 }
    ] },

  // ---------- ELÉCTRICO ----------
  { id: "ele-tomacorriente", disciplina: "Eléctrico", nombre: "Salida de tomacorriente: caja, tubería y cable",
    palabras: ["TOMACORRIENTE"], excluir: [],
    componentes: [
      { material: "Caja rectangular 2x4 para tomacorriente", unidad: "und", rendimiento: 1, categoria: "Eléctrico", presentacion: "Caja rectangular 2x4", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Tubo conduit PVC 1/2\" x 3 m", unidad: "und", rendimiento: 0.2, categoria: "Eléctrico", presentacion: "Tubo conduit 1/2\" x 3 m", unidadCompra: "und", contenido: 1, merma: 0.05 },
      { material: "Cable libre de halógenos 12 AWG", unidad: "ml", rendimiento: 3, categoria: "Eléctrico", presentacion: "Cable libre de halógenos 12 AWG (ml)", unidadCompra: "ml", contenido: 1, merma: 0.05 },
      { material: "Accesorios conduit 1/2\" (conectores, curvas)", unidad: "und", rendimiento: 2, categoria: "Eléctrico", presentacion: "Accesorios conduit 1/2\"", unidadCompra: "und", contenido: 1, merma: 0 }
    ] },
  { id: "ele-luminaria", disciplina: "Eléctrico", nombre: "Luminaria: caja, tubería y cable",
    palabras: ["LUMINARIA"], excluir: [],
    componentes: [
      { material: "Caja octogonal o rectangular para luminaria", unidad: "und", rendimiento: 1, categoria: "Eléctrico", presentacion: "Caja octogonal", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Tubo conduit PVC 1/2\" x 3 m", unidad: "und", rendimiento: 0.2, categoria: "Eléctrico", presentacion: "Tubo conduit 1/2\" x 3 m", unidadCompra: "und", contenido: 1, merma: 0.05 },
      { material: "Cable libre de halógenos 12 AWG", unidad: "ml", rendimiento: 3, categoria: "Eléctrico", presentacion: "Cable libre de halógenos 12 AWG (ml)", unidadCompra: "ml", contenido: 1, merma: 0.05 },
      { material: "Accesorios conduit 1/2\" (conectores, curvas)", unidad: "und", rendimiento: 2, categoria: "Eléctrico", presentacion: "Accesorios conduit 1/2\"", unidadCompra: "und", contenido: 1, merma: 0 }
    ] },
  { id: "ele-sensor", disciplina: "Eléctrico", nombre: "Sensor de movimiento: caja y cable",
    palabras: ["SENSOR DE MOVIMIENTO"], excluir: ["DETECTOR", "ALARMA", "HUMO", "TEMPERATURA"],
    componentes: [
      { material: "Caja rectangular 2x4 para sensor", unidad: "und", rendimiento: 1, categoria: "Eléctrico", presentacion: "Caja rectangular 2x4", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Cable libre de halógenos 12 AWG", unidad: "ml", rendimiento: 3, categoria: "Eléctrico", presentacion: "Cable libre de halógenos 12 AWG (ml)", unidadCompra: "ml", contenido: 1, merma: 0.05 }
    ] },

  // ---------- MECÁNICO (HVAC y contra incendio) ----------
  { id: "mec-rejilla", disciplina: "Mecánico (HVAC y contra incendio)", nombre: "Rejilla de extracción: ducto y soportería",
    palabras: ["REJILLA DE EXTRACCI", "REJILLA VARIAS DIMENSIONES"], excluir: [],
    componentes: [
      { material: "Ducto flexible de aluminio 6\"", unidad: "ml", rendimiento: 1, categoria: "Mecánico (HVAC y contra incendio)", presentacion: "Ducto flexible 6\" (ml)", unidadCompra: "ml", contenido: 1, merma: 0.05 },
      { material: "Abrazadera o cinta de sujeción para ducto", unidad: "und", rendimiento: 2, categoria: "Mecánico (HVAC y contra incendio)", presentacion: "Abrazadera ducto", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Sellador o cinta de aluminio para ductos", unidad: "und", rendimiento: 0.5, categoria: "Mecánico (HVAC y contra incendio)", presentacion: "Cinta aluminio para ducto", unidadCompra: "und", contenido: 1, merma: 0 }
    ] },
  { id: "mec-rociador", disciplina: "Mecánico (HVAC y contra incendio)", nombre: "Rociador: accesorios de conexión",
    palabras: ["ROCIADOR"], excluir: [],
    componentes: [
      { material: "Accesorio ranurado (grooved) para conexión de rociador", unidad: "und", rendimiento: 1, categoria: "Mecánico (HVAC y contra incendio)", presentacion: "Accesorio ranurado (grooved)", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Tubo de conexión de acero negro 1\"", unidad: "ml", rendimiento: 0.5, categoria: "Mecánico (HVAC y contra incendio)", presentacion: "Tubo acero negro 1\" (ml)", unidadCompra: "ml", contenido: 1, merma: 0.05 }
    ] },

  // ---------- ARQUITECTÓNICO ----------
  { id: "arq-puerta", disciplina: "Arquitectónico", nombre: "Puerta arquitectónica: herrajes",
    palabras: ["PUERTA ARQUITECT"], excluir: ["METÁLICA", "METALICA", "TERMOACUSTICA", "CORTA FUEGO", "CORTAFUEGO", "VIDRIO"],
    componentes: [
      { material: "Bisagra para puerta", unidad: "und", rendimiento: 3, categoria: "Arquitectónico", presentacion: "Bisagra", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Cerradura o manija con chapa", unidad: "und", rendimiento: 1, categoria: "Arquitectónico", presentacion: "Cerradura con chapa", unidadCompra: "und", contenido: 1, merma: 0 },
      { material: "Tope de piso o pared para puerta", unidad: "und", rendimiento: 1, categoria: "Arquitectónico", presentacion: "Tope puerta", unidadCompra: "und", contenido: 1, merma: 0 }
    ] }
];
