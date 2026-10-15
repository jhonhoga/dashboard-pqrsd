# Contexto del proyecto — Dashboard PQRSD

Este documento resume el contexto técnico del repositorio para sesiones de trabajo
futuras (agentes o colaboradores). Para instrucciones de uso del dashboard PQRSD
véase [`README.md`](./README.md) y para el flujo de despliegue en Vercel véase
[`DEPLOY.md`](./DEPLOY.md).

## Visión general

Sitio **estático** (sin build ni bundler) con dos dashboards:

| Dashboard | Archivos | Fuente de datos |
|-----------|----------|-----------------|
| **PQRSD** (principal) | `index.html` + `script.js` | `ANALISIS_DE_PQRSD_2026 (2)_copia.xlsx` |
| **IAS / Entes de Control** | `ias.html` + `ias.js` | `IAS 2025 - 2026  GOBERNACIÓN DE BOLÍVAR (1).xlsx` |

Cada dashboard tiene su propio archivo HTML y JS. `script.js` e `ias.js` son
independientes: `ias.js` es auto-contenido (copia su propia versión de utilidades
de fechas/días hábiles/mapeos para no depender de `script.js`).

Navegación entre ambos: `index.html` tiene un botón de header
`<a href="ias.html" class="nav-button ias">IAS</a>` y `ias.html` tiene el botón
inverso `PQRSD`. Sus estilos viven en `style.css` (`.nav-button`,
`.nav-button.pqrsd`, `.nav-button.ias`, `.ente-badge.*`).

## Estructura del repositorio

```
dashboard-pqrsd/
├── index.html              # Dashboard PQRSD
├── script.js               # Lógica PQRSD (carga Excel, filtros, gráficos, export)
├── ias.html                # Dashboard IAS / Entes de Control
├── ias.js                  # Lógica IAS (self-contained)
├── style.css               # Estilos compartidos (ambos dashboards)
├── vercel.json             # Config de despliegue y política de caché
├── package.json            # Metadatos (sitio estático; sin dependencias)
├── README.md               # Documentación del dashboard PQRSD
├── DEPLOY.md               # Guía de despliegue en Vercel
├── CONTEXT.md              # Este archivo
├── images.png              # Preview usado en README
├── .gitignore              # Excluye *.xlsx y *.xls
├── .vercel/README.md
├── ANALISIS_DE_PQRSD_2026 (2)_copia.xlsx   # datos (NO versionados)
└── IAS 2025 - 2026  GOBERNACIÓN DE BOLÍVAR (1).xlsx  # datos (NO versionados)
```

Los `.xlsx` están en `.gitignore`: los datos se cargan desde la web/entorno local,
el repo solo contiene la aplicación.

## Stack y dependencias (CDN)

No hay `npm install` para la app; todo se carga por CDN:

- **SheetJS** `xlsx@0.18.5` — lectura de Excel.
- **Chart.js** `chart.js@3.9.1` — gráficos de barras/líneas/dona.
- **chartjs-chart-treemap** `@1.0.1` — treemap de áreas.
- **Day.js** `1.11.10` — fechas (parcialmente copiado a mano en IAS).
- **jsPDF** `2.5.1` — PDF.
- **Font Awesome 6.4.0**, **Google Fonts (Inter)**.

`package.json` no tiene `dependencies`; los scripts `dev/build/start` son
stubs (`python -m http.server 8000` / `echo`), pensados para sirv estático.

## Datos

### PQRSD (`ANALISIS_DE_PQRSD_...xlsx`)

- Hoja `PQRSD 2026`: ~50.947 filas. Columnas A–K. Claves: H (índice 7,
  "Dependencia que recibe"), K (índice 10, "dependencia").
- Hoja `LISTA DATOS`: 174 dependencias con sus iniciales.

### IAS (`IAS 2025 - 2026 ... GOBERNACIÓN DE BOLÍVAR (1).xlsx`)

- Hoja **`2 ene 2025 - 1 septiembre 2026`** (datos, 922 filas; columnas A–L):
  `Código, Asunto, Emisor, Fecha registro, Hora, Institución, Registrador, Tipo,
  Medio Recepción, Área Responsable, Oficio Respuesta, Fecha Respuesta`.
- Hoja `LISTA DATOS` (catálogo A–G): `DIAS FERIADOS, TIPO, TIEMPO, DEPENDENCIAS,
  INICIALES, ISNTITUCION, INI_INST`.
- **Importante:** la hoja de datos NO es la primera. `elegirHoja()` la detecta
  por encabezados (`Código`/`Institución`/`Tipo`); jamás usar `SheetNames[0]`.

### Mapeo de dependencias

`MAPEO_DEPENDENCIAS` (ambos scripts) normaliza nombres crudos a iniciales.
Casos reales ya corregidos:

- `"Secretaría TIC"` → `TIC`
- `"Grupo de Gestión Financiera"` → `SALUD`
- `"Instituto de Cultura yTurismo  de Bolivar"` (doble espacio, tal cual en el Excel) → `ICULTUR`

Fallback en `obtenerDependenciaSimplificada()`: si no hay mapeo, devuelve el
nombre real normalizado (nunca `null`), evitando la barra "OTROS" fantasma.

### Días hábiles / vencimiento

Vencimiento calculado sobre días hábiles colombianos: festivos fijos
(1 ene, 1 may, 20 jul, 7 ago, 15 oct, 1 nov, 11 nov, 8 dic, 25 dic y
24/31 dic cuando aplican) + festivos móviles (Semana Santa: Viernes Santo,
Ascensión, Corpus Christi, Sagrado Corazón) vía Day.js.

## Convenciones de trabajo

1. **Cache-busting por query string**: los assets se referencian como
   `style.css?v=20251015`, `script.js?v=20251015`, `ias.js?v=20251015`.
   Al editar CSS/JS **hay que subir el sufijo** `?v=` en TODOS los HTML que
   lo referencien o la caché servirá el archivo viejo.
2. **Caché de Vercel** (`vercel.json`): catch-all con
   `Cache-Control: public, max-age=0, must-revalidate` y regla específica
   para `*.css`/`*.js` con el mismo valor → siempre revalidación (ETag), sin
   versiones rotas.
3. **JS vanilla, sin framework**: funciones globales + `document.getElementById`.
   Al editar verificar con `node --check <archivo>.js` y que todo ID referenciado
   exista en su HTML.
4. **Nombres de columnas/hojas**: contractar por encabezados y literales del
   Excel, no por posiciones fijas ni por orden de hojas.
5. **Datos personales**: los Excel contienen nombres/emails; no versionarlos
   (regla de `.gitignore`), no incluirlos en commits ni docs.

## Flujo de commits

- Repo `https://github.com/jhonhoga/dashboard-pqrsd.git`, rama `main`.
- Commits en imperativo, tipo convencional: `feat: ...`, `fix: ...`.
- Build/validación mínima pre-commit: `node --check script.js`,
  `node --check ias.js`, revisión de IDs referenciados y de llaves de CSS.

## Pendiente / no hecho

- Prueba visual end-to-end en navegador sobre `ias.html` (hasta ahora verificado
  por `node --check` e inspección de IDs/canvases, no por captura).
- No hay tests automatizados ni CI.
