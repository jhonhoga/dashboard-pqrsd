# Dashboard de Análisis de PQRSD 📊

Un dashboard interactivo para el análisis y visualización de datos de **Peticiones, Quejas, Reclamos, Sugerencias y Denuncias (PQRSD)** del sector público colombiano.

![Dashboard Preview](./images.png)

## 🚀 Características

### 📈 Visualizaciones Avanzadas
- **Gráficos de barras horizontales** para radicados no contestados y vencidos por dependencia
- **Gráfico de líneas de tendencias** por medios de recepción
- **Dashboard responsive** optimizado para móviles y escritorio
- **Análisis del Top 5** tipos de PQRSD más frecuentes

### 🔍 Filtros Inteligentes
- **Filtro por año** y rango de meses personalizable
- **Filtro por dependencia** con autocompletado
- **Filtros de errores**: Radicados sin tipología y sin numeración
- **Filtro múltiple de tipos** con selección avanzada
- **Contador visual** de elementos seleccionados

### 📋 Funcionalidades
- **Carga de archivos Excel (.xlsx)** con procesamiento automático
- **Cálculo de estados de vencimiento** basado en días hábiles colombianos
- **Exportación de datos filtrados** a Excel
- **Tabla detallada paginada** con búsqueda y ordenamiento
- **KPIs en tiempo real** con indicadores visuales

### 🎨 Interfaz de Usuario
- **Tema oscuro moderno** con paleta de colores profesional
- **Componentes interactivos** con retroalimentación visual
- **Animaciones fluidas** y transiciones suaves
- **Iconografía Font Awesome** para mejor experiencia

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Visualizaciones**: Chart.js v3.9.1
- **Procesamiento Excel**: SheetJS v0.18.5
- **Fechas**: Day.js v1.11.10
- **Iconos**: Font Awesome 6.4.0
- **Fuentes**: Inter (Google Fonts)

## 📦 Estructura del Proyecto

```
dashboard-pqrsd/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── images.png          # Logo del proyecto
├── package.json        # Configuración del proyecto
├── vercel.json         # Configuración de Vercel
└── README.md           # Documentación
```

## 🚀 Despliegue en Vercel

Este proyecto está configurado para desplegarse automáticamente en Vercel:

1. **Conecta tu repositorio** a Vercel
2. **Configuración automática** detectada por `vercel.json`
3. **Despliegue instantáneo** sin configuración adicional

## 💻 Uso Local

Para ejecutar el proyecto localmente:

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio
cd pqrsd-copia

# Ejecutar servidor local (Python)
python -m http.server 8000

# Abrir en navegador
http://localhost:8000
```

## 📊 Formato de Datos

El dashboard espera archivos Excel con la siguiente estructura de columnas:

| Columna | Campo | Descripción |
|---------|-------|-------------|
| A | Código | Número de radicado |
| B | Fecha Registro | Fecha de registro del PQRSD |
| C | Asunto | Descripción del asunto |
| D | Dependencia | Dependencia asignada |
| E | Tipo | Tipo de PQRSD |
| F | [Datos adicionales] | Campos complementarios |
| G | Medio Recepción | Canal de recepción |
| H | [Otros campos] | Información adicional |
| J | Fecha Respuesta | Fecha de respuesta (opcional) |

## 🔧 Configuración

### Estados de Vencimiento
El sistema calcula automáticamente:
- **Plazo Vigente**: Dentro del término legal
- **Plazo Vencido**: Fuera del término legal
- **Contestado**: Con fecha de respuesta registrada

### Días Hábiles
Configurado para el calendario colombiano:
- Lunes a Viernes como días hábiles
- Exclusión automática de fines de semana
- Cálculo de términos según normativa

## 🎯 Casos de Uso

- **Secretarías de Gobierno**: Monitoreo de atención ciudadana
- **Oficinas de Control**: Seguimiento de términos legales  
- **Gestión Pública**: Análisis de tendencias y patrones
- **Reportes Ejecutivos**: KPIs y métricas de gestión

## 📱 Responsive Design

- **Desktop**: Layout completo con gráficos expandidos
- **Tablet**: Adaptación automática de componentes
- **Mobile**: Interfaz optimizada con scroll horizontal
- **Touch**: Interacciones táctiles mejoradas

## 🔐 Seguridad

- Headers de seguridad configurados en Vercel
- Validación de archivos Excel
- Sanitización de datos de entrada
- Protección XSS integrada

## 👨‍💻 Desarrollador

**Jhon Home García**
- Especialista en desarrollo web y visualización de datos
- Enfoque en soluciones para el sector público

## 📄 Licencia

MIT License - Ver archivo de licencia para más detalles.

---

## 🚀 Deploy Status

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/[tu-usuario]/dashboard-pqrsd)

**Versión**: 1.0.0  
**Última actualización**: Septiembre 2025