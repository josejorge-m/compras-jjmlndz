/*
 * Base de rendimientos de obra civil (valores de REFERENCIA).
 * Cada actividad indica cuánto material se necesita por unidad de obra.
 * Ajuste estos valores con sus APU y rendimientos reales de obra.
 *
 * Campos por material:
 *   material, unidad (unidad del material), rendimiento (por unidad de obra),
 *   categoria, presentacion (texto de compra), unidadCompra,
 *   contenido (cantidad del material por unidad de compra), merma (fracción, 0.05 = 5 %)
 */
const BASE_ACTIVIDADES_BASE = [
  {
    codigo: "MURO01", nombre: "Muro en bloque No. 5 (e=12 cm)", unidad: "m2",
    materiales: [
      { material: "Bloque de concreto 12x20x40", unidad: "und", rendimiento: 12.5, categoria: "Mampostería", presentacion: "Bloque 12x20x40", unidadCompra: "und", contenido: 1, merma: 0.05 },
      { material: "Cemento gris", unidad: "bulto", rendimiento: 0.12, categoria: "Cemento y concretos", presentacion: "Bulto cemento 50 kg", unidadCompra: "bulto", contenido: 1, merma: 0.05 },
      { material: "Arena de pega", unidad: "m3", rendimiento: 0.015, categoria: "Agregados", presentacion: "Arena de pega (m3)", unidadCompra: "m3", contenido: 1, merma: 0.05 },
      { material: "Agua", unidad: "m3", rendimiento: 0.005, categoria: "Otros", presentacion: "Agua (m3)", unidadCompra: "m3", contenido: 1, merma: 0 }
    ]
  },
  {
    codigo: "PANT01", nombre: "Pañete liso en muros (e=1.5 cm)", unidad: "m2",
    materiales: [
      { material: "Cemento gris", unidad: "bulto", rendimiento: 0.12, categoria: "Cemento y concretos", presentacion: "Bulto cemento 50 kg", unidadCompra: "bulto", contenido: 1, merma: 0.05 },
      { material: "Arena de pega", unidad: "m3", rendimiento: 0.02, categoria: "Agregados", presentacion: "Arena de pega (m3)", unidadCompra: "m3", contenido: 1, merma: 0.05 }
    ]
  },
  {
    codigo: "ALIS01", nombre: "Alistado de piso con mortero 1:4 (e=3 cm)", unidad: "m2",
    materiales: [
      { material: "Cemento gris", unidad: "bulto", rendimiento: 0.24, categoria: "Cemento y concretos", presentacion: "Bulto cemento 50 kg", unidadCompra: "bulto", contenido: 1, merma: 0.05 },
      { material: "Arena de pega", unidad: "m3", rendimiento: 0.033, categoria: "Agregados", presentacion: "Arena de pega (m3)", unidadCompra: "m3", contenido: 1, merma: 0.05 }
    ]
  },
  {
    codigo: "CONC01", nombre: "Concreto de contrapiso 3000 psi (e=10 cm)", unidad: "m3",
    materiales: [
      { material: "Cemento gris", unidad: "bulto", rendimiento: 7.0, categoria: "Cemento y concretos", presentacion: "Bulto cemento 50 kg", unidadCompra: "bulto", contenido: 1, merma: 0.05 },
      { material: "Arena de río", unidad: "m3", rendimiento: 0.5, categoria: "Agregados", presentacion: "Arena de río (m3)", unidadCompra: "m3", contenido: 1, merma: 0.05 },
      { material: "Triturado 3/4\"", unidad: "m3", rendimiento: 0.9, categoria: "Agregados", presentacion: "Triturado 3/4 (m3)", unidadCompra: "m3", contenido: 1, merma: 0.05 },
      { material: "Agua", unidad: "m3", rendimiento: 0.2, categoria: "Otros", presentacion: "Agua (m3)", unidadCompra: "m3", contenido: 1, merma: 0 }
    ]
  },
  {
    codigo: "CONC02", nombre: "Concreto 3000 psi para columnas y vigas", unidad: "m3",
    materiales: [
      { material: "Cemento gris", unidad: "bulto", rendimiento: 7.5, categoria: "Cemento y concretos", presentacion: "Bulto cemento 50 kg", unidadCompra: "bulto", contenido: 1, merma: 0.05 },
      { material: "Arena de río", unidad: "m3", rendimiento: 0.5, categoria: "Agregados", presentacion: "Arena de río (m3)", unidadCompra: "m3", contenido: 1, merma: 0.05 },
      { material: "Triturado 3/4\"", unidad: "m3", rendimiento: 0.85, categoria: "Agregados", presentacion: "Triturado 3/4 (m3)", unidadCompra: "m3", contenido: 1, merma: 0.05 },
      { material: "Agua", unidad: "m3", rendimiento: 0.2, categoria: "Otros", presentacion: "Agua (m3)", unidadCompra: "m3", contenido: 1, merma: 0 }
    ]
  },
  {
    codigo: "ACER01", nombre: "Refuerzo de acero figurado 60000 psi", unidad: "kg",
    materiales: [
      { material: "Varilla de acero 3/8\" x 6 m", unidad: "varilla", rendimiento: 0.2976, categoria: "Acero", presentacion: "Varilla 3/8\" x 6 m", unidadCompra: "varilla", contenido: 1, merma: 0.03 },
      { material: "Alambre de amarre No. 18", unidad: "kg", rendimiento: 0.02, categoria: "Acero", presentacion: "Alambre de amarre No. 18 (kg)", unidadCompra: "kg", contenido: 1, merma: 0.05 }
    ]
  },
  {
    codigo: "ENCH01", nombre: "Enchape de muro en cerámica 30x60", unidad: "m2",
    materiales: [
      { material: "Cerámica 30x60", unidad: "m2", rendimiento: 1.0, categoria: "Acabados", presentacion: "Caja cerámica 30x60 (1.44 m2)", unidadCompra: "caja", contenido: 1.44, merma: 0.05 },
      { material: "Pegante para cerámica", unidad: "kg", rendimiento: 5.0, categoria: "Acabados", presentacion: "Bulto pegante 25 kg", unidadCompra: "bulto", contenido: 25, merma: 0.05 },
      { material: "Boquilla", unidad: "kg", rendimiento: 0.2, categoria: "Acabados", presentacion: "Bolsa boquilla (kg)", unidadCompra: "kg", contenido: 1, merma: 0.05 }
    ]
  },
  {
    codigo: "PISO01", nombre: "Piso cerámico 40x40 con pegante", unidad: "m2",
    materiales: [
      { material: "Cerámica 40x40", unidad: "m2", rendimiento: 1.0, categoria: "Acabados", presentacion: "Caja cerámica 40x40 (1.6 m2)", unidadCompra: "caja", contenido: 1.6, merma: 0.05 },
      { material: "Pegante para cerámica", unidad: "kg", rendimiento: 5.0, categoria: "Acabados", presentacion: "Bulto pegante 25 kg", unidadCompra: "bulto", contenido: 25, merma: 0.05 },
      { material: "Boquilla", unidad: "kg", rendimiento: 0.2, categoria: "Acabados", presentacion: "Bolsa boquilla (kg)", unidadCompra: "kg", contenido: 1, merma: 0.05 }
    ]
  },
  {
    codigo: "PINT01", nombre: "Pintura vinilo tipo 1 en muros (2 manos)", unidad: "m2",
    materiales: [
      { material: "Pintura vinilo tipo 1", unidad: "gal", rendimiento: 0.05, categoria: "Acabados", presentacion: "Galón pintura vinilo", unidadCompra: "gal", contenido: 1, merma: 0.10 },
      { material: "Sellador", unidad: "gal", rendimiento: 0.02, categoria: "Acabados", presentacion: "Galón sellador", unidadCompra: "gal", contenido: 1, merma: 0.05 }
    ]
  }
];
