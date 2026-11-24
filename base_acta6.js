/*
 * Partidas del Acta parcial N°6 (contrato 2025-0717).
 * Tipos de partida:
 *  - servicio: materiales: [] -> no genera compra (aparece en "Partidas sin compra").
 *  - compra directa: un material por unidad de obra (equipos, puertas, señalética, puntos).
 *  - materiales: rendimientos de REFERENCIA para tubería, enchapes, estuco y pintura.
 * Todos los rendimientos y mermas son referenciales: validar con el APU de la oferta.
 */
const _M = (material, unidad, rendimiento, categoria, presentacion, unidadCompra, contenido, merma) => ({
  material, unidad, rendimiento, categoria, presentacion, unidadCompra, contenido, merma
});
const _unidadCompra = (u) => (u === "un" ? "und" : u);
const _directa = (nombre, unidad, categoria) =>
  [_M(nombre, _unidadCompra(unidad), 1, categoria, nombre, _unidadCompra(unidad), 1, 0)];

const _ELEC = "Eléctrico";
const _SAN = "Sanitario e hidrosanitario";
const _ACAB = "Acabados";
const _EQ = "Equipos y mobiliario";
const _SEN = "Vidrios, películas y señalética";
const _INC = "Protección contra incendios";

const _tuboEMT34 = _M('Tubo EMT 3/4" x 3 m', "und", 0.3333, _ELEC, 'Tubo EMT 3/4" x 3 m', "und", 1, 0.05);
const _tuboEMT114 = _M('Tubo EMT 1-1/4" x 3 m', "und", 0.3333, _ELEC, 'Tubo EMT 1-1/4" x 3 m', "und", 1, 0.05);
const _accEMT = (diam) => _M("Accesorios EMT " + diam + " (conector, unión, curva)", "und", 0.2, _ELEC, "Accesorios EMT " + diam, "und", 1, 0.05);

const _estuco = _M("Estuco para muros (bulto 25 kg)", "kg", 0.6, _ACAB, "Bulto estuco 25 kg", "bulto", 25, 0.05);
const _pintura = _M("Pintura vinilo tipo 1 (3 manos)", "gal", 0.075, _ACAB, "Galón pintura vinilo", "gal", 1, 0.10);
const _sellador = _M("Sellador", "gal", 0.02, _ACAB, "Galón sellador", "gal", 1, 0.05);

const _pvc = (diam, rend) => _M('Tubo PVC ' + diam + ' x 6 m', "und", rend, _SAN, 'Tubo PVC ' + diam + ' x 6 m', "und", 1, 0.05);
const _accPVC = (diam, rend) => _M("Accesorios PVC " + diam + " (codos, tees, uniones)", "und", rend, _SAN, "Accesorios PVC " + diam, "und", 1, 0.05);

const BASE_ACTA_N6 = [
  // ---- Servicios: no generan compra ----
  { codigo: "1.02", nombre: "Desmonte de puertas de vidrio para reubicación y reinstalación", unidad: "un", materiales: [] },
  { codigo: "1.05", nombre: "Aseo de obra", unidad: "m2", materiales: [] },
  { codigo: "4.29", nombre: "Verificación de desfogue de la planta eléctrica y revisión del extractor", unidad: "gl", materiales: [] },
  { codigo: "4.33", nombre: "Certificado RETIE (elaboración y entrega de documentación)", unidad: "und", materiales: [] },
  { codigo: "4.36", nombre: "Trámites ante ESSA (revisión, entrega, validación y recibo)", unidad: "und", materiales: [] },

  // ---- Enchape ----
  { codigo: "2.02", nombre: "Enchape cerámica pared 30x60 para baño", unidad: "m2", materiales: [
    _M("Cerámica 30x60", "m2", 1.0, _ACAB, "Caja cerámica 30x60 (1.44 m2)", "caja", 1.44, 0.05),
    _M("Pegante para cerámica", "kg", 5.0, _ACAB, "Bulto pegante 25 kg", "bulto", 25, 0.05),
    _M("Boquilla", "kg", 0.2, _ACAB, "Bolsa boquilla (kg)", "kg", 1, 0.05)
  ] },

  // ---- Eléctrico: compra directa ----
  { codigo: "4.8", nombre: "Interruptor trifásico nominal 63 A / 80 A / 100 A", unidad: "un", materiales: _directa("Interruptor trifásico 63-100 A", "un", _ELEC) },
  { codigo: "4.12", nombre: "Tablero trifásico de 12 circuitos con puerta", unidad: "un", materiales: _directa("Tablero trifásico 12 circuitos", "un", _ELEC) },
  { codigo: "4.14", nombre: "Tablero trifásico de 24 circuitos con puerta", unidad: "un", materiales: _directa("Tablero trifásico 24 circuitos", "un", _ELEC) },
  { codigo: "4.31", nombre: "Tablero trifásico de 30 circuitos con puerta", unidad: "un", materiales: _directa("Tablero trifásico 30 circuitos", "un", _ELEC) },
  { codigo: "4.26", nombre: "Celda de medida de media tensión", unidad: "und", materiales: _directa("Celda de medida media tensión", "und", _ELEC) },
  { codigo: "4.27", nombre: "Seccionador en media tensión", unidad: "und", materiales: _directa("Seccionador media tensión", "und", _ELEC) },
  { codigo: "9.42", nombre: "Controlador central panel touch de 6.2\" (TCONTCCM180A)", unidad: "und", materiales: _directa("Controlador central panel touch 6.2\"", "und", _EQ) },

  // ---- Eléctrico: tubería EMT (materiales de referencia) ----
  { codigo: "4.19", nombre: "Tubería EMT de 3/4\" a 1\" (incluye accesorios)", unidad: "ml", materiales: [_tuboEMT34, _accEMT('3/4" a 1"')] },
  { codigo: "4.2", nombre: "Tubería EMT de 1-1/4\" (incluye accesorios)", unidad: "ml", materiales: [_tuboEMT114, _accEMT('1-1/4"')] },

  // ---- Puertas, muebles y mesones: compra directa ----
  { codigo: "5.01", nombre: "Hoja de puerta arquitectónica entamborada con marco 0.76-1.10 m", unidad: "un", materiales: _directa("Puerta entamborada con marco", "un", _EQ) },
  { codigo: "5.02", nombre: "Muebles para cafetería y cocina en madera", unidad: "m", materiales: _directa("Muebles cafetería y cocina (madera)", "m", _EQ) },
  { codigo: "6.01", nombre: "Mesón en acero inoxidable calibre 18 satín", unidad: "m", materiales: _directa("Mesón acero inoxidable calibre 18", "m", _EQ) },

  // ---- Acabados: estuco y pintura ----
  { codigo: "7.01", nombre: "Estuco y pintura para muros, tipo 2 - 3 manos", unidad: "m2", materiales: [_estuco, _pintura, _sellador] },
  { codigo: "7.02", nombre: "Estuco y pintura para techos en drywall, tipo 2 - 3 manos", unidad: "ml", materiales: [_estuco, _pintura, _sellador] },

  // ---- Equipos sanitarios, dispensadores y rejillas: compra directa ----
  { codigo: "9.48", nombre: "Rejilla de extracción de varias dimensiones", unidad: "und", materiales: _directa("Rejilla de extracción", "und", _EQ) },
  { codigo: "10.02", nombre: "Lavamanos movilidad reducida (Aquajet)", unidad: "un", materiales: _directa("Lavamanos movilidad reducida (Aquajet)", "un", _SAN) },
  { codigo: "10.06", nombre: "Dispensador de jabón en acero inoxidable", unidad: "un", materiales: _directa("Dispensador de jabón acero inoxidable", "un", _SAN) },
  { codigo: "10.07", nombre: "Dispensador de papelera en acero inoxidable", unidad: "un", materiales: _directa("Dispensador de papelera acero inoxidable", "un", _SAN) },
  { codigo: "10.08", nombre: "Dispensador de toallas de papel de pared", unidad: "un", materiales: _directa("Dispensador de toallas de papel", "un", _SAN) },

  // ---- Hidrosanitario: tubería y puntos PVC (materiales de referencia) ----
  { codigo: "10.11", nombre: "Tubería presión PVC 1/2\"", unidad: "ml", materiales: [_pvc('1/2"', 0.1667), _accPVC('1/2"', 0.3)] },
  { codigo: "10.12", nombre: "Tubería sanitaria PVC 2\"", unidad: "ml", materiales: [_pvc('2"', 0.1667), _accPVC('2"', 0.3)] },
  { codigo: "10.13", nombre: "Tubería sanitaria PVC 4\"", unidad: "ml", materiales: [_pvc('4"', 0.1667), _accPVC('4"', 0.25)] },
  { codigo: "10.14", nombre: "Punto de suministro PVC 1/2\" a 3/4\"", unidad: "un", materiales: [_pvc('1/2"', 0.5), _accPVC('1/2"', 2)] },
  { codigo: "10.15", nombre: "Punto de desagüe 2\" a 3\"", unidad: "un", materiales: [_pvc('2"', 0.2), _accPVC('2"', 2)] },
  { codigo: "10.16", nombre: "Punto de desagüe 4\"", unidad: "un", materiales: [_pvc('4"', 0.25), _accPVC('4"', 2)] },

  // ---- Protección contra incendios ----
  { codigo: "11.12", nombre: "Rociador pendent / upright QR (cobertura estándar)", unidad: "und", materiales: _directa("Rociador pendent/upright QR", "und", _INC) },

  // ---- Vidrios y películas ----
  { codigo: "15.04", nombre: "Espejos en cristal biselado de 4 mm", unidad: "m2", materiales: [_M("Espejo cristal biselado 4 mm", "m2", 1.0, _SEN, "Espejo 4 mm (m2)", "m2", 1, 0.05)] },
  { codigo: "15.05", nombre: "Película sand blasting tipo frost", unidad: "m2", materiales: [_M("Película sand blasting tipo frost", "m2", 1.0, _SEN, "Película frost (m2)", "m2", 1, 0.05)] },

  // ---- Señalética ----
  { codigo: "17.01", nombre: "Aviso principal de fachada (ver manual de identidad)", unidad: "un", materiales: _directa("Aviso principal de fachada", "un", _SEN) },
  { codigo: "17.02", nombre: "Gráfica: película PVC frosted esmerilado", unidad: "ml", materiales: _directa("Película PVC frosted (gráfica)", "ml", _SEN) },
  { codigo: "17.03", nombre: "Directorio de área: base acrílico cristal 5 mm con película PVC", unidad: "un", materiales: _directa("Directorio de área en acrílico 5 mm", "un", _SEN) },
  { codigo: "17.04", nombre: "Directorio direccionador de piso: base acrílico 5 mm", unidad: "un", materiales: _directa("Directorio direccionador de piso", "un", _SEN) },
  { codigo: "17.05", nombre: "Identificación oficinas y zonas privadas: película PVC frosted", unidad: "un", materiales: _directa("Identificación oficinas (PVC frosted)", "un", _SEN) },
  { codigo: "17.06", nombre: "Identificación sala de reunión, audiencia, video: acrílico 5 mm", unidad: "un", materiales: _directa("Identificación sala de reunión (acrílico)", "un", _SEN) },
  { codigo: "17.07", nombre: "Identificación servicios comunes: acrílico 5 mm", unidad: "un", materiales: _directa("Identificación servicios comunes (acrílico)", "un", _SEN) },
  { codigo: "17.08", nombre: "Señalización normativa y de seguridad humana: acrílico 5 mm", unidad: "un", materiales: _directa("Señalización normativa y seguridad (acrílico)", "un", _SEN) },
  { codigo: "17.09", nombre: "Aviso principal fachada (ver manual de identidad gráfica)", unidad: "un", materiales: _directa("Aviso principal fachada (identidad gráfica)", "un", _SEN) }
];
