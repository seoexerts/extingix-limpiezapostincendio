/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Servicio profesional en {{city}} y comarca',
    h1main:      'Limpiezas post siniestro',
    h1accent:    'en {{city}}',
    description: 'Recuperamos tu inmueble tras incendios, inundaciones y otros siniestros. Actuación rápida, discreta y certificada. Presupuesto gratuito en 24 h.',
    badge1:      'Actuación urgente 24/7',
    badge2:      'Incendios, inundaciones y post mortem',
    badge3:      'Descontaminación certificada',
    badge4:      'Coordinamos con tu seguro',
    cardStat:    '+500',
    cardLabel:   'siniestros resueltos',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Equipo especializado en {{city}}',
      description: 'Técnicos certificados en descontaminación biológica y química. Formación específica para cada tipo de siniestro. No subcontratamos.',
    },
    {
      icon: 'clock',
      title:       'Respuesta urgente 24/7',
      description: 'Disponibles todos los días del año en {{city}} y comarca. En situaciones críticas acudimos en pocas horas. El tiempo es clave para minimizar daños.',
    },
    {
      icon: 'check',
      title:       'Certificado oficial incluido',
      description: 'Emitimos certificado de descontaminación o limpieza biológica al finalizar. Documentación válida para aseguradoras, administraciones y trámites legales.',
    },
    {
      icon: 'box',
      title:       'Coordinación con aseguradoras',
      description: 'Colaboramos con las principales aseguradoras en {{city}}. Elaboramos informes detallados y asistimos a peritaciones para facilitar la tramitación.',
    },
    {
      icon: 'heart',
      title:       'Máxima discreción',
      description: 'En casos sensibles (post mortem, Diógenes) actuamos con total confidencialidad. Sin identificación visible, en el horario que prefieras.',
    },
    {
      icon: 'users',
      title:       'Servicio integral post siniestro',
      description: 'De la limpieza inicial a la restauración completa del inmueble. Un único interlocutor para todo el proceso, sin gestionar múltiples empresas.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'limpieza-post-incendio',
      nombre:      'Limpieza post incendio',
      description: 'Eliminamos hollín, humo y residuos de combustión. Tratamiento de olores con ozonización profesional. Recupera tu hogar o negocio tras el fuego.',
      features:    ['Eliminación de hollín y humo', 'Ozonización anti-olores', 'Coordinación con perito'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-post-inundacion',
      nombre:      'Limpieza post inundación',
      description: 'Extracción de agua, secado industrial y desinfección total. Actuación urgente para prevenir moho y daños estructurales.',
      features:    ['Extracción de agua urgente', 'Secado con deshumidificadores', 'Tratamiento antimoho'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-post-mortem',
      nombre:      'Limpieza post mortem',
      description: 'Descontaminación biológica certificada con total discreción y respeto. Eliminación de fluidos, olores y recuperación del inmueble.',
      features:    ['Máxima confidencialidad', 'Certificado biológico', 'Disponible 24/7'],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-diogenes',
      nombre:      'Limpieza síndrome de Diógenes',
      description: 'Intervención discreta en viviendas con acumulación severa. Desinfección, retirada de residuos orgánicos y recuperación completa.',
      features:    ['Total confidencialidad', 'Desinfección profunda', 'Gestión certificada'],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'descontaminacion',
      nombre:      'Descontaminación de inmuebles',
      description: 'Eliminación de agentes biológicos, químicos y contaminantes. Protocolo certificado y documentación oficial para aseguradoras.',
      features:    ['Protocolo certificado', 'Residuos peligrosos', 'Certificado oficial'],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'restauracion-inmueble',
      nombre:      'Restauración de inmuebles',
      description: 'Obras, pintura y acabados tras el siniestro. Devolvemos el inmueble a su estado original con un único presupuesto cerrado.',
      features:    ['Servicio integral completo', 'Presupuesto cerrado', 'Coordinamos con seguro'],
      featured:    false,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años recuperando inmuebles tras siniestros. Equipo propio, certificado y con protocolos homologados.',
    serviciosSub:   'Soluciones especializadas para cada tipo de siniestro.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en Extingix.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del tipo de siniestro y la superficie afectada.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula tras la inspección gratuita según el tipo y alcance del siniestro.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'MC',
      name:     'Miquel Cano',
      location: '{{city}}',
      service:  'Limpieza post incendio',
      quote:    'Tras el incendio en la cocina llamé a Extingix y acudieron al día siguiente. Limpiaron el hollín, eliminaron el olor a humo y dejaron el piso impecable. El proceso con el seguro fue muy fácil gracias a su documentación.',
    },
    {
      initials: 'JR',
      name:     'Jordana Rull',
      location: '{{city}}',
      service:  'Limpieza post inundación',
      quote:    'La riada nos destrozó el bajo. Extingix llegaron en pocas horas, extrajeron el agua y pusieron a secar la estructura. Semanas después, sin rastro de humedad ni moho. Profesionales de verdad.',
    },
    {
      initials: 'AL',
      name:     'Anna L.',
      location: '{{city}}',
      service:  'Limpieza post mortem',
      quote:    'En un momento muy difícil, el equipo de Extingix fue extremadamente discreto y respetuoso. Nos quitaron un gran peso de encima. El certificado de descontaminación fue imprescindible para gestionar el piso.',
    },
    {
      initials: 'PG',
      name:     'Pere G.',
      location: '{{city}}',
      service:  'Restauración de inmueble',
      quote:    'Contratamos la limpieza post incendio y la restauración completa. Un solo equipo, un solo presupuesto cerrado y cero sorpresas. El piso quedó mejor que antes del siniestro.',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Limpieza básica post siniestro',
      precio:    '300 €',
      highlight: false,
      badge:     'PRECIO APROX.',
      features:  ['Hasta 40 m² afectados', 'Limpieza y desinfección', '1 jornada de trabajo', 'Informe básico'],
    },
    {
      tipo:      'Siniestro en vivienda completa',
      precio:    '800 €',
      highlight: true,
      badge:     'PRECIO APROX.',
      features:  ['70–100 m² afectados', 'Limpieza + descontaminación', 'Tratamiento de olores incluido', 'Certificado oficial + informe seguro'],
    },
    {
      tipo:      'Local o nave industrial',
      precio:    '1.200 €',
      highlight: false,
      badge:     'PRECIO APROX.',
      features:  ['Hasta 150 m²', 'Protocolo industrial completo', 'Gestión residuos peligrosos', 'Certificado + documentación completa'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto cuesta la limpieza post incendio en {{city}}?',
      respuesta: 'Depende del tamaño afectado y la gravedad del siniestro. Ofrecemos inspección y presupuesto gratuito en {{city}} en menos de 24 horas. Los precios orientativos van desde 300 € para intervenciones pequeñas.',
    },
    {
      pregunta:  '¿Podéis actuar de urgencia en {{city}}?',
      respuesta: 'Sí. Disponemos de servicio urgente 24/7 en {{city}} y toda la provincia. Llámanos y valoramos la situación de inmediato. En casos críticos acudimos en pocas horas.',
    },
    {
      pregunta:  '¿Coordinais con mi seguro de hogar?',
      respuesta: 'Sí. Colaboramos habitualmente con aseguradoras y peritos en {{city}}. Elaboramos informes detallados del siniestro y el trabajo realizado, y podemos asistir a la peritación si es necesario.',
    },
    {
      pregunta:  '¿Emitís certificado de descontaminación?',
      respuesta: 'Sí. Entregamos certificado oficial al finalizar la intervención. Este documento es necesario para tramitar el siniestro con la aseguradora y en muchos casos para volver a ocupar el inmueble legalmente.',
    },
    {
      pregunta:  '¿Se puede eliminar completamente el olor a humo?',
      respuesta: 'En la gran mayoría de casos sí. Utilizamos equipos de ozonización profesional que neutralizan los compuestos responsables del olor a humo, incluso en materiales porosos como paredes o tejidos.',
    },
    {
      pregunta:  '¿También hacéis la restauración tras la limpieza?',
      respuesta: 'Sí. Ofrecemos el servicio integral completo: limpieza, descontaminación y restauración del inmueble con un único presupuesto cerrado. No necesitas contratar diferentes empresas.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      'Contacto e inspección gratuita',
      descripcion: 'Llámanos, escríbenos por WhatsApp o rellena el formulario. Acudimos a inspeccionar el siniestro en {{city}} y en menos de 24 horas recibes un presupuesto cerrado sin letra pequeña.',
    },
    {
      titulo:      'Plan de actuación',
      descripcion: 'Diseñamos el protocolo específico según el tipo de siniestro. Te explicamos cada paso y coordinamos con tu aseguradora si es necesario. Sin sorpresas.',
    },
    {
      titulo:      'Intervención especializada',
      descripcion: 'Nuestro equipo técnico ejecuta la limpieza, descontaminación y tratamientos necesarios con equipos profesionales. En la mayoría de casos completamos la intervención en 1–3 jornadas.',
    },
    {
      titulo:      'Entrega y certificación',
      descripcion: 'Entregamos el inmueble limpio y seguro con el certificado oficial. Facilitamos toda la documentación para la aseguradora y acompañamos en cualquier trámite posterior.',
    }
  ],

} as const;

export type Content = typeof content;
