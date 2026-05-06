// ===========================================
// DASHBOARD DE ANÁLISIS DE PQRSD
// Autor: IA Experta en Programación
// Fecha: 2024
// ===========================================

// Verificar que todas las librerías están disponibles
function verificarLibrerias() {
    console.log('🔍 Verificando disponibilidad de librerías...');

    const librerias = [
        { nombre: 'XLSX', objeto: window.XLSX },
        { nombre: 'Chart.js', objeto: window.Chart },
        { nombre: 'Day.js', objeto: window.dayjs }
    ];

    librerias.forEach(lib => {
        console.log(`   - ${lib.nombre}: ${lib.objeto ? '✅ Disponible' : '❌ No disponible'}`);
    });

    const faltantes = librerias.filter(lib => !lib.objeto);

    if (faltantes.length > 0) {
        const mensaje = `Error: Las siguientes librerías no están disponibles: ${faltantes.map(lib => lib.nombre).join(', ')}`;
        console.error(mensaje);
        mostrarError(mensaje + '. Por favor recargue la página.');
        return false;
    }

    return true;
}

// Configuración de Day.js
dayjs.extend(dayjs_plugin_customParseFormat);
dayjs.extend(dayjs_plugin_weekday);

// ===========================================
// CONFIGURACIÓN GLOBAL
// ===========================================

// Plazos por tipo de radicado (en días hábiles)
const PLAZOS_POR_TIPO = {
    "Derecho de Petición (10 Días)": 10,
    "Derecho de Petición (15 Días)": 15,
    "Derecho de Petición (30 Días)": 30,
    "Derecho de Petición (5 Días)": 5,
    "Reclamo": 10,
    "Recurso": 10,
    "Solicitud": 10,
    "Solicitud Certificado de Disponibilidad Presupuestal": 10,
    "Embargos": 15,
    "Desembargos": 15,
    "Seguro por Muerte": 10,
    "Demandas": 10,
    "Notificación": 10,
    "Traslado de otra entidad": 10,
    "Oficio": 10,
    "Requerimientos Contraloría": 10,
    "Informe": 10,
    "Queja": 10,
    "Sanción por Mora": 5,
    "Certificados": 10,
    "Requerimientos Procuraduría (3 días)": 3,
    "Recurso de Reposición": 10,
    "Invitaciones": 5,
    "Defensoria del Pueblo (10 Días)": 10,
    "Sustitución de Pensión": 10,
    "Reliquidación de Pensión": 10,
    "Acuerdo": 10,
    "Cuentas de Cobro": 10,
    "Oficio de Control Politico (5 días)": 5,
    "Solicitud de Copias": 5,
    "Cesantias Definitivas": 5,
    "Pensión": 5,
    "Libranza": 10,
    "Requerimiento Incidente Desacato (48 Horas)": 2,
    "Culaquier petición": 5,
    "Comunicación": 5,
    "Citación": 5,
    "Decreto": 5,
    "Defensoria del Pueblo (5 Días)": 5,
    "Solicitud de Congresistas o Diputados": 5,
    "Resolución": 10,
    "Procuraduría Regional (5 días)": 5,
    "Procuraduría Regional (10 días)": 10,
    "Acción de Nulidad y Restablecimiento del Derecho (5 días)": 5,
    "Procuraduría (10 días)": 10,
    "Contraloría Departamental (10 Días)": 10,
    "Carta": 10,
    "Fiscalía (10 Días)": 10,
    "Procuraduría (5 días)": 5,
    "Fiscalía (3 Días)": 3,
    "Denuncias por Acto de Corrupción": 15,
    "Contraloría General (10 Días)": 10,
    "Procuraduría (3 días)": 3,
    "Procuraduría Regional (3 días)": 3,
    "Conciliaciones": 5,
    "Contraloría Departamental (5 Días)": 5,
    "Personería (10 Días)": 10,
    "Contraloría General (5 Días)": 5,
    "Auto": 2,
    "Solicitud Certificado de Registro Presupuestal": 15,
    "Requerimientos Especiales": 5,
    "Defensoria del Pueblo (24 horas)": 1,
    "Proyecto": 10,
    "Personería (3 Días)": 3,
    "Acta": 2,
    "Procuraduría Provincial (5 días)": 5,
    "Reportes": 2,
    "Devolución": 10,
    "Contraloría Departamental (24 horas)": 1,
    "Fiscalía (5 Días)": 5,
    "Contraloría Departamental (3 Días)": 3,
    "Procuraduría Regional (24 horas)": 1,
    "Contraloría Departamental (3 Días)": 3,
    "Felicitación": 15,
    "Incidente de Desacato (48 Horas)": 2,
    "Contraloría General (24 horas)": 1,
    "Licitación": 5,
    "Contraloría Municipal o Distrital (5 Días)": 5,
    "Procesos Juridicos": 30,
    "Petición de Conceptos (30 Días)": 30,
    "Petición de Documentos (20 Días)": 20,
    "Contratos": 15,
    "Petición de Informe": 5,
    "Copia de Información de otra entidad": 3,
    "Memorando": 15,
    "Memorandum": 15,
    "Memorias": 15,
    "Incidente de Desacato (72 Horas)": 3,
    "Procuraduría (24 horas)": 1,
    "Requerimientos Fiscalía": 3,
    "Incidente de Desacato (24 Horas)": 1,
    "Acción de Tutela (48 Horas)": 2,
    "Circulares": 15,
    "Propuesta": 20,
    "Contraloría General (3 Días)": 3,
    "No requiere respuesta": 360,
    "Contraloría Municipal o Distrital (10 Días)": 10,
    "Procuraduría Provincial (10 días)": 10,
    "Acción de Tutela (24 Horas)": 1,
    "Acción de Tutela (72 Horas)": 3,
    "Publicación": 10,
    "Convenios": 10,
    "Requerimiento Personería": 10,
    "Petición de Cópias (30 Días)": 30,
    "Acción de Tutela (12 Horas)": 1,
    "Procuraduría Provincial (3 días)": 3,
    "Peticiones entre autoridades": 5,
    "Petición entre autoridades (defensoría)": 5,
    "Solicitud de Información": 15,
    "Solicitud Paz y Salvo": 15,
    "Solicitud llamamiento a conciliación": 15,
    "Cesantias Parciales": 15,
    "Solicitud de Terminación por Mutuo Acuerdo": 10,
    "Sugerencia": 15,
    "Procuraduría Provincial (24 horas)": 1,
    "Fiscalía (24 horas)": 1,
    "Audiencias de Conciliaciones": 10,
    "Apertura Incidente Desacato (3 Días)": 3
};

// Mapeo de dependencias a secretarías
const MAPEO_DEPENDENCIAS = {
    "Despacho del Gobernador": "GOBERNADOR",
    "Despacho del Gobernador - Secretaría Privada": "PRIVADA",
    "Despacho del Gobernador - Secretaría Privada - Oficina Asesora de Protocolo": "PROTOCOLO",
    "Despacho del Gobernador - Secretaría Privada - Oficina Asesora de Comunicaciones y Prensa": "PRENSA",
    "Despacho del Gobernador - Oficina de Control Interno": "OCI",
    "Despacho del Gobernador - Oficina de Control Disciplinario": "OCD INSTRUCCION",
    "Despacho del Gobernador - Oficina de Gestión Social": "MUJER",
    "Despacho del Gobernador - Oficina de Gestión del Riesgo de Desastres": "OGDRD",
    "Secretaría de la Mujer": "MUJER",
    "Secretaría Juridica": "JURIDICA",
    "Secretaría Jurídica": "JURIDICA",
    "Secretaría Jurídica - Dirección de Contratación": "JURIDICA",
    "Secretaría Jurídica - Dirección de Defensa Judicial": "JURIDICA",
    "Secretaría Jurídica - Dirección de Conceptos, Actos Administrativos y Personas Jurídicas": "JURIDICA",
    "Secretaría General": "GENERAL",
    "Dirección Administrativa de Función Pública": "FUNCION PUBLICA",
    "Secretaría General - Dirección de Atención al Ciudadano y Gestión Documental": "ATN CIUDADANO",
    "Secretaría General - Dirección de Logística": "LOGISTICA",
    "Secretaría General - Dirección de Tecnologías de la Información y de las Comunicaciones": "TIC",
    "Secretaría de Planeación": "PLANEACION",
    "Secretaría de Planeación - Dirección de Planeación Estratégica e Inversión Pública": "PLANEACION",
    "Secretaría de Planeación - Dirección de Estudios Socioeconómicos e Investigaciones": "PLANEACION",
    "Secretaría de Hacienda": "HACIENDA",
    "Oficina de Cobro Coactivo": "COBRO COACTIVO",
    "Dirección de Cobro Coactivo": "COBRO COACTIVO",
    "Secretaría de Hacienda - Dirección de Presupuesto": "PRESUPUESTO",
    "Secretaría de Hacienda - Dirección de Contabilidad": "HACIENDA",
    "Dirección de Tesorería": "TESORERIA",
    "Dirección Financiera de Ingresos": "INGRESOS",
    "Secretaría de Hacienda - Dirección de Estudios y Análisis Financiero y Fiscal": "HACIENDA",
    "Fondo Territorial de Pensiones": "HACIENDA - FTP",
    "Secretaría del Interior y Asuntos Gubernamentales": "INTERIOR",
    "Secretaría del Interior y Asuntos Gubernamentales - Oficina de Juventudes": "INTERIOR",
    "Secretaría del Interior y Asuntos Gubernamentales - Dirección de Seguridad y Convivencia Ciudadana": "SEGURIDAD",
    "Secretaría del Interior y Asuntos Gubernamentales - Dirección de Asistencia Municipal": "INTERIOR",
    "Secretaría de Desarrollo Regional y Ordenamiento Territorial": "DESARROLLO ECONOMICO",
    "Secretaría de Desarrollo Regional y Ordenamiento Territorial - Dirección de Ambiente y Desarrollo Sostenible": "DESARROLLO ECONOMICO",
    "Secretaría de Desarrollo Regional y Ordenamiento Territorial - Dirección de Gestión Territorial Montes de María": "DESARROLLO ECONOMICO",
    "Secretaría de Desarrollo Regional y Ordenamiento Territorial - Dirección de Gestión Territorial Sur de Bolívar": "DESARROLLO ECONOMICO",
    "Secretaría de Desarrollo Regional y Ordenamiento Territorial - Dirección de Gestión Territorial Norte y Dique": "DESARROLLO ECONOMICO",
    "Secretaría de Víctimas y Reconciliación": "VICTIMAS",
    "Secretaría de Víctimas y Reconciliación - Dirección de Reconciliación y Memoria Histórica": "VICTIMAS",
    "Secretaría de Salud": "SALUD",
    "Secretaría de Salud - Despacho - Oficina Asesora de Planeación": "SALUD",
    "Secretaría de Salud - Despacho - Oficina Asesora de Asuntos Jurídicos": "SALUD",
    "Secretaría de Salud - Dirección de Aseguramiento y Prestación de Servicios en Salud": "SALUD",
    "Secretaría de Salud - Dirección de Salud Pública": "SALUD",
    "Secretaría de Salud - Dirección de Inspección, Vigilancia y Control en Salud": "SALUD",
    "Secretaría de Salud - Dirección Administrativa y Financiera": "SALUD",
    "Secretaría de Educación": "EDUCACION",
    "Oficina Asesora Jurídica SED": "EDUCACION",
    "Cobertura Educativa SED": "EDUCACION",
    "Secretaría de Educación - Dirección de Calidad Educativa": "EDUCACION",
    "Secretaría de Educación - Dirección de Inspección, Vigilancia y Control en Educación": "EDUCACION",
    "Secretaría de Educación - Dirección Administración Planta Establecimientos Educativos": "EDUCACION",
    "Secretaría de Educación - Dirección Administrativa y Financiera": "EDUCACION",
    "Secretaría de Hábitat": "SERVICIOS PUBLICOS",
    "Secretaría de Servicios Públicos": "SERVICIOS PUBLICOS",
    "Secretaría de Hábitat - Dirección de Servicios Públicos y Saneamiento Básico": "SERVICIOS PUBLICOS",
    "Secretaría de Hábitat - Dirección de Vivienda": "DESARROLLO ECONOMICO",
    "Secretaría de Infraestructura": "INFRAESTRUCTURA",
    "Secretaría de Infraestructura - Dirección de Planeación de Infraestructura": "INFRAESTRUCTURA",
    "Secretaría de Infraestructura - Dirección de Construcción, Interventoría y Supervisión de Obras": "INFRAESTRUCTURA",
    "Secretaría de Movilidad": "MOVILIDAD",
    "Secretaría de Movilidad - Dirección de Planeación de Movilidad y Seguridad Vial": "MOVILIDAD",
    "Secretaría de Movilidad - Dirección de Sedes Operativas": "MOVILIDAD",
    "Secretaría de Agricultura y Desarrollo Rural": "AGRICULTURA",
    "Secretaría de Agricultura y Desarrollo Rural - Dirección de Planeación Agropecuaria y Desarrollo Rural": "AGRICULTURA",
    "Secretaría de Agricultura y Desarrollo Rural - Dirección de Desarrollo Agroindustrial y Asistencia Técnica": "AGRICULTURA",
    "Secretaría de Minas y Energía": "MINAS Y ENERGIA",
    "EMPOBOL": "EMPOBOL",
    "Grupo de PQRS": "ATN CIUDADANO",
    "Fondo de Prestaciones SED": "EDUCACION",
    "Planta Establecimientos Educativos SED": "EDUCACION",
    "Escalafon SED": "EDUCACION",
    "Inspección y Vigilancia SED": "EDUCACION",
    "Planta SED": "EDUCACION",
    "Nomina SED": "EDUCACION",
    "Archivo y Correspondencia SED": "EDUCACION",
    "Grupo de Atención al Ciudadano SED": "EDUCACION",
    "Planta": "EDUCACION",
    "Bienestar Desarrollo Social SED": "EDUCACION",
    "Grupo de Nómina": "EDUCACION",
    "Grupo de Contratación - Secretaría de Educación": "EDUCACION",
    "Grupo de Gestión Documental": "GESTION DOCUMENTAL",
    "Planeación SED": "EDUCACION",
    "Secretaria de Agricultura y Desarrollo Rural": "AGRICULTURA",
    "Secretaría de Hacienda - Oficina de Cobro Coactivo": "COBRO COACTIVO",
    "Secretaría de Hacienda - Dirección del Fondo Territorial de Pensiones": "HACIENDA - FTP",
    "Secretaría de Hacienda - Dirección de Ingresos": "INGRESOS",
    "Secretaría General - Dirección de Función Pública": "FUNCION PUBLICA",
    "Gestión Documental": "GESTION DOCUMENTAL",
    "Oficina de Pasaporte": "PASAPORTE",
    "Instituto de Cultura yTurismo de Bolivar": "ICULTUR",
    "Grupo Impoconsumo": "INGRESOS",
    "Dirección Administrativa Logística": "LOGISTICA",
    "Secretaría del Interior": "INTERIOR",
    "Oficina de Gestión del Riesgo de Desastres": "OGDRD",
    "Secretaría de la Mujer para la Equidad de Género y la Gestión Social": "MUJER",
    "Dirección de Seguridad y Convivencia": "SEGURIDAD",
    "Dirección de Seguridad": "SEGURIDAD",
    "Dirección de Contratación": "JURIDICA",
    "Secretaría Privada": "PRIVADA",
    "Empresa de Obras Sanitarias de Bolivar": "EMPOBOL",
    "Unidad de Relaciones Públicas y Protocolo": "PROTOCOLO",
    "Grupo de Pasaporte": "PASAPORTE",
    "Dirección de TIC": "TIC",
    "Dirección de Ambiente": "DESARROLLO ECONOMICO",
    "Oficina de Control Disciplinario": "OCD INSTRUCCIÓN",
    "Dirección de Defensa Judicial": "JURIDICA",
    "Dirección Administrativa y Financiera SED": "EDUCACION",
    "Oficina de Control Interno": "OCI",
    "Contratación SED": "EDUCACION",
    "Dirección de Juventudes": "INTERIOR",
    "Oficina de Juventudes": "INTERIOR",
    "Grupo de Conceptos y Actos Administrativos": "JURIDICA",
    "Dirección de Vivienda": "DESARROLLO ECONOMICO",
    "Dirección de Presupuesto": "PRESUPUESTO",
    "Secretaría De La Igualdad": "IGUALDAD",
    "Oficina de Control Disciplinario de Juzgamiento": "OCD JUZGAMIENTO",
    "Despacho del Gobernador - Oficina de Control Disciplinario de Juzgamiento": "OCD JUZGAMIENTO",
    "Dirección de Calidad Educativa SED": "EDUCACION",
    "Unidad de Comunicaciones y Prensa": "PRENSA",
    "Fondo de Prestaciones Sociales SED": "EDUCACION",
    "Oficina de Control Interno Disciplinario de Juzgamiento": "OCD JUZGAMIENTO",
    "Dirección de Conceptos, Actos Administrativos y Personería juridica": "JURIDICA",
    "Financiera SED": "EDUCACION",
    "Instituto Departamental de Deportes y Recreación de Bolivar-IDERBOL": "IDERBOL",
    "Dirección Administrativa de Atención al Ciudadano y Gestión Documental": "ATN CIUDADANO",
    "Dirección de Construcción, Interventoría y Supervisión de Obras": "INFRAESTRUCTURA",
    "Dirección de Gestión Social": "MUJER",
    "Dirección de Planeación de Infraestructura": "INFRAESTRUCTURA",
    "Instituto de Cultura y Turismo de Bolivar": "ICULTUR",
    "Secretaría de Desarrollo Económico": "DESARROLLO ECONOMICO",
    "Secretaría de Tecnologías de la Información y de las Comunicaciones": "TIC",
    "Oficina Asesora de Comunicaciones y Prensa": "PRENSA",
    "Dirección de Participación Ciudadana y Acción Comunal": "PARTICIPACION",
    "Secretaría de Seguridad": "SEGURIDAD",
    "Secretaría de Paz, Víctimas y Reconciliación": "VICTIMAS",
    "Dirección de Competitividad": "COMPETITIVIDAD",
    "Secretaría de la Mujer y Desarrollo Social": "MUJER",
    "Dirección Administrativa y Financiera": "SALUD",
    "Dirección de Asuntos Municipales": "INTERIOR",
    "Dirección Escuela de Gobernanza y Liderazgo": "ESCUELA GOB",
    "Grupo de Atención al Ciudadano": "ATN CIUDADANO",
    "Dirección de Vigilancia en Salud": "SALUD",
    "Dirección Administrativa y Financiera-Contabilidad": "SALUD",
    "Dirección de Conectividad e Infraestructura Tecnológica": "TIC",
    "Dirección Tecnica de Turismo": "ICULTUR",
    "Dirección de Aseguramiento y Prestación de Servicios": "SALUD",
    "Dirección de Asistencia Municipal": "INTERIOR",
    "Dirección de Ciencia, Tecnología e Innovación": "TIC",
    "Dirección de Participación Ciudadana": "PARTICIPACION",
    "Inspección Vigilancia y Control": "SALUD",
    "Grupo de Prensa": "PRENSA",
    "Dirección de Gestión Territorial Sur de Bolívar": "INTERIOR",
    "Dirección Técnica de Cultura": "ICULTUR",
    "Grupo de Crédito Público": "HACIENDA",
    "Dirección de Servicios Públicos y Saneamiento Básico": "SERVICIOS PUBLICOS",
    "Dirección de Planeación de Seguridad": "SEGURIDAD",
    "Grupo de Bienestar Social y Desarrollo Humano": "FUNCION PUBLICA",
    "Dirección del Sur de Bolivar": "INTERIOR",
    "Dirección de Asuntos de la Mujer": "MUJER",
    "Grupo de Correspondencia": "GESTION DOCUMENTAL",
    "Oficina de Control Interno Disciplinario de Instruccion": "OCD INSTRUCCION",
    "Oficina Asesora de Asuntos Jurídicos de la Secretaría de Educación": "EDUCACION",
    "Unidad de Atención al Ciudadano": "ATN CIUDADANO",
    "Juridica": "JURIDICA", 
    "Dirección de Restitución de Tierras": "AGRICULTURA",
    "Dirección de Derechos Humanos y Grupos Poblacionales": "IGUALDAD",
};

// Días festivos de Colombia 2024-2025-2026
const FESTIVOS_COLOMBIA_2024 = [
    '2024-01-01', '2024-01-08', '2024-03-25', '2024-03-28', '2024-03-29',
    '2024-05-01', '2024-05-13', '2024-06-03', '2024-06-10', '2024-07-01',
    '2024-07-20', '2024-08-07', '2024-08-19', '2024-10-14', '2024-11-04',
    '2024-11-11', '2024-12-08', '2024-12-25'
];

const FESTIVOS_COLOMBIA_2025 = [
    '2025-01-01', '2025-01-06', '2025-03-24', '2025-04-17', '2025-04-18',
    '2025-05-01', '2025-06-02', '2025-06-23', '2025-06-30', '2025-07-20',
    '2025-08-07', '2025-08-18', '2025-10-13', '2025-11-03', '2025-11-17',
    '2025-12-08', '2025-12-25'
];
const FESTIVOS_COLOMBIA_2026 = [
    '2026-01-01', '2026-01-12', '2026-03-23', '2026-04-02', '2026-04-03',
    '2026-05-01', '2026-05-18', '2026-05-08', '2026-06-15', '2026-06-29', '2026-07-20', '2026-08-07',
    '2026-08-17', '2026-10-12', '2026-11-02', '2026-11-16', '2026-12-08',
    '2026-12-25'
];

// Variables globales
let datosOriginales = [];
let datosFiltrados = [];
let chartNoContestados = null;
let chartVencidos = null;
let chartTreemap = null;

// Variables para el modal de detalles
let currentPage = 1;
let itemsPerPage = 25;
let sortColumn = '';
let sortDirection = 'asc';
let tableSearchTerm = '';

// ===========================================
// FUNCIONES DE UTILIDAD
// ===========================================

/**
 * Verifica si una fecha es día festivo en Colombia
 */
function esFestivo(fecha) {
    const fechaStr = dayjs(fecha).format('YYYY-MM-DD');
    return FESTIVOS_COLOMBIA_2024.includes(fechaStr) || FESTIVOS_COLOMBIA_2025.includes(fechaStr) || FESTIVOS_COLOMBIA_2026.includes(fechaStr);
}

/**
 * Verifica si una fecha es fin de semana (sábado o domingo)
 */
function esFinDeSemana(fecha) {
    const dia = dayjs(fecha).day();

    // Debug para verificar días de la semana en septiembre 2025
    if (fecha.month() === 8 && fecha.year() === 2025 && Math.random() < 0.01) { // septiembre = mes 8
        console.log('🗓️ Debug fin de semana:', {
            fecha: fecha.format('DD/MM/YYYY dddd'),
            numeroDia: dia,
            esFinDeSemana: dia === 0 || dia === 6,
            esDomingo: dia === 0,
            esSabado: dia === 6
        });
    }

    return dia === 0 || dia === 6; // 0 = domingo, 6 = sábado
}

/**
 * Verifica si una fecha es día hábil
 */
function esDiaHabil(fecha) {
    const esFS = esFinDeSemana(fecha);
    const esFest = esFestivo(fecha);
    const esHabil = !esFS && !esFest;

    // Debug para fechas de septiembre 2025
    if (fecha.month() === 8 && fecha.year() === 2025 && Math.random() < 0.01) {
        console.log('🏢 Debug día hábil:', {
            fecha: fecha.format('DD/MM/YYYY dddd'),
            esFinDeSemana: esFS,
            esFestivo: esFest,
            esDiaHabil: esHabil
        });
    }

    return esHabil;
}

/**
 * Suma días hábiles a una fecha
 */
function sumarDiasHabiles(fechaInicio, diasHabiles) {
    let fecha = dayjs(fechaInicio);
    let diasRestantes = diasHabiles;

    // Debug para casos específicos - cualquier fecha de agosto 2025
    const esDebug = fechaInicio.month() === 7 && fechaInicio.year() === 2025 && Math.random() < 0.001; // agosto = mes 7

    if (esDebug) {
        console.log('🔍 Calculando días hábiles:', {
            fechaInicio: fechaInicio.format('DD/MM/YYYY dddd'),
            diasHabiles: diasHabiles,
            fechaActual: dayjs().format('DD/MM/YYYY dddd')
        });
    }

    // CORRECCIÓN IMPORTANTE: El plazo inicia al día SIGUIENTE del registro
    // Si se registra el 29/08, el día 1 para contar es el 30/08
    fecha = fecha.add(1, 'day');

    while (diasRestantes > 0) {
        if (esDiaHabil(fecha)) {
            diasRestantes--;
            if (esDebug && diasRestantes <= 5) {
                console.log(`  Día ${diasHabiles - diasRestantes}: ${fecha.format('DD/MM/YYYY dddd')} - Restantes: ${diasRestantes}`);
            }
        } else if (esDebug) {
            console.log(`  Omitido: ${fecha.format('DD/MM/YYYY dddd')} (no hábil)`);
        }

        if (diasRestantes > 0) {
            fecha = fecha.add(1, 'day');
        }
    }

    if (esDebug) {
        console.log('  ✅ Fecha máxima calculada:', fecha.format('DD/MM/YYYY dddd'));
    }

    return fecha;
}

/**
 * Parsea fecha en formato dd/mm/yy o dd/mm/yyyy
 */
function parsearFecha(fechaStr) {
    // Verificar que tenemos un valor válido
    if (!fechaStr || fechaStr === '' || fechaStr === null || fechaStr === undefined) {
        return null;
    }

    // Convertir a string si no lo es
    let fechaString = String(fechaStr).trim();

    // Verificar valores que indican "no aplica"
    const valoresNoAplica = ['n.a', 'na', 'no tramitada', 'no contestado', 'pendiente', 'empty'];
    if (valoresNoAplica.some(val => fechaString.toLowerCase().includes(val))) {
        return null;
    }

    // Si contiene múltiples fechas separadas por " - ", tomar la primera
    if (fechaString.includes(' - ')) {
        const fechas = fechaString.split(' - ');
        fechaString = fechas[0].trim();
        // Solo log en modo debug si es necesario
        // console.log(`📅 Fecha múltiple detectada, usando la primera: ${fechaString}`);
    }    // Si está vacía después de la limpieza
    if (!fechaString || fechaString === '') {
        return null;
    }

    // Intentar diferentes formatos
    let fecha = null;

    try {
        // Formato dd/mm/yy
        if (fechaString.match(/^\d{1,2}\/\d{1,2}\/\d{2}$/)) {
            fecha = dayjs(fechaString, 'DD/MM/YY');
        }
        // Formato dd/mm/yyyy
        else if (fechaString.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
            fecha = dayjs(fechaString, 'DD/MM/YYYY');
        }
        // Formato dd-mm-yy
        else if (fechaString.match(/^\d{1,2}-\d{1,2}-\d{2}$/)) {
            fecha = dayjs(fechaString, 'DD-MM-YY');
        }
        // Formato dd-mm-yyyy
        else if (fechaString.match(/^\d{1,2}-\d{1,2}-\d{4}$/)) {
            fecha = dayjs(fechaString, 'DD-MM-YYYY');
        }
        // Si es un número (fecha serial de Excel) - CONVERSIÓN CORREGIDA
        else if (!isNaN(fechaString) && fechaString > 25000) {
            // ✅ SOLUCIÓN: Usar época Excel correcta (1899-12-30)
            // Esto resuelve el problema de desplazamiento de fechas
            const valorNumerico = parseInt(fechaString);
            fecha = dayjs('1899-12-30').add(valorNumerico, 'days');
        }
        // Intentar parseo automático como último recurso
        else if (fechaString.length > 0) {
            fecha = dayjs(fechaString);
        }

        // Verificar que la fecha es válida y razonable (entre 2020 y 2026 para incluir 2025)
        if (fecha && fecha.isValid() && fecha.year() >= 2020 && fecha.year() <= 2026) {
            return fecha;
        } else {
            // Solo mostrar warning para casos realmente problemáticos
            if (!valoresNoAplica.some(val => fechaString.toLowerCase().includes(val)) &&
                !fechaString.includes(' - ') && fechaString.length > 0) {
                console.warn(`⚠️ Fecha no reconocida: ${fechaString}`);
            }
            return null;
        }

    } catch (error) {
        // Silenciar warnings para casos conocidos y fechas múltiples
        if (!valoresNoAplica.some(val => fechaString.toLowerCase().includes(val)) &&
            !fechaString.includes(' - ')) {
            console.warn(`⚠️ Error parseando fecha "${fechaString}":`, error.message);
        }
        return null;
    }
}

/**
 * Determina el estado de un radicado
 */
function determinarEstado(oficioRespuesta, fechaRespuesta) {
    // Normalizar valores - convertir a string de forma segura
    const oficioStr = oficioRespuesta ? String(oficioRespuesta).toLowerCase().trim() : '';
    const fechaStr = fechaRespuesta ? String(fechaRespuesta).toLowerCase().trim() : '';

    // Casos específicos que indican "No Requiere Respuesta"
    // Solo cuando EXPLÍCITAMENTE dice NA, N.A, NO TRAMITADA, etc.
    const noRequierePatterns = ['n.a', 'na', 'no tramitada', 'no aplica'];

    const oficioEsNoRequiere = noRequierePatterns.some(pattern =>
        oficioStr === pattern || oficioStr.includes(pattern)
    );

    const fechaEsNoRequiere = noRequierePatterns.some(pattern =>
        fechaStr === pattern || fechaStr.includes(pattern)
    );

    // Solo es "No Requiere Respuesta" si EXPLÍCITAMENTE tiene NA, N.A, etc.
    if (oficioEsNoRequiere || fechaEsNoRequiere) {
        // Debug temporal para verificar casos
        if (Math.random() < 0.001) { // Solo mostrar ~0.1% de los casos para no saturar
            console.log('🔍 No Requiere Respuesta:', {
                oficio: oficioRespuesta,
                fecha: fechaRespuesta,
                oficioStr: oficioStr,
                fechaStr: fechaStr
            });
        }
        return 'No Requiere Respuesta';
    }

    // Si tiene fecha de respuesta válida (que se puede parsear)
    const fechaParsed = parsearFecha(fechaRespuesta);
    if (fechaParsed && fechaParsed.isValid()) {
        return 'Contestado';
    }

    // Si no tiene fecha de respuesta válida y tampoco es explícitamente "No Requiere"
    return 'No Contestado';
}

/**
 * Calcula el estado de vencimiento
 */
function calcularEstadoVencimiento(fechaRegistro, tipo, fechaRespuesta, estado) {
    if (estado === 'No Requiere Respuesta') {
        return 'No Aplica';
    }

    // Obtener plazo del tipo
    const plazo = PLAZOS_POR_TIPO[tipo] || 10; // Plazo por defecto: 10 días

    // Calcular fecha máxima de respuesta
    const fechaMaxima = sumarDiasHabiles(fechaRegistro, plazo);

    if (estado === 'Contestado') {
        const fechaRespuestaParsed = parsearFecha(fechaRespuesta);
        if (fechaRespuestaParsed && fechaRespuestaParsed.isAfter(fechaMaxima, 'day')) {
            return 'Contestado Fuera de Término';
        } else {
            return 'Contestado dentro del Término';
        }
    } else if (estado === 'No Contestado') {
        const fechaActual = dayjs();

        // Debug temporal para verificar cálculos
        if ((tipo === 'Derecho de Petición (15 Días)' || tipo.includes('15 Días')) && Math.random() < 0.01) {
            console.log('🔍 Debug Plazo Detallado:', {
                tipo: tipo,
                plazo: plazo,
                fechaRegistro: fechaRegistro.format('DD/MM/YYYY'),
                fechaMaxima: fechaMaxima.format('DD/MM/YYYY'),
                fechaActual: fechaActual.format('DD/MM/YYYY'),
                vencido: fechaActual.isAfter(fechaMaxima, 'day'),
                esIgual: fechaActual.isSame(fechaMaxima, 'day'),
                diasTranscurridos: fechaActual.diff(fechaRegistro, 'days'),
                resultadoEstado: fechaActual.isAfter(fechaMaxima, 'day') ? 'Vencido' : 'Vigente'
            });
        }

        // Debug específico para registros que se vencen exactamente HOY o mañana
        if (fechaMaxima.isSame(dayjs(), 'day') || fechaMaxima.isSame(dayjs().add(1, 'day'), 'day')) {
            console.log('⏰ Registro que se vence HOY/MAÑANA:', JSON.stringify({
                codigo: 'N/A', // No tenemos acceso al código aquí
                tipo: tipo,
                fechaRegistro: fechaRegistro.format('DD/MM/YYYY'),
                fechaMaxima: fechaMaxima.format('DD/MM/YYYY'),
                fechaActual: fechaActual.format('DD/MM/YYYY'),
                horaActual: fechaActual.format('HH:mm:ss'),
                esVencido: fechaActual.isAfter(fechaMaxima, 'day'),
                isSameDay: fechaActual.isSame(fechaMaxima, 'day'),
                clasificacion: fechaActual.isAfter(fechaMaxima, 'day') ? 'Plazo Vencido' : 'Plazo Vigente'
            }, null, 2));
        }

        // CORREGIDO: Un plazo se vence DESPUÉS del último día hábil, no durante
        // Si estamos en el mismo día que la fecha máxima, el plazo AÚN está vigente
        // Solo se vence si ya pasó completamente el día límite
        if (fechaActual.isAfter(fechaMaxima, 'day')) {
            return 'No Contestado - Plazo Vencido';
        } else {
            // Si es el mismo día o una fecha futura, el plazo está vigente
            return 'No Contestado - Plazo Vigente';
        }
    }

    return 'Desconocido';
}

/**
 * Obtiene la dependencia simplificada
 */
function obtenerDependenciaSimplificada(dependenciaOriginal) {
    if (!dependenciaOriginal) {
        return 'SIN DEPENDENCIA';
    }

    const dependenciaStr = String(dependenciaOriginal).trim();

    // Buscar coincidencia exacta primero
    if (MAPEO_DEPENDENCIAS[dependenciaStr]) {
        return MAPEO_DEPENDENCIAS[dependenciaStr];
    }

    // Buscar coincidencia parcial (case insensitive)
    const dependenciaLower = dependenciaStr.toLowerCase();
    for (const [key, value] of Object.entries(MAPEO_DEPENDENCIAS)) {
        if (key.toLowerCase().includes(dependenciaLower) || dependenciaLower.includes(key.toLowerCase())) {
            console.log(`📍 Mapeo parcial encontrado: "${dependenciaStr}" -> "${value}"`);
            return value;
        }
    }

    // Si no encuentra mapeo, usar "OTROS" y loguear para revisión
    console.warn(`🔍 Dependencia sin mapear: "${dependenciaStr}"`);
    return 'OTROS';
}

/**
 * Muestra modal de error
 */
function mostrarError(mensaje) {
    console.error('Error:', mensaje);

    const errorModal = document.getElementById('error-modal');
    const errorMessage = document.getElementById('error-message');

    if (errorModal && errorMessage) {
        errorMessage.textContent = mensaje;
        errorModal.classList.remove('hidden');
    } else {
        // Respaldo si los elementos no están disponibles
        alert('Error: ' + mensaje);
    }
}

/**
 * Cierra modal de error
 */
function closeErrorModal() {
    document.getElementById('error-modal').classList.add('hidden');
}

/**
 * Muestra indicador de carga
 */
function mostrarCarga() {
    document.getElementById('loading').classList.remove('hidden');
}

/**
 * Oculta indicador de carga
 */
function ocultarCarga() {
    document.getElementById('loading').classList.add('hidden');
}

// ===========================================
// PROCESAMIENTO DE DATOS
// ===========================================

/**
 * Procesa el archivo Excel
 */
function procesarArchivo(archivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (e) {
            try {
                mostrarCarga();

                // Leer el archivo Excel
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });

                // Obtener la primera hoja
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];

                console.log('📄 Hoja de Excel:', sheetName);

                // Convertir a JSON
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                console.log('📊 Datos raw del Excel:');
                console.log('- Total de filas:', jsonData.length);
                console.log('- Últimas 5 filas completas:', jsonData.slice(-5));
                if (jsonData.length > 0) {
                    console.log('- Headers (fila 1):', jsonData[0]);
                }
                if (jsonData.length > 1) {
                    console.log('- Muestra fila 2:', jsonData[1]);
                }
                if (jsonData.length > 2) {
                    console.log('- Muestra fila 3:', jsonData[2]);
                }

                if (jsonData.length < 2) {
                    throw new Error('El archivo no contiene datos suficientes');
                }

                // Procesar los datos
                const datosProcessados = procesarDatos(jsonData);

                resolve(datosProcessados);

            } catch (error) {
                reject(error);
            } finally {
                ocultarCarga();
            }
        };

        reader.onerror = function () {
            ocultarCarga();
            reject(new Error('Error al leer el archivo'));
        };

        reader.readAsArrayBuffer(archivo);
    });
}

/**
 * Procesa los datos del Excel y añade campos calculados
 */
function procesarDatos(jsonData) {
    const headers = jsonData[0];
    const filas = jsonData.slice(1);

    console.log('📋 Headers encontrados:', headers);
    console.log('📊 Total de filas de datos:', filas.length);

    // Validar encabezados esperados
    const encabezadosEsperados = [
        'Código', 'Asunto', 'Emisor', 'Fecha de registro', 'Hora de registro',
        'Tipo', 'Medio Recepción', 'Dependencia que recibe', 'Oficio de Respuesta', 'Fecha de respuesta'
    ];

    // Verificar que existen los encabezados básicos
    const encabezadosPresentes = encabezadosEsperados.filter(header =>
        headers.some(h => h && h.toString().toLowerCase().includes(header.toLowerCase()))
    );

    console.log('✅ Headers presentes:', encabezadosPresentes);

    if (encabezadosPresentes.length < 6) {
        throw new Error('El archivo no contiene las columnas esperadas. Verifique el formato.');
    }

    const datosProcessados = [];
    let erroresContados = 0;
    const maxErrores = 10; // Limitar errores mostrados

    console.log('🗓️ Fecha actual del sistema:', dayjs().format('DD/MM/YYYY HH:mm:ss dddd'));

    // Debug específico para fechas críticas de septiembre 2025
    const fechasCriticas = [
        dayjs('2025-09-19'), // Hoy
        dayjs('2025-09-20'), // Mañana  
        dayjs('2025-09-21'), // Sábado
        dayjs('2025-09-22')  // Domingo
    ];

    console.log('🔍 Verificación de fechas críticas:');
    fechasCriticas.forEach(fecha => {
        console.log(`  ${fecha.format('DD/MM/YYYY dddd')}: Fin semana=${esFinDeSemana(fecha)}, Festivo=${esFestivo(fecha)}, Hábil=${esDiaHabil(fecha)}`);
    });

    // Contadores para debugging
    let contadorFilas = 0;
    let filasVacias = 0;
    let registros29Agosto = 0;

    // Reusar variables existentes
    erroresContados = 0;

    console.log(`📊 INICIANDO PROCESAMIENTO: ${filas.length} filas totales`);

    filas.forEach((fila, index) => {
        contadorFilas++;

        try {
            // Verificar que la fila no esté vacía
            if (!fila || fila.length === 0 || !fila.some(cell => cell !== null && cell !== undefined && cell !== '')) {
                filasVacias++;
                // Debug para filas vacías al final
                if (index >= filas.length - 20) {
                    console.log(`📭 Fila vacía ${index + 2}: longitud=${fila?.length || 0}, contenido:`, fila);
                }
                return; // Saltar filas vacías
            }

            // Extraer campos básicos (asumiendo orden fijo)
            const registro = {
                codigo: fila[0] ? String(fila[0]).trim() : '',
                asunto: fila[1] ? String(fila[1]).trim() : '',
                emisor: fila[2] ? String(fila[2]).trim() : '',
                fechaRegistro: fila[3],
                horaRegistro: fila[4] ? String(fila[4]).trim() : '',
                tipo: fila[5] ? String(fila[5]).trim() : '',
                medioRecepcion: fila[6] ? String(fila[6]).trim() : '',
                dependenciaRecibe: fila[7] ? String(fila[7]).trim() : '',
                oficioRespuesta: fila[8] ? String(fila[8]).trim() : '',
                fechaRespuesta: fila[9]
            };

            // Validar que tiene datos mínimos
            if (!registro.codigo || !registro.fechaRegistro || !registro.tipo) {
                if (erroresContados < maxErrores) {
                    console.warn(`⚠️ Fila ${index + 2} omitida: datos incompletos`, {
                        codigo: registro.codigo,
                        fechaRegistro: registro.fechaRegistro,
                        tipo: registro.tipo
                    });
                    erroresContados++;
                }
                return;
            }

            // Parsear fecha de registro
            const fechaRegistroParsed = parsearFecha(registro.fechaRegistro);
            if (!fechaRegistroParsed) {
                if (erroresContados < maxErrores) {
                    console.warn(`⚠️ Fila ${index + 2} omitida: fecha de registro inválida "${registro.fechaRegistro}"`);
                    erroresContados++;
                }
                return;
            }

            // Calcular campos derivados
            const estado = determinarEstado(registro.oficioRespuesta, registro.fechaRespuesta);
            const estadoVencimiento = calcularEstadoVencimiento(
                fechaRegistroParsed,
                registro.tipo,
                registro.fechaRespuesta,
                estado
            );
            const dependenciaSimplificada = obtenerDependenciaSimplificada(registro.dependenciaRecibe);

            // Calcular fecha máxima de respuesta
            const plazo = PLAZOS_POR_TIPO[registro.tipo] || 10;
            const fechaMaximaRespuesta = sumarDiasHabiles(fechaRegistroParsed, plazo);

            // Crear objeto completo
            const registroCompleto = {
                ...registro,
                fechaRegistroParsed: fechaRegistroParsed,
                fechaRespuestaParsed: parsearFecha(registro.fechaRespuesta),
                estado: estado,
                estadoVencimiento: estadoVencimiento,
                dependenciaSimplificada: dependenciaSimplificada,
                plazo: plazo,
                fechaMaximaRespuesta: fechaMaximaRespuesta,
                año: fechaRegistroParsed.year(),
                mes: fechaRegistroParsed.month() + 1, // dayjs usa meses 0-11
                mesNombre: fechaRegistroParsed.format('MMMM')
            };

            datosProcessados.push(registroCompleto);

            // Contar registros del 29/08/2025
            if (fechaRegistroParsed && fechaRegistroParsed.format('DD/MM/YYYY') === '29/08/2025') {
                registros29Agosto++;
            }

        } catch (error) {
            if (erroresContados < maxErrores) {
                console.error(`❌ Error procesando fila ${index + 2}:`, error.message);
                console.log('Datos de la fila:', fila);
                erroresContados++;
            }
        }
    });

    if (erroresContados >= maxErrores) {
        console.warn(`⚠️ Se encontraron más de ${maxErrores} errores. Solo se muestran los primeros ${maxErrores}.`);
    }

    console.log(`✅ Procesados ${datosProcessados.length} registros de ${filas.length} filas`);
    console.log(`📊 ESTADÍSTICAS DE PROCESAMIENTO:`, {
        filasAnalizadas: contadorFilas,
        filasVacias: filasVacias,
        registrosExitosos: datosProcessados.length,
        registros29Agosto: registros29Agosto,
        ultimasFilasVacias: filasVacias > 0 ? `Sí (${filasVacias})` : 'No'
    });

    if (datosProcessados.length === 0) {
        throw new Error(`No se pudieron procesar datos válidos. 
        Verifique que:
        1. El archivo tiene las columnas correctas
        2. Las fechas están en formato dd/mm/yy o dd/mm/yyyy
        3. Los datos no están vacíos`);
    }

    // Mostrar muestra de los primeros registros procesados
    if (datosProcessados.length > 0) {
        console.log('📋 Muestra de registros procesados:', datosProcessados.slice(0, 3));

        // Estadísticas rápidas del procesamiento
        const estadisticas = {
            total: datosProcessados.length,
            años: [...new Set(datosProcessados.map(d => d.año))].sort(),
            dependencias: [...new Set(datosProcessados.map(d => d.dependenciaSimplificada))].length,
            dependenciasUnicas: [...new Set(datosProcessados.map(d => d.dependenciaSimplificada))].sort(),
            tipos: [...new Set(datosProcessados.map(d => d.tipo))].length,
            porcentajeProcesado: ((datosProcessados.length / filas.length) * 100).toFixed(1)
        };

        // Debug de estados
        const estadoConteo = {};
        const vencimientoConteo = {};
        datosProcessados.forEach(registro => {
            if (!estadoConteo[registro.estado]) {
                estadoConteo[registro.estado] = 0;
            }
            estadoConteo[registro.estado]++;

            if (!vencimientoConteo[registro.estadoVencimiento]) {
                vencimientoConteo[registro.estadoVencimiento] = 0;
            }
            vencimientoConteo[registro.estadoVencimiento]++;
        });

        console.log('📊 Estadísticas del archivo:', estadisticas);
        console.log('📊 Conteo por estados:');
        Object.entries(estadoConteo).forEach(([estado, count]) => {
            console.log(`  ${estado}: ${count}`);
        });
        console.log('📊 Conteo por vencimiento:');
        Object.entries(vencimientoConteo).forEach(([venc, count]) => {
            console.log(`  ${venc}: ${count}`);
        });
        console.log('🏢 Dependencias procesadas:', estadisticas.dependenciasUnicas);

        // Mostrar algunos ejemplos de registros con plazo vigente
        const vigentesEjemplos = datosProcessados
            .filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vigente')
            .slice(0, 3)
            .map(d => ({
                codigo: d.codigo,
                tipo: d.tipo,
                fechaRegistro: d.fechaRegistroParsed.format('DD/MM/YYYY'),
                fechaMaxima: d.fechaMaximaRespuesta.format('DD/MM/YYYY'),
                plazo: d.plazo,
                estadoVencimiento: d.estadoVencimiento,
                diasRestantes: dayjs().diff(d.fechaMaximaRespuesta, 'day'),
                esMismoDia: dayjs().isSame(d.fechaMaximaRespuesta, 'day')
            }));

        if (vigentesEjemplos.length > 0) {
            console.log('📅 Ejemplos de registros con plazo vigente:', vigentesEjemplos);
        } else {
            console.log('⚠️ No se encontraron registros con plazo vigente');

            // Buscar registros que deberían tener plazo vigente - casos críticos
            const candidatos = datosProcessados
                .filter(d => d.estado === 'No Contestado')
                .filter(d => {
                    const diasDiff = dayjs().diff(d.fechaMaximaRespuesta, 'day');
                    return diasDiff >= -2 && diasDiff <= 2; // Entre 2 días antes y 2 días después de hoy
                })
                .slice(0, 10)
                .map(d => ({
                    codigo: d.codigo,
                    tipo: d.tipo,
                    estado: d.estado,
                    fechaRegistro: d.fechaRegistroParsed.format('DD/MM/YYYY'),
                    fechaMaxima: d.fechaMaximaRespuesta.format('DD/MM/YYYY'),
                    estadoVencimiento: d.estadoVencimiento,
                    fechaActual: dayjs().format('DD/MM/YYYY'),
                    diasDiferencia: dayjs().diff(d.fechaMaximaRespuesta, 'day'),
                    esMismoDia: dayjs().isSame(d.fechaMaximaRespuesta, 'day'),
                    esAntes: dayjs().isBefore(d.fechaMaximaRespuesta, 'day'),
                    esDespues: dayjs().isAfter(d.fechaMaximaRespuesta, 'day')
                }));
            console.log('🔍 Registros críticos (cercanos a hoy):');
            candidatos.forEach((reg, index) => {
                console.log(`  ${index + 1}. ${reg.codigo} - ${reg.tipo}`);
                console.log(`     Fecha máxima: ${reg.fechaMaxima} | Hoy: ${reg.fechaActual}`);
                console.log(`     Días diferencia: ${reg.diasDiferencia} | Mismo día: ${reg.esMismoDia}`);
                console.log(`     Estado: ${reg.estadoVencimiento}`);
                console.log(`     Es antes: ${reg.esAntes} | Es después: ${reg.esDespues}`);
                console.log('     ---');
            });

            // Buscar específicamente registros con fecha 19/09/2025
            const hoy19Sept = datosProcessados.filter(d =>
                d.fechaMaximaRespuesta.format('DD/MM/YYYY') === '19/09/2025'
            );
            console.log(`🎯 Registros con fecha máxima exactamente 19/09/2025: ${hoy19Sept.length}`);
            if (hoy19Sept.length > 0) {
                hoy19Sept.slice(0, 5).forEach((reg, i) => {
                    console.log(`  ${i + 1}. ${reg.codigo} - Estado: ${reg.estadoVencimiento}`);
                    console.log(`     Tipo: ${reg.tipo} | Plazo: ${reg.plazo} días`);
                    console.log(`     Fecha registro: ${reg.fechaRegistroParsed.format('DD/MM/YYYY')}`);
                });
            }

            // Buscar registros con fechas futuras (20/09/2025 en adelante)
            const futuros = datosProcessados.filter(d =>
                d.fechaMaximaRespuesta.isAfter(dayjs('2025-09-19'), 'day') && d.estado === 'No Contestado'
            );
            console.log(`🔮 Registros con fecha máxima futura (después del 19/09/2025): ${futuros.length}`);
            if (futuros.length > 0) {
                futuros.slice(0, 5).forEach((reg, i) => {
                    console.log(`  ${i + 1}. ${reg.codigo} - Vence: ${reg.fechaMaximaRespuesta.format('DD/MM/YYYY')}`);
                    console.log(`     Estado: ${reg.estadoVencimiento} | Tipo: ${reg.tipo}`);
                    console.log(`     Registro: ${reg.fechaRegistroParsed.format('DD/MM/YYYY')}`);
                });
            }

            // Debugging adicional: buscar registros de fechas específicas recientes
            const registrosAgosto = datosProcessados.filter(r =>
                r.fechaRegistroParsed.format('DD/MM/YYYY') === '29/08/2025'
            );
            console.log('🔍 Registros del 29/08/2025:', registrosAgosto.length);

            if (registrosAgosto.length > 0) {
                console.log('📊 Análisis de registros del 29/08/2025:');
                registrosAgosto.slice(0, 3).forEach((registro, index) => {
                    console.log(`  ${index + 1}. ${registro.codigo}`);
                    console.log(`     Tipo: ${registro.tipo} (${registro.plazoTipo || 'N/A'} días)`);
                    console.log(`     Fecha registro: ${registro.fechaRegistroParsed.format('DD/MM/YYYY')}`);
                    console.log(`     Fecha máxima calculada: ${registro.fechaMaximaRespuesta.format('DD/MM/YYYY')}`);
                    console.log(`     Estado calculado: ${registro.estadoVencimiento}`);
                    console.log(`     Hoy (19/09) es después: ${dayjs().isAfter(registro.fechaMaximaRespuesta, 'day')}`);
                    console.log(`     Diferencia días: ${dayjs().diff(registro.fechaMaximaRespuesta, 'day')}`);
                    console.log('     ---');
                });
            }

            // Verificar registros de septiembre que deberían estar vigentes
            const registrosSeptiembre = datosProcessados.filter(r =>
                r.fechaRegistroParsed.month() === 8 && // Septiembre (0-indexed)
                r.fechaRegistroParsed.date() >= 10 &&
                r.estado === 'No Contestado'
            );
            console.log('🔍 Registros de septiembre 2025 (día 10+):', registrosSeptiembre.length);

            if (registrosSeptiembre.length > 0) {
                console.log('📊 Análisis de registros recientes de septiembre:');
                registrosSeptiembre.slice(0, 3).forEach((registro, index) => {
                    console.log(`  ${index + 1}. ${registro.codigo}`);
                    console.log(`     Fecha registro: ${registro.fechaRegistroParsed.format('DD/MM/YYYY')}`);
                    console.log(`     Fecha máxima: ${registro.fechaMaximaRespuesta.format('DD/MM/YYYY')}`);
                    console.log(`     Estado: ${registro.estadoVencimiento}`);
                    console.log(`     ¿Es futuro?: ${registro.fechaMaximaRespuesta.isAfter(dayjs(), 'day')}`);
                    console.log('     ---');
                });
            }

            // Análisis adicional: encontrar las fechas más recientes en todo el dataset
            const fechasUnicas = [...new Set(datosProcessados.map(r => r.fechaRegistroParsed.format('DD/MM/YYYY')))];
            const fechasOrdenadas = fechasUnicas
                .map(fecha => ({
                    fecha: fecha,
                    dayjs: dayjs(fecha, 'DD/MM/YYYY'),
                    count: datosProcessados.filter(r => r.fechaRegistroParsed.format('DD/MM/YYYY') === fecha).length
                }))
                .sort((a, b) => b.dayjs.diff(a.dayjs))
                .slice(0, 10);

            console.log('📅 Las 10 fechas de registro más recientes en el dataset:');
            fechasOrdenadas.forEach((item, index) => {
                console.log(`  ${index + 1}. ${item.fecha} - ${item.count} registros`);
            });

            // Verificar específicamente registros del 29/08/2025
            const registros29Agosto = datosProcessados.filter(r =>
                r.fechaRegistroParsed.format('DD/MM/YYYY') === '29/08/2025' &&
                r.estado === 'No Contestado'
            );
            console.log(`🎯 Registros del 29/08/2025 (no contestados): ${registros29Agosto.length}`);

            if (registros29Agosto.length > 0) {
                console.log('📊 Análisis detallado de registros del 29/08/2025:');
                registros29Agosto.slice(0, 3).forEach((registro, index) => {
                    console.log(`  ${index + 1}. ${registro.codigo} - ${registro.tipo}`);
                    console.log(`     Plazo: ${registro.plazoTipo || 'N/A'} días`);
                    console.log(`     Fecha máxima: ${registro.fechaMaximaRespuesta.format('DD/MM/YYYY')}`);
                    console.log(`     ¿Vigente?: ${registro.fechaMaximaRespuesta.isAfter(dayjs(), 'day') ? 'SÍ' : 'NO'}`);
                    console.log(`     Estado: ${registro.estadoVencimiento}`);
                    console.log('     ---');
                });
            }

            // Verificar si hay registros que podrían tener plazo vigente
            const registrosRecientes = datosProcessados.filter(r =>
                r.fechaRegistroParsed.isAfter(dayjs().subtract(30, 'day')) &&
                r.estado === 'No Contestado'
            );
            console.log(`🔍 Registros de los últimos 30 días (no contestados): ${registrosRecientes.length}`);

            if (registrosRecientes.length > 0) {
                console.log('📊 Análisis de registros de los últimos 30 días:');
                registrosRecientes.slice(0, 5).forEach((registro, index) => {
                    console.log(`  ${index + 1}. ${registro.codigo} - ${registro.fechaRegistroParsed.format('DD/MM/YYYY')}`);
                    console.log(`     Tipo: ${registro.tipo}`);
                    console.log(`     Fecha máxima: ${registro.fechaMaximaRespuesta.format('DD/MM/YYYY')}`);
                    console.log(`     ¿Vigente?: ${registro.fechaMaximaRespuesta.isAfter(dayjs(), 'day') ? 'SÍ' : 'NO'}`);
                    console.log('     ---');
                });
            }
        }
    }

    return datosProcessados;
}

// ===========================================
// FILTROS Y ACTUALIZACIONES
// ===========================================

/**
 * Inicializa los filtros con los datos disponibles
 */
function inicializarFiltros() {
    const años = [...new Set(datosOriginales.map(d => d.año))].sort((a, b) => b - a);
    const dependencias = [...new Set(datosOriginales.map(d => d.dependenciaSimplificada))].sort();

    console.log('🏢 Dependencias simplificadas encontradas:', dependencias);

    // Llenar selector de años
    const yearSelect = document.getElementById('year-filter');
    yearSelect.innerHTML = '<option value="">Todos los años</option>';
    años.forEach(año => {
        const option = document.createElement('option');
        option.value = año;
        option.textContent = año;
        yearSelect.appendChild(option);
    });

    // Llenar selector de dependencias
    const depSelect = document.getElementById('dependency-filter');
    depSelect.innerHTML = '<option value="">Todas las dependencias</option>';
    dependencias.forEach(dep => {
        const option = document.createElement('option');
        option.value = dep;
        option.textContent = dep;
        depSelect.appendChild(option);
    });

    // Llenar selector de tipos (columna F)
    const tipos = [...new Set(datosOriginales.map(d => d.tipo).filter(tipo =>
        tipo && tipo !== '' && tipo !== null && tipo !== undefined && String(tipo).trim() !== ''
    ))].sort();

    console.log('📋 Tipos encontrados en columna F:', tipos);

    const typesSelect = document.getElementById('typesall-filter');
    typesSelect.innerHTML = ''; // Sin opción "Todos los tipos" para selección múltiple
    tipos.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo;
        option.textContent = tipo;
        typesSelect.appendChild(option);
    });

    // Actualizar contador inicial
    actualizarContadorTipos();
}

/**
 * Actualiza el contador de tipos seleccionados
 */
function actualizarContadorTipos() {
    const typesSelect = document.getElementById('typesall-filter');
    const selectedCount = typesSelect.selectedOptions.length;
    const counter = document.getElementById('types-count');

    if (selectedCount === 0) {
        counter.textContent = '0 seleccionados';
        counter.style.color = 'var(--text-secondary)';
    } else {
        counter.textContent = `${selectedCount} seleccionado${selectedCount > 1 ? 's' : ''}`;
        counter.style.color = 'var(--accent-blue)';
    }
}

/**
 * Aplica filtros a los datos
 */
function aplicarFiltros() {
    const yearFilter = document.getElementById('year-filter').value;
    const rangoMeses = obtenerRangoMeses();
    const dependencyFilter = document.getElementById('dependency-filter').value;
    const typesFilter = document.getElementById('types-filter').value;
    const radicadosFilter = document.getElementById('radicados-filter').value;

    // Obtener valores seleccionados del filtro múltiple de tipos
    const typesAllSelect = document.getElementById('typesall-filter');
    const selectedTypes = Array.from(typesAllSelect.selectedOptions).map(option => option.value);

    console.log('📋 Tipos seleccionados para filtrar:', selectedTypes);

    datosFiltrados = datosOriginales.filter(registro => {
        if (yearFilter && registro.año.toString() !== yearFilter) {
            return false;
        }

        // Filtro de rango de meses
        if (registro.mes < rangoMeses.inicio || registro.mes > rangoMeses.fin) {
            return false;
        }

        if (dependencyFilter && registro.dependenciaSimplificada !== dependencyFilter) {
            return false;
        }

        // Filtro de tipos múltiple (columna F) - filtrar por tipos seleccionados
        if (selectedTypes.length > 0 && !selectedTypes.includes(registro.tipo)) {
            return false;
        }

        // Filtro de tipos - sin tipología (columna F vacía)
        if (typesFilter === 'sin-tipologia') {
            const tipo = registro.tipo;
            if (tipo && tipo !== '' && tipo !== null && tipo !== undefined && String(tipo).trim() !== '') {
                return false;
            }
        }

        // Filtro de radicados - sin numeración (columna A vacía) 
        if (radicadosFilter === 'sin-numeracion') {
            const codigo = registro.codigo;
            if (codigo && codigo !== '' && codigo !== null && codigo !== undefined && String(codigo).trim() !== '') {
                return false;
            }
        }

        return true;
    });

    // Actualizar contador después de aplicar filtros
    actualizarContadorTipos();

    actualizarDashboard();
}

/**
 * Limpia todos los filtros
 */
function limpiarFiltros() {
    document.getElementById('year-filter').value = '';
    document.getElementById('dependency-filter').value = '';
    document.getElementById('types-filter').value = '';
    document.getElementById('radicados-filter').value = '';

    // Limpiar selección múltiple de tipos
    const typesSelect = document.getElementById('typesall-filter');
    Array.from(typesSelect.options).forEach(option => option.selected = false);

    // Actualizar contador de tipos después de limpiar
    actualizarContadorTipos();

    // Resetear range slider a valores completos
    document.getElementById('month-range-start').value = '1';
    document.getElementById('month-range-end').value = '12';

    // Actualizar display del range slider
    const startValue = document.getElementById('month-start-value');
    const endValue = document.getElementById('month-end-value');
    const rangeFill = document.querySelector('.range-fill');

    startValue.textContent = 'Enero';
    endValue.textContent = 'Diciembre';
    rangeFill.style.left = '0%';
    rangeFill.style.width = '100%';

    datosFiltrados = [...datosOriginales];
    actualizarDashboard();
}

// ===========================================
// ACTUALIZACIÓN DEL DASHBOARD
// ===========================================

/**
 * Actualiza todas las secciones del dashboard
 */
function actualizarDashboard() {
    actualizarKPIs();
    actualizarAnalisisTipos();
    actualizarGraficos();
    actualizarFooter();
}

/**
 * Actualiza las tarjetas KPI
 */
function actualizarKPIs() {
    const total = datosFiltrados.length;
    const contestados = datosFiltrados.filter(d => d.estado === 'Contestado').length;
    const noContestados = datosFiltrados.filter(d => d.estado === 'No Contestado').length;
    const noRequieren = datosFiltrados.filter(d => d.estado === 'No Requiere Respuesta').length;
    const vencidos = datosFiltrados.filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vencido').length;
    const vigentes = datosFiltrados.filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vigente').length;

    // Actualizar valores con animación
    animarValor('total-radicados', total);
    animarValor('total-contestados', contestados);
    animarValor('total-no-contestados', noContestados);
    animarValor('total-no-requieren', noRequieren);
    animarValor('total-vencidas', vencidos);
    animarValor('total-vigentes', vigentes);
}

/**
 * Anima el cambio de valor en un elemento
 */
function animarValor(elementId, valorFinal) {
    const elemento = document.getElementById(elementId);
    const valorActual = parseInt(elemento.textContent) || 0;

    elemento.classList.add('updating');

    // Animación numérica
    let valorTemporal = valorActual;
    const diferencia = valorFinal - valorActual;
    const pasos = 20;
    const incremento = diferencia / pasos;

    let contador = 0;
    const interval = setInterval(() => {
        contador++;
        valorTemporal += incremento;

        if (contador >= pasos) {
            elemento.textContent = valorFinal.toLocaleString();
            elemento.classList.remove('updating');
            clearInterval(interval);
        } else {
            elemento.textContent = Math.round(valorTemporal).toLocaleString();
        }
    }, 50);
}

/**
 * Actualiza el análisis de tipos (Top 5)
 */
function actualizarAnalisisTipos() {
    const tipoConteo = {};

    // Contar por tipo
    datosFiltrados.forEach(registro => {
        if (!tipoConteo[registro.tipo]) {
            tipoConteo[registro.tipo] = {
                total: 0,
                contestados: 0,
                noContestados: 0,
                noRequieren: 0
            };
        }

        tipoConteo[registro.tipo].total++;

        switch (registro.estado) {
            case 'Contestado':
                tipoConteo[registro.tipo].contestados++;
                break;
            case 'No Contestado':
                tipoConteo[registro.tipo].noContestados++;
                break;
            case 'No Requiere Respuesta':
                tipoConteo[registro.tipo].noRequieren++;
                break;
        }
    });

    // Obtener top 5
    const top5 = Object.entries(tipoConteo)
        .sort(([, a], [, b]) => b.total - a.total)
        .slice(0, 5);

    // Renderizar
    const container = document.getElementById('types-grid');
    container.innerHTML = '';

    top5.forEach(([tipo, datos], index) => {
        const card = document.createElement('div');
        card.className = 'type-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="type-header">
                <span class="type-name">${tipo}</span>
                <span class="type-total">${datos.total}</span>
            </div>
            <div class="type-breakdown">
                <div class="breakdown-item contestadas">
                    <span class="breakdown-value">${datos.contestados}</span>
                    <div class="breakdown-label">Contestadas</div>
                </div>
                <div class="breakdown-item no-contestadas">
                    <span class="breakdown-value">${datos.noContestados}</span>
                    <div class="breakdown-label">No Contestadas</div>
                </div>
                <div class="breakdown-item no-requieren">
                    <span class="breakdown-value">${datos.noRequieren}</span>
                    <div class="breakdown-label">No Req. Resp.</div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

/**
 * Actualiza todos los gráficos
 */
function actualizarGraficos() {
    console.log('🚀🚀🚀 INICIANDO ACTUALIZACIÓN DE GRÁFICOS 🚀🚀🚀');

    console.log('📊 1/4 Actualizando gráfico No Contestados...');
    try {
        actualizarGraficoNoContestados();
        console.log('✅ Gráfico No Contestados - OK');
    } catch (error) {
        console.error('❌ Error en gráfico No Contestados:', error);
    }

    console.log('📊 2/4 Actualizando gráfico Vencidos...');
    try {
        actualizarGraficoVencidos();
        console.log('✅ Gráfico Vencidos - OK');
    } catch (error) {
        console.error('❌ Error en gráfico Vencidos:', error);
    }

    console.log('📊 3/4 Actualizando gráfico Treemap...');
    try {
        actualizarGraficoTreemap();
        console.log('✅ Gráfico Treemap - OK');
    } catch (error) {
        console.error('❌ Error en gráfico Treemap:', error);
    }

    console.log('📊 4/4 Actualizando gráfico de Tendencias...');
    try {
        actualizarGraficoTendencia();
        console.log('✅ Gráfico Tendencias - OK');
    } catch (error) {
        console.error('❌ Error en gráfico Tendencias:', error);
    }

    console.log('✅✅✅ GRÁFICOS ACTUALIZADOS COMPLETAMENTE ✅✅✅');
}

/**
 * Configuración responsiva común para gráficas
 */
function getResponsiveChartConfig() {
    const isMobile = window.innerWidth < 768;
    const isSmallMobile = window.innerWidth < 480;

    return {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index'
        },
        elements: {
            bar: {
                borderRadius: isMobile ? 4 : 6
            }
        }
    };
}

/**
 * Obtiene configuración de escala responsiva
 */
function getResponsiveScaleConfig() {
    const isMobile = window.innerWidth < 768;
    const isSmallMobile = window.innerWidth < 480;

    return {
        ticks: {
            color: '#7d8590',
            font: {
                size: isSmallMobile ? 9 : isMobile ? 10 : 12
            },
            maxTicksLimit: isMobile ? 8 : 10
        }
    };
}

/**
 * Actualiza gráfico de no contestados por dependencia
 */
function actualizarGraficoNoContestados() {
    console.log('🚀 INICIANDO actualizarGraficoNoContestados()');

    // Verificar que Chart.js esté disponible
    if (!window.Chart) {
        console.error('❌ Chart.js no está disponible');
        return;
    }

    console.log('✅ Chart.js está disponible');

    const ctx = document.getElementById('chartNoContestados');
    if (!ctx) {
        console.error('❌ Elemento chartNoContestados no encontrado');
        return;
    }

    console.log('✅ Elemento chartNoContestados encontrado:', ctx);

    try {
        const ctxCanvas = ctx.getContext('2d');
        console.log('✅ Contexto 2d obtenido:', ctxCanvas);

        console.log('🔄 Preparando datos para gráfica No Contestados...');
        console.log('   - datosFiltrados disponibles:', datosFiltrados.length);

        // Preparar datos REALES - Filtrar por fecha de respuesta VACÍA (columna K)
        const dependenciaConteo = {};
        console.log('🎯 Buscando registros SIN fecha de respuesta (columna K vacía)');

        const registrosFiltrados = datosFiltrados.filter(d => {
            // Verificar si la fecha de respuesta está vacía (columna J)
            const fechaRespuesta = d.fechaRespuesta;
            if (!fechaRespuesta || fechaRespuesta === null || fechaRespuesta === undefined) {
                return true; // Sin fecha
            }
            // Verificar si es una cadena vacía o solo espacios
            const fechaStr = String(fechaRespuesta).trim();
            return fechaStr === '' || fechaStr === '-' || fechaStr.toLowerCase() === 'null';
        });
        console.log('📈 Registros SIN fecha de respuesta encontrados:', registrosFiltrados.length);

        registrosFiltrados.forEach(registro => {
            if (!dependenciaConteo[registro.dependenciaSimplificada]) {
                dependenciaConteo[registro.dependenciaSimplificada] = 0;
            }
            dependenciaConteo[registro.dependenciaSimplificada]++;
        });

        console.log('📊 Dependencias con datos:', Object.keys(dependenciaConteo).length);

        const datos = Object.entries(dependenciaConteo)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 15); // Top 15

        const labels = datos.map(([dep]) => dep);
        const values = datos.map(([, count]) => count);

        console.log('📊 Usando datos REALES:', labels.length, 'dependencias');
        console.log('   - Top 3:', labels.slice(0, 3));
        console.log('   - Valores:', values.slice(0, 3));

        // Destruir gráfico anterior si existe
        if (chartNoContestados) {
            console.log('🔄 Destruyendo gráfico anterior...');
            chartNoContestados.destroy();
        }

        // Crear nuevo gráfico - CONFIGURACIÓN BÁSICA SIN RESPONSIVE
        console.log('📊 Creando gráfico No Contestados, datos:', values.length, 'elementos');
        console.log('   - Labels:', labels.slice(0, 3), '...');
        console.log('   - Values:', values.slice(0, 3), '...');

        chartNoContestados = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'No Contestados',
                    data: values,
                    backgroundColor: 'rgba(210, 153, 34, 0.8)',
                    borderColor: 'rgb(210, 153, 34)',
                    borderWidth: 2,
                    borderRadius: 4,
                    borderSkipped: false
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 20,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(33, 37, 45, 0.95)',
                        titleColor: '#f0f6fc',
                        bodyColor: '#f0f6fc',
                        borderColor: '#58a6ff',
                        borderWidth: 1,
                        cornerRadius: 8
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(139, 148, 158, 0.1)'
                        },
                        ticks: {
                            color: '#8b949e'
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#8b949e',
                            maxTicksLimit: 15,
                            font: {
                                size: 11
                            },
                            // Asegurar que las etiquetas se alineen correctamente
                            align: 'end',
                            crossAlign: 'near'
                        }
                    }
                }
            }
        });

        console.log('✅ Gráfico No Contestados creado exitosamente');
    } catch (error) {
        console.error('❌ Error creando gráfico No Contestados:', error);
    }
}

/**
 * Actualiza gráfico de vencidos por dependencia
 */
function actualizarGraficoVencidos() {
    console.log('🚀 INICIANDO actualizarGraficoVencidos()');

    // Verificar que Chart.js esté disponible
    if (!window.Chart) {
        console.error('❌ Chart.js no está disponible');
        return;
    }

    const ctx = document.getElementById('chartVencidos');
    if (!ctx) {
        console.error('❌ Elemento chartVencidos no encontrado');
        return;
    }

    try {
        const ctxCanvas = ctx.getContext('2d');

        console.log('🔄 Preparando datos para gráfica Vencidos...');
        console.log('   - datosFiltrados disponibles:', datosFiltrados.length);

        // Preparar datos
        const dependenciaConteo = {};
        datosFiltrados
            .filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vencido')
            .forEach(registro => {
                if (!dependenciaConteo[registro.dependenciaSimplificada]) {
                    dependenciaConteo[registro.dependenciaSimplificada] = 0;
                }
                dependenciaConteo[registro.dependenciaSimplificada]++;
            });

        const datos = Object.entries(dependenciaConteo)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 15); // Top 15

        const labels = datos.map(([dep]) => dep);
        const values = datos.map(([, count]) => count);

        // Destruir gráfico anterior si existe
        if (chartVencidos) {
            chartVencidos.destroy();
        }

        // Crear nuevo gráfico - CONFIGURACIÓN BÁSICA SIN RESPONSIVE
        console.log('📊 Creando gráfico Vencidos, datos:', values.length, 'elementos');

        chartVencidos = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Vencidos',
                    data: values,
                    backgroundColor: 'rgba(248, 81, 73, 0.8)',
                    borderColor: 'rgb(248, 81, 73)',
                    borderWidth: 2,
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 20,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(33, 37, 45, 0.95)',
                        titleColor: '#f0f6fc',
                        bodyColor: '#f0f6fc',
                        borderColor: '#58a6ff',
                        borderWidth: 1,
                        cornerRadius: 8
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(139, 148, 158, 0.1)'
                        },
                        ticks: {
                            color: '#7d8590'
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#7d8590',
                            maxTicksLimit: 15,
                            font: {
                                size: 11
                            },
                            // Asegurar que las etiquetas se alineen correctamente
                            align: 'end',
                            crossAlign: 'near'
                        }
                    }
                }
            }
        });

        console.log('✅ Gráfico Vencidos creado exitosamente');
    } catch (error) {
        console.error('❌ Error creando gráfico Vencidos:', error);
    }
}

/**
 * Actualiza gráfico treemap (con alternativa como gráfico de barras)
 */
function actualizarGraficoTreemap() {
    console.log('🚀 INICIANDO actualizarGraficoTreemap()');

    // Verificar que Chart.js esté disponible
    if (!window.Chart) {
        console.error('❌ Chart.js no está disponible');
        return;
    }

    const ctx = document.getElementById('chartTreemap');
    if (!ctx) {
        console.error('❌ Elemento chartTreemap no encontrado');
        return;
    }

    try {
        const ctxCanvas = ctx.getContext('2d');

        console.log('🔄 Preparando datos para gráfica Treemap...');
        console.log('   - datosFiltrados disponibles:', datosFiltrados.length);

        // Preparar datos
        const dependenciaConteo = {};
        datosFiltrados.forEach(registro => {
            if (!dependenciaConteo[registro.dependenciaSimplificada]) {
                dependenciaConteo[registro.dependenciaSimplificada] = 0;
            }
            dependenciaConteo[registro.dependenciaSimplificada]++;
        });

        // Colores dinámicos
        const colores = [
            '#58a6ff', '#3fb950', '#f85149', '#d29922', '#a5a5ff', '#39d0d8',
            '#ff7ce7', '#ffa657', '#7c3aed', '#ef4444', '#06b6d4', '#84cc16'
        ];

        // Destruir gráfico anterior si existe
        if (chartTreemap) {
            chartTreemap.destroy();
        }

        // Crear gráfico de barras como alternativa más estable - CONFIGURACIÓN BÁSICA
        console.log('📊 Creando gráfico Treemap/Dependencias');

        const datos = Object.entries(dependenciaConteo)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 12); // Top 12 dependencias

        const labels = datos.map(([dep]) => dep);
        const values = datos.map(([, count]) => count);
        const backgroundColors = labels.map((_, index) => colores[index % colores.length] + '80');
        const borderColors = labels.map((_, index) => colores[index % colores.length]);

        chartTreemap = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Radicados por Dependencia',
                    data: values,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(33, 37, 45, 0.95)',
                        titleColor: '#f0f6fc',
                        bodyColor: '#f0f6fc',
                        borderColor: '#58a6ff',
                        borderWidth: 1,
                        cornerRadius: 8
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#7d8590',
                            maxRotation: 45
                        },
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#7d8590'
                        },
                        grid: {
                            color: 'rgba(139, 148, 158, 0.1)'
                        }
                    }
                }
            }
        });

        console.log('✅ Gráfico Treemap creado exitosamente');
    } catch (error) {
        console.error('❌ Error creando gráfico Treemap:', error);
    }
}

/**
 * Variable para almacenar la instancia del gráfico de tendencias
 */
let chartTendencia = null;

/**
 * Actualiza gráfico de tendencias por medios de recepción
 */
function actualizarGraficoTendencia() {
    console.log('🚀 INICIANDO actualizarGraficoTendencia()');

    if (!Chart) {
        console.error('❌ Chart.js no está disponible');
        return;
    }

    console.log('✅ Chart.js está disponible');

    const ctx = document.getElementById('chartTendencia');
    if (!ctx) {
        console.error('❌ Elemento chartTendencia no encontrado');
        return;
    }

    console.log('✅ Elemento chartTendencia encontrado:', ctx);

    try {
        console.log('🔄 Preparando datos para gráfica de tendencias...');
        console.log('   - datosFiltrados disponibles:', datosFiltrados.length);

        // Agrupar datos por mes y medio de recepción
        const datosPorMesYMedio = {};

        datosFiltrados.forEach(registro => {
            if (!registro.fechaRegistroParsed || !registro.medioRecepcion) return;

            const mesAnio = registro.fechaRegistroParsed.format('YYYY-MM');
            const medio = registro.medioRecepcion;

            if (!datosPorMesYMedio[mesAnio]) {
                datosPorMesYMedio[mesAnio] = {};
            }

            if (!datosPorMesYMedio[mesAnio][medio]) {
                datosPorMesYMedio[mesAnio][medio] = 0;
            }

            datosPorMesYMedio[mesAnio][medio]++;
        });

        // Obtener medios más utilizados (top 5)
        const mediosConteo = {};
        datosFiltrados.forEach(registro => {
            if (registro.medioRecepcion) {
                mediosConteo[registro.medioRecepcion] = (mediosConteo[registro.medioRecepcion] || 0) + 1;
            }
        });

        const topMedios = Object.entries(mediosConteo)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([medio]) => medio);

        // Obtener meses ordenados
        const mesesOrdenados = Object.keys(datosPorMesYMedio).sort();

        // Preparar datasets para cada medio
        const colors = [
            'rgb(88, 166, 255)',    // Azul
            'rgb(63, 185, 80)',     // Verde  
            'rgb(248, 81, 73)',     // Rojo
            'rgb(210, 153, 34)',    // Amarillo
            'rgb(165, 165, 255)'    // Púrpura
        ];

        const datasets = topMedios.map((medio, index) => {
            const data = mesesOrdenados.map(mes => {
                return datosPorMesYMedio[mes][medio] || 0;
            });

            return {
                label: medio,
                data: data,
                borderColor: colors[index],
                backgroundColor: colors[index].replace('rgb', 'rgba').replace(')', ', 0.1)'),
                borderWidth: 3,
                fill: false,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: colors[index],
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            };
        });

        // Formatear etiquetas de meses para mostrar
        const labels = mesesOrdenados.map(mes => {
            const [year, month] = mes.split('-');
            const fecha = dayjs(`${year}-${month}-01`);
            return fecha.format('MMM YYYY');
        });

        console.log('📊 Datos preparados:', topMedios.length, 'medios,', mesesOrdenados.length, 'meses');

        // Destruir gráfico anterior si existe
        if (chartTendencia) {
            console.log('🔄 Destruyendo gráfico anterior...');
            chartTendencia.destroy();
        }

        // Crear nuevo gráfico de líneas
        console.log('📊 Creando gráfico de tendencias...');

        chartTendencia = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#f0f6fc',
                            font: {
                                size: 11
                            },
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(33, 37, 45, 0.95)',
                        titleColor: '#f0f6fc',
                        bodyColor: '#f0f6fc',
                        borderColor: '#58a6ff',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: true,
                        intersect: false,
                        mode: 'index'
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(139, 148, 158, 0.1)',
                            drawOnChartArea: true
                        },
                        ticks: {
                            color: '#8b949e',
                            font: {
                                size: 11
                            },
                            maxRotation: 45
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(139, 148, 158, 0.1)'
                        },
                        ticks: {
                            color: '#8b949e',
                            font: {
                                size: 11
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });

        console.log('✅ Gráfico de tendencias creado exitosamente');
    } catch (error) {
        console.error('❌ Error creando gráfico de tendencias:', error);
    }
}

/**
 * Actualiza el footer con información de última actualización
 */
function actualizarFooter() {
    const ahora = new Date().toLocaleString('es-CO');
    document.getElementById('last-update').textContent = ahora;
    document.getElementById('total-records').textContent = datosFiltrados.length.toLocaleString();
}

// ===========================================
// INICIALIZACIÓN Y EVENTOS
// ===========================================

/**
 * Inicializa el range slider de meses
 */
function inicializarRangeSlider() {
    const startSlider = document.getElementById('month-range-start');
    const endSlider = document.getElementById('month-range-end');
    const startValue = document.getElementById('month-start-value');
    const endValue = document.getElementById('month-end-value');
    const rangeFill = document.querySelector('.range-fill');

    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    function updateRangeSlider() {
        let startVal = parseInt(startSlider.value);
        let endVal = parseInt(endSlider.value);

        // Asegurar que el inicio no sea mayor que el final
        if (startVal > endVal) {
            if (this === startSlider) {
                endSlider.value = startVal;
                endVal = startVal;
            } else {
                startSlider.value = endVal;
                startVal = endVal;
            }
        }

        // Actualizar textos
        startValue.textContent = monthNames[startVal - 1];
        endValue.textContent = monthNames[endVal - 1];

        // Actualizar barra de rango visual
        const percent1 = ((startVal - 1) / 11) * 100;
        const percent2 = ((endVal - 1) / 11) * 100;

        rangeFill.style.left = percent1 + '%';
        rangeFill.style.width = (percent2 - percent1) + '%';

        // Aplicar filtros
        aplicarFiltros();
    }

    // Event listeners
    startSlider.addEventListener('input', updateRangeSlider);
    endSlider.addEventListener('input', updateRangeSlider);

    // Inicialización inicial
    updateRangeSlider();
}

/**
 * Obtiene el rango de meses seleccionado
 */
function obtenerRangoMeses() {
    const start = parseInt(document.getElementById('month-range-start').value);
    const end = parseInt(document.getElementById('month-range-end').value);
    return { inicio: start, fin: end };
}

/**
 * Construye el resumen por dependencia con base en los datos filtrados
 */
function construirResumenDependencias(data) {
    const resumenPorDependencia = {};

    data.forEach(registro => {
        const dependencia = registro.dependenciaSimplificada || 'SIN DEPENDENCIA';

        if (!resumenPorDependencia[dependencia]) {
            resumenPorDependencia[dependencia] = {
                dependencia,
                totalRadicados: 0,
                totalContestadas: 0,
                noRequierenRespuesta: 0,
                contestadasATermino: 0,
                contestadasFueraDeTiempo: 0,
                noContestadas: 0,
                noContestadasPlazoVencido: 0,
                noContestadasPlazoVigente: 0
            };
        }

        const fila = resumenPorDependencia[dependencia];
        fila.totalRadicados++;

        if (registro.estado === 'Contestado') {
            fila.totalContestadas++;
        }

        if (registro.estado === 'No Requiere Respuesta') {
            fila.noRequierenRespuesta++;
        }

        if (registro.estadoVencimiento === 'Contestado dentro del Término') {
            fila.contestadasATermino++;
        }

        if (registro.estadoVencimiento === 'Contestado Fuera de Término') {
            fila.contestadasFueraDeTiempo++;
        }

        if (registro.estado === 'No Contestado') {
            fila.noContestadas++;
        }

        if (registro.estadoVencimiento === 'No Contestado - Plazo Vencido') {
            fila.noContestadasPlazoVencido++;
        }

        if (registro.estadoVencimiento === 'No Contestado - Plazo Vigente') {
            fila.noContestadasPlazoVigente++;
        }
    });

    return Object.values(resumenPorDependencia)
        .sort((a, b) => b.totalRadicados - a.totalRadicados || a.dependencia.localeCompare(b.dependencia));
}

/**
 * Abre modal con relacion por dependencia
 */
function openDependenciasModal() {
    const modal = document.getElementById('dependencias-modal');
    if (!modal) {
        return;
    }

    updateDependenciasModalTable();
    modal.style.display = 'flex';
}

/**
 * Cierra modal con relacion por dependencia
 */
function closeDependenciasModal() {
    const modal = document.getElementById('dependencias-modal');
    if (!modal) {
        return;
    }

    modal.style.display = 'none';
}

/**
 * Actualiza tabla del modal de relacion por dependencia
 */
function updateDependenciasModalTable() {
    const tbody = document.getElementById('dependencias-table-body');
    if (!tbody) {
        return;
    }

    const resumen = construirResumenDependencias(datosFiltrados);
    tbody.innerHTML = '';

    if (resumen.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    No hay datos disponibles para mostrar con los filtros actuales
                </td>
            </tr>
        `;
        return;
    }

    resumen.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.dependencia}</td>
            <td class="numeric-cell">${item.totalRadicados.toLocaleString()}</td>
            <td class="numeric-cell">${item.totalContestadas.toLocaleString()}</td>
            <td class="numeric-cell">${item.noRequierenRespuesta.toLocaleString()}</td>
            <td class="numeric-cell">${item.contestadasATermino.toLocaleString()}</td>
            <td class="numeric-cell">${item.contestadasFueraDeTiempo.toLocaleString()}</td>
            <td class="numeric-cell">${item.noContestadas.toLocaleString()}</td>
            <td class="numeric-cell">${item.noContestadasPlazoVencido.toLocaleString()}</td>
            <td class="numeric-cell">${item.noContestadasPlazoVigente.toLocaleString()}</td>
        `;
        tbody.appendChild(row);
    });
}

/**
 * Exporta el resumen de dependencias a Excel
 */
function exportDependenciasToExcel() {
    try {
        const resumen = construirResumenDependencias(datosFiltrados);

        if (resumen.length === 0) {
            mostrarError('No hay datos para exportar en el resumen por dependencia.');
            return;
        }

        const excelData = resumen.map(item => ({
            'Dependencia': item.dependencia,
            'Total Radicados': item.totalRadicados,
            'Total Contestadas': item.totalContestadas,
            'No Requieren Respuesta': item.noRequierenRespuesta,
            'Contestadas a Termino': item.contestadasATermino,
            'Contestadas Fuera de Tiempo': item.contestadasFueraDeTiempo,
            'No Contestadas': item.noContestadas,
            'No Contestadas con Plazo Vencido': item.noContestadasPlazoVencido,
            'No Contestadas Plazo Vigente': item.noContestadasPlazoVigente
        }));

        const totales = resumen.reduce((acc, item) => {
            acc.totalRadicados += item.totalRadicados;
            acc.totalContestadas += item.totalContestadas;
            acc.noRequierenRespuesta += item.noRequierenRespuesta;
            acc.contestadasATermino += item.contestadasATermino;
            acc.contestadasFueraDeTiempo += item.contestadasFueraDeTiempo;
            acc.noContestadas += item.noContestadas;
            acc.noContestadasPlazoVencido += item.noContestadasPlazoVencido;
            acc.noContestadasPlazoVigente += item.noContestadasPlazoVigente;
            return acc;
        }, {
            totalRadicados: 0,
            totalContestadas: 0,
            noRequierenRespuesta: 0,
            contestadasATermino: 0,
            contestadasFueraDeTiempo: 0,
            noContestadas: 0,
            noContestadasPlazoVencido: 0,
            noContestadasPlazoVigente: 0
        });

        excelData.push({
            'Dependencia': 'TOTAL',
            'Total Radicados': totales.totalRadicados,
            'Total Contestadas': totales.totalContestadas,
            'No Requieren Respuesta': totales.noRequierenRespuesta,
            'Contestadas a Termino': totales.contestadasATermino,
            'Contestadas Fuera de Tiempo': totales.contestadasFueraDeTiempo,
            'No Contestadas': totales.noContestadas,
            'No Contestadas con Plazo Vencido': totales.noContestadasPlazoVencido,
            'No Contestadas Plazo Vigente': totales.noContestadasPlazoVigente
        });

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(excelData);

        worksheet['!cols'] = [
            { wch: 35 },
            { wch: 16 },
            { wch: 18 },
            { wch: 22 },
            { wch: 21 },
            { wch: 25 },
            { wch: 16 },
            { wch: 30 },
            { wch: 27 }
        ];

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Resumen Dependencias');

        const fecha = dayjs().format('YYYY-MM-DD_HH-mm');
        const fileName = `Relacion_Dependencias_${fecha}.xlsx`;
        XLSX.writeFile(workbook, fileName);

        console.log(`✅ Excel de dependencias exportado: ${fileName}`);
    } catch (error) {
        console.error('❌ Error exportando resumen de dependencias a Excel:', error);
        mostrarError('No fue posible generar el archivo Excel del resumen por dependencia.');
    }
}

/**
 * Exporta el resumen de dependencias a PDF
 */
function exportDependenciasToPDF() {
    try {
        const resumen = construirResumenDependencias(datosFiltrados);

        if (resumen.length === 0) {
            mostrarError('No hay datos para exportar en el resumen por dependencia.');
            return;
        }

        if (!window.jspdf || !window.jspdf.jsPDF) {
            mostrarError('La libreria de PDF no esta disponible. Recargue la pagina e intente de nuevo.');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });

        if (typeof doc.autoTable !== 'function') {
            mostrarError('El complemento de tabla PDF no esta disponible. Recargue la pagina e intente de nuevo.');
            return;
        }

        const fechaGeneracion = dayjs().format('DD/MM/YYYY HH:mm');
        doc.setFontSize(14);
        doc.text('Relacion de Secretarias por Dependencia', 40, 40);
        doc.setFontSize(9);
        doc.text(`Generado: ${fechaGeneracion}`, 40, 58);

        const cuerpoTabla = resumen.map(item => [
            item.dependencia,
            item.totalRadicados.toLocaleString('es-CO'),
            item.totalContestadas.toLocaleString('es-CO'),
            item.noRequierenRespuesta.toLocaleString('es-CO'),
            item.contestadasATermino.toLocaleString('es-CO'),
            item.contestadasFueraDeTiempo.toLocaleString('es-CO'),
            item.noContestadas.toLocaleString('es-CO'),
            item.noContestadasPlazoVencido.toLocaleString('es-CO'),
            item.noContestadasPlazoVigente.toLocaleString('es-CO')
        ]);

        const totales = resumen.reduce((acc, item) => {
            acc.totalRadicados += item.totalRadicados;
            acc.totalContestadas += item.totalContestadas;
            acc.noRequierenRespuesta += item.noRequierenRespuesta;
            acc.contestadasATermino += item.contestadasATermino;
            acc.contestadasFueraDeTiempo += item.contestadasFueraDeTiempo;
            acc.noContestadas += item.noContestadas;
            acc.noContestadasPlazoVencido += item.noContestadasPlazoVencido;
            acc.noContestadasPlazoVigente += item.noContestadasPlazoVigente;
            return acc;
        }, {
            totalRadicados: 0,
            totalContestadas: 0,
            noRequierenRespuesta: 0,
            contestadasATermino: 0,
            contestadasFueraDeTiempo: 0,
            noContestadas: 0,
            noContestadasPlazoVencido: 0,
            noContestadasPlazoVigente: 0
        });

        cuerpoTabla.push([
            'TOTAL',
            totales.totalRadicados.toLocaleString('es-CO'),
            totales.totalContestadas.toLocaleString('es-CO'),
            totales.noRequierenRespuesta.toLocaleString('es-CO'),
            totales.contestadasATermino.toLocaleString('es-CO'),
            totales.contestadasFueraDeTiempo.toLocaleString('es-CO'),
            totales.noContestadas.toLocaleString('es-CO'),
            totales.noContestadasPlazoVencido.toLocaleString('es-CO'),
            totales.noContestadasPlazoVigente.toLocaleString('es-CO')
        ]);

        doc.autoTable({
            startY: 70,
            head: [[
                'Dependencia',
                'Total Radicados',
                'Total Contestadas',
                'No Requieren Resp.',
                'Contestadas a Termino',
                'Contestadas Fuera',
                'No Contestadas',
                'No Contestadas Vencido',
                'No Contestadas Vigente'
            ]],
            body: cuerpoTabla,
            styles: {
                fontSize: 7,
                cellPadding: 4,
                lineWidth: 0.2
            },
            headStyles: {
                fillColor: [33, 115, 70],
                textColor: 255
            },
            bodyStyles: {
                textColor: [20, 20, 20]
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245]
            },
            columnStyles: {
                0: { cellWidth: 160 },
                1: { cellWidth: 75, halign: 'right' },
                2: { cellWidth: 80, halign: 'right' },
                3: { cellWidth: 88, halign: 'right' },
                4: { cellWidth: 88, halign: 'right' },
                5: { cellWidth: 88, halign: 'right' },
                6: { cellWidth: 78, halign: 'right' },
                7: { cellWidth: 95, halign: 'right' },
                8: { cellWidth: 95, halign: 'right' }
            }
        });

        const fecha = dayjs().format('YYYY-MM-DD_HH-mm');
        const fileName = `Relacion_Dependencias_${fecha}.pdf`;
        doc.save(fileName);

        console.log(`✅ PDF de dependencias exportado: ${fileName}`);
    } catch (error) {
        console.error('❌ Error exportando resumen de dependencias a PDF:', error);
        mostrarError('No fue posible generar el archivo PDF del resumen por dependencia.');
    }
}

// ===========================================
// MODAL DE DETALLES
// ===========================================

/**
 * Abre el modal de detalles con los registros filtrados
 */
function openDetailsModal() {
    currentPage = 1;
    tableSearchTerm = '';

    const modal = document.getElementById('details-modal');
    modal.style.display = 'flex'; // Mostrar como flex para centrar contenido

    updateDetailsModal();

    // Event listeners para el modal
    document.getElementById('table-search').addEventListener('input', handleTableSearch);
    document.getElementById('prev-page').addEventListener('click', () => changePage(-1));
    document.getElementById('next-page').addEventListener('click', () => changePage(1));

    // Event listeners para ordenamiento
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => sortTable(header.dataset.column));
    });
}

/**
 * Cierra el modal de detalles
 */
function closeDetailsModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';

    // Limpiar event listeners
    document.getElementById('table-search').removeEventListener('input', handleTableSearch);
}

/**
 * Actualiza el contenido del modal de detalles
 */
function updateDetailsModal() {
    // FILTRO AUTOMÁTICO: Solo mostrar registros NO CONTESTADOS (Plazo Vigente y Plazo Vencido)
    let filteredData = [...datosFiltrados].filter(item =>
        item.estado === 'No Contestado' &&
        (item.estadoVencimiento === 'No Contestado - Plazo Vigente' ||
            item.estadoVencimiento === 'No Contestado - Plazo Vencido')
    );

    // Aplicar búsqueda si existe
    if (tableSearchTerm) {
        filteredData = filteredData.filter(item =>
            item.codigo.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
            item.asunto.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
            item.dependenciaSimplificada.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
            (item.fechaRegistroParsed && item.fechaRegistroParsed.format('DD/MM/YYYY').includes(tableSearchTerm))
        );
    }

    // Aplicar ordenamiento
    if (sortColumn) {
        filteredData.sort((a, b) => {
            let aValue = a[sortColumn];
            let bValue = b[sortColumn];

            // Manejo especial para fechas - usar fechaRegistroParsed directamente
            if (sortColumn === 'fechaRegistro') {
                aValue = a.fechaRegistroParsed;
                bValue = b.fechaRegistroParsed;
                // dayjs objects se pueden comparar directamente
                if (aValue && bValue) {
                    aValue = aValue.toDate();
                    bValue = bValue.toDate();
                }
            }

            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }

    // Actualizar estadísticas del resumen
    updateDetailsSummary(filteredData);

    // Calcular paginación
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);

    // Actualizar tabla
    updateDetailsTable(pageData);

    // Actualizar controles de paginación
    updatePagination(totalPages, totalItems, startIndex, Math.min(endIndex, totalItems));
}

/**
 * Actualiza el resumen de estadísticas
 */
function updateDetailsSummary(data) {
    const totalFiltered = data.length;
    const dependencies = [...new Set(data.map(d => d.dependenciaSimplificada))].length;

    // Contar registros por vencimiento
    const vigentes = data.filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vigente').length;
    const vencidos = data.filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vencido').length;

    // Calcular rango de fechas - CORREGIDO: ordenamiento cronológico
    let dateRange = '-';
    if (data.length > 0) {
        const fechasValidas = data
            .map(d => d.fechaRegistroParsed)
            .filter(Boolean)
            .sort((a, b) => a.toDate() - b.toDate()); // Ordenamiento cronológico correcto

        if (fechasValidas.length > 0) {
            const minDate = fechasValidas[0].format('DD/MM/YYYY');
            const maxDate = fechasValidas[fechasValidas.length - 1].format('DD/MM/YYYY');
            dateRange = minDate === maxDate ? minDate : `${minDate} - ${maxDate}`;
        }
    }

    document.getElementById('total-filtered').textContent = totalFiltered.toLocaleString();
    document.getElementById('vigentes-count').textContent = vigentes.toLocaleString();
    document.getElementById('vencidos-count').textContent = vencidos.toLocaleString();
    document.getElementById('date-range').textContent = dateRange;
    document.getElementById('dependencies-count').textContent = dependencies;
}

/**
 * Actualiza la tabla de detalles
 */
function updateDetailsTable(data) {
    const tbody = document.getElementById('details-table-body');
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
                    No se encontraron registros con los criterios actuales
                </td>
            </tr>
        `;
        return;
    }

    data.forEach(item => {
        const row = document.createElement('tr');

        // Determinar badge de estado
        let statusClass = 'status-no-requiere';
        let statusText = item.estadoVencimiento || 'N/A';

        if (statusText.includes('Contestado dentro del Término')) {
            statusClass = 'status-contestado';
            statusText = 'Contestado';
        } else if (statusText.includes('Plazo Vencido')) {
            statusClass = 'status-vencido';
            statusText = 'Vencido';
        } else if (statusText.includes('Plazo Vigente')) {
            statusClass = 'status-vigente';
            statusText = 'Vigente';
        } else if (statusText.includes('No Aplica')) {
            statusClass = 'status-no-requiere';
            statusText = 'No Aplica';
        }

        row.innerHTML = `
            <td>${item.codigo}</td>
            <td class="asunto-cell" title="${item.asunto}">${item.asunto}</td>
            <td>${item.fechaRegistroParsed ? item.fechaRegistroParsed.format('DD/MM/YYYY') : 'N/A'}</td>
            <td>${item.dependenciaSimplificada}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        `;

        tbody.appendChild(row);
    });
}

/**
 * Actualiza los controles de paginación
 */
function updatePagination(totalPages, totalItems, startIndex, endIndex) {
    const paginationText = document.getElementById('pagination-text');
    const pageNumbers = document.getElementById('page-numbers');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');

    // Actualizar texto de paginación
    paginationText.textContent = `Mostrando ${startIndex + 1}-${endIndex} de ${totalItems.toLocaleString()} registros`;

    // Actualizar botones de navegación
    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= totalPages;

    // Generar números de página
    pageNumbers.innerHTML = '';
    if (totalPages <= 7) {
        // Mostrar todas las páginas
        for (let i = 1; i <= totalPages; i++) {
            createPageNumber(i);
        }
    } else {
        // Mostrar con elipsis
        createPageNumber(1);

        if (currentPage > 3) {
            pageNumbers.appendChild(createEllipsis());
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            createPageNumber(i);
        }

        if (currentPage < totalPages - 2) {
            pageNumbers.appendChild(createEllipsis());
        }

        createPageNumber(totalPages);
    }
}

/**
 * Crea un elemento de número de página
 */
function createPageNumber(page) {
    const pageEl = document.createElement('button');
    pageEl.className = `page-number ${page === currentPage ? 'active' : ''}`;
    pageEl.textContent = page;
    pageEl.addEventListener('click', () => goToPage(page));
    document.getElementById('page-numbers').appendChild(pageEl);
    return pageEl;
}

/**
 * Crea elemento de elipsis
 */
function createEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.textContent = '...';
    ellipsis.style.padding = 'var(--spacing-sm)';
    ellipsis.style.color = 'var(--text-secondary)';
    return ellipsis;
}

/**
 * Navega a una página específica
 */
function goToPage(page) {
    currentPage = page;
    updateDetailsModal();
}

/**
 * Cambia de página (siguiente/anterior)
 */
function changePage(direction) {
    const newPage = currentPage + direction;
    const totalPages = Math.ceil(datosFiltrados.length / itemsPerPage);

    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        updateDetailsModal();
    }
}

/**
 * Maneja la búsqueda en la tabla
 */
function handleTableSearch(event) {
    tableSearchTerm = event.target.value;
    currentPage = 1;
    updateDetailsModal();
}

/**
 * Ordena la tabla por columna
 */
function sortTable(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }

    // Actualizar iconos de ordenamiento
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
        if (header.dataset.column === column) {
            header.classList.add(`sort-${sortDirection}`);
        }
    });

    currentPage = 1;
    updateDetailsModal();
}

/**
 * Exporta los datos filtrados a un archivo Excel
 */
function exportToExcel() {
    try {
        // FILTRO AUTOMÁTICO: Solo exportar registros NO CONTESTADOS (Plazo Vigente y Plazo Vencido)
        let filteredData = [...datosFiltrados].filter(item =>
            item.estado === 'No Contestado' &&
            (item.estadoVencimiento === 'No Contestado - Plazo Vigente' ||
                item.estadoVencimiento === 'No Contestado - Plazo Vencido')
        );

        // Aplicar búsqueda si existe
        if (tableSearchTerm) {
            filteredData = filteredData.filter(item =>
                item.codigo.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
                item.asunto.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
                item.dependenciaSimplificada.toLowerCase().includes(tableSearchTerm.toLowerCase()) ||
                (item.fechaRegistroParsed && item.fechaRegistroParsed.format('DD/MM/YYYY').includes(tableSearchTerm))
            );
        }

        // Aplicar ordenamiento
        if (sortColumn) {
            filteredData.sort((a, b) => {
                let aValue = a[sortColumn];
                let bValue = b[sortColumn];

                // Manejo especial para fechas
                if (sortColumn === 'fechaRegistro') {
                    aValue = a.fechaRegistroParsed;
                    bValue = b.fechaRegistroParsed;
                    if (aValue && bValue) {
                        aValue = aValue.toDate();
                        bValue = bValue.toDate();
                    }
                }

                if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
                return 0;
            });
        }

        // Preparar datos para Excel
        const excelData = filteredData.map(item => {
            let statusText = item.estadoVencimiento || 'N/A';

            if (statusText.includes('Contestado dentro del Término')) {
                statusText = 'Contestado a Tiempo';
            } else if (statusText.includes('Contestado Fuera de Término')) {
                statusText = 'Contestado Fuera de Término';
            } else if (statusText.includes('Plazo Vencido')) {
                statusText = 'Plazo Vencido';
            } else if (statusText.includes('Plazo Vigente')) {
                statusText = 'Plazo Vigente';
            } else if (statusText.includes('No Aplica')) {
                statusText = 'No Requiere Respuesta';
            }

            return {
                'Radicado': item.codigo,
                'Asunto': item.asunto,
                'Fecha Registro': item.fechaRegistroParsed ? item.fechaRegistroParsed.format('DD/MM/YYYY') : 'N/A',
                'Dependencia': item.dependenciaSimplificada,
                'Estado': statusText,
                'Tipo': item.tipo,
                'Emisor': item.emisor || '',
                'Medio Recepción': item.medioRecepcion || '',
                'Plazo (Días)': item.plazo || '',
                'Fecha Máxima': item.fechaMaximaRespuesta ? item.fechaMaximaRespuesta.format('DD/MM/YYYY') : 'N/A',
                'Oficio Respuesta': item.oficioRespuesta || 'N/A',
                'Fecha Respuesta': item.fechaRespuestaParsed ? item.fechaRespuestaParsed.format('DD/MM/YYYY') : 'N/A'
            };
        });

        // Crear libro de Excel
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(excelData);

        // Configurar ancho de columnas
        const columnWidths = [
            { wch: 20 }, // Radicado
            { wch: 50 }, // Asunto
            { wch: 15 }, // Fecha Registro
            { wch: 25 }, // Dependencia
            { wch: 20 }, // Estado
            { wch: 30 }, // Tipo
            { wch: 30 }, // Emisor
            { wch: 15 }, // Medio Recepción
            { wch: 12 }, // Plazo
            { wch: 15 }, // Fecha Máxima
            { wch: 20 }, // Oficio Respuesta
            { wch: 15 }  // Fecha Respuesta
        ];
        worksheet['!cols'] = columnWidths;

        // Agregar hoja al libro
        XLSX.utils.book_append_sheet(workbook, worksheet, 'PQRSD Filtrados');

        // Generar nombre del archivo
        const now = dayjs();
        const dateStr = now.format('YYYY-MM-DD_HH-mm');
        const totalRecords = excelData.length;
        let fileName = `PQRSD_Pendientes_${totalRecords}_registros_${dateStr}.xlsx`;

        // Información adicional en el nombre si hay filtros específicos
        const yearFilter = document.getElementById('year-filter').value;
        const rangoMeses = obtenerRangoMeses();
        const dependencyFilter = document.getElementById('dependency-filter').value;

        let filterInfo = [];
        if (yearFilter) filterInfo.push(`año-${yearFilter}`);
        if (rangoMeses.inicio !== 1 || rangoMeses.fin !== 12) {
            filterInfo.push(`meses-${rangoMeses.inicio}-${rangoMeses.fin}`);
        }
        if (dependencyFilter) filterInfo.push(dependencyFilter.substring(0, 10));

        if (filterInfo.length > 0) {
            fileName = `PQRSD_Pendientes_${filterInfo.join('_')}_${totalRecords}_registros_${dateStr}.xlsx`;
        }

        // Descargar archivo
        XLSX.writeFile(workbook, fileName);

        console.log(`✅ Archivo Excel exportado: ${fileName} (${totalRecords} registros)`);

        // Mostrar notificación de éxito
        showExportNotification(fileName, totalRecords);

    } catch (error) {
        console.error('❌ Error al exportar Excel:', error);
        alert('Error al exportar el archivo Excel. Revise la consola para más detalles.');
    }
}

/**
 * Muestra notificación de exportación exitosa
 */
function showExportNotification(fileName, totalRecords) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #217346;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10001;
        font-family: inherit;
        font-size: 14px;
        max-width: 350px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-file-excel" style="font-size: 20px;"></i>
            <div>
                <div style="font-weight: 600;">Excel exportado exitosamente</div>
                <div style="font-size: 12px; opacity: 0.9; margin-top: 2px;">
                    ${totalRecords} registros - ${fileName.length > 30 ? fileName.substring(0, 30) + '...' : fileName}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(notification);

    // Animación de entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

/**
 * Inicializa el dashboard
 */
function inicializarDashboard() {
    // Verificar que todas las librerías estén disponibles
    if (!verificarLibrerias()) {
        return;
    }

    // Event listeners para el archivo
    const fileUploader = document.getElementById('fileUploader');
    if (fileUploader) {
        fileUploader.addEventListener('change', manejarArchivoSeleccionado);
        console.log('✅ Event listener para fileUploader configurado correctamente');
    } else {
        console.error('❌ Elemento fileUploader no encontrado');
    }

    // Event listeners para filtros
    document.getElementById('year-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('dependency-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('types-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('radicados-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('typesall-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('clear-filters').addEventListener('click', limpiarFiltros);
    document.getElementById('view-details').addEventListener('click', openDetailsModal);

    // Event listeners del modal de relacion por dependencia
    const totalRadicadosCard = document.getElementById('total-radicados-card');
    if (totalRadicadosCard) {
        totalRadicadosCard.addEventListener('click', openDependenciasModal);
        totalRadicadosCard.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openDependenciasModal();
            }
        });
    }

    const dependenciasModal = document.getElementById('dependencias-modal');
    if (dependenciasModal) {
        dependenciasModal.addEventListener('click', (event) => {
            if (event.target === dependenciasModal) {
                closeDependenciasModal();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const modalDependencias = document.getElementById('dependencias-modal');
            if (modalDependencias && modalDependencias.style.display === 'flex') {
                closeDependenciasModal();
            }
        }
    });

    // Inicializar range slider de meses
    inicializarRangeSlider();

    console.log('Dashboard inicializado correctamente');
}

/**
 * Maneja la selección de archivo
 */
async function manejarArchivoSeleccionado(event) {
    console.log('🚀🚀🚀 ARCHIVO SELECCIONADO - INICIANDO PROCESAMIENTO 🚀🚀🚀');

    const archivo = event.target.files[0];

    if (!archivo) {
        console.log('❌ No hay archivo seleccionado');
        return;
    }

    console.log('📁 Archivo seleccionado:', archivo.name, 'Tamaño:', archivo.size, 'bytes');

    // Validar tipo de archivo
    if (!archivo.name.toLowerCase().endsWith('.xlsx')) {
        mostrarError('Por favor seleccione un archivo Excel (.xlsx)');
        return;
    }

    try {
        // Mostrar nombre del archivo
        document.getElementById('file-name').textContent = archivo.name;
        document.getElementById('file-status').classList.remove('hidden');

        console.log('🔄 Iniciando procesamiento del archivo...');

        // Procesar archivo
        datosOriginales = await procesarArchivo(archivo);
        datosFiltrados = [...datosOriginales];

        console.log('✅ Archivo procesado:', datosOriginales.length, 'registros');

        // Inicializar filtros
        console.log('🔧 Inicializando filtros...');
        inicializarFiltros();

        // Mostrar secciones del dashboard
        console.log('🎨 Mostrando dashboard...');
        document.getElementById('welcome-message').classList.add('hidden');
        document.getElementById('filters-panel').classList.remove('hidden');
        document.getElementById('kpis-section').classList.remove('hidden');
        document.getElementById('types-analysis').classList.remove('hidden');
        document.getElementById('trend-analysis').classList.remove('hidden');
        document.getElementById('charts-section').classList.remove('hidden');
        document.getElementById('footer').classList.remove('hidden');

        // Actualizar dashboard
        console.log('📊 Actualizando visualizaciones...');
        actualizarDashboard();

        console.log('🎉 Dashboard completado exitosamente');

        // Agregar listener para redimensionar gráficas en cambios de orientación/tamaño
        window.addEventListener('resize', debounce(redimensionarGraficos, 250));

    } catch (error) {
        console.error('❌ Error procesando archivo:', error);
        mostrarError(`Error procesando el archivo: ${error.message}`);

        // Limpiar estado
        datosOriginales = [];
        datosFiltrados = [];
        document.getElementById('file-status').classList.add('hidden');
    }
}

// ===========================================
// INICIALIZACIÓN AUTOMÁTICA
// ===========================================

// Función para esperar a que todas las librerías estén cargadas
function esperarLibrerias() {
    return new Promise((resolve) => {
        const verificar = () => {
            console.log('Verificando librerías...');
            console.log('XLSX:', !!window.XLSX);
            console.log('Chart:', !!window.Chart);
            console.log('dayjs:', !!window.dayjs);

            if (window.XLSX && window.Chart && window.dayjs) {
                console.log('✅ Todas las librerías están disponibles');
                resolve();
            } else {
                console.log('⏳ Esperando librerías...');
                setTimeout(verificar, 100);
            }
        };
        verificar();
    });
}

// Inicializar cuando el DOM esté listo y las librerías cargadas
document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Esperar a que las librerías estén disponibles
        await esperarLibrerias();

        // Configurar Day.js
        if (window.dayjs_plugin_customParseFormat) {
            dayjs.extend(dayjs_plugin_customParseFormat);
        }
        if (window.dayjs_plugin_weekday) {
            dayjs.extend(dayjs_plugin_weekday);
        }

        // Inicializar dashboard
        inicializarDashboard();

    } catch (error) {
        console.error('Error durante la inicialización:', error);
        mostrarError('Error durante la inicialización. Por favor recargue la página.');
    }
});

// Manejar errores globales
window.addEventListener('error', function (event) {
    console.error('Error global:', event.error);
    mostrarError('Ha ocurrido un error inesperado. Por favor recargue la página.');
});

// ===========================================
// UTILIDADES PARA MOBILE
// ===========================================

// Debounce función para optimizar el resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Función para redimensionar gráficos en resize
function redimensionarGraficos() {
    // Redimensionar todas las gráficas existentes
    Object.values(Chart.instances).forEach(chart => {
        if (chart && chart.resize) {
            chart.resize();
        }
    });
}

// Configuración responsive para Chart.js
function getResponsiveChartConfig(isMobile = false) {
    console.log('📱 Configurando gráfica responsive, isMobile:', isMobile);
    return {
        responsive: true,
        maintainAspectRatio: !isMobile,
        resizeDelay: 0,
        plugins: {
            legend: {
                labels: {
                    fontSize: isMobile ? 10 : 12,
                    padding: isMobile ? 10 : 20,
                    usePointStyle: isMobile,
                    font: {
                        size: isMobile ? 10 : 12
                    }
                }
            },
            tooltip: {
                titleFont: {
                    size: isMobile ? 11 : 13
                },
                bodyFont: {
                    size: isMobile ? 10 : 12
                },
                mode: isMobile ? 'nearest' : 'index',
                intersect: isMobile
            }
        },
        interaction: {
            mode: isMobile ? 'nearest' : 'index',
            intersect: isMobile
        }
    };
}

// Configuración responsive para scales
function getResponsiveScaleConfig(isMobile = false) {
    return {
        x: {
            ticks: {
                font: {
                    size: isMobile ? 9 : 11
                },
                maxTicksLimit: isMobile ? 5 : 10,
                maxRotation: isMobile ? 45 : 0
            }
        },
        y: {
            ticks: {
                font: {
                    size: isMobile ? 9 : 11
                }
            }
        }
    };
}

// Exportar funciones principales para depuración
window.dashboardPQRSD = {
    datosOriginales: () => datosOriginales,
    datosFiltrados: () => datosFiltrados,
    procesarArchivo,
    aplicarFiltros,
    limpiarFiltros,
    actualizarDashboard
};