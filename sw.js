// @ts-nocheck
/* Este archivo debe estar
 * colocado en la carpeta raíz del
 * sitio.
 * 
 * Cualquier cambio en el
 * contenido de este archivo hace
 * que el service worker se
 * reinstale.
 * 
 * Normalmente se cambia el número
 * en el nombre del caché cuando
 * cambia el contenido de los
 * archivos.
 * 
 * Cuando uses GitHub Pages espera
 * 11 minutos después de hacer los
 * cambios en tu sitio, para
 * depués actualizar este archivo.
 */
const CACHE = "dmppwa-1.000";

/** Archivos requeridos para que
 * la aplicación funcione fuera de
 * línea. */
const ARCHIVOS = [
  "cmp/mi-nav.js",
  "cmp/mi-footer.js",
  "cmp/nav-resp.js",
  "css/campo.css",
  "css/estilos.css",
  "css/mi-nav.css",
  "css/fonts.css",
  "css/nav-resp.css",
  "fonts/icomoon.eot",
  "fonts/icomoon.html",
  "fonts/icomoon.eot.ttf",
  "fonts/icomoon.woff",
  "img/icono256.png",
  "img/icono1024.png",
  "img/icono2048.png",
  "disp/CtrlDispositivo.js",
  "disp/ProxyEntrada.js",
  "disp/ProxyHistorial",
  "disp/ProxiSalida.js",
  "disp/ResInt.js",
  "disp/utilIoT.js",
  "js/agent.js",
  "js/CtrlHistorial.js",
  "js/CtrlMovil.js",
  "js/init.js",
  "js/tipos.js",
  "js/regSw.js",
  "archivos.html",
  "ayuda.html",
  "favicon.ico",
  "gps.html",
  "index.html",
  "LICENSE",
  "README.md",
  "dispositivo.html",
  "historial.html",
  "site.webmanifest",
  "lib/fabrica.js",
  "lib/tiposFire.js",
  "lib/util.js",
  '/'
];

self.addEventListener("install",
  evt => {
    console.log("sw instalado.");
    /* Realiza la instalación.
     * Carga los archivos
     * requeridos en la caché. */
    evt.waitUntil(cargaCache());
  });

/* Toma los archivos solicitados
 * de la caché; si no los
 * encuentra, se descargan. */
self.addEventListener("fetch",
  evt => {
    if (evt.request.method ===
      "GET") {
      evt.respondWith(
        usaCache(evt));
    }
  });

self.addEventListener("activate",
  () =>
    console.log("sw activo."));

async function cargaCache() {
  console.log(
    "Intentando cargar cache",
    CACHE);
  const cache =
    await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache", CACHE,
    "cargado");
}

async function usaCache(evt) {
  const cache =
    await caches.open(CACHE);
  const response =
    await cache.match(evt.request,
      { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}
