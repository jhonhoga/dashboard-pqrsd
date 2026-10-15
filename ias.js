// ===================================================
// ENTES DE CONTROL (IAS) - Catalogos y utilidades compartidas
// Generado desde script.js (PQRSD) para mantener consistencia
// ===================================================

dayjs.extend(dayjs_plugin_customParseFormat);
dayjs.extend(dayjs_plugin_weekday);

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
    "Secretaría TIC": "TIC",
    "Grupo de Gestión Financiera": "SALUD",
    "Instituto de Cultura yTurismo  de Bolivar": "ICULTUR",
};

// Plazos adicionales detectados en el archivo de Entes de Control (IAS)
Object.assign(PLAZOS_POR_TIPO, {
    "Contraloría Municipal o Distrital (3 Días)": 3,
    "Defensoria del Pueblo (3 Días)": 3
});

// ===========================================
// FUNCIONES DE UTILIDAD (compartidas)
// ===========================================

function esFestivo(fecha) {
    const fechaStr = dayjs(fecha).format('YYYY-MM-DD');
    return FESTIVOS_COLOMBIA_2024.includes(fechaStr) || FESTIVOS_COLOMBIA_2025.includes(fechaStr) || FESTIVOS_COLOMBIA_2026.includes(fechaStr);
}

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

    // Si no encuentra mapeo, conservar el nombre real (normalizado) para agrupar
    // por dependencia en lugar de juntar todo en "OTROS", y loguear para revisión.
    const dependenciaNormalizada = dependenciaStr.replace(/\s+/g, ' ').trim();
    console.warn(`🔍 Dependencia sin mapear (se conserva su nombre real): "${dependenciaNormalizada}"`);
    return dependenciaNormalizada;
}

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

function closeErrorModal() {
    document.getElementById('error-modal').classList.add('hidden');
}

function mostrarCarga() {
    document.getElementById('loading').classList.remove('hidden');
}

function ocultarCarga() {
    document.getElementById('loading').classList.add('hidden');
}


// ===================================================
// DASHBOARD DE ENTES DE CONTROL (IAS)
// ===================================================

// --- Estado global ---
let datosOriginales = [];
let datosFiltrados = [];
let chartEntes = null;
let chartNoContestados = null;
let chartVencidos = null;
let chartTipos = null;
let chartTendencia = null;

// Estado del modal de detalles
let currentPage = 1;
let itemsPerPage = 25;
let sortColumn = '';
let sortDirection = 'asc';
let tableSearchTerm = '';

const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const COLORES_ENTES = {
    'PROCURADURÍA': '#58a6ff',
    'CONTRALORÍA': '#d29922',
    'FISCALÍA': '#f85149',
    'DEFENSORÍA': '#39d0d8',
    'PERSONERÍA': '#a5a5ff',
    'NO REGISTRA': '#7d8590'
};
const PALETA = ['#58a6ff', '#d29922', '#f85149', '#39d0d8', '#a5a5ff', '#3fb950',
    '#ff9f43', '#ee5a6f', '#00b894', '#6c5ce7', '#fd79a8', '#00cec9'];

// ===========================================
// NORMALIZACIÓN Y CLASIFICACIÓN
// ===========================================

function normalizarTexto(valor) {
    return String(valor == null ? '' : valor)
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Clasifica una institución en su Ente de Control
 */
function obtenerEnteControl(institucion) {
    const s = normalizarTexto(institucion);
    if (!s || s.includes('no registra')) return 'NO REGISTRA';
    if (s.includes('procurad')) return 'PROCURADURÍA';
    if (s.includes('contralor')) return 'CONTRALORÍA';
    if (s.includes('fiscal') || s.includes('cti')) return 'FISCALÍA';
    if (s.includes('defensor')) return 'DEFENSORÍA';
    if (s.includes('personer')) return 'PERSONERÍA';
    return String(institucion).replace(/\s+/g, ' ').trim();
}

function claseEnte(ente) {
    const s = normalizarTexto(ente);
    if (s.includes('procurad')) return 'procuraduria';
    if (s.includes('contralor')) return 'contraloria';
    if (s.includes('fiscal')) return 'fiscalia';
    if (s.includes('defensor')) return 'defensoria';
    if (s.includes('personer')) return 'personeria';
    return 'otros';
}

function colorEnte(ente) {
    return COLORES_ENTES[ente] || PALETA[Math.abs(hashCode(ente)) % PALETA.length];
}

function hashCode(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) - h) + str.charCodeAt(i);
        h |= 0;
    }
    return h;
}

// ===========================================
// PROCESAMIENTO DE DATOS
// ===========================================

/**
 * Selecciona la hoja de datos del libro IAS (evita "LISTA DATOS")
 */
function elegirHoja(workbook) {
    for (const nombre of workbook.SheetNames) {
        const filas = XLSX.utils.sheet_to_json(workbook.Sheets[nombre], { header: 1 });
        if (!filas.length) continue;
        const headers = (filas[0] || []).map(h => normalizarTexto(h));
        const tieneCodigo = headers.some(h => h.includes('codigo'));
        const tieneInstitucion = headers.some(h => h.includes('institucion') || h.includes('ente'));
        const tieneTipo = headers.some(h => h === 'tipo' || h.includes('tipo'));
        if (tieneCodigo && tieneInstitucion && tieneTipo) return nombre;
    }
    return workbook.SheetNames[0];
}

function procesarArchivo(archivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (e) {
            try {
                mostrarCarga();
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = elegirHoja(workbook);
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                if (jsonData.length < 2) {
                    throw new Error('El archivo no contiene datos suficientes');
                }
                resolve(procesarDatos(jsonData, sheetName));
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

function procesarDatos(jsonData, sheetName) {
    const headers = (jsonData[0] || []).map(h => normalizarTexto(h));
    const filas = jsonData.slice(1);

    console.log('📄 Hoja IAS:', sheetName);
    console.log('📋 Headers IAS:', headers);
    console.log('📊 Total filas de datos:', filas.length);

    const tieneCodigo = headers.some(h => h.includes('codigo'));
    const tieneTipo = headers.some(h => h.includes('tipo'));
    const tieneInstitucion = headers.some(h => h.includes('institucion') || h.includes('ente') || h.includes('dependencia'));
    if (!(tieneCodigo && tieneTipo && tieneInstitucion)) {
        throw new Error('El archivo no contiene las columnas esperadas (Código, Institución, Tipo). Verifique el formato del reporte IAS.');
    }

    const datosProcessados = [];
    let erroresContados = 0;
    const maxErrores = 10;

    filas.forEach((fila, index) => {
        try {
            if (!fila || fila.length === 0 || !fila.some(c => c !== null && c !== undefined && c !== '')) {
                return;
            }

            const registro = {
                codigo: fila[0] ? String(fila[0]).trim() : '',
                asunto: fila[1] ? String(fila[1]).trim() : '',
                emisor: fila[2] ? String(fila[2]).trim() : '',
                fechaRegistro: fila[3],
                horaRegistro: fila[4] ? String(fila[4]).trim() : '',
                institucion: fila[5] ? String(fila[5]).trim() : '',
                registrador: fila[6] ? String(fila[6]).trim() : '',
                tipo: fila[7] ? String(fila[7]).trim() : '',
                medioRecepcion: fila[8] ? String(fila[8]).trim() : '',
                areaResponsable: fila[9] ? String(fila[9]).trim() : '',
                oficioRespuesta: fila[10] ? String(fila[10]).trim() : '',
                fechaRespuesta: fila[11]
            };

            if (!registro.codigo || !registro.fechaRegistro) {
                if (erroresContados < maxErrores) {
                    console.warn(`⚠️ Fila ${index + 2} omitida: datos incompletos`);
                    erroresContados++;
                }
                return;
            }

            const fechaRegistroParsed = parsearFecha(registro.fechaRegistro);
            if (!fechaRegistroParsed) {
                if (erroresContados < maxErrores) {
                    console.warn(`⚠️ Fila ${index + 2} omitida: fecha inválida "${registro.fechaRegistro}"`);
                    erroresContados++;
                }
                return;
            }

            const estado = determinarEstado(registro.oficioRespuesta, registro.fechaRespuesta);
            const estadoVencimiento = calcularEstadoVencimiento(
                fechaRegistroParsed,
                registro.tipo,
                registro.fechaRespuesta,
                estado
            );
            const plazo = PLAZOS_POR_TIPO[registro.tipo] || 10;
            const fechaMaximaRespuesta = sumarDiasHabiles(fechaRegistroParsed, plazo);

            datosProcessados.push({
                ...registro,
                enteControl: obtenerEnteControl(registro.institucion),
                dependenciaSimplificada: obtenerDependenciaSimplificada(registro.areaResponsable),
                fechaRegistroParsed,
                fechaRespuestaParsed: parsearFecha(registro.fechaRespuesta),
                estado,
                estadoVencimiento,
                plazo,
                fechaMaximaRespuesta,
                año: fechaRegistroParsed.year(),
                mes: fechaRegistroParsed.month() + 1,
                mesNombre: fechaRegistroParsed.format('MMMM')
            });

        } catch (error) {
            if (erroresContados < maxErrores) {
                console.error(`❌ Error procesando fila ${index + 2}:`, error.message);
                erroresContados++;
            }
        }
    });

    console.log(`✅ Procesados ${datosProcessados.length} de ${filas.length} filas`);

    if (datosProcessados.length === 0) {
        throw new Error('No se pudieron procesar registros válidos del archivo IAS.');
    }

    return datosProcessados;
}

// ===========================================
// FILTROS
// ===========================================

function inicializarFiltros() {
    const años = [...new Set(datosOriginales.map(d => d.año))].sort((a, b) => b - a);
    const entes = [...new Set(datosOriginales.map(d => d.enteControl))].sort();
    const areas = [...new Set(datosOriginales.map(d => d.dependenciaSimplificada))].sort();
    const tipos = [...new Set(datosOriginales.map(d => d.tipo).filter(t => t && String(t).trim() !== ''))].sort();

    const yearSelect = document.getElementById('year-filter');
    yearSelect.innerHTML = '<option value="">Todos los años</option>';
    años.forEach(a => {
        const o = document.createElement('option');
        o.value = a; o.textContent = a;
        yearSelect.appendChild(o);
    });

    const enteSelect = document.getElementById('ente-filter');
    enteSelect.innerHTML = '<option value="">Todos los entes</option>';
    entes.forEach(e => {
        const o = document.createElement('option');
        o.value = e; o.textContent = e;
        enteSelect.appendChild(o);
    });

    const areaSelect = document.getElementById('area-filter');
    areaSelect.innerHTML = '<option value="">Todas las áreas</option>';
    areas.forEach(a => {
        const o = document.createElement('option');
        o.value = a; o.textContent = a;
        areaSelect.appendChild(o);
    });

    const typesSelect = document.getElementById('typesall-filter');
    typesSelect.innerHTML = '';
    tipos.forEach(t => {
        const o = document.createElement('option');
        o.value = t; o.textContent = t;
        typesSelect.appendChild(o);
    });

    actualizarContadorTipos();
}

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

function aplicarFiltros() {
    const yearFilter = document.getElementById('year-filter').value;
    const enteFilter = document.getElementById('ente-filter').value;
    const areaFilter = document.getElementById('area-filter').value;
    const estadoFilter = document.getElementById('estado-filter').value;
    const rangoMeses = obtenerRangoMeses();
    const selectedTypes = Array.from(document.getElementById('typesall-filter').selectedOptions).map(o => o.value);

    datosFiltrados = datosOriginales.filter(registro => {
        if (yearFilter && registro.año.toString() !== yearFilter) return false;
        if (registro.mes < rangoMeses.inicio || registro.mes > rangoMeses.fin) return false;
        if (enteFilter && registro.enteControl !== enteFilter) return false;
        if (areaFilter && registro.dependenciaSimplificada !== areaFilter) return false;
        if (estadoFilter && registro.estado !== estadoFilter) return false;
        if (selectedTypes.length > 0 && !selectedTypes.includes(registro.tipo)) return false;
        return true;
    });

    actualizarContadorTipos();
    actualizarDashboard();
}

function limpiarFiltros() {
    document.getElementById('year-filter').value = '';
    document.getElementById('ente-filter').value = '';
    document.getElementById('area-filter').value = '';
    document.getElementById('estado-filter').value = '';

    const typesSelect = document.getElementById('typesall-filter');
    Array.from(typesSelect.options).forEach(o => o.selected = false);

    document.getElementById('month-range-start').value = '1';
    document.getElementById('month-range-end').value = '12';
    document.getElementById('month-start-value').textContent = 'Enero';
    document.getElementById('month-end-value').textContent = 'Diciembre';
    const rangeFill = document.querySelector('.range-fill');
    if (rangeFill) { rangeFill.style.left = '0%'; rangeFill.style.width = '100%'; }

    actualizarContadorTipos();
    datosFiltrados = [...datosOriginales];
    actualizarDashboard();
}

// ===========================================
// ACTUALIZACIÓN DEL DASHBOARD
// ===========================================

function actualizarDashboard() {
    actualizarKPIs();
    actualizarAnalisisEntes();
    actualizarGraficos();
    actualizarFooter();
}

function actualizarKPIs() {
    const total = datosFiltrados.length;
    const contestados = datosFiltrados.filter(d => d.estado === 'Contestado').length;
    const noContestados = datosFiltrados.filter(d => d.estado === 'No Contestado').length;
    const noRequieren = datosFiltrados.filter(d => d.estado === 'No Requiere Respuesta').length;
    const vencidos = datosFiltrados.filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vencido').length;
    const vigentes = datosFiltrados.filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vigente').length;

    animarValor('total-radicados', total);
    animarValor('total-contestados', contestados);
    animarValor('total-no-contestados', noContestados);
    animarValor('total-no-requieren', noRequieren);
    animarValor('total-vencidas', vencidos);
    animarValor('total-vigentes', vigentes);
}

function animarValor(elementId, valorFinal) {
    const elemento = document.getElementById(elementId);
    if (!elemento) return;
    const valorActual = parseInt(elemento.textContent.replace(/\./g, '')) || 0;
    elemento.classList.add('updating');
    let valorTemporal = valorActual;
    const pasos = 20;
    const incremento = (valorFinal - valorActual) / pasos;
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
    }, 40);
}

function actualizarAnalisisEntes() {
    const conteo = {};
    datosFiltrados.forEach(r => {
        const e = r.enteControl;
        if (!conteo[e]) conteo[e] = { total: 0, contestados: 0, noContestados: 0, noRequieren: 0 };
        conteo[e].total++;
        if (r.estado === 'Contestado') conteo[e].contestados++;
        else if (r.estado === 'No Contestado') conteo[e].noContestados++;
        else if (r.estado === 'No Requiere Respuesta') conteo[e].noRequieren++;
    });

    const top = Object.entries(conteo).sort((a, b) => b[1].total - a[1].total).slice(0, 8);
    const container = document.getElementById('entes-grid');
    container.innerHTML = '';

    top.forEach(([ente, d], index) => {
        const card = document.createElement('div');
        card.className = 'type-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="type-header">
                <span class="type-name"><span class="ente-badge ${claseEnte(ente)}">${ente}</span></span>
                <span class="type-total">${d.total}</span>
            </div>
            <div class="type-breakdown">
                <div class="breakdown-item contestadas">
                    <span class="breakdown-value">${d.contestados}</span>
                    <div class="breakdown-label">Contestadas</div>
                </div>
                <div class="breakdown-item no-contestadas">
                    <span class="breakdown-value">${d.noContestados}</span>
                    <div class="breakdown-label">No Contestadas</div>
                </div>
                <div class="breakdown-item no-requieren">
                    <span class="breakdown-value">${d.noRequieren}</span>
                    <div class="breakdown-label">No Req. Resp.</div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function actualizarFooter() {
    document.getElementById('last-update').textContent = dayjs().format('DD/MM/YYYY HH:mm');
    document.getElementById('total-records').textContent = datosOriginales.length.toLocaleString();
}

// ===========================================
// GRÁFICOS
// ===========================================

function baseTooltip() {
    return {
        backgroundColor: '#161b22',
        titleColor: '#f0f6fc',
        bodyColor: '#f0f6fc',
        borderColor: '#30363d',
        borderWidth: 1,
        padding: 12
    };
}

function actualizarGraficos() {
    try { actualizarGraficoEntes(); } catch (e) { console.error('Entes:', e); }
    try { actualizarGraficoNoContestados(); } catch (e) { console.error('No contestados:', e); }
    try { actualizarGraficoVencidos(); } catch (e) { console.error('Vencidos:', e); }
    try { actualizarGraficoTipos(); } catch (e) { console.error('Tipos:', e); }
    try { actualizarGraficoTendencia(); } catch (e) { console.error('Tendencia:', e); }
}

function actualizarGraficoEntes() {
    const conteo = {};
    datosFiltrados.forEach(r => { conteo[r.enteControl] = (conteo[r.enteControl] || 0) + 1; });
    const entries = Object.entries(conteo).sort((a, b) => b[1] - a[1]);
    const labels = entries.map(e => e[0]);
    const values = entries.map(e => e[1]);

    const ctx = document.getElementById('chartEntes').getContext('2d');
    if (chartEntes) chartEntes.destroy();
    chartEntes = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                data: values,
                backgroundColor: labels.map(colorEnte),
                borderColor: '#0d1117',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#f0f6fc', padding: 12, font: { size: 12 } } },
                tooltip: baseTooltip()
            }
        }
    });
}

function agruparPor(data, campo) {
    const conteo = {};
    data.forEach(r => {
        const k = r[campo] || 'N/A';
        conteo[k] = (conteo[k] || 0) + 1;
    });
    return Object.entries(conteo).sort((a, b) => b[1] - a[1]);
}

function actualizarGraficoNoContestados() {
    const pendientes = datosFiltrados.filter(d => d.estado === 'No Contestado');
    const datos = agruparPor(pendientes, 'dependenciaSimplificada').slice(0, 10);
    const labels = datos.map(d => d[0]);
    const values = datos.map(d => d[1]);

    const ctx = document.getElementById('chartNoContestados').getContext('2d');
    if (chartNoContestados) chartNoContestados.destroy();
    chartNoContestados = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'No Contestados',
                data: values,
                backgroundColor: 'rgba(210, 153, 34, 0.7)',
                borderColor: '#d29922',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: baseTooltip() },
            scales: {
                x: { ticks: { color: '#7d8590' }, grid: { color: '#21262d' } },
                y: { ticks: { color: '#f0f6fc', font: { size: 11 } }, grid: { display: false } }
            }
        }
    });
}

function actualizarGraficoVencidos() {
    const vencidos = datosFiltrados.filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vencido');
    const datos = agruparPor(vencidos, 'dependenciaSimplificada').slice(0, 10);
    const labels = datos.map(d => d[0]);
    const values = datos.map(d => d[1]);

    const ctx = document.getElementById('chartVencidos').getContext('2d');
    if (chartVencidos) chartVencidos.destroy();
    chartVencidos = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Vencidos',
                data: values,
                backgroundColor: 'rgba(248, 81, 73, 0.7)',
                borderColor: '#f85149',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: baseTooltip() },
            scales: {
                x: { ticks: { color: '#7d8590' }, grid: { color: '#21262d' } },
                y: { ticks: { color: '#f0f6fc', font: { size: 11 } }, grid: { display: false } }
            }
        }
    });
}

function actualizarGraficoTipos() {
    const datos = agruparPor(datosFiltrados, 'tipo').slice(0, 12);
    const labels = datos.map(d => d[0]);
    const values = datos.map(d => d[1]);

    const ctx = document.getElementById('chartTipos').getContext('2d');
    if (chartTipos) chartTipos.destroy();
    chartTipos = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Radicados',
                data: values,
                backgroundColor: PALETA,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: baseTooltip() },
            scales: {
                x: { ticks: { color: '#7d8590' }, grid: { color: '#21262d' } },
                y: { ticks: { color: '#f0f6fc', font: { size: 11 } }, grid: { display: false } }
            }
        }
    });
}

function actualizarGraficoTendencia() {
    const meses = MESES;
    const conteoEntes = {};
    datosFiltrados.forEach(d => { conteoEntes[d.enteControl] = (conteoEntes[d.enteControl] || 0) + 1; });
    const entesPresentes = Object.entries(conteoEntes)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(e => e[0]);

    const datasets = entesPresentes.map(ente => {
        const valores = new Array(12).fill(0);
        datosFiltrados.forEach(r => { if (r.enteControl === ente) valores[r.mes - 1]++; });
        const color = colorEnte(ente);
        return {
            label: ente,
            data: valores,
            borderColor: color,
            backgroundColor: color + '33',
            tension: 0.35,
            fill: false,
            borderWidth: 2,
            pointRadius: 2
        };
    });

    const ctx = document.getElementById('chartTendencia').getContext('2d');
    if (chartTendencia) chartTendencia.destroy();
    chartTendencia = new Chart(ctx, {
        type: 'line',
        data: { labels: meses, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { position: 'bottom', labels: { color: '#f0f6fc', padding: 12, font: { size: 11 } } },
                tooltip: baseTooltip()
            },
            scales: {
                x: { ticks: { color: '#7d8590' }, grid: { color: '#21262d' } },
                y: { beginAtZero: true, ticks: { color: '#7d8590' }, grid: { color: '#21262d' } }
            }
        }
    });
}

// ===========================================
// RANGE SLIDER DE MESES
// ===========================================

function inicializarRangeSlider() {
    const startSlider = document.getElementById('month-range-start');
    const endSlider = document.getElementById('month-range-end');
    const startValue = document.getElementById('month-start-value');
    const endValue = document.getElementById('month-end-value');
    const rangeFill = document.querySelector('.range-fill');

    function updateRangeSlider() {
        let startVal = parseInt(startSlider.value);
        let endVal = parseInt(endSlider.value);
        if (startVal > endVal) {
            if (this === startSlider) { endSlider.value = startVal; endVal = startVal; }
            else { startSlider.value = endVal; startVal = endVal; }
        }
        startValue.textContent = MESES[startVal - 1];
        endValue.textContent = MESES[endVal - 1];
        const p1 = ((startVal - 1) / 11) * 100;
        const p2 = ((endVal - 1) / 11) * 100;
        if (rangeFill) { rangeFill.style.left = p1 + '%'; rangeFill.style.width = (p2 - p1) + '%'; }
        aplicarFiltros();
    }

    startSlider.addEventListener('input', updateRangeSlider);
    endSlider.addEventListener('input', updateRangeSlider);
    updateRangeSlider();
}

function obtenerRangoMeses() {
    return {
        inicio: parseInt(document.getElementById('month-range-start').value),
        fin: parseInt(document.getElementById('month-range-end').value)
    };
}

// ===========================================
// MODAL DE DETALLES (TABLA)
// ===========================================

function getPendientes() {
    return datosFiltrados.filter(item =>
        item.estado === 'No Contestado' &&
        (item.estadoVencimiento === 'No Contestado - Plazo Vigente' ||
            item.estadoVencimiento === 'No Contestado - Plazo Vencido')
    );
}

function getTablaDatos() {
    let data = [...getPendientes()];
    if (tableSearchTerm) {
        const t = tableSearchTerm.toLowerCase();
        data = data.filter(item =>
            (item.codigo || '').toLowerCase().includes(t) ||
            (item.asunto || '').toLowerCase().includes(t) ||
            (item.enteControl || '').toLowerCase().includes(t) ||
            (item.dependenciaSimplificada || '').toLowerCase().includes(t) ||
            (item.fechaRegistroParsed && item.fechaRegistroParsed.format('DD/MM/YYYY').includes(tableSearchTerm))
        );
    }
    if (sortColumn) {
        data.sort((a, b) => {
            let av = a[sortColumn];
            let bv = b[sortColumn];
            if (sortColumn === 'fechaRegistro') {
                av = a.fechaRegistroParsed; bv = b.fechaRegistroParsed;
                if (av && bv) { av = av.toDate(); bv = bv.toDate(); }
            }
            if (av < bv) return sortDirection === 'asc' ? -1 : 1;
            if (av > bv) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }
    return data;
}

function openDetailsModal() {
    currentPage = 1;
    tableSearchTerm = '';
    document.getElementById('details-modal').style.display = 'flex';
    updateDetailsModal();

    document.getElementById('table-search').addEventListener('input', handleTableSearch);
    document.getElementById('prev-page').addEventListener('click', () => changePage(-1));
    document.getElementById('next-page').addEventListener('click', () => changePage(1));
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => sortTable(header.dataset.column));
    });
}

function closeDetailsModal() {
    document.getElementById('details-modal').style.display = 'none';
    document.getElementById('table-search').removeEventListener('input', handleTableSearch);
}

function updateDetailsModal() {
    const data = getTablaDatos();
    updateDetailsSummary(data);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);

    updateDetailsTable(pageData);
    updatePagination(totalPages, totalItems, startIndex, Math.min(endIndex, totalItems));
}

function updateDetailsSummary(data) {
    const dependencies = [...new Set(data.map(d => d.dependenciaSimplificada))].length;
    const vigentes = data.filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vigente').length;
    const vencidos = data.filter(d => d.estadoVencimiento === 'No Contestado - Plazo Vencido').length;

    let dateRange = '-';
    if (data.length > 0) {
        const fechas = data.map(d => d.fechaRegistroParsed).filter(Boolean).sort((a, b) => a.toDate() - b.toDate());
        if (fechas.length > 0) {
            const min = fechas[0].format('DD/MM/YYYY');
            const max = fechas[fechas.length - 1].format('DD/MM/YYYY');
            dateRange = min === max ? min : `${min} - ${max}`;
        }
    }

    document.getElementById('total-filtered').textContent = data.length.toLocaleString();
    document.getElementById('vigentes-count').textContent = vigentes.toLocaleString();
    document.getElementById('vencidos-count').textContent = vencidos.toLocaleString();
    document.getElementById('date-range').textContent = dateRange;
    document.getElementById('dependencies-count').textContent = dependencies;
}

function updateDetailsTable(data) {
    const tbody = document.getElementById('details-table-body');
    tbody.innerHTML = '';
    if (data.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
                    No se encontraron registros con los criterios actuales
                </td>
            </tr>`;
        return;
    }

    data.forEach(item => {
        let statusClass = 'status-no-requiere';
        let statusText = item.estadoVencimiento || 'N/A';
        if (statusText.includes('Plazo Vencido')) { statusClass = 'status-vencido'; statusText = 'Vencido'; }
        else if (statusText.includes('Plazo Vigente')) { statusClass = 'status-vigente'; statusText = 'Vigente'; }
        else if (statusText.includes('No Aplica')) { statusClass = 'status-no-requiere'; statusText = 'No Aplica'; }
        else if (statusText.includes('Contestado')) { statusClass = 'status-contestado'; statusText = 'Contestado'; }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.codigo}</td>
            <td class="asunto-cell" title="${item.asunto}">${item.asunto}</td>
            <td>${item.fechaRegistroParsed ? item.fechaRegistroParsed.format('DD/MM/YYYY') : 'N/A'}</td>
            <td><span class="ente-badge ${claseEnte(item.enteControl)}">${item.enteControl}</span></td>
            <td>${item.dependenciaSimplificada}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        `;
        tbody.appendChild(row);
    });
}

function updatePagination(totalPages, totalItems, startIndex, endIndex) {
    const paginationText = document.getElementById('pagination-text');
    const pageNumbers = document.getElementById('page-numbers');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');

    if (totalItems === 0) {
        paginationText.textContent = 'Mostrando 0 de 0 registros';
    } else {
        paginationText.textContent = `Mostrando ${startIndex + 1}-${endIndex} de ${totalItems.toLocaleString()} registros`;
    }
    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= totalPages;

    pageNumbers.innerHTML = '';
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) createPageNumber(i);
    } else {
        createPageNumber(1);
        if (currentPage > 3) pageNumbers.appendChild(createEllipsis());
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        for (let i = start; i <= end; i++) createPageNumber(i);
        if (currentPage < totalPages - 2) pageNumbers.appendChild(createEllipsis());
        createPageNumber(totalPages);
    }
}

function createPageNumber(page) {
    const pageEl = document.createElement('button');
    pageEl.className = `page-number ${page === currentPage ? 'active' : ''}`;
    pageEl.textContent = page;
    pageEl.addEventListener('click', () => goToPage(page));
    document.getElementById('page-numbers').appendChild(pageEl);
}

function createEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.textContent = '...';
    ellipsis.style.padding = 'var(--spacing-sm)';
    ellipsis.style.color = 'var(--text-secondary)';
    return ellipsis;
}

function goToPage(page) { currentPage = page; updateDetailsModal(); }

function changePage(direction) {
    const totalPages = Math.ceil(getTablaDatos().length / itemsPerPage);
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        updateDetailsModal();
    }
}

function handleTableSearch(event) {
    tableSearchTerm = event.target.value;
    currentPage = 1;
    updateDetailsModal();
}

function sortTable(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
        if (header.dataset.column === column) header.classList.add(`sort-${sortDirection}`);
    });
    currentPage = 1;
    updateDetailsModal();
}

// ===========================================
// EXPORTAR
// ===========================================

function exportToExcel() {
    try {
        const data = getTablaDatos();
        const excelData = data.map(item => {
            let statusText = item.estadoVencimiento || 'N/A';
            if (statusText.includes('Plazo Vencido')) statusText = 'Plazo Vencido';
            else if (statusText.includes('Plazo Vigente')) statusText = 'Plazo Vigente';
            else if (statusText.includes('No Aplica')) statusText = 'No Requiere Respuesta';
            else if (statusText.includes('Contestado')) statusText = 'Contestado';

            return {
                'Radicado': item.codigo,
                'Asunto': item.asunto,
                'Fecha Registro': item.fechaRegistroParsed ? item.fechaRegistroParsed.format('DD/MM/YYYY') : 'N/A',
                'Ente de Control': item.enteControl,
                'Institución': item.institucion,
                'Área Responsable': item.dependenciaSimplificada,
                'Tipo': item.tipo,
                'Estado': statusText,
                'Plazo (Días)': item.plazo || '',
                'Fecha Máxima': item.fechaMaximaRespuesta ? item.fechaMaximaRespuesta.format('DD/MM/YYYY') : 'N/A',
                'Oficio Respuesta': item.oficioRespuesta || 'N/A',
                'Fecha Respuesta': item.fechaRespuestaParsed ? item.fechaRespuestaParsed.format('DD/MM/YYYY') : 'N/A',
                'Emisor': item.emisor || '',
                'Medio Recepción': item.medioRecepcion || ''
            };
        });

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(excelData);
        worksheet['!cols'] = [
            { wch: 20 }, { wch: 50 }, { wch: 15 }, { wch: 18 }, { wch: 30 },
            { wch: 30 }, { wch: 30 }, { wch: 20 }, { wch: 12 }, { wch: 15 },
            { wch: 20 }, { wch: 15 }, { wch: 30 }, { wch: 15 }
        ];
        XLSX.utils.book_append_sheet(workbook, worksheet, 'IAS Pendientes');

        const dateStr = dayjs().format('YYYY-MM-DD_HH-mm');
        const fileName = `IAS_Pendientes_${excelData.length}_registros_${dateStr}.xlsx`;
        XLSX.writeFile(workbook, fileName);
        showExportNotification(fileName, excelData.length);
    } catch (error) {
        console.error('❌ Error al exportar Excel:', error);
        alert('Error al exportar el archivo Excel.');
    }
}

function showExportNotification(fileName, totalRecords) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: #217346; color: white;
        padding: 15px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000; font-family: var(--font-family); max-width: 360px;`;
    notification.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px; font-weight:600;">
            <span style="font-size:1.2rem;">✅</span> Exportación exitosa
        </div>
        <div style="margin-top:8px; font-size:0.85rem; opacity:0.95;">
            ${totalRecords.toLocaleString()} registros exportados<br>${fileName}
        </div>`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.transition = 'opacity 0.4s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// ===========================================
// INICIALIZACIÓN
// ===========================================

function verificarLibrerias() {
    const faltantes = [];
    if (!window.XLSX) faltantes.push('XLSX');
    if (!window.Chart) faltantes.push('Chart.js');
    if (!window.dayjs) faltantes.push('Day.js');
    if (faltantes.length > 0) {
        mostrarError(`Librerías no disponibles: ${faltantes.join(', ')}. Recargue la página.`);
        return false;
    }
    return true;
}

function inicializarDashboard() {
    if (!verificarLibrerias()) return;

    const fileUploader = document.getElementById('fileUploader');
    if (fileUploader) fileUploader.addEventListener('change', manejarArchivoSeleccionado);

    document.getElementById('year-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('ente-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('area-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('estado-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('typesall-filter').addEventListener('change', aplicarFiltros);
    document.getElementById('clear-filters').addEventListener('click', limpiarFiltros);
    document.getElementById('view-details').addEventListener('click', openDetailsModal);

    const detailsModal = document.getElementById('details-modal');
    if (detailsModal) {
        detailsModal.addEventListener('click', (event) => {
            if (event.target === detailsModal) closeDetailsModal();
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const m = document.getElementById('details-modal');
            if (m && m.style.display === 'flex') closeDetailsModal();
        }
    });

    inicializarRangeSlider();
    console.log('✅ Dashboard de Entes de Control (IAS) inicializado');
}

async function manejarArchivoSeleccionado(event) {
    const archivo = event.target.files[0];
    if (!archivo) return;

    if (!archivo.name.toLowerCase().endsWith('.xlsx')) {
        mostrarError('Por favor seleccione un archivo Excel (.xlsx)');
        return;
    }

    try {
        document.getElementById('file-name').textContent = archivo.name;
        document.getElementById('file-status').classList.remove('hidden');

        datosOriginales = await procesarArchivo(archivo);
        datosFiltrados = [...datosOriginales];

        inicializarFiltros();

        document.getElementById('welcome-message').classList.add('hidden');
        document.getElementById('filters-panel').classList.remove('hidden');
        document.getElementById('kpis-section').classList.remove('hidden');
        document.getElementById('entes-analysis').classList.remove('hidden');
        document.getElementById('trend-analysis').classList.remove('hidden');
        document.getElementById('charts-section').classList.remove('hidden');
        document.getElementById('footer').classList.remove('hidden');

        actualizarDashboard();

        window.addEventListener('resize', debounce(redimensionarGraficos, 250));
        console.log('🎉 Dashboard IAS completado:', datosOriginales.length, 'registros');
    } catch (error) {
        console.error('❌ Error procesando archivo IAS:', error);
        mostrarError(`Error procesando el archivo: ${error.message}`);
        datosOriginales = [];
        datosFiltrados = [];
        document.getElementById('file-status').classList.add('hidden');
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function redimensionarGraficos() {
    [chartEntes, chartNoContestados, chartVencidos, chartTipos, chartTendencia].forEach(c => {
        if (c) c.resize();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    inicializarDashboard();
});

window.addEventListener('error', function (event) {
    console.error('Error global:', event.error || event.message);
});
