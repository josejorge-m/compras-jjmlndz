# Compras de Obra Civil (aplicación web instalable)

## Archivos
- index.html, app.js, base.js: la aplicación y la base de rendimientos (base.js es editable).
- manifest.webmanifest, sw.js, icons/: permiten instalarla y usarla sin conexión.
- vendor/: librerías para leer Excel, PDF y Word y generar PDF/Excel (no requieren internet).

## Publicar (necesita HTTPS para instalarse)
Opción sencilla: arrastrar la carpeta completa a https://app.netlify.com/drop (cuenta gratuita)
o subirla a GitHub Pages / al hosting de la empresa. Luego abrir el enlace.

## Instalar
- Computador (Chrome o Edge): ícono de "Instalar" en la barra de direcciones, o botón "Instalar app".
- Android (Chrome): menú ⋮ > "Instalar aplicación" / "Agregar a la pantalla de inicio".
- iPhone (Safari): botón Compartir > "Agregar a pantalla de inicio".

## Formato de los archivos adjuntos
- Excel / CSV: columnas `codigo` (o `actividad` con el nombre exacto) y `cantidad`.
- PDF / Word: filas con el código de la actividad y la cantidad (en tablas o en párrafos).
- Las líneas que la app no reconoce se listan como observaciones para revisión manual.

## Seguridad
Los archivos se procesan en el dispositivo; no se envían a ningún servidor.

## Actualizar rendimientos
Editar base.js (cada actividad tiene sus materiales, rendimientos, mermas y presentaciones).
Al cambiar la app, subir la nueva versión y cambiar VERSION en sw.js para que los equipos la actualicen.
