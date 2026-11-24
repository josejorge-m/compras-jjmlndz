/*
 * Partidas automáticas del Acta N°6 (las que no están en base_acta6.js).
 * Cada partida genera una línea de compra por su unidad de obra (compra del ítem suministrado).
 * Las partidas marcadas como servicio no generan compra. Revisar categorías y unidades.
 */
const BASE_ACTA_N6_AUTO = [
 {
  "codigo": "1.03",
  "nombre": "DESMONTE CIELO RASO EXISTENTE EN PVC Y/O DRYWALL INCLUYE RETIRO Y DISPOSICION FINAL PARA INSTALCION DE HVAC Y RED DE VOZ Y DATOS",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "1.04",
  "nombre": "DEMOLICIÓN MUROS EN MAMPOSTERIA Y/O DRYWALL E <15 CMS INCLUYE RETIRO Y DISPOSCION FINAL.",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "1.06",
  "nombre": "SUMINISTRO E INSTALACION DE PLÁSTICO INVERNADERO CAL 7 V PARA PROTECCION DEL ESPACIOS Y PARA EL PISO.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalacion de plástico invernadero cal 7 v",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalacion de plástico invernadero cal 7 v",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "1.07",
  "nombre": "RETIRO DE RESIDUOS RCD Y EXCOMBROS",
  "unidad": "m3",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "1.08",
  "nombre": "PASE MURO(PERFORACION 24\"X10\") O DIAMETROS VARIOS,INCLUYE RESANE.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "1.09",
  "nombre": "DESMONTE Y REUBICACIÓN DE DIVISIONES DE VIDRIO TEMPLADO EXITENTES.",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "1.1",
  "nombre": "DEMOLICION DE MESON DEL ACCESO PRINCIPAL Y TRASLADO DE PUNTOS DE FUERZA MANDOS DATOS QUE CONTENGA LA NUEVA UBICACIÓN.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "2.01",
  "nombre": "SUMINISTRO E INSTALACIÓN DE MUROS EN SUPERBOARD DE 8 MM DOBLE CARA INCLUYE ESTRUCTURA DE SOPORTE, REFORZADOS EN ESTRUCTURA METÁLICA EN PERFIL GALVANIZADO 4\"X8\" CALIBRE 18, CON SOPORTE INTERNO EN ESTRUCTURA DE MADERA TRATADA, SEGÚN REQUERIMIENTOS TÉCNICOS; LA ESTRUCTURA METÁLICA SERÁ PROTEGIDA CON PINTURA ANTICORROSIVA Y ACABADO FINAL CON PINTURA DE ACEITE COLOR NEGRO, INC INSTALACIÓN DE DOS DINTELES METÁLICOS A TRES CARAS, REFORZADOS, SEGÚN DISEÑO ARQUITECTÓNICO Y ESTRUCTURAL, APLICACIÓN DE ESTUCO PLÁSTICO TIPO 2, CON ACABADO FINO, APLICACIÓN DE TRES (3) MANOS DE PINTURA TIPO 2 Y AISLANTE ACUSTICO EN FRESCASA EN ZONAS DE CERRAMIENTOS INTERIORES DE OFICINAS, BATERÍAS DE BAÑOS, CAFETERÍAS Y CUARTOS DE BASURAS.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de muros en superboard de 8 mm doble cara",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalación de muros en superboard de 8 mm doble cara",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "2.03",
  "nombre": "SUMINISTRO E INSTALCION DE ENCHAPE PORCELANICO PARA BATERIAS DE BAÑOS, CUARTO DE BASURAS Y RECICLAJE.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalcion de enchape porcelanico",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalcion de enchape porcelanico",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "2.04",
  "nombre": "SUMINISTRO E INSTALCION DE ESPEJO BICESLADO FLOTADO",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalcion de espejo biceslado flotado",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalcion de espejo biceslado flotado",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "2.05",
  "nombre": "MAMPOSTERIA EN BLOQUE N° 4 INC PAÑETES,inc.ESTUCO Y PINTURA TIPO DOS PARA INTERIORES",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Mamposteria en bloque n° 4 inc pañetes",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Mamposteria en bloque n° 4 inc pañetes",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "2.06",
  "nombre": "ALISTADO DE PISO ESPESOR PROMEDIO DE 3,5, EN MORTERO 1:3 PARA PISOS",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Alistado de piso espesor promedio de 3",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Alistado de piso espesor promedio de 3",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "3.01",
  "nombre": "CIELO RASO PLANO DRYWALL 1/2 HR POR M2– INCLUYE ESTUCO Y PINTURA TIPO 2 - 2 MANOS .",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Cielo raso plano drywall 1/2 hr por m2–",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Cielo raso plano drywall 1/2 hr por m2–",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "3.02",
  "nombre": "CIELO RASO PLANO DRYWALL 1/2 HR POR ML - INCLUYE PINTURA TIPO 2 - 2 MANOS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Cielo raso plano drywall 1/2 hr por ml",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Cielo raso plano drywall 1/2 hr por ml",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.1",
  "nombre": "SUMINISTRO E INSTALACIÓN LUMINARIA PANEL LED 40W 60X60CM DE INCRUSTAR O SOBREPONER, 100-240V.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación luminaria panel led 40w 60x60cm de incrustar ",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación luminaria panel led 40w 60x60cm de incrustar ",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.3",
  "nombre": "SUMINISTRO E INSTALACION DE LUMINARIA LED AVISO SALIDA DE EMERGENCIA IP20 1,6W 110-130V. INCLUYE ACCESORIOS DE CONEXIÓN ELÉCTRICA Y DE SUJECIÓN/SOPORTE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de luminaria led aviso salida de emergencia i",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de luminaria led aviso salida de emergencia i",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.4",
  "nombre": "SUMINISTRO E INSTALACION DE PANEL LED REDONDO O CUADRADO DE 24W, INCRUSTAR Y/O SOBREPONER.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de panel led redondo o cuadrado de 24w",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro e instalacion de panel led redondo o cuadrado de 24w",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.5",
  "nombre": "SUMINISTRO E INSTALACIÓN DE BREAKER ENCHUFABLE DE 1X15A ó 1X20A ó 1X30A ó 1x40A ó 1x50A DE 10KA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de breaker enchufable de 1x15a ó 1x20a ó 1x30",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de breaker enchufable de 1x15a ó 1x20a ó 1x30",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.6",
  "nombre": "SUMINISTRO E INSTALACION DE SALIDA DE ILUMINACION. INCLUYE CABLE N°12 PE HF FR LS CT, CAJA CUADRADA O RECTANGULAR TIPO RAWLET, TUBO EMT 3/4, ACCESORIOS EMT, CONECTORES, 3ML X SALIDA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de salida de iluminacion",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de salida de iluminacion",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.7",
  "nombre": "SUMINISTRO E INSTALACION INTERRUPTOR TRIFÁSICO NOMINAL 16 A / 25 A / 40 A.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion interruptor trifásico nominal 16 a / 25 a / 4",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion interruptor trifásico nominal 16 a / 25 a / 4",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.9",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SALIDA DE INTERRUPTOR SENCILLO Y/O DOBLE Y/O TRIPLE INCLUYE CAJA METALICA TIPO 5800 RAWELT, INTERRUTOR, DUCTERIA EMT 3/4\", CABLEADO N°12AWG CONECTOR DE RESORTE O DESFORRE, ACCESORIOS EMT, ELEMENTOS DE SOPORTE Y SUJECIÓN, 3ML X SALIDA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de salida de interruptor sencillo y/o doble y",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de salida de interruptor sencillo y/o doble y",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.11",
  "nombre": "SUMINISTRO E INSTALACION DE TOMACORRIENTE DOBLE 120V - 15A CON PUESTA A TIERRA AISLADA (REGULADO) PARA CANALETA METALICA, CAJA METALICA O PUESTO DE TRABAJO. INCLUYE, TOMACORRIENTE, TAPA Y ACCESORIOS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tomacorriente doble 120v",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tomacorriente doble 120v",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.13",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO TRIFASICO DE 18 CIRCUITOS CON PUERTA Y ESPACIO PARA TOTALIZADOR",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero trifasico de 18 circuitos",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero trifasico de 18 circuitos",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.15",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA ELECTRICA 3X6+1X6+1X8T",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida electrica 3x6+1x6+1x8t",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida electrica 3x6+1x6+1x8t",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.16",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA ELECTRICA 3X8+1X8+1X10T",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida electrica 3x8+1x8+1x10t",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida electrica 3x8+1x8+1x10t",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.17",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA ELECTRICA 3X4+1X4+1X10T",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida electrica 3x4+1x4+1x10t",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida electrica 3x4+1x4+1x10t",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.18",
  "nombre": "SUMINISTRO E INSTALACION DE LUMINARIA DE EMERGENCIA 2X1.6W LED 6500K",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de luminaria de emergencia 2x1.6w led 6500k",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de luminaria de emergencia 2x1.6w led 6500k",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.21",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CAJAS DE DISTRIBUCION MEDIDAS 0,40X0,30X0,20 INCLUYE BARRAJES Y TODOS LOS ACCESORIOS DE FIJACION PARA SU CORRECTO FUNCIONAMIENTO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de cajas de distribucion medidas 0",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de cajas de distribucion medidas 0",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.22",
  "nombre": "SUMINISTRO E INSTALACION DE TAPA CIEGA PVC BLANCA DE 11 CM X 8 CM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tapa ciega pvc blanca de 11 cm x 8 cm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalacion de tapa ciega pvc blanca de 11 cm x 8 cm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.23",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ACOMETIDA ELECTRICA TRENZADO 3X12 AWG LIBRE DE HALOGENOS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de acometida electrica trenzado 3x12 awg libr",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de acometida electrica trenzado 3x12 awg libr",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.24",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CAJA DE PASO RAWELT 10X10, INCLUYE TAPA, TORNILLOS Y ACCESORIOS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de caja de paso rawelt 10x10",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de caja de paso rawelt 10x10",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.25",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA IMC DE 3/4 A 1 1-2\" INCLUYE TODOS LOS ACCESORIOS PARA SU INSTALACION Y FIJACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de tubería imc de 3/4 a 1 1-2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de tubería imc de 3/4 a 1 1-2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.28",
  "nombre": "CONEXIONADO DE RED DE MEDIA TENSIÓN INCLUYE EMPALMES, TERMINALES, CONECTORES, AISLAMIENTO, PROTECCIÓN MECÁNICA, MANEJO DE RADIO DE CURVATURA, FIJACIÓN, PRUEBAS DE CONTINUIDAD Y AISLAMIENTO, SEÑALIZACIÓN, ETIQUETADO Y MANO DE OBRA CALIFICADA",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "4.32",
  "nombre": "PRESENTACIÓN DOCUMENTACIÓN ENTREGA DE ADECUACIÓN REALIZADA: MEMORIAS DE CALCULO, DIAGRAMA UNIFILAR GENERAL ACTUALIZADO DE LA INSTALACIÓN ELÉCTRICA, CUADROS DE CARGA, PLANIMETRÍA DE DISTRIBUCIÓN DE TOMAS NORMALES REGULADA INSTALADOS, PLANIMETRÍA NUEVAS RUTAS DE CANALIZACIONES PRINCIPALES Y DE CIRCUITOS, PLANIMETRÍA DE AIRES ACONDICIONADOS, PLANOS RÉCORD. ENTREGA DE DOCUMENTO DE CERTIFICACIONES DE CABLEADO ESTRUCTURADO DE PUNTOS DE VOZ Y DATOS Y DEMÁS INFORMACIÓN NECESARIA PARA ENTREGA DEL INFORME FINAL. PLANOS (CABLEADO, TUBERÍA, CANALETAS, BANDEJA PORTACABLES) Y DEMÁS INFORMACIÓN NECESARIA COMO INFORME DETALLADO DE LA CERTIFICACIÓN DE TODOS LOS PUNTOS. SE DEBE ENTREGAR DECLARACIÓN DE CUMPLIMIENTO DE RESPONSABILIDAD RETIE DEL DISEÑADOR Y DEL CONSTRUCTOR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Presentación documentación entrega de adecuación realizada",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Presentación documentación entrega de adecuación realizada",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.34",
  "nombre": "CORRECCIÓN DE INCONFORMIDADES DE DESFOGUE DE LA PLANTA ELÉCTRICA Y DEL EXTRACTOR SEGÚN EL REGISTRO DE HALLAZGOS, INCLUYE REPARACIÓN O REEMPLAZO DE ELEMENTOS, AJUSTES MECÁNICOS Y ELÉCTRICOS.",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Corrección de inconformidades de desfogue de la planta eléctrica y del",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Corrección de inconformidades de desfogue de la planta eléctrica y del",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "4.35",
  "nombre": "SUMINISTRO E INSTALACIÓN LUMINARIA LED LINEAL 120CM TIPO HERMETICA DE COLGAR O SOBREPONER, 100-240V.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación luminaria led lineal 120cm tipo hermetica de ",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación luminaria led lineal 120cm tipo hermetica de ",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "5.03",
  "nombre": "SUMINISTRO INST. DIVISIÓN EN VIDRIO TEMPLADO DE 10 MM INCLUYE SAMBLASTING",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro inst",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro inst",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "6.02",
  "nombre": "SUMINISTRO E INSTALACION DIVISIONES PARA BAÑOS (SANITARIOS Y ORINALES) EN ACERO INOXIDABLE CALIBRE 18, INCLUYE PUERTAS, PARALES, HERRAJES Y SISTEMA DE CIERRE POR PESTILLO",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalacion divisiones",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalacion divisiones",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "6.03",
  "nombre": "SUMINISTRO E INSTALACION DE ESCALERA DE GATO ABATIBLE DE 0.8 MTS DE ANCHO ANCLADA A MURO",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de escalera de gato abatible de 0.8 mts de an",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Puertas, ventanas y metálicos",
    "presentacion": "Suministro e instalacion de escalera de gato abatible de 0.8 mts de an",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "6.04",
  "nombre": "SUMINISTRO E INSTALACION DE PUERTA EN VIDRIO TEMPLADO INCOLORO DE 10MM DE ESPESOR , INCLUYE HERRAJES, RIEL, CHAPA DE SEGURIDAD Y TODOS LOS ACCESORIOS PARA EL CORRECTO MONTAJE Y FUNCIONAMIENTO Y REFUERZO ESTRUCTURAL SUPERIOR",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalacion de puerta en vidrio templado incoloro de 10mm",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalacion de puerta en vidrio templado incoloro de 10mm",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "6.05",
  "nombre": "SUMINISTRO E INSTALACION DE MARCO Y PUERTA METALICA LAMINA COLD ROLLED, CALIBRE 18. ANCHO = ENTRE 0.80 A 1,5M, H=ENTRE 2 A 2,20 METROS, PINTURA ANTICORROSIVA NEGRA Y ESMALTE, INCLUYE HERRAJES, CERRADURA METALICA DE POMO BOTON-LLAVE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de marco y puerta metalica lamina cold rolled",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Puertas, ventanas y metálicos",
    "presentacion": "Suministro e instalacion de marco y puerta metalica lamina cold rolled",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "8.01",
  "nombre": "PAÑETE IMPERMEABILIZADO MUROS 1:4 INC ESTUCO Y PINTURA TIPO 2 PARA ZONAS DE DEMOLICION DE MUROS EXITENTES",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "9.01",
  "nombre": "SUMINISTRO E INSTALACIÓN CON OBRAS ELÉCTRICAS, DE LOS SISTEMAS DE AIRE ACONDICIONADO PARA LOS PISOS 1 AL 8 Y EXTRACCIÓN DE SOTANOS 1,2,3, ADICIONALMENTE PRESURIZACIÓN DE ESCALERAS: INCLUYE UNIDADES INTERIORES Y EXTERIORES, SISTEMAS DE EXTRACCIÓN Y VENTILACIÓN PARA RENOVACION DE AIRE EN CADA PISO, CORTINAS DE AIRE EN LAS PUERTAS DE INGRESO AL EDIFICIO (PISO 1 Y 2) Y TODOS LOS MATERIALES COMO SON: DUCTOS, SOPORTERÍA, TUBERÍA, AISLAMIENTOS, TABLEROS DE CONTROL, TERMOSTATOS AMBIENTALES, REJILLAS, DIFUSORES, CUELLOS Y DEMAS ELEMENTOS PARA EL CORRECTO FUNCIONAMIENTO. INCLUYE TODO EL SUMINISTRO E INSTALACIÓN DE LA RED ELÉCTRICA DE FUERZA Y RED ELÉCTRICA DE CONTROL, CON TABLEROS ELÉCTRICOS, ACOMETIDAS, PROTECCIONES, Y TODO LO NECESARIO PARA SU CORRECTO FUNCIONAMIENTO. (APROXIMADAMENTE 208 TN). INCLUYE DISEÑO CON PLANOS RECORD DE AIRES Y ELÉCTRICOS DE FUERZA Y CONTROL.",
  "unidad": "tn",
  "materiales": [
   {
    "material": "Suministro e instalación",
    "unidad": "tn",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación",
    "unidadCompra": "tn",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.02",
  "nombre": "SUMINISTRO E INSTALACIÓN REFRIGERANTE 410ª",
  "unidad": "kg",
  "materiales": [
   {
    "material": "Suministro e instalación refrigerante 410ª",
    "unidad": "kg",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación refrigerante 410ª",
    "unidadCompra": "kg",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.03",
  "nombre": "SUMINISTRO CONDUCTOS EN LÁMINA GALVANIZADA CALIBRE 24 VENTILACIÓN DE AIRE PISO DEL 1 AL 8. (UNIÓN TDC, INCLUYE MATERIAL, SOPORTERIA FABRICACIÓN E INSTALACIÓN)",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro conductos en lámina galvanizada calibre 24 ventilación de a",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro conductos en lámina galvanizada calibre 24 ventilación de a",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.04",
  "nombre": "SUMINISTRO CONDUCTOS EN LÁMINA GALVANIZADA CALIBRE 24 EXTRACCIÓN PISOS 1 AL 8. (UNIÓN TDC, INCLUYE MATERIAL, SOPORTERÍA FABRICACIÓN E INSTALACIÓN)",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro conductos en lámina galvanizada calibre 24 extracción pisos",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro conductos en lámina galvanizada calibre 24 extracción pisos",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.05",
  "nombre": "MANGUERA FLEXIBLE AISLADA DE VARIAS DIMENSIONES (INCLUYE MATERIAL, SOPORTERÍA FABRICACIÓN E INSTALACIÓN)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Manguera flexible aislada de varias dimensiones",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Manguera flexible aislada de varias dimensiones",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.06",
  "nombre": "SUMINISTRO E INSTALACIÓN DAMPER INDUSTRIAL PARA BALANCEO VARIAS DIMENSIONES (INCLUYE MATERIAL, SOPORTERÍA FABRICACIÓN E INSTALACIÓN)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación damper industrial",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación damper industrial",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.07",
  "nombre": "SUMINISTRO E INSTALACIÓN DAMPER INDUSTRIAL PARA BALANCEO VARIAS DIMENSIONES (INCLUYE MATERIAL, SOPORTERÍA FABRICACIÓN E INSTALACIÓN)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación damper industrial",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación damper industrial",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.08",
  "nombre": "SUMINISTRO E INSTALACIÓN REJILLA DE RETORNO VARIAS DIMENSIONES",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación rejilla de retorno varias dimensiones",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación rejilla de retorno varias dimensiones",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.09",
  "nombre": "SUMINISTRO E INSTALACIÓN ANILLOS PARA INSTALACIÓN DE DUCTOS Y MANGUERAS DE VARIAS MEDIDAS INCLUYE ACCESORIOS Y MATERIALES DE INSTALACIÓN",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación anillos",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación anillos",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.1",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"L\" DE 1/4\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"l\" de 1/4\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"l\" de 1/4\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.11",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"L\" RÍGIDA DE 3/8\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.12",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"L\" RÍGIDA DE 1/2\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.13",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"L\" RÍGIDA DE 5/8\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.14",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"L\" RÍGIDA DE 3/4\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.15",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"L\" RÍGIDA DE 7/8\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.16",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"L\" RÍGIDA DE 1-1/8\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.17",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"K\" DE 1-1/4\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"k\" de 1-1/4\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"k\" de 1-1/4\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.18",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"K\" DE 1-3/8\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"k\" de 1-3/8\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"k\" de 1-3/8\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.19",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"K\" DE 1-5/8\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"k\" de 1-5/8\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"k\" de 1-5/8\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.2",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1/4 X 3/8\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1/4 x 3/8\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1/4 x 3/8\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.21",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 3/8 X 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 3/8 x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 3/8 x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.22",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 5/8\" X 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 5/8\" x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 5/8\" x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.23",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 3/4\" X 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 3/4\" x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 3/4\" x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.24",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 7/8” X 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 7/8” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 7/8” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.25",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1” X 1/2\" INCLUYE CAÑUELA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.26",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1-1/8” X 1/2\" INCLUYE CAÑUELA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1-1/8” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1-1/8” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.27",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1-1/4” X 1/2\" INCLUYE CAÑUELA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1-1/4” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1-1/4” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.28",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1-3/8” X 1/2\" INCLUYE CAÑUELA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1-3/8” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1-3/8” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.29",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1-5/8” X 1/2\" INCLUYE CAÑUELA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1-5/8” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1-5/8” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.3",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 2” X 1/2\" INCLUYE CAÑUELA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 2” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 2” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.31",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1/2” X 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1/2” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1/2” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.32",
  "nombre": "SUMINISTRO E INSTALACIÓN DE VÁLVULAS DE CORTE 5/8”, INCLUYE ACCESORIOS Y SOLDADURA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de válvulas de corte 5/8”",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de válvulas de corte 5/8”",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.33",
  "nombre": "SUMINISTRO E INSTALACIÓN DE VÁLVULAS DE CORTE 3/8”, INCLUYE ACCESORIOS Y SOLDADURA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de válvulas de corte 3/8”",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de válvulas de corte 3/8”",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.34",
  "nombre": "SUMINISTRO E INSTALACIÓN DE VÁLVULAS DE CORTE 1/4\", INCLUYE ACCESORIOS Y SOLDADURA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de válvulas de corte 1/4\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de válvulas de corte 1/4\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.35",
  "nombre": "SUMINISTRO E INSTALACIÓN DE VÁLVULAS DE CORTE 1/2\", INCLUYE ACCESORIOS Y SOLDADURA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de válvulas de corte 1/2\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de válvulas de corte 1/2\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.36",
  "nombre": "SUMINISTRO E INSTALACIÓN DERIVACIÓN EN COBRE TIPO BRANCH VARIAS REFERENCIAS. INCLUYE AISLAMIENTO TÉRMICO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación derivación en cobre tipo branch varias refere",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación derivación en cobre tipo branch varias refere",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.37",
  "nombre": "SUMINISTRO E INSTALACIÓN RED DE TUBERÍA PVCP DE 3/4\" RDE 21 CON ACCESORIOS. (INCLUYE ACCESORIOS, SOPORTERIA Y AISLAMIENTO RUBATEX)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación red de tubería pvcp de 3/4\" rde 21",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación red de tubería pvcp de 3/4\" rde 21",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.38",
  "nombre": "SUMINISTRO E INSTALACIÓN RED DE TUBERÍA PVCP DE 1-1/2\" RDE 21 CON ACCESORIOS. (INCLUYE ACCESORIOS, SOPORTERIA Y AISLAMIENTO RUBATEX)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación red de tubería pvcp de 1-1/2\" rde 21",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación red de tubería pvcp de 1-1/2\" rde 21",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.39",
  "nombre": "SUMINISTRO E INSTALACIÓN CABLE DE CONTROL BLINDADO Y APANTALLADO 2X18 AWG",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación cable de control blindado y apantallado 2x18 ",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación cable de control blindado y apantallado 2x18 ",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.4",
  "nombre": "SUMINISTRO E INSTALACIÓN CABLE CONTROL #2* 16 AWG",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación cable control #2* 16 awg",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación cable control #2* 16 awg",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.41",
  "nombre": "INSTALACIÓN E INSTALACION DE BOMBAS TIPO TANQUE PARA AIRE ACONDICIONADO TIPO MINI SPLIT",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalación e instalacion de bombas tipo tanque",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Concretos y estructura",
    "presentacion": "Instalación e instalacion de bombas tipo tanque",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.43",
  "nombre": "SUMINISTRO E INSTALACIÓN TUBERÍA EMT DE VARIAS DIMENSIONES. INCLUYE ACCESORIOS, CAJAS DE PASO Y GRAPAS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación tubería emt de varias dimensiones",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación tubería emt de varias dimensiones",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.44",
  "nombre": "REVESTIMIENTO Y/O AISLAMIENTO TÉRMICO TIPO CAÑUELA DE ALUMINIO Y POLIURETANO PARA TUBERÍA DE REFRIGERANTE",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Revestimiento y/o aislamiento térmico tipo cañuela de aluminio y poliu",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Revestimiento y/o aislamiento térmico tipo cañuela de aluminio y poliu",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.45",
  "nombre": "INSTALACIÓN DE UNIDAD CONDENSADORA DE REFRIGERANTE VARIABLE, R-410A EXPANSIÓN DIRECTA 220V/3/60 INVERTER INCLUYE TRASIEGO DEL EQUIPO, TERMINALES ELÉCTRICO Y ELEMENTOS ANTIVIBRATORIO.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalación de unidad condensadora de refrigerante variable",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Instalación de unidad condensadora de refrigerante variable",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.46",
  "nombre": "INSTALACIÓN DE UNIDAD EVAPORADORA PARA EL SISTEMAS DE REFRIGERANTE VARIABLE R-410A EXPANSIÓN DIRECTA 220V/2/60 INCLUYE TRASIEGO DE LOS EQUIPOS EN CADA ESPACIO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalación de unidad evaporadora",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Instalación de unidad evaporadora",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.47",
  "nombre": "INSTALACIÓN DE UNIDAD DE VENTILACIÓN, CORTINAS DE AIRE Y EQUIPOS DE EXTRACCIÓN INCLUYE EL IZAJE DEL EQUIPO Y TRASIEGO DE LOS EQUIPOS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalación de unidad de ventilación",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalación de unidad de ventilación",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.49",
  "nombre": "SUMINISTRO CONDUCTOS EN LÁMINA GALVANIZADA CALIBRE 24 EXTRACCIÓN PISO 1 AL 8. (UNIÓN TDC, INCLUYE MATERIAL, SOPORTERÍA FABRICACIÓN E INSTALACIÓN)",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro conductos en lámina galvanizada calibre 24 extracción piso ",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro conductos en lámina galvanizada calibre 24 extracción piso ",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.5",
  "nombre": "DESMONTE DE REDES DE REFRIGERACIÓN EXISTENTES.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "9.51",
  "nombre": "SUMINISTRO DE CASSETTE 4 VÍAS TIPO COMPACTO 24.000 BTU/H",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de cassette 4 vías tipo compacto 24.000 btu/h",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de cassette 4 vías tipo compacto 24.000 btu/h",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.52",
  "nombre": "SUMINISTRO DE CASSETTE 4 VÍAS TIPO COMPACTO 36.000 BTU/H",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de cassette 4 vías tipo compacto 36.000 btu/h",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de cassette 4 vías tipo compacto 36.000 btu/h",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.53",
  "nombre": "SUMINISTRO DE EQUIPO DE AIRE ACONDICIONADO TIPO MINI SPLIT 18.000 BTU/h, 220 V, DE TECNOLOGÍA INVERTER, REFRIGERANTE R-410A, GRADO RETIQ TIPO \"C\" O SUPERIOR, INCLUYE ACCESORIOS DE INSTALACIÓN, FIJACIÓN, ANTIVIBRATORIAS, CONTROL REMOTO. CUARTOS TECNICOS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de equipo de aire acondicionado tipo mini split 18.000 btu/",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de equipo de aire acondicionado tipo mini split 18.000 btu/",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.54",
  "nombre": "SUMINISTRO DE EQUIPO DE AIRE ACONDICIONADO TIPO MINI SPLIT 12.000 BTU/h, 220 V, DE TECNOLOGÍA INVERTER, REFRIGERANTE R-410A, GRADO RETIQ TIPO \"C\" O SUPERIOR, INCLUYE ACCESORIOS DE INSTALACIÓN, FIJACIÓN, ANTIVIBRATORIAS, CONTROL REMOTO.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de equipo de aire acondicionado tipo mini split 12.000 btu/",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de equipo de aire acondicionado tipo mini split 12.000 btu/",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.55",
  "nombre": "SUMINISTRO DE EQUIPO DE AIRE ACONDICIONADO TIPO MINI SPLIT 9.000 BTU/h, 220 V, DE TECNOLOGÍA INVERTER, REFRIGERANTE R-410A, GRADO RETIQ TIPO \"C\" O SUPERIOR, INCLUYE ACCESORIOS DE INSTALACIÓN, FIJACIÓN, ANTIVIBRATORIAS, CONTROL REMOTO.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de equipo de aire acondicionado tipo mini split 9.000 btu/h",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de equipo de aire acondicionado tipo mini split 9.000 btu/h",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.56",
  "nombre": "SUMINISTRO DE CORTINA DE AIRE DE DESCARGA HORIZONTAL DE 60\" (1,20CM) DE FLUJO DE AIRE DE ARRIBA HACIA ABAJO.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de cortina de aire de descarga horizontal de 60\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de cortina de aire de descarga horizontal de 60\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.57",
  "nombre": "SUMINISTRO DE UNIDAD EXTERIOR (CONDENSADORA) VRF 20TR (INCLUYE PROTECCION ANTICORROSIVA, EN SERPENTÍN Y ESTRUCTURAS DE TODO EL EQUIPO; TAPAS, PARRILLAS, BASE FIJAS).",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad exterior",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad exterior",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.58",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO (EHC-01 DE 800 CFM @ 0.4\" C.A.).",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.59",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO (EHC-02 DE 560 CFM @ 0.4\" C.A.)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.6",
  "nombre": "LUV-LAMPARA FOTOCATALÍTICA O TECNOLOGÍA MEJOR PARA UBICACIÓN EN DUCTO, 20 W, 110/1/60. INCLUYE: (ACCESORIOS ELÉCTRICOS PARA LA OPERACIÓN DE LA LAMPARA).",
  "unidad": "und",
  "materiales": [
   {
    "material": "Luv-lampara fotocatalítica o tecnología mejor",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Luv-lampara fotocatalítica o tecnología mejor",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.61",
  "nombre": "BANCO DE FILTRACIÓN MERV 8 (INCLUYE GABINETE LAMINA CL 20, ACCESORIOS DE MONTAJE E INSTALACIÓN).",
  "unidad": "und",
  "materiales": [
   {
    "material": "Banco de filtración merv 8",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Protección contra incendios",
    "presentacion": "Banco de filtración merv 8",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "9.62",
  "nombre": "DISEÑOS MECÁNICO SISTEMA HVAC INTEGRAL, INCLUYE TODAS LAS ACTIVIDADES NECESARIAS PARA CUMPLIR CON LA NORMATIVIDAD NACIONAL (RETSIT, NTC, RETIE Y DEMÁS) INTERNACIONAL (ASHRAE, NFPA Y DEMÁS) COMO CALCULOS DE CARGAS TERMICAS, VENTILACION, DISEÑO DE PRUEBAS PARA ARRANQUE, AJUSTE Y BALANCEO DEL SISTEMA HVAC, PRUEBAS, DOCUMENTACIÓN Y PLANIMETRÍA.",
  "unidad": "glb",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "10.01",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LAVAMANOS CON PEDESTAL INC ACCESORIOS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de lavamanos",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de lavamanos",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "10.03",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SANITARIO ECO-CLEAN INC ACCESORIOS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de sanitario eco-clean inc accesorios",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de sanitario eco-clean inc accesorios",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "10.04",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SANITARIO MOBILIDAD REDUCIDA - AQUAJET INC ACCESORIOS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de sanitario mobilidad reducida",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de sanitario mobilidad reducida",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "10.05",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ORINAL INSTITUCIONAL DE PUCH INC ACCESORIOS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de orinal institucional de puch inc accesorio",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de orinal institucional de puch inc accesorio",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "10.09",
  "nombre": "SUMINISTRO E INSTALCION DE REJILLAS DE PISO.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de rejillas de piso",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalcion de rejillas de piso",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "10.1",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TAPAREGISTROS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de taparegistros",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de taparegistros",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "10.17",
  "nombre": "REUBICACION DE PUNTO HIDRAULICO <5",
  "unidad": "und",
  "materiales": [
   {
    "material": "Reubicacion de punto hidraulico <5",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Reubicacion de punto hidraulico <5",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "10.18",
  "nombre": "SUMINSTRO E INSTALACION DE GRIFERIA TIPO PARA LAVAMANOS TIPO PUSH INC ACCESORIOS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro e instalacion de griferia tipo",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suminstro e instalacion de griferia tipo",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "10.19",
  "nombre": "SUMISTRO E INSTALCION DE GRIFERIA PARA LAVAPLATOS CUELLO DE CISNE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Sumistro e instalcion de griferia",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Sumistro e instalcion de griferia",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.01",
  "nombre": "TUBERIA AN SCH 10 (INCLUYE ACCESORIOS+COUPLING+ABRAZADERAS) 6\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Tuberia an sch 10",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia an sch 10",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.02",
  "nombre": "TUBERIA AN SCH 10 (INCLUYE ACCESORIOS+COUPLING+ABRAZADERAS) 4\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Tuberia an sch 10",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia an sch 10",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.03",
  "nombre": "TUBERIA AN SCH 10 (INCLUYE ACCESORIOS+COUPLING+ABRAZADERAS) 3\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Tuberia an sch 10",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia an sch 10",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.04",
  "nombre": "TUBERIA AN SCH 10 (INCLUYE ACCESORIOS+COUPLING+ABRAZADERAS) 2 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Tuberia an sch 10",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia an sch 10",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.05",
  "nombre": "TUBERIA AN SCH 10 (INCLUYE ACCESORIOS+COUPLING+ABRAZADERAS) 2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Tuberia an sch 10",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia an sch 10",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.06",
  "nombre": "TUBERIA AN SCH 10 (INCLUYE ACCESORIOS+COUPLING+ABRAZADERAS) 1 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Tuberia an sch 10",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia an sch 10",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.07",
  "nombre": "TUBERIA AN SCH 10 (INCLUYE ACCESORIOS+COUPLING+ABRAZADERAS) 1 1/4\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Tuberia an sch 10",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia an sch 10",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.08",
  "nombre": "TUBERIA AN SCH 10 (INCLUYE ACCESORIOS+COUPLING+ABRAZADERAS) 1\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Tuberia an sch 10",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia an sch 10",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.09",
  "nombre": "TUBERIA C900 SCH 80 (INCLUYE ACCESORIOS) 3\"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Tuberia c900 sch 80",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia c900 sch 80",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.1",
  "nombre": "TUBERIA C900 SCH 80 (INCLUYE ACCESORIOS) 4\"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Tuberia c900 sch 80",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Tuberia c900 sch 80",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.11",
  "nombre": "ESTACION DE CONTROL Y DRENAJE 1.1/2\" (VALVULA DE CONTROL UL-FM, SENSOR DE FLUJO, CHEQUE RANURADO Y MANOMETRO DE CONTROL)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Estacion de control y drenaje 1.1/2\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Estacion de control y drenaje 1.1/2\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.13",
  "nombre": "PÙNTO HIDRAULICO DE ROCIADOR 1\"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Pùnto hidraulico de rociador 1\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Protección contra incendios",
    "presentacion": "Pùnto hidraulico de rociador 1\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.14",
  "nombre": "ESCUDO DE ROCIADORES",
  "unidad": "und",
  "materiales": [
   {
    "material": "Escudo de rociadores",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Protección contra incendios",
    "presentacion": "Escudo de rociadores",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.15",
  "nombre": "VALVULA DE CONTROL, DRENAJE Y PRUEBA 1\"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Valvula de control",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Valvula de control",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "11.16",
  "nombre": "PRUEBA DEL SISTEMA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Prueba del sistema",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Prueba del sistema",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.01",
  "nombre": "CENTRAL DE INCENDIO CONV, 4L, TRAFO 110V/60HZ, UL. REF:FPD-7024",
  "unidad": "und",
  "materiales": [
   {
    "material": "Central de incendio conv",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Central de incendio conv",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.02",
  "nombre": "MULTIPLEX EXPANDER CARD MODULO EXPANSOR. REF:FPE7039",
  "unidad": "und",
  "materiales": [
   {
    "material": "Multiplex expander card modulo expansor",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Multiplex expander card modulo expansor",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.03",
  "nombre": "DETECTOR DE HUMO FOTOELÉCTRICO DIRECCIONABLE PARA PANEL FPD-7024. NO D7050 INCLUYE BASE. REF:D7050",
  "unidad": "und",
  "materiales": [
   {
    "material": "Detector de humo fotoeléctrico direccionable",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Detector de humo fotoeléctrico direccionable",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "13.04",
  "nombre": "BASE DE 6\"\", 2 HILOS, PARA DETECTORES D7050, D7050H. REF:D7050-B6",
  "unidad": "und",
  "materiales": [
   {
    "material": "Base de 6\"\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Base de 6\"\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.05",
  "nombre": "DETECTOR DE TEMPERATURA, FIJA 135F/57C. REF:F220-135",
  "unidad": "und",
  "materiales": [
   {
    "material": "Detector de temperatura",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Detector de temperatura",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.06",
  "nombre": "BASE PARA MONTAJE DE DETECTOR CONVENCIONAL DE LA SERIE F220-XX, CONEXIÓN 4 HILOS-. REF:F220-B6R",
  "unidad": "und",
  "materiales": [
   {
    "material": "Base",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Base",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.07",
  "nombre": "MINI MODULO DE ENTRADA SIMPLE. REF:D7044M",
  "unidad": "und",
  "materiales": [
   {
    "material": "Mini modulo de entrada simple",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Mini modulo de entrada simple",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.08",
  "nombre": "ESTACIÓN MANUAL DIRECCIONABLE PARA PANEL FPD-7024, DOBLE ACCIÓN, ROJO. REF:FMM-7045-D",
  "unidad": "und",
  "materiales": [
   {
    "material": "Estación manual direccionable",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Estación manual direccionable",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.09",
  "nombre": "SIRENA CON ESTROBO, 12V/24V, 2W, 8 CD, MONT. PARED, ROJO. REF:HSR",
  "unidad": "und",
  "materiales": [
   {
    "material": "Sirena",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Sirena",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.1",
  "nombre": "MINI MODULO DE ENTRADA SIMPLE. REF:D7044M",
  "unidad": "und",
  "materiales": [
   {
    "material": "Mini modulo de entrada simple",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Mini modulo de entrada simple",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.11",
  "nombre": "MÓDULO DE ENTRADA/SALIDA (FPD-7024). REF:D7053",
  "unidad": "und",
  "materiales": [
   {
    "material": "Módulo de entrada/salida",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Módulo de entrada/salida",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.12",
  "nombre": "BACTERIA 12 V - 18AH. REF:KB12180",
  "unidad": "und",
  "materiales": [
   {
    "material": "Bacteria 12 v",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Bacteria 12 v",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.13",
  "nombre": "TUBERÍA EMT 3/4 CERTIFICADA X 3MTS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Tubería emt 3/4 certificada x 3mts",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Tubería emt 3/4 certificada x 3mts",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.14",
  "nombre": "ACCESORIOS DE TUBERÍA CAJAS PARA SENSORES, CAJAS PARA ESTACIÓN MANUAL, UNIONES, GRAPAS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Accesorios de tubería cajas",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Accesorios de tubería cajas",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.15",
  "nombre": "TAPA ACRÍLICA PARA ESTACIÓN MANUAL",
  "unidad": "und",
  "materiales": [
   {
    "material": "Tapa acrílica",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Tapa acrílica",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.16",
  "nombre": "CABLE ENCHAQUETADO ROJO CONTRA INCENDIO. TIPO BELDEN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Cable enchaquetado rojo contra incendio",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Cable enchaquetado rojo contra incendio",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "12.17",
  "nombre": "TECLADO LCD (FDP-7024) -REF- FMR-7033",
  "unidad": "und",
  "materiales": [
   {
    "material": "Teclado lcd",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Teclado lcd",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "13.1",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CANALETA METÁLICA DE 12X5 CM CON DIVISIÓN Y TAPA INCLUYE DIVISIÓN INTERNA, TAPA O TROQUEL, ACCESORIOS DE UNIÓN Y TERMINACIÓN, ELEMENTOS DE FIJACIÓN Y CABLE DE PUESTA A TIERRA.",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de canaleta metálica de 12x5 cm",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de canaleta metálica de 12x5 cm",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "13.2",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ESCALERILLA METÁLICA O BANDEJA PORTACABLE 100 O 200 O 300MM INCLUYE, ACCESORIOS DE UNIÓN Y FIJACIÓN, DIVISON DE CABLEADO, ELEMENTOS DE SOPORTE (ESCUADRAS, VARILLAS, ABRAZADERAS), CABLE DE PUESTA A TIERRA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de escalerilla metálica o bandeja portacable ",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de escalerilla metálica o bandeja portacable ",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "13.3",
  "nombre": "SUMINISTRO, INSTALACIÓN Y CERTIFICADO DE PUNTO DE DATOS SENCILLO DESDE RACK, INCLUYE JACK RJ45 CAT. 6A BLINDADO EN AMBOS EXTREMOS, FACEPLATE, MARQUILLADO, CERTIFICACIÓN, ACCESORIOS DE MONTAJE, ORGANIZACIÓN EN RACK",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "13.4",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PATCH CORD CAT 6A BLINDADO DE 1 A 2 MTS RJ45, CERTIFICADO",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "13.5",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PATCH PANEL DE 48 PUERTOS CAT. 6A INCLUYE PATCH PANEL DE 48 PUERTOS, ACCESORIOS DE MONTAJE, FIJACIÓN EN RACK, ORGANIZACIÓN DE CABLEADO, MARQUILLADO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de patch panel de 48 puertos cat",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de patch panel de 48 puertos cat",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "13.6",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RACK DE 42 UR CON ACCESORIOS, INCLUYE PASACABLES, FUENTE MULTITOMA, SOPORTES, PANEL DE GESTIÓN DE CABLEADO, PANELES LATERALES Y TRASEROS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de rack de 42 ur",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de rack de 42 ur",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "13.7",
  "nombre": "DESMONTE DE CABLEADO ESTRUCTURADO INCLUYE RETIRO DE CABLES, DESCONECTAR JACKS Y FACEPLATES, REMOCIÓN DE CANALETAS O BANDEJAS SI APLICA, MANEJO Y DISPOSICIÓN DE MATERIALES, LIMPIEZA DEL ÁREA",
  "unidad": "gbl",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "13.8",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CABLE F/UTP 24 AWG (CMR) LSHF CAT 6A CERTIFICADO",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "14.01",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA EMT 3/4\" A 1\" PARA CANALIZACIÓN PUNTOS DE DATOS Y CCTV INCLUYE ACCESORIOS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de tubería emt 3/4\" a 1\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de tubería emt 3/4\" a 1\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "14.02",
  "nombre": "PUNTO PARA CCTV Y SEGURIDAD (CONSISTE EN CAJA Y TUBERÍA EMT 1/2\" 3MT)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Punto",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Punto",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "15.01",
  "nombre": "SUMINISTRO E INSTALACION DE PELICULA FILTRO UV Y CAPACIDAD DE RECHAZO DE RAYOS INFRAROJOS (CALOR)",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalacion de pelicula filtro uv y capacidad de rechazo ",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalacion de pelicula filtro uv y capacidad de rechazo ",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "15.02",
  "nombre": "CORTINA BLACK-OUT ENRROLLABLE (CANTIDAD SEGÚN DIMENSIONES EN M2) CARACTERÍSTICAS. RETENCIÓN DE LUZ : 100%, RESISTENCIA AL FUEGO, TUBO DE ALUMINIO, SOPORTES: METÁLICOS EN ACERO CROMADOS, MANDOS PLASTICOS DE ALTO IMPACTO INYECTADOS, BASE: VARILLA REDONDA EN ALUMINIO PINTADO BLANCO ½, CADENA: PLÁSTICA DE ALTA DENSIDAD CORDÓN DE NYLON– UNIÓN DE PLÁSTICO ALTO IMPACTO, RETENCIÓN RAYOS UV . COLOR A SELECCIONAR POR LA ENTIDAD, MEDIDAS A RECTIFICAR EN OBRA.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Cortina black-out enrrollable",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Cortina black-out enrrollable",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "15.03",
  "nombre": "SUMINISTRO E INSTALACION CORTINA ENROLLABLE SOLAR SCREN MICROPERFORADA COLOR BLANCO, EN SITIOS DESIGNADOS POR LA ENTIDAD, MEDIDAS A RECTIFICAR EN OBRA",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalacion cortina enrollable solar scren microperforada",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalacion cortina enrollable solar scren microperforada",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "15.06",
  "nombre": "SUMINISTRO E INSTALACIÓN UPS DE 20 KVA CON AUTONOMIA DE 30 MINUTOS EN BANCO DE BATERIAS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación ups de 20 kva",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación ups de 20 kva",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.01",
  "nombre": "SUMINISTRO E INSTALCION DE MBF-1 MESA DE REUNIONES 4P REDONDA - DIAMETRO 1 METRO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de mbf-1 mesa de reuniones 4p redonda",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalcion de mbf-1 mesa de reuniones 4p redonda",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.02",
  "nombre": "SUMINISTRO E INSTALCION DE MBF-66 MESA DE CAFETERIA 4P REDONDA ZONA EXTERIOR, INCLUYE PARASOL - DIAMETRO 0,8 METRO, ESTRUCTURA Y MARCO EN ACERO COLD ROLLED PARA BASE EN VIDRIO MARTILLADO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de mbf-66 mesa de cafeteria 4p redonda zona ex",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalcion de mbf-66 mesa de cafeteria 4p redonda zona ex",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.03",
  "nombre": "SUMINSTRO E INSTALCION DE MBF-4 MESA RECTANGULAR PARA REUNIONES DE 10 PERSONAS 2900MM(LARGO) X 1500MM (FONDO) X 730MM (ALTO) - ESTRUCTURA METÁLICA DE SOPORTE HORIZONTAL CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTES. DUCTO VERTICAL Y HORIZONTAL CONDUCCIÓN ELECTRICA CERTIFICADA RETIE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro e instalcion de mbf-4 mesa rectangular",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suminstro e instalcion de mbf-4 mesa rectangular",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.04",
  "nombre": "SUMINISTRO E INSTALCION DE MBF-5 MESA RECTANGULAR PARA REUNIONES DE 12 PERSONAS 3600MM (LARGO)X 1500MM (FONDO) X 730MM (ALTO) - ESTRUCTURA METÁLICA DE SOPORTE HORIZONTAL CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTES. DUCTO VERTICAL Y HORIZONTAL CONDUCCIÓN ELECTRICA CERTIFICADA RETIE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de mbf-5 mesa rectangular",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalcion de mbf-5 mesa rectangular",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.05",
  "nombre": "SUMINISTRO E INSTALACION DE MBF-11 MESA DE PRESUNTOS, ATRIL Y BARRA SALA DE AUDIENCIAS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de mbf-11 mesa de presuntos",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalacion de mbf-11 mesa de presuntos",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.06",
  "nombre": "SUMINSTRO E INSTALCION MBF-12 MESA RECTANGULAR EN MADERA PARA AUDICENCIAS DE DOS (2) PERSONAS. SESTRUCTURA EN MADERA Y ACABADO EN CHAPILLA, CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTE. UN GROMMET A NIVEL DE SUPERFICIE PARA DATOS Y CORRIENTE, INCLUIR TAPA ABATIBLE, DUCTO A PISO (NO VERTEBRA) QUE CUENTE CON CERTIFICADA RETIE. DOS SALIDAS PARA MICRÓFONO EN LA SUPERFICIE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro e instalcion mbf-12 mesa rectangular en madera",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suminstro e instalcion mbf-12 mesa rectangular en madera",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.07",
  "nombre": "SUMINISTRO E INSTALCION DE MBF-14 MUEBLE COMPLEMENTARIO EN TABLEX DE 15MM PARA PUESTOS EJECUTIVOS CON 4 CAJONES - MEDIDAS 1000MM (ANCHO) X 480MM (FONDO) X 750MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de mbf-14 mueble complementario en tablex de 1",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro e instalcion de mbf-14 mueble complementario en tablex de 1",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.08",
  "nombre": "SUMINISTRO E INSTALACION DE MODULO DE CONSULTA MEDIDA 90 CMS (FRENTE) X 0,45 CMS (FONDO) - ALTURA 2,14 MTS - ARCHIVO RODANTE MECÁNICO, CUERPO EN CR CALIBRES 20 18 16 PARALES EN CR CAL 16 TROQUEL CREMALLERA ENTREPAÑOS CON DOBLE REFUERZO CR CAL. 20 CAPACIDAD DE CARGA 70KG TECHO EN CR CAL. 22 BASES Y RUEDAS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de modulo de consulta medida 90 cms",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalacion de modulo de consulta medida 90 cms",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.09",
  "nombre": "SUMINIUSTRO E INSTALCION DE MBF-25 C - MESA DE CENTRO EN MADERA, DE NIVEL SUPERIOR PARA LAS OFICINAS PRIVADAS DE CONTRALOR Y VICECONTRALOR - MEDIDAS 800MM (ANCHO) X 800MM (FONDO) X 450MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminiustro e instalcion de mbf-25 c",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminiustro e instalcion de mbf-25 c",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.1",
  "nombre": "SUMINMSTRO E INSTALCION DE SOFA DE 3 PUESTOS EN CUERO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminmstro e instalcion de sofa de 3 puestos en cuero",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminmstro e instalcion de sofa de 3 puestos en cuero",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.11",
  "nombre": "SUMINISTRO E INSTALCION DE ESTANTE SEMIPESADO 40 CM ESTANTE SEMIPESADO CON CAPACIDAD DE CARGA DE 110KG UNIFORMEMENTE POR ENTREPAÑO. CON 5 ENTREPAÑOS ELABORADOS EN LAMINA COLD ROLLED CALIBRE 22 CON 3 REFUERZOS, BASTIDOR CON SISTEMA DE ENGANCHE DE UÑA EN LAMINA COLD ROLLED CALIBRE 16. TERMINACIÓN PINTURA - MEDIDAS 900MM (ANCHO) X 500MM (FONDO) X 1600MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de estante semipesado 40 cm estante semipesado",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalcion de estante semipesado 40 cm estante semipesado",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.12",
  "nombre": "SUMINISTRO E INSTALCION MBF-37 ESCRITORIO EJECUTIVOS CONTRALORES - (182 CM X 192 CM). SEGÚN ANEXO NO. 1 REQUERIMIENTOS TÉCNICOS MÍNIMOS - FICHA TÉCNICA. SUPERFICIE EN AGLOMERADO DE 25MM ENCHAPADO EN SU CARA INFERIOR CON BALANCE Y SU CARA PRINCIPAL EN FORMICA, COSTADO TIPO U Y CAJONERA METÁLICA TIPO 2X1",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion mbf-37 escritorio ejecutivos contralores",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalcion mbf-37 escritorio ejecutivos contralores",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.13",
  "nombre": "SUMINISTRO E INSTALCION DE MBF-40A ESCRITORIO OPERATIVO - (120 CM X 60 CM). SEGÚN ANEXO NO. 1 REQUERIMIENTOS TÉCNICOS MÍNIMOS - FICHA TÉCNICA. SUPERFICIE EN AGLOMERADO DE 25MM ENCHAPADO EN SU CARA INFERIOR CON BALANCE Y SU CARA PRINCIPAL EN FORMICA, COSTADO TIPO U Y CAJONERA METÁLICA TIPO 2X1",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de mbf-40a escritorio operativo",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalcion de mbf-40a escritorio operativo",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.14",
  "nombre": "SUMINISTRO E INSTALCION DE MBF-52 SILLA EJECUTIVA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de mbf-52 silla ejecutiva",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalcion de mbf-52 silla ejecutiva",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.15",
  "nombre": "SUMINSTRO E INSTALCION MBF-53 SILLA OPERATIVA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro e instalcion mbf-53 silla operativa",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminstro e instalcion mbf-53 silla operativa",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.16",
  "nombre": "SUMINUSTRO E INSTALCION DE MBF-55 SILLA INTERLOCUTOR CON APOYA BRAZOS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminustro e instalcion de mbf-55 silla interlocutor",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminustro e instalcion de mbf-55 silla interlocutor",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.17",
  "nombre": "SUMINSTRO E INSTALCION DE MBF-56 SILLAS DE AUDITORIO TIPO INTERLOCUTOR CON ENGANCHE Y APILABLES",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro e instalcion de mbf-56 sillas de auditorio tipo interlocutor",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminstro e instalcion de mbf-56 sillas de auditorio tipo interlocutor",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.18",
  "nombre": "SUMINISTRO E INSTALCION DE MBF-14 MUEBLE COMPLEMENTARIO EN TABLEX DE 15MM PARA PUESTOS EJECUTIVOS CON 4 CAJONES - MEDIDAS 1000MM (ANCHO) X 480MM (FONDO) X 750MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de mbf-14 mueble complementario en tablex de 1",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro e instalcion de mbf-14 mueble complementario en tablex de 1",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "16.19",
  "nombre": "SUMINSTRO E INSTALCION DE CAMILLA PARA PRIMEROS AUXILIOS - ENFERMERIA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro e instalcion de camilla",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminstro e instalcion de camilla",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-01",
  "nombre": "DEMOLICION DE ENCHAPE DE PISO ESPESOR HASTA 2.0CM, INCLUYE DISPOSICION FINAL Y TRASIEGO INTERNO.",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-02",
  "nombre": "DEMOLICION DE MORTERO EXISTENTE ESPESOR 8 CM (PROMEDIO). INCLUYE RETIRO, DISPOSICION FINAL Y TRASIEGO INTERNO.",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-03",
  "nombre": "ALISTADO DE PISO DE 8 CM (PROMEDIO), INCLUYE TRASIEGO INTERNO (VERTICAL Y HORIZONTAL).",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Alistado de piso de 8 cm",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Alistado de piso de 8 cm",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-04",
  "nombre": "SUMÍNISTRO E INSTALACIÓN DE PISO PORCELANTO ESMALTADO RECTIFICADO DE 60X60 BEIGE MATE TRAFICO COMERCIAL, (ALTA RESISTENCIA PEI 4 O SUPERIOR) INCLUYE TRASIEGO VERTICAL Y HORIZONTAL",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Sumínistro e instalación de piso porcelanto esmaltado rectificado de 6",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Sumínistro e instalación de piso porcelanto esmaltado rectificado de 6",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-05",
  "nombre": "SUMÍNISTRO E INSTALACIÓN GUARDA ESCOBA EN PISO PORCELANTO ESMALTADO RECTIFICADO DE 60X60 BEIGE MATE TRAFICO COMERCIAL GENERAL, INCLUYE TRASIEGO VERTICAL Y HORIZONTAL 8 NIVELES",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Sumínistro e instalación guarda escoba en piso porcelanto esmaltado re",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Sumínistro e instalación guarda escoba en piso porcelanto esmaltado re",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-06",
  "nombre": "DESMONTE APARATOS SANITARIOS Y TRASLADO DONDE INDIQUE LA ENTIDAD",
  "unidad": "unidad",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-07",
  "nombre": "DESMONTE DE TUBERIA RED CONTRAINCENDIOS (DIAMETROS DE 3/4\" HASTA 4\")",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-08",
  "nombre": "SUMINISTRO E INSTALACION DE SELLO DILATACIÓN DE PORCELANATO EN PISO CON SIKAFLEX O SIMILAR ESPESOR 1 CM- INCLUYE YUMBOLON PARA JUNTAS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de sello dilatación de porcelanato en piso",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalacion de sello dilatación de porcelanato en piso",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-09",
  "nombre": "SUMINISTRO E INSTALACION DE SIAMESA DE 2\" 1/2\" (INCLUYE ACCESORIO NECESARIOS PARA SU CORRECTO FUNCIONAMIENTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de siamesa de 2\" 1/2\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Protección contra incendios",
    "presentacion": "Suministro e instalacion de siamesa de 2\" 1/2\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-10",
  "nombre": "LOCALIZACIÓN Y REPLANTEO DE TANQUE RCI",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Localización y replanteo de tanque rci",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Concretos y estructura",
    "presentacion": "Localización y replanteo de tanque rci",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-11",
  "nombre": "DEMOLICIÓN DE PLACA DE CONTRAPISO ESPESOR DE 10 A 20 CMS",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-12",
  "nombre": "EXCAVACION MANUAL SIN CLASIFICAR (INCLUYE DISPOSICIÓN FINAL)",
  "unidad": "m3",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-13",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SOLADO EN CONCRETO Espesor = 5CM - RESISTENCIA 2000 PSI",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de solado en concreto espesor = 5cm",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Concretos y estructura",
    "presentacion": "Suministro e instalación de solado en concreto espesor = 5cm",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-14",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PLACA EN CONCRETO DE 4000 PSI - Espesor = 30 CM",
  "unidad": "m3",
  "materiales": [
   {
    "material": "Suministro e instalación de placa en concreto de 4000 psi",
    "unidad": "m3",
    "rendimiento": 1,
    "categoria": "Concretos y estructura",
    "presentacion": "Suministro e instalación de placa en concreto de 4000 psi",
    "unidadCompra": "m3",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-15",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ACERO DE REFUERZO FY-420 Mpa",
  "unidad": "kg",
  "materiales": [
   {
    "material": "Suministro e instalación de acero de refuerzo fy-420 mpa",
    "unidad": "kg",
    "rendimiento": 1,
    "categoria": "Concretos y estructura",
    "presentacion": "Suministro e instalación de acero de refuerzo fy-420 mpa",
    "unidadCompra": "kg",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-16",
  "nombre": "SUMINISTRO E INSTALACIÓN DE VENTANA CORTAVIENTOS EN VIDRIO TEMPLADO DE 10 MM (INCLUYE ESTRUCTURA EN ACERO INOXIDABLE)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de ventana cortavientos en vidrio templado de",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalación de ventana cortavientos en vidrio templado de",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-17",
  "nombre": "SUMÍNISTRO E INSTALACIÓN DE CENEFA PARA PISO E= 20 CMS, PORCELANTO ESMALTADO RECTIFICADO DE 60X60 BEIGE MATE TRAFICO COMERCIAL GENERAL, INCLUYE TRASIEGO VERTICAL Y HORIZONTAL 8 NIVELES",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Sumínistro e instalación de cenefa",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Sumínistro e instalación de cenefa",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-18",
  "nombre": "EXCAVACIÓN PARA MICROPILOTES EN ESPACIOS CONFINADOS D= 30 CMS, INCLUYE CONCRETO TREMIE DE 4000PSI",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Excavación",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Concretos y estructura",
    "presentacion": "Excavación",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-19",
  "nombre": "DESMONTE Y REINSTALACION DE PUERTA EN ALUMINIO (INCLUYE SUMINISTRO DE MARCO NUEVO EN ALUMINIO)",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-20",
  "nombre": "CIELO RASO SUSPENDIDO EN FIBRA MINERAL CON BORDE RECEDIDO, RESISTENTE A ALTAS TEMPERATURAS Y A LA HUMEDAD RELATIVA COLOR BLANCO 0,61 m Xx 0,61 m x 15 mm",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Cielo raso suspendido en fibra mineral",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Cielo raso suspendido en fibra mineral",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-21",
  "nombre": "SUMINISTRO E INSTALACIÓN DE BASE EN TECHO PARA VIDEO BEAM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de base en techo",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de base en techo",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-22",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ESPEJO DE SEGURIDAD Y VIGILANCIA DE CIRCULAR D=60",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de espejo de seguridad y vigilancia de circul",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalación de espejo de seguridad y vigilancia de circul",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-23",
  "nombre": "PASANUCLEOS EN PLACA DE CONCRETO PARA TUBERIAS DE 3\" A 5 \"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Pasanucleos en placa de concreto",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Pasanucleos en placa de concreto",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-24",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PERGOLA RETRACTIL (INCLUYE SISTEMA SOPORTE EN PALILLOS VERTICALES Y VIGA CARRILERA, CONTROL Y KIT MOTORIZADO)",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de pergola retractil",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Puertas, ventanas y metálicos",
    "presentacion": "Suministro e instalación de pergola retractil",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-25",
  "nombre": "SUMINISTRO E INSTALACION DE VENTANA TERMOACUSTICA, MONTADA SOBRE PERFILERIA DE ALUMINIO EN SISTEMA PROYECTANTE (TUBULAR 1100) PISA VIDRIO PLANO A PRESIÓN DE 35 MM, EMPAQUES EN NEOPRENO, PERFILERIA TRATADA CON POLIURETANO, PANEL TERMOACUSTICO. INCLUYE VIDRIO 3+3 CON ESPACIADOR DE 12 MM, TRATADO CON ARGON Y LAMINADO 3+3, INCLUYE 1 BASCULANTE Y SELLOS PERIMETRALES.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalacion de ventana termoacustica",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalacion de ventana termoacustica",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-26",
  "nombre": "DESMONTE DE VENTANERIA EN ALUMINIO",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-27",
  "nombre": "SUMINISTRO E INSTALACION DE PUERTA TERMOACUSTICA, MONTADA SOBRE TUBULAR DE 3 X 1 Y 1/2\", PISA VIDRIO PLANO A PRESIÓN DE 35 MM, EMPAQUES EN NEOPRENO, PERFILERIA TRATADA CON POLIURATANO, BISAGRAS OMEGA, REFUERZO INTERNO, CERRADURA Y PASADORES, PANEL TERMOACUSTICO. INCLUYE VIDRIO 3+3 CON ESPACIADOR DE 12 MM, TRATADO CON ARGON Y LAMINADO 3+3, INCLUYE 1 BASCULANTE Y SELLOS PERIMETRALES.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalacion de puerta termoacustica",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalacion de puerta termoacustica",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-28",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PISO ALFOMBRA MODULAR EN PROPILENO DE ALTA DENSIDAD - USO INSTITUCIONAL 50X50",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de piso alfombra modular en propileno de alta",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalación de piso alfombra modular en propileno de alta",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-29",
  "nombre": "SUMINISTRO E INSTALACIÓN DE BARANDA PARA ESCALERAS EN ACERO INOXIDABLE DE 1 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de baranda",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Puertas, ventanas y metálicos",
    "presentacion": "Suministro e instalación de baranda",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-30",
  "nombre": "SUMINISTRO E INSTALACIÓN DE GUARDAESCOBAS EN MDF H = 8CMS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de guardaescobas en mdf h = 8cms",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de guardaescobas en mdf h = 8cms",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-31",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CINTA ANTIDESLIZANTE FOTOLUMINICESCE - E=5CMS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de cinta antideslizante fotoluminicesce",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalación de cinta antideslizante fotoluminicesce",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-32",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PUERTA CORTA FUEGO CF RF 120 - CALIBRE 20 CON PINTURA ELECTROESTATICA (INCLUYE MARCO EN ACERO GALVANIZADO CAL 20, MANIJA ANTIPANICO, BRAZO HIDRAULICO, JUEGO DE LLAVES, EMPAQUE PERIMETRAL CON CIERRE HERMETICO CON SELLO INTUMESCENCE, SISTEMA DE INSTALACIÓN CON SEIS PUNTOS DE ANCLAJE A MURO)",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de puerta corta fuego cf rf 120",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de puerta corta fuego cf rf 120",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-33",
  "nombre": "SUMINISTRO E INSTALACIÓN DE REJILLA FIJAS DE REGULACIÓN DE ENTRADA DE AIRE PARA FACHADAS, ALETAS EN ALUMINIO EXTRUIDO AA6063 T5, %ÁREA LIBRE (M2/M2) VARIABLE, MARCOS LATERALES EN LÁMINA GALVANIZADA CALIBRE 16. PINTURA EN POLVO ELECTROSTÁTICA COLORES ESTÁNDAR. (ALTURA ENTRE 0,22 A 0,31 CMS)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de rejilla fijas de regulación de entrada de ",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de rejilla fijas de regulación de entrada de ",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-34",
  "nombre": "AVISO EN ACRÍLICO, LETRAS Y LOGOTIPO CON COLORES INSTITUCIONALES, CORTE LASER PLANO , SEGÚN DISEÑO ENVIADO . MEDIDAS DEL LOGO 90 X 90 , MEDIDA DE LAS LETRAS 1.50 X .25 , MEDIDA TOTAL DEL AVISO 1.60X 1.55 APROXIMADAMENTE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Aviso en acrílico",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Aviso en acrílico",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-35",
  "nombre": "REVESTIMIENTO MURAL ARQUITECTÓNICO EN PANEL DE MADERA NATURAL TIPO PARKLEX PRODEMA O EQUIVALENTE 12 mm está compuesto por un núcleo de fibras de celulosa impregnadas en resinas termoendurecibles, tipo HPL, recubierto con una capa superficial de madera natural",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Revestimiento mural arquitectónico en panel de madera natural tipo par",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Revestimiento mural arquitectónico en panel de madera natural tipo par",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-36",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PELÍCULA TIPO LÁMINA ARQUITECTÓNICA COMPUESTA POR CERÁMICA DISEÑADA PARA OFRECER UN ALTO RECHAZO TÉRMICO CON TONOS NEUTROS Y BAJA REFLECTIVIDAD",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de película tipo lámina arquitectónica compue",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalación de película tipo lámina arquitectónica compue",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-37",
  "nombre": "RETIRO, CARGUE, TRANSPORTE Y DISPOSICIÓN FINAL DE RESIDUOS DE CONSTRUCCIÓN Y DEMOLICIÓN (RCD) Y ESCOMBROS EN SITIO AUTORIZADO POR LA AUTORIDAD AMBIENTAL (CAR/SECRETARÍA DE AMBIENTE). INCLUYE MANO DE OBRA, HERRAMIENTAS, CARRETILLAS, ANDAMIOS, EPP, CONTROL DE POLVO, PAGO DE TARIFAS DE BOTADERO CON CERTIFICADO, SEÑALIZACIÓN.",
  "unidad": "m3",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-38",
  "nombre": "DESMONTE CUIDADOSO, EMBALAJE, TRASLADO INTERNO DE DIVISIONES DE VIDRIO TEMPLADO EXISTENTES. INCLUYE DESMONTE DE HERRAJES Y PERFILERÍA.",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-39",
  "nombre": "SUMINISTRO E INSTALACIÓN DE MUROS EN PLACA DE FIBROCEMENTO (SUPERBOARD O EQUIV.) DE 8 MM A DOBLE CARA PARA ALTO IMPACTO. INCLUYE ESTRUCTURA METÁLICA GALVANIZADA DE 4X8 CAL. 18 (PROTEGIDA CON ANTICORROSIVO Y ESMALTE NEGRO) Y SOPORTE INTERNO EN MADERA TRATADA. INCLUYE 2 DINTELES METÁLICOS REFORZADOS SEGÚN DISEÑO, AISLAMIENTO TERMOACÚSTICO TIPO FRESCASA (2.5\" A 3\"), APLICACIÓN DE ESTUCO PLÁSTICO TIPO 2, LIJADO Y 3 MANOS DE PINTURA ACRÍLICA TIPO 2 DE ALTA LAVABILIDAD. INCLUYE, ANDAMIOS, MANO DE OBRA, SST Y TODO COSTO.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de muros en placa de fibrocemento",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalación de muros en placa de fibrocemento",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-40",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CIELO RASO PLANO EN PLACAS DE YESO-CARTÓN (DRYWALL) 1/2 RH. INCLUYE ESTRUCTURA EN PERFILERÍA GALVANIZADA DEBIDAMENTE SUSPENDIDA, ANCLAJES, TRATAMIENTO DE JUNTAS CON CINTA DE FIBRA DE VIDRIO Y MASILLA, APLICACIÓN DE ESTUCO PLÁSTICO Y ACABADO FINAL CON 2 MANOS DE PINTURA VINÍLICA TIPO 2. INCLUYE MANO DE OBRA, ANDAMIOS.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de cielo raso plano en placas de yeso-cartón",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalación de cielo raso plano en placas de yeso-cartón",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-41",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CIELO RASO PLANO EN PLACAS DRYWALL 1/2 HR MEDIDO POR METRO LINEAL (PARA FAJAS, DILATACIONES O REMATES). INCLUYE ESTRUCTURA GALVANIZADA, FIJACIONES, TRATAMIENTO DE JUNTAS, APLICACIÓN DE ESTUCO PLÁSTICO, 2 MANOS DE PINTURA VINÍLICA TIPO 2, MANO DE OBRA, ANDAMIOS, SST.",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de cielo raso plano en placas drywall 1/2 hr ",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalación de cielo raso plano en placas drywall 1/2 hr ",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-42",
  "nombre": "SUMINISTRO E INSTALACIÓN DE DIVISIONES ARQUITECTÓNICAS PARA BAÑOS (SANITARIOS/ORINALES) EN LÁMINA DE ACERO INOXIDABLE SATINADO AISI 304, CAL. 18 DE ALTA RESISTENCIA. INCLUYE PUERTAS, PARALES ANCLADOS A MURO/PISO, REFUERZOS, HERRAJES INSTITUCIONALES DE ACERO INOX (BISAGRAS, ESCUADRAS) Y SISTEMA DE CIERRE. INCLUYE MANO DE OBRA, NIVELACIÓN.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de divisiones arquitectónicas",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de divisiones arquitectónicas",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-43",
  "nombre": "SUMINISTRO, FABRICACIÓN E INSTALACIÓN DE ESCALERA DE GATO ABATIBLE DE 0.80M DE ANCHO ÚTIL, EN ESTRUCTURA METÁLICA. INCLUYE PELDAÑOS, BISAGRAS, ANCLAJE MECÁNICO A MURO, APLICACIÓN DE 2 MANOS DE ANTICORROSIVO Y ESMALTE CUMPLE NORMATIVA DE TRABAJO EN ALTURAS. INCLUYE MANO DE OBRA, SOLDADURA, ANDAMIOS.",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Puertas, ventanas y metálicos",
    "presentacion": "Suministro",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-44",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PUERTA EN VIDRIO TEMPLADO INCOLORO DE SEGURIDAD DE 10MM. INCLUYE REFUERZO ESTRUCTURAL SUPERIOR ANCLADO A PLACA, KIT DE HERRAJES EN ACERO INOXIDABLE, PIVOTES, CERRADURA DE SEGURIDAD LLAVE-LLAVE/MARIPOSA, EMPAQUES, CALIBRACIÓN, MANO DE OBRA ESPECIALIZADA, SST Y TODO COSTO NECESARIO.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de puerta en vidrio templado incoloro de segu",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalación de puerta en vidrio templado incoloro de segu",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-45",
  "nombre": "SUMINISTRO E INSTALACIÓN DE MARCO Y PUERTA METÁLICA EN LÁMINA COLD ROLLED CAL. 18 INSTITUCIONAL. DIMENSIONES: INCLUYE PINTURA ANTICORROSIVA PREMIUM, ACABADO EN ESMALTE SINTÉTICO, HERRAJES DE SEGURIDAD (3-4 BISAGRAS PESADAS), CERRADURA METÁLICA DE POMO/MANIJA BOTÓN-LLAVE, TOPES, ANCLAJES ESTRUCTURALES, SOLDADURA, MANO DE OBRA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de marco y puerta metálica en lámina cold rol",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Puertas, ventanas y metálicos",
    "presentacion": "Suministro e instalación de marco y puerta metálica en lámina cold rol",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-46",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ORINAL INSTITUCIONAL DE PORCELANA SANITARIA BLANCA DE ALTA RESISTENCIA AL VANDALISMO. INCLUYE FLUXÓMETRO TIPO PUSH CON DESCARGA TEMPORIZADA PARA AHORRO DE AGUA, ACCESORIOS DE CONEXIÓN HIDRÁULICA, SIFÓN, BRIDAS, SELLADO PERIMETRAL CON SILICONA ANTIHONGOS, PRUEBAS DE FUNCIONAMIENTO (NTC 1500), MANO DE OBRA",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-47",
  "nombre": "SUMINISTRO E INSTALACIÓN DE REJILLAS DE PISO DE 2\" PARA DESAGÜE,",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de rejillas de piso de 2\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalación de rejillas de piso de 2\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-48",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TAPA DE REGISTRO DE 20X20 PARA INSPECCIÓN DE REDES HIDROSANITARIAS/ELÉCTRICAS, FABRICADA EN PVC.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de tapa de registro de 20x20",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de tapa de registro de 20x20",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-49",
  "nombre": "SUMINISTRO E INSTALACIÓN DE GRIFERÍA INSTITUCIONAL PARA LAVAMANOS TIPO PUSH (CIERRE AUTOMÁTICO TEMPORIZADO PARA AHORRO DE AGUA). ACABADO CROMADO DE ALTA RESISTENCIA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de grifería institucional",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de grifería institucional",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-50",
  "nombre": "SUMINISTRO E INSTALACIÓN DE GRIFERÍA INSTITUCIONAL PARA LAVAPLATOS TIPO CUELLO DE CISNE. ACABADO CROMADO DE ALTA DURABILIDAD. INCLUYE ACCIONAMIENTO DE PALANCA/CRUCETA, ACOPLES FLEXIBLES EN ACERO INOX / PVC, EMPAQUES, SELLADO HERMÉTICO PERIMETRAL, PRUEBAS DE PRESIÓN, MANO DE OBRA, HERRAMIENTAS.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-51",
  "nombre": "PRUEBAS DE FUNCIONAMIENTO, COMISIONAMIENTO Y PUESTA EN MARCHA DEL SISTEMA INTEGRAL DE RED CONTRA INCENDIOS (RCI). INCLUYE PRUEBAS HIDROSTÁTICAS DE LA RED, VERIFICACIÓN DE CAUDAL/PRESIÓN EN GABINETES, ARRANQUE DEL EQUIPO DE BOMBEO, MANO DE OBRA CERTIFICADA",
  "unidad": "gbl",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NP-52",
  "nombre": "SUMINISTRO E INSTALACIÓN RED DE TUBERÍA PVCP DE 3/4\" RDE 21 CON ACCESORIOS. (INCLUYE ACCESORIOS, SOPORTERIA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación red de tubería pvcp de 3/4\" rde 21",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación red de tubería pvcp de 3/4\" rde 21",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-53",
  "nombre": "SUMINISTRO E INSTALACIÓN RED DE TUBERÍA PVCP DE 1 1/2\" RDE 21 CON ACCESORIOS. (INCLUYE ACCESORIOS, SOPORTERIA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación red de tubería pvcp de 1 1/2\" rde 21",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación red de tubería pvcp de 1 1/2\" rde 21",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-54",
  "nombre": "SUMINISTRO E INSTALACIÓN RED DE TUBERÍA PVCP DE 3\" RDE 21 CON ACCESORIOS. (INCLUYE ACCESORIOS, SOPORTERIA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación red de tubería pvcp de 3\" rde 21",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación red de tubería pvcp de 3\" rde 21",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-55",
  "nombre": "SUMINISTRO E INSTALACIÓN DE VÁLVULAS DE CORTE 1 1/2\" y 2\", INCLUYE ACCESORIOS Y SOLDADURA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de válvulas de corte 1 1/2\" y 2\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de válvulas de corte 1 1/2\" y 2\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-56",
  "nombre": "MURO EN BLOQUE Nº5 ARCILLA 33*23*11.5 CM. INCLUYE GRAFIL 5 MM.ANCLAJES PERFORACIÓN Y ADHESIVO EPÓXICO",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Muro en bloque nº5 arcilla 33*23*11.5 cm",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Muro en bloque nº5 arcilla 33*23*11.5 cm",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-57",
  "nombre": "SUMINISTRO E INSTALACIÓN DE MUROS EN PLACA DE FIBROCEMENTO (SUPERBOARD O EQUIV.) DE 8 MM A UNA CARA PARA ALTO IMPACTO. INCLUYE ESTRUCTURA METÁLICA GALVANIZADA DE 4X8 CAL. 18 (PROTEGIDA CON ANTICORROSIVO Y ESMALTE NEGRO) Y SOPORTE INTERNO EN MADERA TRATADA. INCLUYE 2 DINTELES METÁLICOS REFORZADOS SEGÚN DISEÑO, AISLAMIENTO TERMOACÚSTICO TIPO FRESCASA (2.5\" A 3\"), APLICACIÓN DE ESTUCO PLÁSTICO TIPO 2, LIJADO Y 3 MANOS DE PINTURA ACRÍLICA TIPO 2 DE ALTA LAVABILIDAD. INCLUYE, ANDAMIOS, MANO DE OBRA, SST Y TODO COSTO.",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de muros en placa de fibrocemento",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalación de muros en placa de fibrocemento",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-58",
  "nombre": "REGATAS SOBRE MUROS CON PULIDORA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Regatas sobre muros",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Regatas sobre muros",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-59",
  "nombre": "PAÑETE 1:4IMPERMEABILIZADO",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Pañete 1",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Pañete 1",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-60",
  "nombre": "PAÑETE 1:4 IMPERMEABILIZADO - ANCHOS DE HASTA 30 CMS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Pañete 1",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Pañete 1",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-61",
  "nombre": "SUMINISTRO E INSTALACION DE RAMPA EN CONCRETO DE 3000 PSI (INCLUYE MALLA ELECTROSOLDADA Y FORMALETA PARA EL MISMO)",
  "unidad": "m3",
  "materiales": [
   {
    "material": "Suministro e instalacion de rampa en concreto de 3000 psi",
    "unidad": "m3",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de rampa en concreto de 3000 psi",
    "unidadCompra": "m3",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-62",
  "nombre": "SUMINISTRO E INSTALACIÓN DE BASES EN CONCRETO DE 20X20X20 CM (INCLUYE REFUERZOS, EPOXICO Y PINTURA POLIURETANO IMPERMEABILIZÁNTE -REPARACIÓN DE BALDOSA PARA APOYO DE SOPORTES)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de bases en concreto de 20x20x20 cm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Concretos y estructura",
    "presentacion": "Suministro e instalación de bases en concreto de 20x20x20 cm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-63",
  "nombre": "SUMINISTRO E INSTALACIÓN DE JUNTA DE DILATACIÓN EN CIELO RASO TIPO Z",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de junta de dilatación en cielo raso tipo z",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalación de junta de dilatación en cielo raso tipo z",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-64",
  "nombre": "ADECUACIÓN DE FILOS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Adecuación de filos",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Adecuación de filos",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-65",
  "nombre": "RESANE DE REGATAS CON MORTERO Y ESTUCO",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Resane de regatas",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Resane de regatas",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-66",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PERLIN DE 10X4 X 1.5MM (INCLUYE ANCLAJES)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de perlin de 10x4 x 1.5mm",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de perlin de 10x4 x 1.5mm",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-67",
  "nombre": "APLICACIÓN DE PINTURA ANTICORROSIVA 3 MANOS (A CUATRO CARAS)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Aplicación de pintura anticorrosiva 3 manos",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Aplicación de pintura anticorrosiva 3 manos",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-68",
  "nombre": "APLICACIÓN DE PINTURA ESMALTE 3 MANOS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Aplicación de pintura esmalte 3 manos",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Aplicación de pintura esmalte 3 manos",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-69",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA PVC PRESIÓN DE 3\" DESCOLGADA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de tubería pvc presión de 3\" descolgada",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de tubería pvc presión de 3\" descolgada",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-70",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SOPORTE TIPO PERA DE 1\" A 2\" (INCLUYE VARILLA ROSCADA CON CHAZO HEMBRA METALICO 3/8 Y/O CHAZO MARIPOSA)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de soporte tipo pera de 1\" a 2\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de soporte tipo pera de 1\" a 2\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-71",
  "nombre": "BORDILLO EN CONCRETO DE 20 CM DE ANCHO X 15 CM DE ALTO, EN CONCRETO DE 3000 PSI, INCLUYE ANCLAJES, FORMALETA, FUNDIDA Y ACABADO (INCLUYE EPOXICO Y PINTURA POLIURETANO IMPERMEABILIZÁNTE)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Bordillo en concreto de 20 cm de ancho x 15 cm de alto",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Concretos y estructura",
    "presentacion": "Bordillo en concreto de 20 cm de ancho x 15 cm de alto",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-72",
  "nombre": "SUMINISTRO E INSTALACIÓN DE REFUERZO EN MADERA MEDIANTE LISTONES DE SECCIÓN 8X4 CM PARA LA INSTALACION DE PERSIANAS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de refuerzo en madera mediante listones de se",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de refuerzo en madera mediante listones de se",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-73",
  "nombre": "SUMINISTRO E INSTALACION DE LAVAMANOS DE COLGAR FREE BLANCO CORONA Y/O SIMILAR",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de lavamanos de colgar free blanco corona y/o",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalacion de lavamanos de colgar free blanco corona y/o",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-74",
  "nombre": "SUMINISTRO E INSTALACION DE KIT TAZA BALTICA PLUS ENTRADA SUPERIOR CON FLUXOMETRO FLUSHOUT 3,5 LTS CORONA Y/O SIMILAR",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de kit taza baltica plus entrada superior",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalacion de kit taza baltica plus entrada superior",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-75",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SANITARIO ADRIÁTICA PLUS CORONA Y/O SIMILAR PARA PERSONAS CON MOVILIDAD REDUCIDA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de sanitario adriática plus corona y/o simila",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de sanitario adriática plus corona y/o simila",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-76",
  "nombre": "PASANUCLEOS EN PLACA DE CONCRETO PARA TUBERIAS DE 2 1/2\"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Pasanucleos en placa de concreto",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Pasanucleos en placa de concreto",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-77",
  "nombre": "INSTALACION DE TRANSFORMADOR TRIFASICO EN SECO ABIERTO CLASE H-SERIE 15/1.1 kV 400 kVA 13200/208 INCLUYE MONTACARGA ,CONEXIONADO Y PUESTA EN MARCHA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de transformador trifasico en seco abierto clase h-serie 1",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Instalacion de transformador trifasico en seco abierto clase h-serie 1",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-78",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CIELO RASO PLANO EN PLACAS DE YESO-CARTÓN (DRYWALL) CON RESISTENCIA AL FUEGO 1/2 HR. INCLUYE ESTRUCTURA EN PERFILERÍA GALVANIZADA DEBIDAMENTE SUSPENDIDA, ANCLAJES, TRATAMIENTO DE JUNTAS CON CINTA DE FIBRA DE VIDRIO Y MASILLA. INCLUYE MANO DE OBRA, ANDAMIOS",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Suministro e instalación de cielo raso plano en placas de yeso-cartón",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro e instalación de cielo raso plano en placas de yeso-cartón",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-79",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CIELO RASO PLANO EN PLACAS DRYWALL 1/2 HR MEDIDO POR METRO LINEAL (PARA FAJAS, DILATACIONES O REMATES). INCLUYE ESTRUCTURA GALVANIZADA, FIJACIONES, TRATAMIENTO DE JUNTAS, APLICACIÓN DE ESTUCO PLÁSTICO, MANO DE OBRA, ANDAMIOS, SST.",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de cielo raso plano en placas drywall 1/2 hr ",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro e instalación de cielo raso plano en placas drywall 1/2 hr ",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-80",
  "nombre": "SUMINISTRO E INSTALACION DE CONCRETO PARA TANQUE DE 4000 PSI",
  "unidad": "m3",
  "materiales": [
   {
    "material": "Suministro e instalacion de concreto",
    "unidad": "m3",
    "rendimiento": 1,
    "categoria": "Concretos y estructura",
    "presentacion": "Suministro e instalacion de concreto",
    "unidadCompra": "m3",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-81",
  "nombre": "NIVELACIÓN DE PISO DE 25 CM CON ALIGERAMIENTO EN MAMPOSTERÍA CON LADRILLO, PLACA SUPERIOR EN CONCRETO 3000 PSI E=10 CM, MALLA ELECTROSOLDADA 15X15 6 MM, INCLUYE PINTURA ALTO TRÁFICO",
  "unidad": "m2",
  "materiales": [
   {
    "material": "Nivelación de piso de 25 cm",
    "unidad": "m2",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Nivelación de piso de 25 cm",
    "unidadCompra": "m2",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NP-82",
  "nombre": "SUMINISTRO E INSTALACIÓN RED DE TUBERÍA PVCP DE 1\" RDE 21 CON ACCESORIOS. (INCLUYE ACCESORIOS, SOPORTERIA Y AISLAMIENTO RUBATEX)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación red de tubería pvcp de 1\" rde 21",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación red de tubería pvcp de 1\" rde 21",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-01",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA CABLE 3X6+1X6+6T AL HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida cable 3x6+1x6+6t al hfrls-lc por",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida cable 3x6+1x6+6t al hfrls-lc por",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-02",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ACOMETIDA CABLE 3X2+1X2+6T AL HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de acometida cable 3x2+1x2+6t al hfrls-lc por",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de acometida cable 3x2+1x2+6t al hfrls-lc por",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-03",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ACOMETIDA CABLE 3X4+1X4+6T AL HFRLS-LC POR BANDEJA PORTA CABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de acometida cable 3x4+1x4+6t al hfrls-lc por",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de acometida cable 3x4+1x4+6t al hfrls-lc por",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-04",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ACOMETIDA CABLE 3X3/0+1X3/0+4T AL HFRLS-LC DESDE TGA-PPAL/13 A TGA-P6 POR BANDEJA PORTA CABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de acometida cable 3x3/0+1x3/0+4t al hfrls-lc",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de acometida cable 3x3/0+1x3/0+4t al hfrls-lc",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-05",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ACOMETIDA CABLE 3X4/0+1X4/0+4T AL HFRLS-LC DESDE TGA-PPAL/08 A TGA-P3 POR BANDEJA PORTA CABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de acometida cable 3x4/0+1x4/0+4t al hfrls-lc",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de acometida cable 3x4/0+1x4/0+4t al hfrls-lc",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-06",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ACOMETIDA CABLE 1X10+1X10+12T CU HFRLS-LC DESDE TGA-PPAL/21 A TL-ASC POR BANDEJA PORTA CABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de acometida cable 1x10+1x10+12t cu hfrls-lc ",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de acometida cable 1x10+1x10+12t cu hfrls-lc ",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-07",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ACOMETIDA CABLE 1X12+1X12+12T CU HFRLS-LC ALIMENTADOR DE EQUIPOS HVAC DESDE TABLERO DE CIRCUITOS Y SALIDAS ELÉCTRICAS POR BANDEJA PORTA CABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de acometida cable 1x12+1x12+12t cu hfrls-lc ",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de acometida cable 1x12+1x12+12t cu hfrls-lc ",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-08",
  "nombre": "SUMINISTRO E INSTALACION DE CABLE ALAMBRON 8MM ALUMINIO",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de cable alambron 8mm aluminio",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de cable alambron 8mm aluminio",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-09",
  "nombre": "SUMINISTRO E INSTALACION DE CABLE DE COBRE DESNUDO - 2/0 AWG",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de cable de cobre desnudo",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de cable de cobre desnudo",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-10",
  "nombre": "SUMINISTRO E INSTALACION DE CABLE 6 AWG COBRE DESNUDO",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de cable 6 awg cobre desnudo",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de cable 6 awg cobre desnudo",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-11",
  "nombre": "SUMINISTRO E INSTALACION DE CABLE 10 AWG COBRE DESNUDO",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de cable 10 awg cobre desnudo",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de cable 10 awg cobre desnudo",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-12",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA EMT DE 1-1/2\" INCLUYE TODOS LOS ACCESORIOS PARA SU INSTALACIÓN Y FIJACION",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de tubería emt de 1-1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de tubería emt de 1-1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-13",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA EMT DE 2\" INCLUYE TODOS LOS ACCESORIOS PARA SU INSTALACIÓN Y FIJACION",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de tubería emt de 2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de tubería emt de 2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-14",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA EMT DE 3\" INCLUYE TODOS LOS ACCESORIOS PARA SU INSTALACIÓN Y FIJACION",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de tubería emt de 3\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de tubería emt de 3\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-15",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA EMT DE 4\" INCLUYE TODOS LOS ACCESORIOS PARA SU INSTALACIÓN Y FIJACION",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de tubería emt de 4\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de tubería emt de 4\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-16",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SALIDA DE TOMACORRIENTE NORMAL SEGÚN RECORRIDO EN PLANOS DESDE LA SALIDA DE LA BANDEJA HASTA EL PUNTO DE DERIVACIÓN (NO INCLUYE CABLEADO EN BANDEJA PORTA CABLES) (NO INCLUYE EQUIPO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de salida de tomacorriente normal según recor",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de salida de tomacorriente normal según recor",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-17",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SALIDA DE TOMACORRIENTE GFCI SEGÚN RECORRIDO EN PLANOS DESDE LA SALIDA DE LA BANDEJA HASTA EL PUNTO DE DERIVACIÓN (NO INCLUYE CABLEADO EN BANDEJA PORTA CABLES) (NO INCLUYE EQUIPO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de salida de tomacorriente gfci según recorri",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de salida de tomacorriente gfci según recorri",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-18",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SALIDA DE TOMACORRIENTE NARANJA REGULADA SEGÚN RECORRIDO EN PLANOS DESDE LA SALIDA DE LA BANDEJA HASTA EL PUNTO DE DERIVACIÓN (NO INCLUYE CABLEADO EN BANDEJA PORTACABLES) (NO INCLUYE EQUIPO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de salida de tomacorriente naranja regulada s",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de salida de tomacorriente naranja regulada s",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-19",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SENSOR DE MOVIMIENTO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de sensor de movimiento",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de sensor de movimiento",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-20",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA LED HERMETICA 18 W P25607",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria led hermetica 18 w p25607",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria led hermetica 18 w p25607",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-21",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA LED REDONDA 12 W",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria led redonda 12 w",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria led redonda 12 w",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-22",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA LED LINEAL ECO 32 W",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria led lineal eco 32 w",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria led lineal eco 32 w",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-23",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA ATENEA 7,7 W - NOVA 2,5 LT LENS E25 600X58X72 SOB BL LED 1X1100LM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria atenea 7",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria atenea 7",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-24",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA ATENEA 14,5 W - 2,5 LT LENS E16 1150X58X82 SOB BLANCA LED 2X1100LM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria atenea 14",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria atenea 14",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-25",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA LED REFLECTOR 30 W P29769",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria led reflector 30 w p29769",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria led reflector 30 w p29769",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-26",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA EMERGENCIA DE APLIQUE 4 W",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria emergencia de aplique 4 w",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria emergencia de aplique 4 w",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-27",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TOMACORRIENTE DOBLE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de tomacorriente doble",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de tomacorriente doble",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-28",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO TRIFASICO DE 36 CIRCUITOS CON PUERTA Y ESPACIO PARA TOTALIZADOR",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero trifasico de 36 circuitos",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero trifasico de 36 circuitos",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-29",
  "nombre": "SUMINISTRO E INSTALACIÓN DE INTERRUPTOR TERMOMAGNETICO ENCHUFABLE DE 2X10A PARA MONTAJE DE TABLERO TRIFÁSICOS NORMAL (SEGUN DIAGRAMA MULTIFILAR)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de interruptor termomagnetico enchufable de 2",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de interruptor termomagnetico enchufable de 2",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-30",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE TRANSFERENCIA AUTOMATICA Y MANUAL 3X1000A - 220VAC (TRF-PPAL) (INCLUYE GABINETE METALICO AUTOSOPORTADO IP44 2000X1200X700 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + KIT DE TRANSFERENCIA MOTORIZADA + MÓDULO DE TRANSFERENCIA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de transferencia automatica y manu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de transferencia automatica y manu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-31",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE DISTRIBUCIÓN GENERAL 3X1000A - 220VAC (TGA-PPAL) (INCLUYE GABINETE METALICO AUTOSOPORTADO IP44 - 2000X2000X700 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + INTERRUPTORES MARCA CERTIFICADA + CONTACTOR TRIPOLAR + DISPOSITIVO DPS SOBRETENSIONES",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de distribución general 3x1000a",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de distribución general 3x1000a",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-32",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE DISTRIBUCIÓN DE ACOMETIDAS 3X175A - 220VAC (TGA-P3) (INCLUYE GABINETE METALICO 1200X800X400 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + INTERRUPTORES MARCA CERTIFICADA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de distribución de acometidas 3x17",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de distribución de acometidas 3x17",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-33",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE DISTRIBUCIÓN DE ACOMETIDAS 3X150A - 220VAC (TGA-P6) (INCLUYE GABINETE METALICO 1200X800X400 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + INTERRUPTORES MARCA CERTIFICADA)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de distribución de acometidas 3x15",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de distribución de acometidas 3x15",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-34",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE BYPASS 3X100A - 220VAC (T-BYPASS-UPS-P3) (INCLUYE GABINETE METALICO 1000X600X400 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + INTERRUPTORES MARCA CERTIFICADA + SELECTOR DE TRANSFERENCIA MANUAL)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de bypass 3x100a",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de bypass 3x100a",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-35",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE BYPASS 3X100A - 220VAC (T-BYPASS-UPS-P6) (INCLUYE GABINETE METALICO 1000X600X400 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + INTERRUPTORES MARCA CERTIFICADA)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de bypass 3x100a",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de bypass 3x100a",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-36",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE DISTRIBUCIÓN 3X100A - 220VAC (TGR-P3) (INCLUYE GABINETE METALICO 1200X800X400 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + INTERRUPTORES MARCA CERTIFICADA)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de distribución 3x100a",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de distribución 3x100a",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-37",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE DISTRIBUCIÓN 3X100A - 220VAC (TGR-P6) (INCLUYE GABINETE METALICO 1200X800X400 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + INTERRUPTORES MARCA CERTIFICADA)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de distribución 3x100a",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de distribución 3x100a",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-38",
  "nombre": "SUMINISTRO E INSTALACION DE CABLE PARA MEDIA TENSIÓN - 15KV EN 3X2 AWG - XLPE -AL PARA CONEXIÓN A TRANSFORMADOR TRIFÁSICO",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de cable",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de cable",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-39",
  "nombre": "SUMINISTRO E INSTALACION DE CABLE ENCAUCHETADO 3X12 AWG COBRE",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de cable encauchetado 3x12 awg cobre",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de cable encauchetado 3x12 awg cobre",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-40",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA DESDE TRAFO A TRF-PPAL CABLE 3(3X500+2X350+2T AL) POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida desde trafo a trf-ppal cable 3",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida desde trafo a trf-ppal cable 3",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-41",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA DESDE PLANTA ELECTRICA A TRF-PPAL CABLE 3(3X300+2X250+2T AL) - HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida desde planta electrica a trf-ppa",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida desde planta electrica a trf-ppa",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-42",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA DESDE TGA-PPAL/01 A TG-BOMB CABLE 3X4+1X2+6T AL - HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida desde tga-ppal/01 a tg-bomb cabl",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida desde tga-ppal/01 a tg-bomb cabl",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-43",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA DESDE TGA-PPAL/02 A TLT-SOT1 CABLE 3X6+1X4+6T AL - HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida desde tga-ppal/02 a tlt-sot1 cab",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida desde tga-ppal/02 a tlt-sot1 cab",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-44",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA DESDE TGA-PPAL/08 A TGA-P3 CABLE 3X4/0+1X250+4T AL - HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida desde tga-ppal/08 a tga-p3 cable",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida desde tga-ppal/08 a tga-p3 cable",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-45",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA DESDE TGA-PPAL/10 A T-HVAC-P4 CABLE 3X500+2X350+2T AL - HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida desde tga-ppal/10 a t-hvac-p4 ca",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida desde tga-ppal/10 a t-hvac-p4 ca",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-46",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA DESDE TGA-P3/01 A TLT-P3 CABLE 3X2+1X1/0+6T AL - HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida desde tga-p3/01 a tlt-p3 cable 3",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida desde tga-p3/01 a tlt-p3 cable 3",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-47",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA DESDE TGA-P3/02 A T-BY-PASS-UPS-P3 CABLE 3X1/0+1X2/0+4T AL - HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida desde tga-p3/02 a t-by-pass-ups-",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida desde tga-p3/02 a t-by-pass-ups-",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-48",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA DESDE T-BY-PASS-UPS-P6 A TGR-P6 CABLE 3X1/0+1X1/0+4T AL - HFRLS-LC POR BANDEJA PORTACABLE (INCLUYE CABLEADO POR BANDEJA)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida desde t-by-pass-ups-p6 a tgr-p6 ",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida desde t-by-pass-ups-p6 a tgr-p6 ",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-49",
  "nombre": "SUMINISTRO E INSTALACION DE PUNTA CAPTADORA 5-8 X 0.60 MT CON BASE-DX ACERO CON BASE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de punta captadora 5-8 x 0.60 mt",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de punta captadora 5-8 x 0.60 mt",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-50",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA PANEL LED 40W 60X60CM, INCRUSTAR/SOBREPONER, 100-240V. INCLUYE DRIVER,",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria panel led 40w 60x60cm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria panel led 40w 60x60cm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-51",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA LED PARA AVISO DE SALIDA DE EMERGENCIA, IP20, 1.6W, 110-130V. CERTIFICADA RETIE. INCLUYE HERRAJES DE FIJACIÓN, CONEXIONADO,",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria led",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria led",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-52",
  "nombre": "SUMINISTRO E INSTALACIÓN DE INTERRUPTOR TERMOMAGNÉTICO AUTOMÁTICO (BREAKER) ENCHUFABLE 1 POLO (15A, 20A, 30A, 40A O 50A SEGÚN DISEÑO), CAPACIDAD DE RUPTURA 10KA. INCLUYE MONTAJE EN BARRAJE, CONEXIÓN. ,",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de interruptor termomagnético automático",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de interruptor termomagnético automático",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-53",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SALIDA DE ILUMINACIÓN MONOFÁSICA. INCLUYE HASTA 3 ML DE CABLEADO LIBRE DE HALÓGENOS Y BAJA EMISIÓN DE HUMOS (XLPE HF FR LS CT NO. 12 AWG), CAJA METÁLICA TIPO RAWELT, TUBERÍA EMT 3/4\", CONECTORES EMT, AMARRES, PRUEBAS DE CONTINUIDAD.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPE-54",
  "nombre": "SUMINISTRO E INSTALACIÓN DE INTERRUPTOR TERMOMAGNÉTICO TRIFÁSICO (16A, 25A O 40A SEGÚN DISEÑO), CON CAPACIDAD DE INTERRUPCIÓN CERTIFICADA BAJO RETIE Y NTC 2050.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de interruptor termomagnético trifásico",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de interruptor termomagnético trifásico",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-55",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TOMACORRIENTE DOBLE NO REGULADO (125V - 15A/20A) CON POLO A TIERRA.. PARA CANALETA, CAJA O PUESTO DE TRABAJO. INCLUYE TAPA DE ALTA RESISTENCIA, TROQUELADO DE CANALETA (SI APLICA), CONEXIONADO, PRUEBAS DE POLARIDAD Y TENSIÓN CON ANALIZADOR, MANO DE OBRA,",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPE-56",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TOMACORRIENTE DOBLE REGULADO (125V - 15A/20A) CON PUESTA A TIERRA AISLADA (COLOR NARANJA).. INCLUYE MECANISMO INSTITUCIONAL, TAPA, TROQUELADO DE CANALETA, CONEXIONADO INDEPENDIENTE DEL CONDUCTOR DE TIERRA, PRUEBAS DE AISLAMIENTO Y POLARIDAD, MANO DE OBRA.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPE-57",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CAJA DE DISTRIBUCIÓN/PASO METÁLICA (0.40X0.30X0.20M), FABRICADA EN LÁMINA GALVANIZADA CON ACABADO EN PINTURA ELECTROSTÁTICA (IP SEGÚN NEMA)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de caja de distribución/paso metálica",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de caja de distribución/paso metálica",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-58",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TAPA CIEGA PLÁSTICA EN PVC DE ALTA RESISTENCIA (11X8 CM) PARA CAJAS RECTANGULARES. INCLUYE TORNILLOS DE FIJACIÓN EN ACERO, AJUSTE HERMÉTICO A MURO, LIMPIEZA PERIFÉRICA, MANO DE OBRA,",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de tapa ciega plástica en pvc de alta resiste",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de tapa ciega plástica en pvc de alta resiste",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-59",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CAJA DE PASO METÁLICA PESADA TIPO RAWELT DE 4\"X4\" (10X10 CM). INCLUYE TAPA ORIGINAL, TORNILLOS EN ACERO INOXIDABLE, EMPAQUE DE HERMETICIDAD, CONECTORES Y TUERCAS EMT/IMC, ACCESORIOS DE ANCLAJE, MANO DE OBRA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de caja de paso metálica pesada tipo rawelt d",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de caja de paso metálica pesada tipo rawelt d",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-60",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA DESCOLGADA IMC DE 3/4 A 1 1-2\" INCLUYE TODOS LOS ACCESORIOS PARA SU INSTALACION Y FIJACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de tubería descolgada imc de 3/4 a 1 1-2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de tubería descolgada imc de 3/4 a 1 1-2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-61",
  "nombre": "EJECUCIÓN DE CONEXIONES EN RED DE MEDIA TENSIÓN CON EMPALMES, TERMINACIONES, AISLAMIENTO, PROTECCIÓN MECÁNICA Y PRUEBAS ELÉCTRICAS",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPE-62",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA TIPO TORTUGA DE 12 W DE SEGURIDAD (IP65) EN FOSO DE ASCENSOR Y CUARTO DE MÁQUINAS. CERTIFICADA RETIE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de luminaria tipo tortuga de 12 w de segurida",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de luminaria tipo tortuga de 12 w de segurida",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-63",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TABLERO ELÉCTRICO DE DISTRIBUCIÓN TRIFÁSICO DE 30 CIRCUITOS, CERTIFICADO RETIE. INCLUYE GABINETE METÁLICO RESISTENTE, PUERTA CON CERRADURA, BARRAJES EN COBRE ELECTROLÍTICO DE ALTA PUREZA, ESPACIO Y SOPORTES PARA TOTALIZADOR, MARQUILLADO DE DIRECTORIO, TERMINALES, PRUEBAS DE AISLAMIENTO, MANO DE OBRA,.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPE-64",
  "nombre": "CORRECCIÓN DE HALLAZGOS Y NO CONFORMIDADES DEL SISTEMA DE DESFOGUE DE LA PLANTA ELÉCTRICA Y DEL EXTRACTOR MECÁNICO, SEGÚN REGISTRO DE INSPECCIÓN. INCLUYE MANO DE OBRA, EQUIPOS, HERRAMIENTAS, SUMINISTRO E INSTALACIÓN DE REPUESTOS Y ACCESORIOS REQUERIDOS, REPARACIÓN O REEMPLAZO DE ELEMENTOS DETERIORADOS, AJUSTES MECÁNICOS Y ELÉCTRICOS, ANCLAJES, SOPORTERÍA, CONEXIONADO, PRUEBAS DE OPERACIÓN Y PUESTA EN SERVICIO DEL SISTEMA COMPLETAMENTE FUNCIONAL.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPE-65",
  "nombre": "SUMINISTRO E INSTALACIÓN DE LUMINARIA LED LINEAL HERMÉTICA DE 1,20 M DE LONGITUD, PARA MONTAJE SOBREPUESTO O SUSPENDIDO SEGÚN DISEÑO Y CONDICIONES DEL SITIO, ALIMENTACIÓN ELÉCTRICA 100-240 VAC, CUERPO DE ALTA RESISTENCIA MECÁNICA Y PROTECCIÓN CONTRA POLVO Y HUMEDAD. INCLUYE LUMINARIA COMPLETA, DRIVER INTEGRADO, ACCESORIOS DE FIJACIÓN, SOPORTES, ELEMENTOS DE SUSPENSIÓN CUANDO APLIQUE, CONEXIÓN A LA RED ELÉCTRICA EXISTENTE, PRUEBAS DE FUNCIONAMIENTO, PUESTA EN OPERACIÓN Y DEMÁS ACTIVIDADES NECESARIAS PARA SU CORRECTA INSTALACIÓN Y FUNCIONAMIENTO.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPE-66",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ACCESORIOS PARA RED DE TUBERÍA DEL SISTEMA DE DETECCIÓN Y ALARMA CONTRA INCENDIOS, INCLUYENDO CAJAS DE PASO PARA SENSORES, CAJAS PARA ESTACIONES MANUALES, UNIONES, ACOPLES, GRAPAS, ABRAZADERAS, CONECTORES, ADAPTADORES, ELEMENTOS DE FIJACIÓN Y DEMÁS ACCESORIOS REQUERIDOS PARA EL CORRECTO SOPORTE, ENSAMBLE, PROTECCIÓN Y CONTINUIDAD DE LAS CANALIZACIONES. INCLUYE SUMINISTRO DE MATERIALES, MANO DE OBRA, HERRAMIENTAS, MONTAJE, AJUSTE, FIJACIÓN Y TODOS LOS TRABAJOS NECESARIOS PARA GARANTIZAR UNA INSTALACIÓN SEGURA Y CONFORME A LOS DISEÑOS Y ESPECIFICACIONES TÉCNICAS DEL PROYECTO.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de accesorios",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de accesorios",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-67",
  "nombre": "SUMINISTRO E INSTALACION DE CAJA TIPO RADWELL ALUMINIO 5800",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de caja tipo radwell aluminio 5800",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalacion de caja tipo radwell aluminio 5800",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-68",
  "nombre": "SUMINISTRO E INSTALACIÓN DE INTERRUPTOR MONOFÁSICO + APARATO. INCLUYE HASTA 3 ML DE CABLEADO ( HF FR LS CT NO. 12 AWG), CAJA METÁLICA TIPO RAWELT, TUBERÍA EMT 3/4\", CONECTORES EMT, AMARRES.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de interruptor monofásico + aparato",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de interruptor monofásico + aparato",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-69",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO TRIFASICO DE 42 CIRCUITOS CON PUERTA Y ESPACIO PARA TOTALIZADOR",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero trifasico de 42 circuitos",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero trifasico de 42 circuitos",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-70",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE DISTRIBUCION TRIFASICO DE 60 CIRCUITOS - TABLERO - AA Un 208-120 V / In 120 A / Icc 25 kA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de distribucion trifasico de 60 ci",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de distribucion trifasico de 60 ci",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-71",
  "nombre": "SUMINISTRO E INSTALACIÓN DE INTERRUPTOR TERMOMAGNETICO ENCHUFABLE DE 2X15A, 2X20A PARA MONTAJE DE TABLERO TRIFÁSICOS NORMAL (SEGUN DIAGRAMA UNIFILAR)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de interruptor termomagnetico enchufable de 2",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de interruptor termomagnetico enchufable de 2",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-72",
  "nombre": "SUMINISTRO E INSTALACIÓN DE INTERRUPTOR TERMOMAGNETICO ENCHUFABLE DE 3X20A PARA MONTAJE DE TABLERO TRIFÁSICOS NORMAL (SEGUN DIAGRAMA UNIFILAR)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de interruptor termomagnetico enchufable de 3",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de interruptor termomagnetico enchufable de 3",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-73",
  "nombre": "SUMINISTRO DE TOTALIZADOR TRIFASICO 3x175A, 3x200A Y 3x300A",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de totalizador trifasico 3x175a",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de totalizador trifasico 3x175a",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-74",
  "nombre": "SUMINISTRO E INSTALACIÓN DE GABINETE METÁLICO IP20 PARA TRANSFORMADOR SECO DE 400 kVA, SERIE 15 kV, DIMENSIONES DE REFERENCIA 2,00 × 1,90 × 2,10 m, ÁREA DE VENTILACIÓN 0,80 m², CON PUERTAS, REJILLAS DE VENTILACIÓN, VENTANAS DE INSPECCIÓN, DOMO DE VENTILACIÓN Y MANIJA CON CERRADURA. INCLUYE ARMADO, FIJACIÓN E INSTALACIÓN.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de gabinete metálico ip20",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de gabinete metálico ip20",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-75",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA CABLE 3#500F+1#500N+1#2T",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida cable 3#500f+1#500n+1#2t",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida cable 3#500f+1#500n+1#2t",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-76",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA CABLE 3#1/0F+1#1/0N+1#6T",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida cable 3#1/0f+1#1/0n+1#6t",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida cable 3#1/0f+1#1/0n+1#6t",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-77",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA CABLE 3#350F+1#350N+1#4T",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida cable 3#350f+1#350n+1#4t",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida cable 3#350f+1#350n+1#4t",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-78",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA CABLE 6 (3#500F+1#500N+1#2T)",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida cable 6",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida cable 6",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-79",
  "nombre": "SUMINISTRO E INSTALACION DE ACOMETIDA CABLE 4(3#250F+1#250N+1#2T_AL) - HFRLS-LC",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalacion de acometida cable 4",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de acometida cable 4",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-80",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE TRANSFERENCIA AUTOMATICA Y MANUAL 3X1600A - 220VAC (TRF-PPAL) (INCLUYE GABINETE METALICO AUTOSOPORTADO IP44 2000X1200X700 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + KIT DE TRANSFERENCIA MOTORIZADA + MÓDULO DE TRANSFERENCIA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de transferencia automatica y manu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de transferencia automatica y manu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPE-81",
  "nombre": "SUMINISTRO E INSTALACION DE TABLERO DE DISTRIBUCIÓN GENERAL 3X640-1600 A - 220VAC (TGA-PPAL) (INCLUYE GABINETE METALICO AUTOSOPORTADO IP44 - 2000X2000X700 MM + BARRAJE TRIFASICO, NEUTRO Y TIERRA + INTERRUPTORES MARCA CERTIFICADA + CONTACTOR TRIPOLAR + DISPOSITIVO DPS SOBRETENSIONES",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de tablero de distribución general 3x640-1600",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de tablero de distribución general 3x640-1600",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPC-01",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CANALETA METÁLICA GALVANIZADA DE 12X5 CM PINTURA ELECTROSTATICA, CON DIVISIÓN INTERNA PARA SEPARACIÓN DE REDES (ELÉCTRICA/DATOS) Y TAPA. INCLUYE ACCESORIOS DE UNIÓN, CURVAS, TES, SOPORTES DE FIJACIÓN ESTRUCTURAL",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de canaleta metálica galvanizada de 12x5 cm p",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de canaleta metálica galvanizada de 12x5 cm p",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPC-02",
  "nombre": "SUMINISTRO E INSTALACIÓN DE BANDEJA PORTACABLE/ESCALERILLA METÁLICA GALVANIZADA (100, 200 O 300MM) PARA REDES DE TELECOMUNICACIONES. ACCESORIOS DE UNIÓN, HERRAJES DE SUSPENSIÓN (TRAPECIOS, VARILLA ROSCADA, MÉNSULAS), PUENTE DE TIERRA GENERAL, MANO DE OBRA, ANDAMIOS.",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de bandeja portacable/escalerilla metálica ga",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de bandeja portacable/escalerilla metálica ga",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPC-03",
  "nombre": "SUMINISTRO, INSTALACIÓN Y CERTIFICACIÓN DE PUNTO DE DATOS SENCILLO CATEGORÍA 6A. NO INCLUYE CABLE, CUMPLE RITEL. INCLUYE JACK RJ45 BLINDADO EXTREMO-EXTREMO, FACEPLATE, MARQUILLADO ANSI/TIA-606, ORGANIZACIÓN EN RACK. INCLUYE PRUEBAS DE CERTIFICACIÓN DE RENDIMIENTO CON EQUIPO CALIBRADO, MANO DE OBRA",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPC-04",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PATCH CORD CATEGORÍA 6A BLINDADO (F/UTP) DE 1 A 2 METROS. CERTIFICADO DE FÁBRICA BAJO NORMAS ANSI/TIA-568.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPC-05",
  "nombre": "SUMINISTRO E INSTALACIÓN DE PATCH PANEL DE 48 PUERTOS BLINDADO, CATEGORÍA 6A, TAMAÑO ESTÁNDAR 19\". INCLUYE ACCESORIOS DE MONTAJE EN RACK (TORNILLOS/CANASTILLAS), BARRA DE ALIVIO DE TENSIÓN TRASERA, PONCHADO TÉCNICO, ORGANIZACIÓN ESTÉTICA DEL CABLEADO, MARQUILLADO FRONTAL INDELEBLE BAJO NORMA ANSI/TIA-606, MANO DE OBRA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de patch panel de 48 puertos blindado",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de patch panel de 48 puertos blindado",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPC-06",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RACK DE TELECOMUNICACIONES DE PISO 42 UR (19\",. INCLUYE ESTRUCTURA EN LÁMINA DE ACERO, PANELES DESMONTABLES, PUERTA VENTILADA/VIDRIO, PASACABLES HORIZONTAcionLES/VERTICALES, PDU MULTITOMA CERTIFICADA RETIE, SOPORTES DE NIVELACIÓN, KIT DE PUESTA A TIERRA AL CHASIS, ANCLAJE, MANO DE OBRA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de rack de telecomunicaciones de piso 42 ur",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de rack de telecomunicaciones de piso 42 ur",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPC-07",
  "nombre": "DESMONTE TÉCNICO DE CABLEADO ESTRUCTURADO EXISTENTE EN DESUSO. INCLUYE RETIRO DE CABLEADO UTP/FIBRA, DESCONEXIÓN DE JACKS, DESMONTE DE FACEPLATES, REMOCIÓN DE CANALETAS/BANDEJAS, CLASIFICACIÓN PARA APROVECHAMIENTO",
  "unidad": "gbl",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPC-08",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CABLE F/UTP 24 AWG SÓLIDO, CATEGORÍA 6A (CMR).. CHAQUETA TIPO LSHF/LSZH (LIBRE DE HALÓGENOS Y BAJA EMISIÓN DE HUMOS). INCLUYE TENDIDO TÉCNICO POR BANDEJAS CONSERVANDO RADIOS DE CURVATURA, , MARQUILLADO.",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de cable f/utp 24 awg sólido",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de cable f/utp 24 awg sólido",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPC-09",
  "nombre": "SUMINISTRO E INSTALACIÓN DE INFRAESTRUCTURA PARA PUNTO DE CCTV. INCLUYE CAJA METÁLICA DE PASO/DERIVACIÓN TIPO RAWELT O GALVANIZADA (4\"X4\" O 2\"X4\") Y HASTA 3 ML DE TUBERÍA EMT DE 1/2\". INCLUYE CONECTORES, SOPORTES, ABRAZADERAS DE FIJACIÓN, ALAMBRE GUÍA INTERNO, ANCLAJES, MANO DE OBRA, ANDAMIOS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de infraestructura",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de infraestructura",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPC-10",
  "nombre": "SUMINISTRO E INSTALACION DE RACK DE PISO 45UR (INCLUYE HERRAJE PARA 24 PUERTOS CAT 6A FUTP, ORGANIZADOR HORIZONTAL Y UNA UNIDAD DE MULTITOMA)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalacion de rack de piso 45ur",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalacion de rack de piso 45ur",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-03",
  "nombre": "SUMINISTRO E INSTALACION DE ESTRUCTURA METALICA PARA bASES DE SOPORTE DE UNIDADES EXTERIORES DE HVAC (CONDENSADORAS )",
  "unidad": "kg",
  "materiales": [
   {
    "material": "Suministro e instalacion de estructura metalica",
    "unidad": "kg",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro e instalacion de estructura metalica",
    "unidadCompra": "kg",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-04",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"L\" RÍGIDA DE 1- 1/2\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-05",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO \"L\" RÍGIDA DE 2\" INCLUYE SOPORTERÍA Y ACCESORIOS NECESARIOS PARA SU INSTALACIÓN",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de red de tubería de cobre tipo \"l\" rígida de",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-06",
  "nombre": "SUMINISTRO E INSTALACIÓN CON OBRAS ELÉCTRICAS, DE LOS SISTEMAS DE AIRE ACONDICIONADO PARA LOS PISOS 1 AL 8 Y EXTRACCIÓN DE SOTANOS 1,2,3, ADICIONALMENTE PRESURIZACIÓN DE ESCALERAS: INCLUYE UNIDADES INTERIORES Y EXTERIORES, SISTEMAS DE EXTRACCIÓN Y VENTILACIÓN PARA RENOVACION DE AIRE EN CADA PISO, CORTINAS DE AIRE EN LAS PUERTAS DE INGRESO AL EDIFICIO (PISO 1 Y 2) Y TODOS LOS MATERIALES COMO SON: DUCTOS, SOPORTERÍA, TUBERÍA, AISLAMIENTOS, TABLEROS DE CONTROL, TERMOSTATOS AMBIENTALES, REJILLAS, DIFUSORES, CUELLOS Y DEMAS ELEMENTOS PARA EL CORRECTO FUNCIONAMIENTO. INCLUYE TODO EL SUMINISTRO E INSTALACIÓN DE LA RED ELÉCTRICA DE FUERZA Y RED ELÉCTRICA DE CONTROL, CON TABLEROS ELÉCTRICOS, ACOMETIDAS, PROTECCIONES, Y TODO LO NECESARIO PARA SU CORRECTO FUNCIONAMIENTO. (APROXIMADAMENTE 208 TN). INCLUYE DISEÑO CON PLANOS RECORD DE AIRES Y ELÉCTRICOS DE FUERZA Y CONTROL.",
  "unidad": "tn",
  "materiales": [
   {
    "material": "Suministro e instalación",
    "unidad": "tn",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación",
    "unidadCompra": "tn",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-07",
  "nombre": "SUMINISTRO, TRANSPORTE, CARGA Y PRESURIZACIÓN DE GAS REFRIGERANTE ECOLÓGICO R-410A (O EL ESPECIFICADO POR EL FABRICANTE) PARA SISTEMAS DE EXPANSIÓN DIRECTA. INCLUYE PRUEBAS DE VACÍO PROFUNDO (MEDIDO EN MICRONES), PRUEBAS DE ESTANQUEIDAD DEL SISTEMA CON NITRÓGENO DE ALTA PUREZA A LAS PRESIONES RECOMENDADAS POR EL FABRICANTE PARA DESCARTE DE FUGAS, HERRAMIENTAS ESPECIALIZADAS (MANÓMETROS DIGITALES, BOMBAS DE VACÍO), MANO DE OBRA CALIFICADA.",
  "unidad": "kg",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-08",
  "nombre": "SUMINISTRO, FABRICACIÓN, TRANSPORTE E INSTALACIÓN DE CONDUCTOS (DUCTOS) PARA LA RED DE DISTRIBUCIÓN DE AIRE Y VENTILACIÓN EN LOS PISOS 1 AL 8, CONSTRUIDOS EN LÁMINA DE ACERO GALVANIZADO CALIBRE 24. FABRICACIÓN BAJO NORMAS SMACNA Y ASHRAE. SELLANTE ELÁSTICO DE ALTA ADHERENCIA PARA JUNTAS (CLASE A DE ESTANQUEIDAD), SOPORTERÍA METÁLICA ESTRUCTURAL SISMORRESISTENTE, VARILLAS ROSCADAS, CHAZOS DE EXPANSIÓN, TORNILLERÍA GALVANIZADA, AISLAMIENTO TÉRMICO EXTERIOR O INTERIOR SEGÚN DISEÑO",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-09",
  "nombre": "SUMINISTRO, FABRICACIÓN, TRANSPORTE E INSTALACIÓN DE CONDUCTOS (DUCTOS) PARA LA RED DE EXTRACCIÓN EN LOS PISOS 1 AL 8, CONSTRUIDOS EN LÁMINA DE ACERO GALVANIZADO CALIBRE 24. FABRICACIÓN BAJO NORMAS SMACNA Y ASHRAE. SELLANTE ELÁSTICO DE ALTA ADHERENCIA PARA JUNTAS (CLASE A DE ESTANQUEIDAD), SOPORTERÍA METÁLICA ESTRUCTURAL SISMORRESISTENTE, VARILLAS ROSCADAS, CHAZOS DE EXPANSIÓN, TORNILLERÍA GALVANIZADA, AISLAMIENTO TÉRMICO EXTERIOR O INTERIOR SEGÚN DISEÑO",
  "unidad": "m2",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-10",
  "nombre": "SUMINISTRO E INSTALACIÓN DE MANGUERA (DUCTO) FLEXIBLE REDONDA AISLADA TERMOACÚSTICAMENTE, DE VARIAS DIMENSIONES (DIÁMETROS SEGÚN PLANOS), PARA LA INTERCONEXIÓN ENTRE CONDUCTOS PRINCIPALES Y DIFUSORES/REJILLAS. COMPUESTA POR NÚCLEO INTERNO DE ALUMINIO/POLIÉSTER HELICOIDAL, AISLAMIENTO EN LANA DE VIDRIO DE ALTA DENSIDAD Y CHAQUETA EXTERIOR CON BARRERA DE VAPOR REFORZADA",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de manguera",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro e instalación de manguera",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-11",
  "nombre": "SUMINISTRO E INSTALACIÓN DE REJILLA DE RETORNO DE AIRE DE VARIAS DIMENSIONES (SEGÚN DISEÑO ARQUITECTÓNICO Y MECÁNICO), FABRICADA EN ALUMINIO EXTRUIDO ANODIZADO O CON ACABADO EN PINTURA ELECTROSTÁTICA COLOR BLANCO.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de rejilla de retorno de aire de varias dimen",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de rejilla de retorno de aire de varias dimen",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-12",
  "nombre": "SUMINISTRO, TRANSPORTE, PREPARACIÓN E INSTALACIÓN DE RED DE TUBERÍA DE COBRE DESHIDRATADO TIPO \"L\" RÍGIDA, DE DIÁMETRO NOMINAL 3/8\" PARA TRANSPORTE DE REFRIGERANTE EN ALTA O BAJA PRESIÓN. CUMPLE CON NORMAS ASTM B280. INCLUYE SOLDADURA FUERTE CON ALEACIÓN DE PLATA (MÍNIMO 15 SOPORTERÍA TÉCNICA ESPACIADA SEGÚN NORMA CON ABRAZADERAS TIPO OMEGA ACOLCHADAS PARA EVITAR VIBRACIONES Y PAR GALVÁNICO, CHAZOS DE EXPANSIÓN, CURVAS, UNIONES Y ACCESORIOS. INCLUYE MANO DE OBRA CALIFICADA, ANDAMIOS",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-13",
  "nombre": "SUMINISTRO, TRANSPORTE, PREPARACIÓN E INSTALACIÓN DE RED DE TUBERÍA DE COBRE DESHIDRATADO TIPO \"L\" RÍGIDA, DE DIÁMETRO NOMINAL 1/2\" PARA TRANSPORTE DE REFRIGERANTE EN ALTA O BAJA PRESIÓN. CUMPLE CON NORMAS ASTM B280. INCLUYE SOLDADURA FUERTE CON ALEACIÓN DE PLATA (MÍNIMO 15%),, SOPORTERÍA TÉCNICA ESPACIADA SEGÚN NORMA CON ABRAZADERAS TIPO OMEGA ACOLCHADAS PARA EVITAR VIBRACIONES Y PAR GALVÁNICO, CHAZOS DE EXPANSIÓN, CURVAS, UNIONES Y ACCESORIOS. INCLUYE MANO DE OBRA CALIFICADA, ANDAMIOS",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-14",
  "nombre": "SUMINISTRO, TRANSPORTE, PREPARACIÓN E INSTALACIÓN DE RED DE TUBERÍA DE COBRE DESHIDRATADO TIPO \"L\" RÍGIDA, DE DIÁMETRO NOMINAL 5/8\" PARA TRANSPORTE DE REFRIGERANTE EN ALTA O BAJA PRESIÓN. CUMPLE CON NORMAS ASTM B280. INCLUYE SOLDADURA FUERTE CON ALEACIÓN DE PLATA (MÍNIMO 15%), , SOPORTERÍA TÉCNICA ESPACIADA SEGÚN NORMA CON ABRAZADERAS TIPO OMEGA ACOLCHADAS PARA EVITAR VIBRACIONES Y PAR GALVÁNICO, CHAZOS DE EXPANSIÓN, CURVAS, UNIONES Y ACCESORIOS. INCLUYE MANO DE OBRA CALIFICADA, ANDAMIOS",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-15",
  "nombre": "SUMINISTRO, TRANSPORTE, PREPARACIÓN E INSTALACIÓN DE RED DE TUBERÍA DE COBRE DESHIDRATADO TIPO \"L\" RÍGIDA, DE DIÁMETRO NOMINAL 3/4\" PARA TRANSPORTE DE REFRIGERANTE EN ALTA O BAJA PRESIÓN. CUMPLE CON NORMAS ASTM B280. INCLUYE SOLDADURA FUERTE CON ALEACIÓN DE PLATA (MÍNIMO 15%), SOPORTERÍA TÉCNICA ESPACIADA SEGÚN NORMA CON ABRAZADERAS TIPO OMEGA ACOLCHADAS PARA EVITAR VIBRACIONES Y PAR GALVÁNICO, CHAZOS DE EXPANSIÓN, CURVAS, UNIONES Y ACCESORIOS. INCLUYE MANO DE OBRA CALIFICADA, ANDAMIOS",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-16",
  "nombre": "SUMINISTRO, TRANSPORTE, PREPARACIÓN E INSTALACIÓN DE RED DE TUBERÍA DE COBRE DESHIDRATADO TIPO \"L\" RÍGIDA, DE DIÁMETRO NOMINAL 7/8\" PARA TRANSPORTE DE REFRIGERANTE EN ALTA O BAJA PRESIÓN. CUMPLE CON NORMAS ASTM B280. INCLUYE SOLDADURA FUERTE CON ALEACIÓN DE PLATA (MÍNIMO 15%), SOPORTERÍA TÉCNICA ESPACIADA SEGÚN NORMA CON ABRAZADERAS TIPO OMEGA ACOLCHADAS PARA EVITAR VIBRACIONES Y PAR GALVÁNICO, CHAZOS DE EXPANSIÓN, CURVAS, UNIONES Y ACCESORIOS. INCLUYE MANO DE OBRA CALIFICADA, ANDAMIOS",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-17",
  "nombre": "SUMINISTRO, TRANSPORTE, PREPARACIÓN E INSTALACIÓN DE RED DE TUBERÍA DE COBRE DESHIDRATADO TIPO \"L\" RÍGIDA, DE DIÁMETRO NOMINAL 1 1/8\" PARA TRANSPORTE DE REFRIGERANTE EN ALTA O BAJA PRESIÓN. CUMPLE CON NORMAS ASTM B280. INCLUYE SOLDADURA FUERTE CON ALEACIÓN DE PLATA (MÍNIMO 15, SOPORTERÍA TÉCNICA ESPACIADA SEGÚN NORMA CON ABRAZADERAS TIPO OMEGA ACOLCHADAS PARA EVITAR VIBRACIONES Y PAR GALVÁNICO, CHAZOS DE EXPANSIÓN, CURVAS, UNIONES Y ACCESORIOS. INCLUYE MANO DE OBRA CALIFICADA, ANDAMIOS",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-18",
  "nombre": "SUMINISTRO, TRANSPORTE, PREPARACIÓN E INSTALACIÓN DE RED DE TUBERÍA DE COBRE DESHIDRATADO TIPO \"K\" RÍGIDA, DE DIÁMETRO NOMINAL 1 1/4\" PARA TRANSPORTE DE REFRIGERANTE EN ALTA O BAJA PRESIÓN. CUMPLE CON NORMAS ASTM B280. INCLUYE SOLDADURA FUERTE CON ALEACIÓN DE PLATA (MÍNIMO 15%), SOPORTERÍA TÉCNICA ESPACIADA SEGÚN NORMA CON ABRAZADERAS TIPO OMEGA ACOLCHADAS PARA EVITAR VIBRACIONES Y PAR GALVÁNICO, CHAZOS DE EXPANSIÓN, CURVAS, UNIONES Y ACCESORIOS. INCLUYE MANO DE OBRA CALIFICADA, ANDAMIOS",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-19",
  "nombre": "SUMINISTRO E INSTALACIÓN DE KIT DE DERIVACIÓN TÉCNICA EN COBRE (TIPO JOINT / REFNET / BRANCH) DE VARIAS REFERENCIAS, HOMOLOGADO Y CERTIFICADO POR EL FABRICANTE DEL SISTEMA VRF/VRV PARA LA DISTRIBUCIÓN EQUILIBRADA DE REFRIGERANTE A LAS UNIDADES INTERIORES. INCLUYE ACCESORIOS DE REDUCCIÓN, UNIONES SOLDADAS CON ALEACIÓN DE PLATA BAJO ATMÓSFERA DE NITRÓGENO, , MANO DE OBRA CALIFICADA, HERRAMIENTAS DE PRECISIÓN, ANDAMIOS,",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-20",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CABLE DE CONTROL BLINDADO, APANTALLADO Y TRENZADO DE 2X18 AWG PARA LA RED DE COMUNICACIÓN DE DATOS ENTRE UNIDADES EVAPORADORAS, CONDENSADORAS Y SISTEMAS DE CONTROL CENTRALIZADO DE AIRE ACONDICIONADO. INCLUYE EL TENDIDO A TRAVÉS DE CANALIZACIONES ELÉCTRICAS O TUBERÍAS",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación de cable de control blindado",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de cable de control blindado",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-21",
  "nombre": "INSTALACIÓN, MONTAJE MECÁNICO, NIVELACIÓN Y CONEXIONADO TÉCNICO DE UNIDAD CONDENSADORA EXTERIOR PARA SISTEMA DE FLUJO DE REFRIGERANTE VARIABLE (VRF/VRV) DE EXPANSIÓN DIRECTA, VOLTAJE DE OPERACIÓN 220V/3F/60HZ CON TECNOLOGÍA INVERTER.INCLUYE EL SUMINISTRO E INSTALACIÓN DE SOPORTES O AMORTIGUADORES ANTIVIBRATORIOS DE CAUCHO/RESORTE CERTIFICADOS, FIJACIÓN CON PERNOS DE EXPANSIÓN DE ALTA RESISTENCIA, CONEXIONADO DE LA TUBERÍA DE COBRE MEDIANTE SOLDADURA ESPECIALIZADA, CONEXIÓN DE LA RED ELÉCTRICA DE POTENCIA Y CONTROL A BORNERAS (CUMPLIENDO RETIE), COLOCACIÓN DE TERMINALES BIMETÁLICOS, MANO DE OBRA ESPECIALIZADA, HERRAMIENTAS, EQUIPOS DE SEGURIDAD EN ALTURAS.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-22",
  "nombre": "INSTALACIÓN, MONTAJE Y FIJACIÓN TÉCNICA DE UNIDAD EVAPORADORA INTERIOR (TIPO CASSETTE, FAN COIL, MURO O TECHO SEGÚN DISEÑO) PARA SISTEMA DE REFRIGERANTE VARIABLE (VRF/VRV) DE EXPANSIÓN DIRECTA, ALIMENTACIÓN ELÉCTRICA 220V/2F/60HZ O SEGÚN PLANOS. INCLUYE EL TRASIEGO Y TRASLADO HORIZONTAL/VERTICAL CUIDADOSO DE LOS EQUIPOS HASTA CADA ESPACIO ARQUITECTÓNICO ASIGNADO. INCLUYE EL SUMINISTRO E INSTALACIÓN DE LA SOPORTERÍA DE SUSPENSIÓN INDEPENDIENTE (VARILLAS ROSCADAS, TUERCAS, AMORTIGUADORES DE CAUCHO), NIVELACIÓN DE PRECISIÓN PARA GARANTIZAR EL DRENAJE DE CONDENSADOS, CONEXIONADO DE TUBERÍAS DE COBRE Y DE LA RED DE DRENAJE EN PVC CON SU DEBIDO AISLAMIENTO TÉRMICO, CONEXIÓN ELÉCTRICA DE FUERZA Y CONTROL (RETIE), INSTALACIÓN DE PANELES DE ACABADO/DIFUSIÓN, MANO DE OBRA CALIFICADA, HERRAMIENTAS, ANDAMIOS CERTIFICADOS.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-23",
  "nombre": "INSTALACIÓN, MONTAJE MECÁNICO Y PUESTA EN POSICIÓN DE UNIDADES DE VENTILACIÓN MECÁNICA (INYECTORES/EXTRACTORES CENTRÍFUGOS U AXIALES) Y CORTINAS DE AIRE INSTITUCIONALES. INCLUYE LAS MANIOBRAS COMPLEJAS DE IZAJE VERTICAL MEDIANTE GRÚA O EQUIPOS MECÁNICOS CERTIFICADOS Y EL TRASIEGO INTERNO DE LOS EQUIPOS HASTA SU UBICACIÓN DEFINITIVA EN CUBIERTAS, FACHADAS O CIELOS RASOS. INCLUYE EL SUMINISTRO E INSTALACIÓN DE SOPORTERÍA ESTRUCTURAL PESADA, SISTEMAS DE AMORTIGUACIÓN ANTIVIBRATORIA (RESORTES O NEOPRENO), ALINEACIÓN, ACOPLE MECÁNICO A DUCTOS EXISTENTES MEDIANTE JUNTAS DE LONA ELÁSTICA FLEXIBLES PARA EVITAR TRANSMISIÓN DE VIBRACIONES, CONEXIÓN ELÉCTRICA DE POTENCIA Y CONTROL CONFORME A RETIE, MANO DE OBRA ALTAMENTE CALIFICADA, ANDAMIOS, HERRAMIENTAS ESPECIALIZADAS, PLAN DE IZAJE, SST Y TODO COSTO DIRECTO E INDIRECTO.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-24",
  "nombre": "SUMINISTRO E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO K DE 1-3/8” PARA SISTEMA DE AIRE ACONDICIONADO, INCLUYENDO TRANSPORTE, CORTE, DOBLADO, SOLDADURA, SOPORTERÍA, ANCLAJES, ACCESORIOS, ELEMENTOS DE FIJACIÓN Y DEMÁS COMPONENTES NECESARIOS PARA SU CORRECTA INSTALACIÓN Y FUNCIONAMIENTO.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-25",
  "nombre": "SUMINISTRO, TRANSPORTE E INSTALACIÓN DE RED DE TUBERÍA DE COBRE TIPO “K” DE 1-5/8\" PARA SISTEMAS DE AIRE ACONDICIONADO Y REFRIGERACIÓN, INCLUYENDO ACCESORIOS DE CONEXIÓN, UNIONES, CODOS, REDUCCIONES, SOLDADURA FUERTE CON APORTE DE PLATA, SOPORTERÍA METÁLICA, ABRAZADERAS, ANCLAJES, ELEMENTOS DE FIJACIÓN Y TODOS LOS COMPONENTES NECESARIOS PARA SU CORRECTA INSTALACIÓN. COMPRENDE EL TRAZADO, CORTE, ENSAMBLE, NIVELACIÓN, PRUEBAS DE PRESIÓN Y HERMETICIDAD CON NITRÓGENO, LIMPIEZA INTERNA DE LA TUBERÍA, AISLAMIENTO TÉRMICO CUANDO APLIQUE, PUESTA EN SERVICIO Y DEMÁS ACTIVIDADES REQUERIDAS PARA GARANTIZAR EL ADECUADO FUNCIONAMIENTO, ESTANQUEIDAD Y EFICIENCIA DEL SISTEMA DE REFRIGERACIÓN, DE CONFORMIDAD CON LOS DISEÑOS Y ESPECIFICACIONES TÉCNICAS DEL PROYECTO.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-26",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1-1/8” X 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1-1/8” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1-1/8” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-27",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1-1/4” X 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1-1/4” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1-1/4” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-28",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1-3/8” X 1/2\".",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1-3/8” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1-3/8” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-29",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1-5/8” X 1/2\".",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1-5/8” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1-5/8” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-30",
  "nombre": "SUMINISTRO E INSTALACIÓN AISLAMIENTO RUBATEX DE 1/2” X 1/2\"",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro e instalación aislamiento rubatex de 1/2” x 1/2\"",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación aislamiento rubatex de 1/2” x 1/2\"",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPR-01",
  "nombre": "SUMINISTRO & INSTALACION DE SOPORTE SISMORESISTENTE LONGITUDINAL-TRANSVERSAL-UL/FM-(INCLUYE TUBERIA-1\"- SCH-40) - PARA TUBERIA 2-1/2\" A 6\"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro & instalacion de soporte sismoresistente longitudinal-trans",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro & instalacion de soporte sismoresistente longitudinal-trans",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPR-02",
  "nombre": "SUMINISTRO & INSTALACION DE VALVULA ANGULAR-UL/FM - PARA TUBERIA 2-1/2\"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro & instalacion de valvula angular-ul/fm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro & instalacion de valvula angular-ul/fm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPR-03",
  "nombre": "SUMINISTRO & INSTALACION DE VALVULA CHEQUE EXTREMO RANURADO-UL/FM 4\"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro & instalacion de valvula cheque extremo ranurado-ul/fm 4\"",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro & instalacion de valvula cheque extremo ranurado-ul/fm 4\"",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPR-04",
  "nombre": "SUMINISTRO & INSTALACIÓN DE GABINETE TIPO III (DIMENSIONES TÍPICAS DE 77X99X24 CM) - INCLUYE VÁLVULA ANGULAR DE 1 ½”, PARA USO DE BRIGADISTAS O PERSONAL CAPACITADO, MANGUERA DE 1 ½” X 100 PIES (30 METROS), CHAQUETA SENCILLA, CERTIFICADA (UL/FM), CON ACOPLES EN ALUMINIO O BRONCE)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro & instalación de gabinete tipo iii",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Protección contra incendios",
    "presentacion": "Suministro & instalación de gabinete tipo iii",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPR-05",
  "nombre": "SUMINISTRO & INSTALACION DE PUNTO 1/2\" SPRINKLERS-UP-PD (INCLUYE-TEE Y/O STRAP-NIPLE ROSCADO-REDUCCION)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro & instalacion de punto 1/2\" sprinklers-up-pd",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro & instalacion de punto 1/2\" sprinklers-up-pd",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPR-06",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA DE ACERO NEGRO SCH 10 DE 4\" PARA RED CONTRA INCENDIO. CUMPLE NFPA 13/14 Y NSR-10 TÍTULO J. INCLUYE RANURADO (GROOVED), ACCESORIOS, ACOPLES RÁPIDOS CERTIFICADOS UL/FM, APLICACIÓN DE ANTICORROSIVO Y ESMALTE ROJO SEGURIDAD, MANO DE OBRA.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPR-07",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA DE ACERO NEGRO SCH 10 DE 2 1/2\" PARA RED CONTRA INCENDIO. CUMPLE NFPA 13/14 Y NSR-10 TÍTULO J. INCLUYE RANURADO (GROOVED), ACCESORIOS, ACOPLES RÁPIDOS CERTIFICADOS UL/FM, APLICACIÓN DE ANTICORROSIVO Y ESMALTE ROJO SEGURIDAD, MANO DE OBRA.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPR-08",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA DE ACERO NEGRO SCH 10 DE 2\" PARA RED CONTRA INCENDIO. CUMPLE NFPA 13/14 Y NSR-10 TÍTULO J. INCLUYE RANURADO (GROOVED), ACCESORIOS, ACOPLES RÁPIDOS CERTIFICADOS UL/FM, APLICACIÓN DE ANTICORROSIVO Y ESMALTE ROJO SEGURIDAD, MANO DE OBRA.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPR-09",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA DE ACERO NEGRO SCH 10 DE 1 1/2\" PARA RED CONTRA INCENDIO. CUMPLE NFPA 13/14 Y NSR-10 TÍTULO J. INCLUYE RANURADO (GROOVED), ACCESORIOS, ACOPLES RÁPIDOS CERTIFICADOS UL/FM, APLICACIÓN DE ANTICORROSIVO Y ESMALTE ROJO SEGURIDAD, MANO DE OBRA.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPR-10",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA DE ACERO NEGRO SCH 40 DE 1 1/4\" PARA RED CONTRA INCENDIO. CUMPLE NFPA 13/14 Y NSR-10 TÍTULO J. INCLUYE RANURADO (GROOVED), ACCESORIOS, ACOPLES RÁPIDOS CERTIFICADOS UL/FM, APLICACIÓN DE ANTICORROSIVO Y ESMALTE ROJO SEGURIDAD, MANO DE OBRA.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPR-11",
  "nombre": "SUMINISTRO E INSTALACIÓN DE TUBERÍA DE ACERO NEGRO SCH 40 DE 1\" PARA RED CONTRA INCENDIO. CUMPLE NFPA 13/14 Y NSR-10 TÍTULO J. INCLUYE RANURADO (GROOVED), ACCESORIOS, ACOPLES RÁPIDOS CERTIFICADOS UL/FM, APLICACIÓN DE ANTICORROSIVO Y ESMALTE ROJO SEGURIDAD, MANO DE OBRA.",
  "unidad": "ml",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPR-12",
  "nombre": "SUMINISTRO & INSTALACION DE VALVULA EXPULSORA DE AIRE ROSCADA-UL/FM - 1\"",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro & instalacion de valvula expulsora de aire roscada-ul/fm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro & instalacion de valvula expulsora de aire roscada-ul/fm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPR-13",
  "nombre": "SUMINISTRO & INSTALACION DE TANQUE METALICO GALVANIZADO RCI DE 74 M3, APERNADO RECTANGULAR CON MEMBRANA INTERNA PVC ( INCLUYE ACOPLES DE SALIDA 2”, ENTRADA DE 3”, REBOSE DE 4” Y RETORNO DE 6”, ANTIBORTEX 6” BRIDA, ESCALERA GUARDAHOMBRE, VISOR DE NIVEL, MANHOLE DE TECHO, MANHOLE LATERAL)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro & instalacion de tanque metalico galvanizado rci de 74 m3",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro & instalacion de tanque metalico galvanizado rci de 74 m3",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPR-14",
  "nombre": "INSTALACION Y MONTAJE DE BOMBA RCI DE 400 GPM - DIESEL (TUBERÍA DE SUCCIÓN, SUMINISTRO Y MONTAJE DE LOS SOPORTES DE LA TUBERÍA, TUBERÍAS DE SUCCIÓN, INCLUYENDO VÁLVULA DE VÁSTAGO ASCENDENTE UL/FM, TUBERÍAS DE DESCARGA, TUBERÍA DE RETORNO AL TANQUE DE RESERVA INCLUYENDO VÁLVULA DE CORTE UL/FM, MONTAJE DE CABEZAL DE PRUEBAS, SUMINISTRO Y MONTAJE DE LAS LÍNEAS DE SENSADO EN COBRE, SUMINISTRO Y MONTAJE DE LAS LÍNEAS DE DRENAJE DE LAS BOMBAS, ALINEACIÓN DEL CONJUNTO BOMBA MOTOR, CONEXIÓN ELÉCTRICA DE LOS MOTORES A ACOMETIDA EN PUNTO CERO)",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPR-15",
  "nombre": "INSTALACIÓN DE ELECTROBOMBA CENTRÍFUGA DE 4.0 HP 220 VAC, INOXIDABLE 304, TRIFÁSICO, CAUDAL 3 LITROS/SEGUNDO, 61 MCA (INCLUYE REGULADOR ELECTRONICO DE PRESIÓN)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalación de electrobomba centrífuga de 4.0 hp 220 vac",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Instalación de electrobomba centrífuga de 4.0 hp 220 vac",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPR-16",
  "nombre": "SUMINISTRO & INSTALACION DE REDUCCIÓN PARA PUNTO 1/2\" RED CONTRAINCENDIOS (INCLUYE-TEE Y/O STRAP-NIPLE ROSCADO-REDUCCION)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro & instalacion de reducción",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro & instalacion de reducción",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-01",
  "nombre": "INSTALACION DE MBF-1 MESA DE REUNIONES 4P REDONDA - DIAMETRO 1 METRO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-1 mesa de reuniones 4p redonda",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de mbf-1 mesa de reuniones 4p redonda",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-02",
  "nombre": "INSTALACION DE MBF-66 MESA DE CAFETERIA 4P REDONDA ZONA EXTERIOR, INCLUYE PARASOL - DIAMETRO 0,8 METRO, ESTRUCTURA Y MARCO EN ACERO COLD ROLLED PARA BASE EN VIDRIO MARTILLADO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-66 mesa de cafeteria 4p redonda zona exterior",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Instalacion de mbf-66 mesa de cafeteria 4p redonda zona exterior",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-03",
  "nombre": "INSTALACION DE MBF-4 MESA RECTANGULAR PARA REUNIONES DE 10 PERSONAS 2900MM(LARGO) X 1500MM (FONDO) X 730MM (ALTO) - ESTRUCTURA METÁLICA DE SOPORTE HORIZONTAL CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTES. DUCTO VERTICAL Y HORIZONTAL CONDUCCIÓN ELECTRICA CERTIFICADA RETIE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-4 mesa rectangular",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Instalacion de mbf-4 mesa rectangular",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-04",
  "nombre": "INSTALACION DE MBF-5 MESA RECTANGULAR PARA REUNIONES DE 12 PERSONAS 3600MM (LARGO)X 1500MM (FONDO) X 730MM (ALTO) - ESTRUCTURA METÁLICA DE SOPORTE HORIZONTAL CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTES. DUCTO VERTICAL Y HORIZONTAL CONDUCCIÓN ELECTRICA CERTIFICADA RETIE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-5 mesa rectangular",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Instalacion de mbf-5 mesa rectangular",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-05",
  "nombre": "INSTALACION DE MBF-11 MESA DE PRESUNTOS, ATRIL Y BARRA SALA DE AUDIENCIAS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-11 mesa de presuntos",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de mbf-11 mesa de presuntos",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-06",
  "nombre": "INSTALACION MBF-12 MESA RECTANGULAR EN MADERA PARA AUDICENCIAS DE DOS (2) PERSONAS. SESTRUCTURA EN MADERA Y ACABADO EN CHAPILLA, CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTE. UN GROMMET A NIVEL DE SUPERFICIE PARA DATOS Y CORRIENTE, INCLUIR TAPA ABATIBLE, DUCTO A PISO (NO VERTEBRA) QUE CUENTE CON CERTIFICADA RETIE. DOS SALIDAS PARA MICRÓFONO EN LA SUPERFICIE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion mbf-12 mesa rectangular en madera",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Instalacion mbf-12 mesa rectangular en madera",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-07",
  "nombre": "INSTALACION DE MBF-14 MUEBLE COMPLEMENTARIO EN TABLEX DE 15MM PARA PUESTOS EJECUTIVOS CON 4 CAJONES - MEDIDAS 1000MM (ANCHO) X 480MM (FONDO) X 750MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-14 mueble complementario en tablex de 15mm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Instalacion de mbf-14 mueble complementario en tablex de 15mm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-08",
  "nombre": "INSTALACION DE MODULO DE CONSULTA MEDIDA 90 CMS (FRENTE) X 0,45 CMS (FONDO) - ALTURA 2,14 MTS - ARCHIVO RODANTE MECÁNICO, CUERPO EN CR CALIBRES 20 18 16 PARALES EN CR CAL 16 TROQUEL CREMALLERA ENTREPAÑOS CON DOBLE REFUERZO CR CAL. 20 CAPACIDAD DE CARGA 70KG TECHO EN CR CAL. 22 BASES Y RUEDAS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de modulo de consulta medida 90 cms",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de modulo de consulta medida 90 cms",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-09",
  "nombre": "INSTALACION DE MBF-25 C - MESA DE CENTRO EN MADERA, DE NIVEL SUPERIOR PARA LAS OFICINAS PRIVADAS DE CONTRALOR Y VICECONTRALOR - MEDIDAS 800MM (ANCHO) X 800MM (FONDO) X 450MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-25 c",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de mbf-25 c",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-10",
  "nombre": "INSTALACION DE SOFA DE 3 PUESTOS EN CUERO SINTETICO TIPO PRANA O SIMILAR",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de sofa de 3 puestos en cuero sintetico tipo prana o simil",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de sofa de 3 puestos en cuero sintetico tipo prana o simil",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-11",
  "nombre": "INSTALACION DE ESTANTE SEMIPESADO 40 CM ESTANTE SEMIPESADO CON CAPACIDAD DE CARGA DE 110KG UNIFORMEMENTE POR ENTREPAÑO. CON 5 ENTREPAÑOS ELABORADOS EN LAMINA COLD ROLLED CALIBRE 22 CON 3 REFUERZOS, BASTIDOR CON SISTEMA DE ENGANCHE DE UÑA EN LAMINA COLD ROLLED CALIBRE 16. TERMINACIÓN PINTURA - MEDIDAS 900MM (ANCHO) X 500MM (FONDO) X 1600MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de estante semipesado 40 cm estante semipesado",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Instalacion de estante semipesado 40 cm estante semipesado",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-12",
  "nombre": "INSTALACION MBF-37 ESCRITORIO EJECUTIVOS CONTRALORES - (182 CM X 192 CM). SEGÚN ANEXO NO. 1 REQUERIMIENTOS TÉCNICOS MÍNIMOS - FICHA TÉCNICA. SUPERFICIE EN AGLOMERADO DE 25MM ENCHAPADO EN SU CARA INFERIOR CON BALANCE Y SU CARA PRINCIPAL EN FORMICA, COSTADO TIPO U Y CAJONERA METÁLICA TIPO 2X1",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion mbf-37 escritorio ejecutivos contralores",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion mbf-37 escritorio ejecutivos contralores",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-13",
  "nombre": "INSTALACION DE MBF-40A ESCRITORIO OPERATIVO - (120 CM X 60 CM). SEGÚN ANEXO NO. 1 REQUERIMIENTOS TÉCNICOS MÍNIMOS - FICHA TÉCNICA. SUPERFICIE EN AGLOMERADO DE 25MM ENCHAPADO EN SU CARA INFERIOR CON BALANCE Y SU CARA PRINCIPAL EN FORMICA, COSTADO TIPO U Y CAJONERA METÁLICA TIPO 2X1",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-40a escritorio operativo",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de mbf-40a escritorio operativo",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-14",
  "nombre": "INSTALACION DE MBF-52 SILLA EJECUTIVA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-52 silla ejecutiva",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de mbf-52 silla ejecutiva",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-15",
  "nombre": "INSTALACION MBF-53 SILLA OPERATIVA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion mbf-53 silla operativa",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion mbf-53 silla operativa",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-16",
  "nombre": "INSTALACION DE MBF-55 SILLA INTERLOCUTOR CON APOYA BRAZOS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-55 silla interlocutor",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de mbf-55 silla interlocutor",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-17",
  "nombre": "INSTALACION DE MBF-56 SILLAS DE AUDITORIO TIPO INTERLOCUTOR CON ENGANCHE Y APILABLES",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-56 sillas de auditorio tipo interlocutor",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de mbf-56 sillas de auditorio tipo interlocutor",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-18",
  "nombre": "INSTALACION DE MBF-14 MUEBLE COMPLEMENTARIO EN TABLEX DE 15MM PARA PUESTOS EJECUTIVOS CON 4 CAJONES - MEDIDAS 1000MM (ANCHO) X 480MM (FONDO) X 750MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de mbf-14 mueble complementario en tablex de 15mm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Instalacion de mbf-14 mueble complementario en tablex de 15mm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-19",
  "nombre": "INSTALACION DE CAMILLA PARA PRIMEROS AUXILIOS - ENFERMERIA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion de camilla",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion de camilla",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-20",
  "nombre": "INSTALACION RECEPCION REF. MBF 49 MUEBLE TIPO COUNTER FABRICADO EN CORIAN Y CHAPILLA DIM. 1,75 CMTS * 0,70 CMTS* 1,20 CTMS ALTURA.COUNTER FRONTAL EN CORIAN DE 12 M.M BLOQUE PARA PUESTO EN CHAPILLA FLOR MORADO CATEDRAL PORO SEMIABIERTO.CANALETA, GROMMET CAJA DE DATOS ,CORRIENTE , REGULADA Y NORMAL, PEDESTALES.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion recepcion ref",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Instalacion recepcion ref",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-21",
  "nombre": "INSTALACION SILLA INTERLOCUTORA PLEGABLE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion silla interlocutora plegable",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion silla interlocutora plegable",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-22",
  "nombre": "INSTALACION DIVISION BARRA DE AUDIENCIAS REMOVIBLE - CHAPILLA FLOR MORADO CATEDRAL, PORO SEMIABIERTO .ALTO 0,90*0,20 DE ESPESOR",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Instalacion division barra de audiencias removible",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion division barra de audiencias removible",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-23",
  "nombre": "INSTALACION JUEGO DE MESA EXTERIORES - JUEGO DE MESA CON 4 SILLAS PARA EXTERIOR PARA INTERPERIE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion juego de mesa exteriores",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion juego de mesa exteriores",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-24",
  "nombre": "INSTALACION MESA REUNIONES MBF 9 MESA CUADRADA PARA 8 PERSONAS PARA EL DESARROLLO DE REUNIONES, 1,50 CM *01,50C.M *0,73 ELABORADA EN TABLEX DE 30MM CON PERFORACIÓN PARA GROMMET, ENCHAPADA EN FORMICA. CARA PRINCIPAL ENCHAPADA EN FORMICA F8 – ROVERE FIUMO – COLOR MATE Y CONTRACARA ENCHAPADA EN FORMICA COLOR BLANCO, CON CANTO RÍGIDO – ROVERE FIUMO DE 2MM.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion mesa reuniones mbf 9 mesa cuadrada",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion mesa reuniones mbf 9 mesa cuadrada",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-25",
  "nombre": "INSTALACION ATRIL CON CONECTIVIDAD DE HDMI, CORRIENTE, DATOS Y MICRÓFONO 0,50*0,50*1,09",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion atril",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Instalacion atril",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-26",
  "nombre": "INSTALACION MESA DE PRESUNTOS MESA RECTANGULAR CON CERRAMIENTO SUPERIOR EN MADERA PARA AUDIENCIAS DE DOS (2) PERSONAS. 1.50M. 0.60M. 0.73M. SOSTENIDA POR UNA ESTRUCTURA EN MADERA Y ACABADO EN CHAPILLA, CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTES PARA GARANTIZAR UNIFORMIDAD Y ESTABILIDAD EN LA MESA. CUENTA CON UN (1) GROMMET A NIVEL DE SUPERFICIE PARA DATOS Y CORRIENTE, INCLUIR TAPA ABATIBLE, DUCTO A PISO QUE CUENTE CON CERTIFICADA RETIE. SE DEBE CONTAR CON UNA (1) SALIDA PARA MICRÓFONO.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion mesa de presuntos mesa rectangular",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Instalacion mesa de presuntos mesa rectangular",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-27",
  "nombre": "INSTALACION MUEBLE CENTRO DE COPIADO MUEBLE DE ALMACENAMIENTO PARA DOCUMENTOS EN LOS CENTROS DE COPIADO. ESTRUCTURA ELABORADA EN TABLERO MELAMINICO, ENCHAPADA EN FORMICA ROVERE FIUMO, CON ENTREPAÑOS E INTERIORES ENCHAPADOS EN FORMICA F6 COLOR BLANCO. BASE CON NIVELADORES ELÁSTICOS DE 5/16”. SUPERFICIE DE APOYO SUPERIOR Y PUERTAS EN TABLEX CON FORMICA F8. CADA UNO DE LOS 3 ESPACIOS LLEVA PUERTA CON CERRADURA Y AL INTERIOR TIENE 3 ENTREPAÑOS GRADUALES EN ALTURA DE +/- 5CM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion mueble centro de copiado mueble de almacenamiento",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Instalacion mueble centro de copiado mueble de almacenamiento",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-28",
  "nombre": "INSTALACION MUEBLE CORRESPONDENCIA ELABORADA EN TABLEX, ENCHAPADA EN FORMICA, ROVERE FIUMO, BASE CON NIVELADORES DE 5/16”. INTERIOR DEL MUEBLE ENCHAPADO EN FORMICA COLOR BLANCO. CADA UNO DE LOS ESPACIOS LLEVA PUERTA CON CERRADURA FONDO MÁXIMO 0.53CM. – 0.33CM ANCHO 122 CM. ALTURA 1.95 CM.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion mueble correspondencia elaborada en tablex",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Puertas, ventanas y metálicos",
    "presentacion": "Instalacion mueble correspondencia elaborada en tablex",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-29",
  "nombre": "INSTALACION CAUNTER PISO 5 MBF-38 PUESTO DE TRABAJO EN L, COMPUESTO POR ESCRITORIO + CAJONERA RODANTE + SUPERFICIE MOSTRADORA, COSTADO PLENO EN FORMICA. INCLUIR CAJA DE TOMAS A NIVEL DE SUPERFICIE PARA DATOS Y CORRIENTE CON TAPA ABATIBLE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion caunter piso 5 mbf-38 puesto de trabajo en l",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Instalacion caunter piso 5 mbf-38 puesto de trabajo en l",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-30",
  "nombre": "INSTALACION CAUNTER PISO 1 MBF-38A PUESTO DE TRABAJO RECTO, COMPUESTO POR ESCRITORIO + CAJONERA RODANTE + SUPERFICIE MOSTRADORA, COSTADO PLENO EN FORMICA. INCLUIR CAJA DE TOMAS A NIVEL DE SUPERFICIE PARA DATOS Y CORRIENTE CON TAPA ABATIBLE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion caunter piso 1 mbf-38a puesto de trabajo recto",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Instalacion caunter piso 1 mbf-38a puesto de trabajo recto",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPIM-31",
  "nombre": "INSTALACION SILLA AUXILAR - MBF-54 UNIDAD DE ASIENTO INDIVIDUAL CON PATAS ASIENTO: SOBRE BASTIDOR, EN ESPUMA INYECTADA Y TAPIZADO EN TEXTIL. ESPALDAR MEDIO ALTO: EN MALLA ANTITRANSPIRANTE, RECLINACIÓN DEL ESPALDAR RANGO E: 8°- 25° MARCO EN RESINA PLÁSTICA (PA6+FIBRA DE VIDRIO 30%) BASE ASIENTO: EN NYLON O RESINA PLÁSTICA CON RODACHINAS NYLON DE 50MM DE DIÁMETRO. MECANISMO CON SISTEMA DE BASCULACIÓN, FRENO HORIZONTAL, FRENO DE INCLINACIÓN Y GRADUACIÓN DE ALTURA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Instalacion silla auxilar",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Instalacion silla auxilar",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-01",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CENTRAL INTELIGENTE DIRECCIONABLE PARA SISTEMA DE DETECCIÓN Y ALARMA DE INCENDIO, DE CONFIGURACIÓN MODULAR, CON UNIDAD DE PROCESAMIENTO, PANTALLA DE VISUALIZACIÓN Y CONTROL, LAZOS DE COMUNICACIÓN SLC, FUNCIONES DE ALARMA, SUPERVISIÓN, FALLA Y PROGRAMACIÓN, Y CAPACIDAD DE INTEGRACIÓN CON DISPOSITIVOS DIRECCIONABLES Y RED DEL SISTEMA. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de central inteligente direccionable",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de central inteligente direccionable",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-02",
  "nombre": "SUMINISTRO E INSTALACIÓN DE GABINETE METÁLICO PARA BATERÍAS DE RESPALDO DEL SISTEMA DE DETECCIÓN Y ALARMA DE INCENDIO, PARA MONTAJE EN PARED, CON CAPACIDAD PARA ALOJAMIENTO Y PROTECCIÓN DE BATERÍAS, ACCESO PARA MANTENIMIENTO Y FACILIDADES PARA SU CONEXIÓN AL SISTEMA DE RESPALDO. INCLUYE ACCESORIOS DE MONTAJE. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de gabinete metálico",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Protección contra incendios",
    "presentacion": "Suministro e instalación de gabinete metálico",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-03",
  "nombre": "SUMINISTRO E INSTALACIÓN DE BATERÍA SELLADA PARA RESPALDO DEL SISTEMA DE DETECCIÓN Y ALARMA DE INCENDIO, DE 12 V Y 55 AH, APTA PARA SERVICIO ESTACIONARIO Y OPERACIÓN EN RESPALDO, CON TERMINALES DE CONEXIÓN Y CARACTERÍSTICAS DE LARGA VIDA ÚTIL. MARCA KAISE, HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de batería sellada",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de batería sellada",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-04",
  "nombre": "SUMINISTRO E INSTALACIÓN DE DETECTOR FOTOELÉCTRICO INTELIGENTE DIRECCIONABLE DE HUMO, CON SENSOR ÓPTICO, DIRECCIONAMIENTO INDIVIDUAL, COMUNICACIÓN MEDIANTE LAZO SLC, INDICACIÓN VISUAL DE ESTADO Y FUNCIONES DE PRUEBA Y SUPERVISIÓN DESDE LA CENTRAL. INCLUYE BASE DE MONTAJE CON BRIDA PARA CONEXIÓN, FIJACIÓN Y FACILIDAD DE MANTENIMIENTO DEL DETECTOR. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de detector fotoeléctrico inteligente direcci",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de detector fotoeléctrico inteligente direcci",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-05",
  "nombre": "SUMINISTRO E INSTALACIÓN DE DETECTOR TÉRMICO INTELIGENTE DIRECCIONABLE, CON SENSOR DE TEMPERATURA, DIRECCIONAMIENTO INDIVIDUAL, COMUNICACIÓN MEDIANTE LAZO SLC, INDICACIÓN VISUAL DE ESTADO Y FUNCIONES DE PRUEBA Y SUPERVISIÓN DESDE LA CENTRAL. INCLUYE BASE DE MONTAJE CON BRIDA PARA CONEXIÓN, FIJACIÓN Y FACILIDAD DE MANTENIMIENTO DEL DETECTOR. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de detector térmico inteligente direccionable",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de detector térmico inteligente direccionable",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-06",
  "nombre": "SUMINISTRO E INSTALACIÓN DE CABLE PARA SISTEMA DE DETECCIÓN Y ALARMA DE INCENDIO, 16 AWG, DOS CONDUCTORES DE COBRE SÓLIDO, CLASIFICACIÓN FPLR/CL2R, CON AISLAMIENTO Y CHAQUETA EN PVC , APTO PARA CIRCUITOS DE SEÑALIZACIÓN Y ALARMA. MARCA HONEYWELL O SIMILAR.",
  "unidad": "m",
  "materiales": [
   {
    "material": "Suministro e instalación de cable",
    "unidad": "m",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de cable",
    "unidadCompra": "m",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-07",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ESTACIÓN MANUAL INTELIGENTE DIRECCIONABLE DE ALARMA DE INCENDIO, DE DOBLE ACCIÓN, CON INTERFAZ PARA LAZO SLC, DIRECCIONAMIENTO INDIVIDUAL, INDICACIÓN VISUAL DE ESTADO, MECANISMO DE ACTIVACIÓN MANUAL Y RESTABLECIMIENTO MEDIANTE LLAVE. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de estación manual inteligente direccionable ",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de estación manual inteligente direccionable ",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-08",
  "nombre": "SUMINISTRO E INSTALACIÓN DE SIRENA CON ESTROBO PARA NOTIFICACIÓN AUDIOVISUAL DEL SISTEMA DE ALARMA DE INCENDIO, CON SELECCIÓN DE TONO Y NIVEL AUDIBLE, AJUSTE DE SALIDA VISUAL Y FUNCIÓN DE SINCRONIZACIÓN. INCLUYE PLACA DE MONTAJE Y ELEMENTOS REQUERIDOS PARA SU CONEXIÓN AL CIRCUITO DE NOTIFICACIÓN. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de sirena",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de sirena",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-09",
  "nombre": "SUMINISTRO E INSTALACIÓN DE ANUNCIADOR REMOTO PARA SISTEMA DE DETECCIÓN Y ALARMA DE INCENDIO, CON PANTALLA DE VISUALIZACIÓN, TECLADO DE CONTROL, INDICADORES DE ESTADO E INTERFAZ DE COMUNICACIÓN CON LA CENTRAL, PARA CONSULTA DE EVENTOS Y EJECUCIÓN DE FUNCIONES DE RECONOCIMIENTO, SILENCIAMIENTO Y RESTABLECIMIENTO DEL SISTEMA. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de anunciador remoto",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de anunciador remoto",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-10",
  "nombre": "SUMINISTRO E INSTALACIÓN DE MÓDULO MONITOR INTELIGENTE DIRECCIONABLE PARA SUPERVISIÓN DE CIRCUITOS DE CONTACTO SECO DEL SISTEMA DE DETECCIÓN Y ALARMA DE INCENDIO, CON CONEXIÓN AL LAZO SLC, DIRECCIONAMIENTO INDIVIDUAL, INDICACIÓN DE ESTADO Y SUPERVISIÓN DEL CIRCUITO DE INICIACIÓN. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de módulo monitor inteligente direccionable",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de módulo monitor inteligente direccionable",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-11",
  "nombre": "SUMINISTRO E INSTALACIÓN DE MÓDULO MONITOR DOBLE INTELIGENTE DIRECCIONABLE PARA SUPERVISIÓN INDEPENDIENTE DE DOS CIRCUITOS DE INICIACIÓN, CON DOS PUNTOS DIRECCIONABLES, CONEXIÓN AL LAZO SLC, INDICACIÓN DE ESTADO Y MONITOREO DE DISPOSITIVOS DE ALARMA O SUPERVISIÓN MEDIANTE CONTACTO SECO. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de módulo monitor doble inteligente direccion",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de módulo monitor doble inteligente direccion",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-12",
  "nombre": "SUMINISTRO E INSTALACIÓN DE MÓDULO DE ENTRADA ANALÓGICA INTELIGENTE DIRECCIONABLE PARA INTERFAZ Y MONITOREO DE SENSORES CON SEÑAL 4-20 mA, CON CONVERSIÓN DE LA SEÑAL DEL SENSOR PARA SU INTERPRETACIÓN POR LA CENTRAL, DIRECCIONAMIENTO INDIVIDUAL, INDICACIÓN DE ESTADO Y PROTECCIÓN DE LOS CIRCUITOS DE ALIMENTACIÓN Y COMUNICACIÓN. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de módulo de entrada analógica inteligente di",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro e instalación de módulo de entrada analógica inteligente di",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPDI-13",
  "nombre": "SUMINISTRO E INSTALACIÓN DE MÓDULO DE COMUNICACIONES DE ALTA VELOCIDAD PARA INTEGRACIÓN DE NODOS DEL SISTEMA DE DETECCIÓN Y ALARMA DE INCENDIO, CON INTERFAZ PARA RED MEDIANTE FIBRA ÓPTICA, PUERTOS DE COMUNICACIÓN, AISLAMIENTO ÓPTICO Y CAPACIDAD DE REGENERACIÓN Y TRANSMISIÓN DE DATOS ENTRE NODOS. MARCA HONEYWELL O SIMILAR.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalación de módulo de comunicaciones de alta velocidad",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro e instalación de módulo de comunicaciones de alta velocidad",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-01",
  "nombre": "SUMINISTRO DE MBF-1 MESA DE REUNIONES 4P REDONDA - DIAMETRO 1 METRO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mbf-1 mesa de reuniones 4p redonda",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de mbf-1 mesa de reuniones 4p redonda",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-02",
  "nombre": "SUMINISTRO DE MBF-66 MESA DE CAFETERIA 4P REDONDA ZONA EXTERIOR, INCLUYE PARASOL - DIAMETRO 0,8 METRO, ESTRUCTURA Y MARCO EN ACERO COLD ROLLED PARA BASE EN VIDRIO MARTILLADO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mbf-66 mesa de cafeteria 4p redonda zona exterior",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro de mbf-66 mesa de cafeteria 4p redonda zona exterior",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-03",
  "nombre": "SUMINSTRO DE MBF-4 MESA RECTANGULAR PARA REUNIONES DE 10 PERSONAS 2900MM(LARGO) X 1500MM (FONDO) X 730MM (ALTO) - ESTRUCTURA METÁLICA DE SOPORTE HORIZONTAL CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTES. DUCTO VERTICAL Y HORIZONTAL CONDUCCIÓN ELECTRICA CERTIFICADA RETIE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro de mbf-4 mesa rectangular",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suminstro de mbf-4 mesa rectangular",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-04",
  "nombre": "SUMINISTRO DE MBF-5 MESA RECTANGULAR PARA REUNIONES DE 12 PERSONAS 3600MM (LARGO)X 1500MM (FONDO) X 730MM (ALTO) - ESTRUCTURA METÁLICA DE SOPORTE HORIZONTAL CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTES. DUCTO VERTICAL Y HORIZONTAL CONDUCCIÓN ELECTRICA CERTIFICADA RETIE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mbf-5 mesa rectangular",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro de mbf-5 mesa rectangular",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-05",
  "nombre": "SUMINISTRO DE MBF-11 MESA DE PRESUNTOS, ATRIL Y BARRA SALA DE AUDIENCIAS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mbf-11 mesa de presuntos",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de mbf-11 mesa de presuntos",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-06",
  "nombre": "SUMINSTRO MBF-12 MESA RECTANGULAR EN MADERA PARA AUDICENCIAS DE DOS (2) PERSONAS. SESTRUCTURA EN MADERA Y ACABADO EN CHAPILLA, CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTE. UN GROMMET A NIVEL DE SUPERFICIE PARA DATOS Y CORRIENTE, INCLUIR TAPA ABATIBLE, DUCTO A PISO (NO VERTEBRA) QUE CUENTE CON CERTIFICADA RETIE. DOS SALIDAS PARA MICRÓFONO EN LA SUPERFICIE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro mbf-12 mesa rectangular en madera",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suminstro mbf-12 mesa rectangular en madera",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-07",
  "nombre": "SUMINISTRO E INSTALCION DE MBF-14 MUEBLE COMPLEMENTARIO EN TABLEX DE 15MM PARA PUESTOS EJECUTIVOS CON 4 CAJONES - MEDIDAS 1000MM (ANCHO) X 480MM (FONDO) X 750MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro e instalcion de mbf-14 mueble complementario en tablex de 1",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro e instalcion de mbf-14 mueble complementario en tablex de 1",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-08",
  "nombre": "SUMINISTRO DE MODULO DE CONSULTA MEDIDA 90 CMS (FRENTE) X 0,45 CMS (FONDO) - ALTURA 2,14 MTS - ARCHIVO RODANTE MECÁNICO, CUERPO EN CR CALIBRES 20 18 16 PARALES EN CR CAL 16 TROQUEL CREMALLERA ENTREPAÑOS CON DOBLE REFUERZO CR CAL. 20 CAPACIDAD DE CARGA 70KG TECHO EN CR CAL. 22 BASES Y RUEDAS.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de modulo de consulta medida 90 cms",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de modulo de consulta medida 90 cms",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-09",
  "nombre": "SUMINIUSTRO DE MBF-25 C - MESA DE CENTRO EN MADERA, DE NIVEL SUPERIOR PARA LAS OFICINAS PRIVADAS DE CONTRALOR Y VICECONTRALOR - MEDIDAS 800MM (ANCHO) X 800MM (FONDO) X 450MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminiustro de mbf-25 c",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminiustro de mbf-25 c",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-10",
  "nombre": "SUMINMSTRO DE SOFA DE 3 PUESTOS EN CUERO SINTETICO TIPO PRANA O SIMILAR",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminmstro de sofa de 3 puestos en cuero sintetico tipo prana o simila",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminmstro de sofa de 3 puestos en cuero sintetico tipo prana o simila",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-11",
  "nombre": "SUMINISTRO DE ESTANTE SEMIPESADO 40 CM ESTANTE SEMIPESADO CON CAPACIDAD DE CARGA DE 110KG UNIFORMEMENTE POR ENTREPAÑO. CON 5 ENTREPAÑOS ELABORADOS EN LAMINA COLD ROLLED CALIBRE 22 CON 3 REFUERZOS, BASTIDOR CON SISTEMA DE ENGANCHE DE UÑA EN LAMINA COLD ROLLED CALIBRE 16. TERMINACIÓN PINTURA - MEDIDAS 900MM (ANCHO) X 500MM (FONDO) X 1600MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de estante semipesado 40 cm estante semipesado",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro de estante semipesado 40 cm estante semipesado",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-12",
  "nombre": "SUMINISTRO MBF-37 ESCRITORIO EJECUTIVOS CONTRALORES - (182 CM X 192 CM). SEGÚN ANEXO NO. 1 REQUERIMIENTOS TÉCNICOS MÍNIMOS - FICHA TÉCNICA. SUPERFICIE EN AGLOMERADO DE 25MM ENCHAPADO EN SU CARA INFERIOR CON BALANCE Y SU CARA PRINCIPAL EN FORMICA, COSTADO TIPO U Y CAJONERA METÁLICA TIPO 2X1",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro mbf-37 escritorio ejecutivos contralores",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro mbf-37 escritorio ejecutivos contralores",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-13",
  "nombre": "SUMINISTRO DE MBF-40A ESCRITORIO OPERATIVO - (120 CM X 60 CM). SEGÚN ANEXO NO. 1 REQUERIMIENTOS TÉCNICOS MÍNIMOS - FICHA TÉCNICA. SUPERFICIE EN AGLOMERADO DE 25MM ENCHAPADO EN SU CARA INFERIOR CON BALANCE Y SU CARA PRINCIPAL EN FORMICA, COSTADO TIPO U Y CAJONERA METÁLICA TIPO 2X1",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mbf-40a escritorio operativo",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de mbf-40a escritorio operativo",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-14",
  "nombre": "SUMINISTRO DE MBF-52 SILLA EJECUTIVA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mbf-52 silla ejecutiva",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de mbf-52 silla ejecutiva",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-15",
  "nombre": "SUMINSTRO MBF-53 SILLA OPERATIVA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro mbf-53 silla operativa",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminstro mbf-53 silla operativa",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-16",
  "nombre": "SUMINUSTRO DE MBF-55 SILLA INTERLOCUTOR CON APOYA BRAZOS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminustro de mbf-55 silla interlocutor",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminustro de mbf-55 silla interlocutor",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-17",
  "nombre": "SUMINSTRO DE MBF-56 SILLAS DE AUDITORIO TIPO INTERLOCUTOR CON ENGANCHE Y APILABLES",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro de mbf-56 sillas de auditorio tipo interlocutor",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminstro de mbf-56 sillas de auditorio tipo interlocutor",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-18",
  "nombre": "SUMINISTRODE MBF-14 MUEBLE COMPLEMENTARIO EN TABLEX DE 15MM PARA PUESTOS EJECUTIVOS CON 4 CAJONES - MEDIDAS 1000MM (ANCHO) X 480MM (FONDO) X 750MM (ALTO)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministrode mbf-14 mueble complementario en tablex de 15mm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministrode mbf-14 mueble complementario en tablex de 15mm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-19",
  "nombre": "SUMINSTRO DE CAMILLA PARA PRIMEROS AUXILIOS - ENFERMERIA",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suminstro de camilla",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suminstro de camilla",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-20",
  "nombre": "SUMINISTRO RECEPCION REF. MBF 49 MUEBLE TIPO COUNTER FABRICADO EN CORIAN Y CHAPILLA DIM. 1,75 CMTS * 0,70 CMTS* 1,20 CTMS ALTURA.COUNTER FRONTAL EN CORIAN DE 12 M.M BLOQUE PARA PUESTO EN CHAPILLA FLOR MORADO CATEDRAL PORO SEMIABIERTO.CANALETA, GROMMET CAJA DE DATOS ,CORRIENTE , REGULADA Y NORMAL, PEDESTALES.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro recepcion ref",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro recepcion ref",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-21",
  "nombre": "SUMINISTRO DE SILLA INTERLOCUTORA PLEGABLE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de silla interlocutora plegable",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de silla interlocutora plegable",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-22",
  "nombre": "SUMINISTRO DE DIVISION BARRA DE AUDIENCIAS REMOVIBLE - CHAPILLA FLOR MORADO CATEDRAL, PORO SEMIABIERTO .ALTO 0,90*0,20 DE ESPESOR",
  "unidad": "ml",
  "materiales": [
   {
    "material": "Suministro de division barra de audiencias removible",
    "unidad": "ml",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de division barra de audiencias removible",
    "unidadCompra": "ml",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-23",
  "nombre": "SUMINISTRO DE JUEGO DE MESA EXTERIORES - JUEGO DE MESA CON 4 SILLAS PARA EXTERIOR PARA INTERPERIE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de juego de mesa exteriores",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de juego de mesa exteriores",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-24",
  "nombre": "SUMINISTRO DE MESA REUNIONES MBF 9 MESA CUADRADA PARA 8 PERSONAS PARA EL DESARROLLO DE REUNIONES, 1,50 CM *01,50C.M *0,73 ELABORADA EN TABLEX DE 30MM CON PERFORACIÓN PARA GROMMET, ENCHAPADA EN FORMICA. CARA PRINCIPAL ENCHAPADA EN FORMICA F8 – ROVERE FIUMO – COLOR MATE Y CONTRACARA ENCHAPADA EN FORMICA COLOR BLANCO, CON CANTO RÍGIDO – ROVERE FIUMO DE 2MM.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mesa reuniones mbf 9 mesa cuadrada",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de mesa reuniones mbf 9 mesa cuadrada",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-25",
  "nombre": "SUMINISTRO DE ATRIL CON CONECTIVIDAD DE HDMI, CORRIENTE, DATOS Y MICRÓFONO 0,50*0,50*1,09",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de atril",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de atril",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-26",
  "nombre": "SUMINISTRO DE MESA DE PRESUNTOS MESA RECTANGULAR CON CERRAMIENTO SUPERIOR EN MADERA PARA AUDIENCIAS DE DOS (2) PERSONAS. 1.50M. 0.60M. 0.73M. SOSTENIDA POR UNA ESTRUCTURA EN MADERA Y ACABADO EN CHAPILLA, CON SUS APOYOS A PISO CON NIVELADORES ANTIDESLIZANTES PARA GARANTIZAR UNIFORMIDAD Y ESTABILIDAD EN LA MESA. CUENTA CON UN (1) GROMMET A NIVEL DE SUPERFICIE PARA DATOS Y CORRIENTE, INCLUIR TAPA ABATIBLE, DUCTO A PISO QUE CUENTE CON CERTIFICADA RETIE. SE DEBE CONTAR CON UNA (1) SALIDA PARA MICRÓFONO.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mesa de presuntos mesa rectangular",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Sanitario e hidrosanitario",
    "presentacion": "Suministro de mesa de presuntos mesa rectangular",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-27",
  "nombre": "SUMINISTRO DE MUEBLE CENTRO DE COPIADO MUEBLE DE ALMACENAMIENTO PARA DOCUMENTOS EN LOS CENTROS DE COPIADO. ESTRUCTURA ELABORADA EN TABLERO MELAMINICO, ENCHAPADA EN FORMICA ROVERE FIUMO, CON ENTREPAÑOS E INTERIORES ENCHAPADOS EN FORMICA F6 COLOR BLANCO. BASE CON NIVELADORES ELÁSTICOS DE 5/16”. SUPERFICIE DE APOYO SUPERIOR Y PUERTAS EN TABLEX CON FORMICA F8. CADA UNO DE LOS 3 ESPACIOS LLEVA PUERTA CON CERRADURA Y AL INTERIOR TIENE 3 ENTREPAÑOS GRADUALES EN ALTURA DE +/- 5CM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mueble centro de copiado mueble de almacenamiento",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro de mueble centro de copiado mueble de almacenamiento",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-28",
  "nombre": "SUMINISTRO DE MUEBLE CORRESPONDENCIA ELABORADA EN TABLEX, ENCHAPADA EN FORMICA, ROVERE FIUMO, BASE CON NIVELADORES DE 5/16”. INTERIOR DEL MUEBLE ENCHAPADO EN FORMICA COLOR BLANCO. CADA UNO DE LOS ESPACIOS LLEVA PUERTA CON CERRADURA FONDO MÁXIMO 0.53CM. – 0.33CM ANCHO 122 CM. ALTURA 1.95 CM.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de mueble correspondencia elaborada en tablex",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Puertas, ventanas y metálicos",
    "presentacion": "Suministro de mueble correspondencia elaborada en tablex",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-29",
  "nombre": "SUMINISTRO DE CAUNTER PISO 5 MBF-38 PUESTO DE TRABAJO EN L, COMPUESTO POR ESCRITORIO + CAJONERA RODANTE + SUPERFICIE MOSTRADORA, COSTADO PLENO EN FORMICA. INCLUIR CAJA DE TOMAS A NIVEL DE SUPERFICIE PARA DATOS Y CORRIENTE CON TAPA ABATIBLE.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de caunter piso 5 mbf-38 puesto de trabajo en l",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro de caunter piso 5 mbf-38 puesto de trabajo en l",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-30",
  "nombre": "SUMINISTRO DE CAUNTER PISO 1 MBF-38A PUESTO DE TRABAJO RECTO, COMPUESTO POR ESCRITORIO + CAJONERA RODANTE + SUPERFICIE MOSTRADORA, COSTADO PLENO EN FORMICA. INCLUIR CAJA DE TOMAS A NIVEL DE SUPERFICIE PARA DATOS Y CORRIENTE CON TAPA ABATIBLE",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de caunter piso 1 mbf-38a puesto de trabajo recto",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Acabados",
    "presentacion": "Suministro de caunter piso 1 mbf-38a puesto de trabajo recto",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPM-31",
  "nombre": "SUMINISTRO DE SILLA AUXILAR - MBF-54 UNIDAD DE ASIENTO INDIVIDUAL CON PATAS ASIENTO: SOBRE BASTIDOR, EN ESPUMA INYECTADA Y TAPIZADO EN TEXTIL. ESPALDAR MEDIO ALTO: EN MALLA ANTITRANSPIRANTE, RECLINACIÓN DEL ESPALDAR RANGO E: 8°- 25° MARCO EN RESINA PLÁSTICA (PA6+FIBRA DE VIDRIO 30%) BASE ASIENTO: EN NYLON O RESINA PLÁSTICA CON RODACHINAS NYLON DE 50MM DE DIÁMETRO. MECANISMO CON SISTEMA DE BASCULACIÓN, FRENO HORIZONTAL, FRENO DE INCLINACIÓN Y GRADUACIÓN DE ALTURA.",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de silla auxilar",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Vidrios, películas y señalética",
    "presentacion": "Suministro de silla auxilar",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-01",
  "nombre": "SUMINISTRO DE UPS 30KVA AC/DC 208V CON BANCO EXTERNO DE BATERIAS AUTONOMIA PARA 30.0 MINUTOS",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ups 30kva ac/dc 208v",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de ups 30kva ac/dc 208v",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-02",
  "nombre": "SUMINISTRO DE UNIDAD CONDENSADORA DE 268.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad condensadora de 268.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad condensadora de 268.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-03",
  "nombre": "SUMINISTRO DE UNIDAD CONDENSADORA DE 249.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad condensadora de 249.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad condensadora de 249.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-04",
  "nombre": "SUMINISTRO DE UNIDAD CONDENSADORA DE 229.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad condensadora de 229.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad condensadora de 229.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-05",
  "nombre": "SUMINISTRO DE UNIDAD CONDENSADORA DE 192.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad condensadora de 192.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad condensadora de 192.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-06",
  "nombre": "SUMINISTRO DE UNIDAD CONDENSADORA DE 170.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad condensadora de 170.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad condensadora de 170.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-07",
  "nombre": "SUMINISTRO DE UNIDAD CONDENSADORA DE 155.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad condensadora de 155.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad condensadora de 155.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-08",
  "nombre": "SUMINISTRO DE UNIDAD CONDENSADORA DE 140.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad condensadora de 140.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad condensadora de 140.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-09",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 4 VIAS DE 38.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 4 vias de 38.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 4 vias de 38.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-10",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 4 VIAS DE 30.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 4 vias de 30.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 4 vias de 30.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-11",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR DE PARED DE 27.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior de pared de 27.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior de pared de 27.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-12",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 4 VIAS DE 27.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 4 vias de 27.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 4 vias de 27.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-13",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR DE PARED DE 24.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior de pared de 24.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior de pared de 24.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-14",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 4 VIAS DE 24.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 4 vias de 24.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 4 vias de 24.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-15",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 1 VIAS DE 24.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 1 vias de 24.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 1 vias de 24.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-16",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 2 VIAS DE 24.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 2 vias de 24.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 2 vias de 24.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-17",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 4 VIAS DE 18.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 4 vias de 18.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 4 vias de 18.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-18",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 2 VIAS DE 18.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 2 vias de 18.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 2 vias de 18.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-19",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 2 VIAS DE 15.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 2 vias de 15.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 2 vias de 15.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-20",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 4 VIAS DE 15.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 4 vias de 15.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 4 vias de 15.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-21",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 2 VIAS DE 12.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 2 vias de 12.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 2 vias de 12.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-22",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR DE PARED DE 12.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior de pared de 12.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior de pared de 12.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-23",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR DE PARED DE 10.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior de pared de 10.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior de pared de 10.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-24",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR CASSETE DE 2 VIAS DE 9.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior cassete de 2 vias de 9.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior cassete de 2 vias de 9.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-25",
  "nombre": "SUMINISTRO DE UNIDAD INTERIOR DE PARED DE 8.000 BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de unidad interior de pared de 8.000 btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de unidad interior de pared de 8.000 btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-26",
  "nombre": "SUMINISTRO DE CASSETE DE 2 VIAS DE 8.000BTU",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de cassete de 2 vias de 8.000btu",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Otros suministros",
    "presentacion": "Suministro de cassete de 2 vias de 8.000btu",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-27",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 530 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 530 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 530 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-28",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 320 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 320 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 320 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-29",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 640 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 640 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 640 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-30",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 420 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 420 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 420 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-31",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 110 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 110 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 110 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-32",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 210 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 210 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 210 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-33",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 620 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 620 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 620 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-34",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 3560 CFM (IMP- 1.680 L/S)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 3560 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 3560 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-35",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 4750 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 4750 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 4750 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-36",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 5490 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 5490 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 5490 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-37",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 6620 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 6620 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 6620 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-38",
  "nombre": "SUMINISTRO DE VENTILADOR IN LINE HELICOCENTRÍFUGO 6360 CFM",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de ventilador in line helicocentrífugo 6360 cfm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Suministro de ventilador in line helicocentrífugo 6360 cfm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-39",
  "nombre": "SUMINISTRO DE TRANSFORMADOR TRIFASICO EN SECO DE 300 KVA - TIPÓ H - 208/102 V",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de transformador trifasico en seco de 300 kva",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro de transformador trifasico en seco de 300 kva",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-40",
  "nombre": "SUMINISTRO DE DE EQUIPO BOMBA RCI DE IMPULSION DE 400 GPM - MOTOR DIESEL - 155 PSI CERTIFICADA UL Y FM( INCLUYE BOMBA,BOMBA JOKEY, TABLEROS DE CONTROL, VALVULAS, BRIDAS, MANOMETROS, PLACA ANTIVORTICE, MEDIDOR SEGÚN ESPECIFICACION TECNICA, TODO LOS ACCESORIOS Y TUBERIAS DENTRO DEL CUARTO TECNICO DE LA BOMBA RCI Y TANQUE DE ALMACENAMIENTO DE AGUA)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de de equipo bomba rci de impulsion de 400 gpm",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro de de equipo bomba rci de impulsion de 400 gpm",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPQ-41",
  "nombre": "SUMINISTRO DE ELECTROBOMBA CENTRÍFUGA DE 4.0 HP 220 VAC, INOXIDABLE 304, TRIFÁSICO, CAUDAL 3 LITROS/SEGUNDO, 61 MCA (INCLUYE REGULADOR ELECTRONICO DE PRESIÓN)",
  "unidad": "und",
  "materiales": [
   {
    "material": "Suministro de electrobomba centrífuga de 4.0 hp 220 vac",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Eléctrico",
    "presentacion": "Suministro de electrobomba centrífuga de 4.0 hp 220 vac",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 },
 {
  "codigo": "NPHV-01",
  "nombre": "ARRANQUE, COMISIONAMIENTO, AJUSTE, BALANCEO Y PUESTA EN OPERACIÓN DEL SISTEMA INTEGRAL HVAC DEL EDIFICIO, INCLUYE VERIFICACIÓN FINAL DE INSTALACIONES, PRUEBAS DE PREARRANQUE Y ARRANQUE, CONFIGURACIÓN Y PARAMETRIZACIÓN DE EQUIPOS VRF/VRV, VERIFICACIÓN DE SISTEMAS ELÉCTRICOS, FRIGORÍFICOS, MECÁNICOS Y DE CONTROL, MEDICIÓN Y BALANCEO DE CAUDALES DE AIRE, PRUEBAS FUNCIONALES, ARRANQUE POR PERSONAL TÉCNICO ESPECIALIZADO, ELABORACIÓN DE PROTOCOLOS, DOSSIER DE OBRAS MECÁNICAS, MANUALES DE OPERACIÓN Y MANTENIMIENTO Y PLANOS AS BUILT. INCLUYE EQUIPOS DE MEDICIÓN, HERRAMIENTAS, PERSONAL ESPECIALIZADO Y TODOS LOS RECURSOS NECESARIOS PARA LA ENTREGA DEL SISTEMA COMPLETAMENTE OPERATIVO.",
  "unidad": "und",
  "materiales": [],
  "servicio": true
 },
 {
  "codigo": "NPHV-02",
  "nombre": "IZAJE Y TRASIEGO DEL EQUIPO CONDENSADOR DE AIRE ACONDICIONADO",
  "unidad": "und",
  "materiales": [
   {
    "material": "Izaje y trasiego del equipo condensador de aire acondicionado",
    "unidad": "und",
    "rendimiento": 1,
    "categoria": "Equipos y mobiliario",
    "presentacion": "Izaje y trasiego del equipo condensador de aire acondicionado",
    "unidadCompra": "und",
    "contenido": 1,
    "merma": 0
   }
  ],
  "servicio": false
 }
];
