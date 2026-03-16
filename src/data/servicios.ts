/**
 * Catálogo global de servicios — Extingix Limpiezas Post Siniestros
 * Los textos admiten variables {ciudad}, {provincia}, {empresa} que se
 * interpolan en tiempo de build. Ver src/data/index.ts → interpolate().
 */

export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export interface PasosProceso {
  titulo: string;
  descripcion: string;
}

export interface ServicioBase {
  slug: string;
  nombre: string;
  /** Descripción corta (meta description) */
  descripcionCorta: string;
  /** Descripción larga para la intro de la landing */
  descripcionLarga: string;
  beneficios: string[];
  proceso: PasosProceso[];
  faqs: FAQ[];
}

export const servicios: ServicioBase[] = [
  {
    slug: 'limpieza-post-incendio',
    nombre: 'Limpieza post incendio',
    descripcionCorta:
      'Limpieza profesional tras incendio en {ciudad}. Eliminamos hollín, humo y olores. Recupera tu inmueble con {empresa}.',
    descripcionLarga:
      'En {empresa} realizamos la limpieza integral de inmuebles afectados por incendio en {ciudad} y toda la provincia de {provincia}. Eliminamos hollín, residuos de combustión, manchas de humo y olores persistentes mediante técnicas especializadas, dejando el espacio en condiciones seguras y listas para la restauración o el uso.',
    beneficios: [
      'Eliminación completa de hollín y residuos de combustión',
      'Tratamiento de olores con maquinaria profesional de ozonización',
      'Desinfección de superficies afectadas por humo y calor',
      'Equipo especializado con EPIs adecuados para zonas siniestradas',
      'Presupuesto gratuito con inspección en {ciudad} en menos de 24 h',
      'Coordinación con aseguradoras y peritos si es necesario',
    ],
    proceso: [
      {
        titulo: 'Inspección y valoración',
        descripcion:
          'Visitamos el inmueble en {ciudad} para evaluar el alcance del siniestro. Identificamos zonas afectadas por hollín, humo y calor y elaboramos el plan de actuación.',
      },
      {
        titulo: 'Retirada de escombros y residuos',
        descripcion:
          'Retiramos materiales quemados, escombros y residuos del incendio de forma segura, con gestión certificada de residuos peligrosos si es necesario.',
      },
      {
        titulo: 'Limpieza y descontaminación',
        descripcion:
          'Aplicamos técnicas específicas para eliminar hollín de paredes, techos y suelos. Tratamos superficies porosas y no porosas con productos homologados.',
      },
      {
        titulo: 'Eliminación de olores',
        descripcion:
          'Utilizamos equipos de ozonización y nebulización para neutralizar el olor a humo y los compuestos orgánicos volátiles. Entregamos el inmueble libre de olores.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto tarda la limpieza post incendio en {ciudad}?',
        respuesta:
          'Depende del tamaño y la gravedad del siniestro. Un piso con daños moderados suele requerir entre 1 y 3 días. Te damos el plazo exacto tras la inspección gratuita.',
      },
      {
        pregunta: '¿Podéis coordinar con mi seguro?',
        respuesta:
          'Sí. Trabajamos habitualmente con aseguradoras y peritos en {ciudad}. Elaboramos informes detallados del trabajo realizado y podemos asistir a la peritación si es necesario.',
      },
      {
        pregunta: '¿Se puede eliminar completamente el olor a humo?',
        respuesta:
          'En la gran mayoría de casos sí. Usamos equipos de ozonización profesional que neutralizan los compuestos responsables del olor a humo, incluso en materiales porosos.',
      },
      {
        pregunta: '¿Cuándo se puede volver a ocupar el inmueble?',
        respuesta:
          'Una vez finalizada la limpieza y el tratamiento de olores, el inmueble es seguro para su ocupación. Te indicamos el momento exacto según el tipo de intervención realizada en {ciudad}.',
      },
      {
        pregunta: '¿Limpiáis también el exterior y zonas comunes del edificio?',
        respuesta:
          'Sí. Actuamos en zonas comunes, fachadas, escaleras o sótanos afectados por el incendio, siempre con la autorización correspondiente de la comunidad o propiedad.',
      },
    ],
  },

  {
    slug: 'limpieza-post-inundacion',
    nombre: 'Limpieza post inundación',
    descripcionCorta:
      'Limpieza y secado tras inundación en {ciudad}. Extracción de agua, desinfección y prevención de moho. {empresa}.',
    descripcionLarga:
      'En {empresa} intervenimos de forma urgente en inmuebles afectados por inundaciones en {ciudad} y la provincia de {provincia}. Extraemos el agua estancada, secamos la estructura con maquinaria industrial, desinfectamos todas las superficies y tratamos para prevenir la aparición de moho, recuperando el inmueble en el menor tiempo posible.',
    beneficios: [
      'Intervención urgente disponible 24/7 en {ciudad}',
      'Extracción de agua con equipos de succión industrial',
      'Secado profundo de estructura, paredes y suelos con deshumidificadores',
      'Desinfección total para eliminar bacterias y agentes patógenos',
      'Tratamiento preventivo antimoho en superficies porosas',
      'Coordinación con aseguradoras y peritos en {provincia}',
    ],
    proceso: [
      {
        titulo: 'Extracción de agua urgente',
        descripcion:
          'Acudimos de urgencia a {ciudad} y procedemos a la extracción del agua estancada con equipos de succión de alto rendimiento.',
      },
      {
        titulo: 'Secado industrial',
        descripcion:
          'Instalamos deshumidificadores y ventiladores industriales para secar la estructura, suelos y paredes en el menor tiempo posible.',
      },
      {
        titulo: 'Limpieza y desinfección',
        descripcion:
          'Limpiamos todas las superficies afectadas y aplicamos desinfectantes de amplio espectro para eliminar bacterias, hongos y agentes patógenos.',
      },
      {
        titulo: 'Tratamiento antimoho y seguimiento',
        descripcion:
          'Aplicamos tratamiento preventivo antimoho y realizamos un seguimiento de la humedad residual hasta confirmar que el inmueble está completamente seco y seguro.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Atendéis urgencias de inundación en {ciudad}?',
        respuesta:
          'Sí. Disponemos de servicio de urgencia 24/7 en {ciudad} y toda la provincia de {provincia}. Llámanos y gestionamos la respuesta inmediata.',
      },
      {
        pregunta: '¿Cuánto tiempo tarda en secarse un piso inundado?',
        respuesta:
          'Con nuestros equipos industriales, el secado de un piso estándar suele completarse en 3–7 días dependiendo del volumen de agua y el tipo de materiales afectados.',
      },
      {
        pregunta: '¿El moho es inevitable después de una inundación?',
        respuesta:
          'No si se actúa rápido. La clave es secar la estructura en las primeras 48–72 horas. Nuestro tratamiento antimoho preventivo reduce significativamente el riesgo de aparición posterior.',
      },
      {
        pregunta: '¿Trabajáis con seguros de hogar?',
        respuesta:
          'Sí. Colaboramos con las principales aseguradoras y podemos facilitar toda la documentación necesaria para la tramitación del siniestro en {ciudad}.',
      },
    ],
  },

  {
    slug: 'limpieza-post-mortem',
    nombre: 'Limpieza post mortem',
    descripcionCorta:
      'Limpieza post mortem en {ciudad}. Actuación discreta, desinfección biológica y recuperación del inmueble. {empresa}.',
    descripcionLarga:
      'En {empresa} realizamos la limpieza y descontaminación biológica de inmuebles tras fallecimiento en {ciudad} y la provincia de {provincia}. Actuamos con total discreción, respeto y confidencialidad. Nuestro equipo especializado elimina fluidos biológicos, desinfecta a fondo y neutraliza olores, dejando el inmueble en condiciones seguras e higiénicas.',
    beneficios: [
      'Actuación totalmente discreta y confidencial en {ciudad}',
      'Descontaminación biológica certificada por técnicos especializados',
      'Eliminación de fluidos biológicos con productos homologados',
      'Neutralización completa de olores con tratamiento de ozonización',
      'Gestión de residuos biológicos según normativa vigente en {provincia}',
      'Disponibilidad 24/7 — actuamos cuando lo necesites',
    ],
    proceso: [
      {
        titulo: 'Valoración discreta y confidencial',
        descripcion:
          'Visitamos el inmueble en {ciudad} con total discreción. Evaluamos el alcance de la contaminación biológica y establecemos el protocolo de actuación.',
      },
      {
        titulo: 'Descontaminación biológica',
        descripcion:
          'Nuestro equipo, equipado con EPIs de nivel adecuado, elimina todos los fluidos biológicos y aplica desinfectantes homologados en todas las superficies afectadas.',
      },
      {
        titulo: 'Eliminación de olores',
        descripcion:
          'Tratamos el inmueble con equipos de ozonización profesional para neutralizar completamente los olores derivados del fallecimiento.',
      },
      {
        titulo: 'Entrega certificada',
        descripcion:
          'Emitimos certificado de descontaminación biológica. El inmueble queda en condiciones higiénicas y seguras para su uso.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cómo de discreta es la intervención en {ciudad}?',
        respuesta:
          'Máxima discreción. Acudimos sin identificación visible en el vehículo, en el horario que prefieras y coordinamos el acceso para minimizar la exposición ante vecinos o terceros.',
      },
      {
        pregunta: '¿Cuánto tiempo tarda la limpieza post mortem?',
        respuesta:
          'La mayoría de intervenciones se completan en un día. El tiempo exacto depende del tamaño del inmueble y el tiempo transcurrido desde el fallecimiento.',
      },
      {
        pregunta: '¿Emitís certificado de descontaminación?',
        respuesta:
          'Sí. Entregamos certificado oficial de descontaminación biológica, necesario en muchos casos para la gestión del inmueble o tramitaciones legales.',
      },
      {
        pregunta: '¿Quién puede solicitar este servicio?',
        respuesta:
          'Familiares, administradores de fincas, comunidades de propietarios, gestorías, notarías o cualquier persona con acceso legal al inmueble en {ciudad}.',
      },
      {
        pregunta: '¿Trabajáis en festivos y fines de semana?',
        respuesta:
          'Sí. Disponemos de servicio 24/7 incluyendo festivos en {ciudad}. En situaciones urgentes, podemos acudir en pocas horas.',
      },
    ],
  },

  {
    slug: 'limpieza-diogenes',
    nombre: 'Limpieza síndrome de Diógenes',
    descripcionCorta:
      'Limpieza especializada por síndrome de Diógenes en {ciudad}. Actuación discreta, desinfección profunda y recuperación del inmueble. {empresa}.',
    descripcionLarga:
      'En {empresa} llevamos a cabo intervenciones especializadas en viviendas afectadas por el síndrome de Diógenes en {ciudad} y la provincia de {provincia}. Actuamos con total discreción y confidencialidad, retirando la acumulación de objetos y residuos orgánicos, desinfectando a fondo y dejando el inmueble en condiciones habitables.',
    beneficios: [
      'Actuación totalmente discreta y confidencial en {ciudad}',
      'Retirada de acumulación de objetos y residuos orgánicos',
      'Desinfección y desinsectación profunda del inmueble',
      'Equipo especializado con EPIs y formación específica',
      'Gestión de residuos certificada según normativa de {provincia}',
      'Coordinación con servicios sociales o familiares si es necesario',
    ],
    proceso: [
      {
        titulo: 'Valoración discreta',
        descripcion:
          'Visitamos el inmueble en {ciudad} para evaluar el grado de afectación. Toda la gestión es confidencial.',
      },
      {
        titulo: 'Retirada de acumulación',
        descripcion:
          'Retiramos objetos, residuos y materiales orgánicos de forma ordenada, clasificando lo que puede donarse o reciclarse.',
      },
      {
        titulo: 'Desinfección profunda',
        descripcion:
          'Aplicamos tratamiento de desinfección, desinsectación y eliminación de olores en suelos, paredes, techos y mobiliario que permanezca.',
      },
      {
        titulo: 'Entrega del inmueble',
        descripcion:
          'Dejamos la vivienda limpia y en condiciones habitables. Emitimos certificado de gestión de residuos si se requiere.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Actuáis con discreción en casos de síndrome de Diógenes en {ciudad}?',
        respuesta:
          'Sí. Trabajamos con la máxima confidencialidad. Nuestro equipo acude sin identificación visible y coordinamos el trabajo para minimizar la exposición ante vecinos o terceros.',
      },
      {
        pregunta: '¿Cuánto cuesta una limpieza por síndrome de Diógenes?',
        respuesta:
          'El precio depende del grado de acumulación y el tamaño del inmueble. Requiere visita previa para presupuestar correctamente. El presupuesto es gratuito y sin compromiso.',
      },
      {
        pregunta: '¿Podéis coordinarlo con servicios sociales o la familia?',
        respuesta:
          'Sí. Trabajamos habitualmente en coordinación con servicios sociales, tutores legales o familiares. Adaptamos los tiempos y el proceso a las necesidades del caso.',
      },
      {
        pregunta: '¿Qué hacéis con los objetos acumulados?',
        respuesta:
          'Separamos lo que pueda ser donado o reciclado. Los residuos orgánicos y materiales no recuperables se llevan a gestores autorizados en {provincia}.',
      },
    ],
  },

  {
    slug: 'descontaminacion',
    nombre: 'Descontaminación de inmuebles',
    descripcionCorta:
      'Descontaminación profesional de inmuebles en {ciudad}. Eliminación de agentes biológicos, químicos y contaminantes. {empresa}.',
    descripcionLarga:
      'En {empresa} realizamos la descontaminación integral de inmuebles en {ciudad} y la provincia de {provincia}. Actuamos ante contaminación por agentes biológicos, químicos, metales pesados o cualquier sustancia peligrosa, aplicando protocolos certificados y emitiendo documentación oficial que acredita la seguridad del inmueble.',
    beneficios: [
      'Protocolos certificados de descontaminación para todo tipo de agentes',
      'Equipo técnico especializado con formación en riesgos biológicos y químicos',
      'Documentación y certificado oficial de descontaminación en {ciudad}',
      'Gestión de residuos peligrosos según normativa de {provincia}',
      'Servicio disponible para particulares, comunidades y empresas',
      'Asesoramiento previo gratuito — evaluamos el tipo de contaminación',
    ],
    proceso: [
      {
        titulo: 'Diagnóstico de la contaminación',
        descripcion:
          'Identificamos el tipo y alcance de la contaminación en el inmueble de {ciudad}. Si es necesario, tomamos muestras para análisis de laboratorio.',
      },
      {
        titulo: 'Plan de descontaminación',
        descripcion:
          'Diseñamos el protocolo específico según el agente contaminante, siguiendo las normativas vigentes en {provincia} y la legislación nacional.',
      },
      {
        titulo: 'Intervención especializada',
        descripcion:
          'Nuestro equipo, con los EPIs adecuados, ejecuta la descontaminación aplicando productos y técnicas homologadas para cada tipo de contaminante.',
      },
      {
        titulo: 'Verificación y certificación',
        descripcion:
          'Verificamos la efectividad del tratamiento y emitimos el certificado oficial de descontaminación. El inmueble queda seguro y documentado.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Para qué situaciones es necesaria la descontaminación?',
        respuesta:
          'Es necesaria tras incendios con materiales tóxicos, derrames químicos, contaminación biológica, presencia de amianto, metales pesados u otras sustancias peligrosas en inmuebles de {ciudad}.',
      },
      {
        pregunta: '¿Emitís certificado oficial de descontaminación?',
        respuesta:
          'Sí. Entregamos certificado oficial que acredita que el inmueble ha sido descontaminado correctamente. Este documento es frecuentemente exigido por aseguradoras, administraciones o para trámites de compraventa.',
      },
      {
        pregunta: '¿Trabajáis con comunidades de propietarios en {ciudad}?',
        respuesta:
          'Sí. Atendemos tanto a particulares como a comunidades de propietarios, administradores de fincas y empresas en {ciudad} y toda la provincia de {provincia}.',
      },
      {
        pregunta: '¿Cómo se gestionan los residuos peligrosos?',
        respuesta:
          'Los residuos peligrosos se gestionan a través de gestores autorizados en {provincia}, cumpliendo estrictamente con la normativa de residuos peligrosos y emitiendo los albaranes correspondientes.',
      },
    ],
  },

  {
    slug: 'restauracion-inmueble',
    nombre: 'Restauración de inmuebles',
    descripcionCorta:
      'Restauración integral de inmuebles tras siniestro en {ciudad}. Obras, pintura y acabados para devolver el inmueble a su estado original. {empresa}.',
    descripcionLarga:
      'En {empresa} completamos la recuperación de inmuebles tras siniestros en {ciudad} y la provincia de {provincia} con el servicio de restauración integral. Tras la limpieza y descontaminación, nuestro equipo realiza las obras de reparación, pintura, sustitución de revestimientos y todos los acabados necesarios para devolver el inmueble a su estado original o mejor.',
    beneficios: [
      'Servicio integral: limpieza + descontaminación + restauración en {ciudad}',
      'Reparación de estructura, paredes, techos y suelos dañados',
      'Pintura y revestimientos con materiales de calidad',
      'Presupuesto cerrado sin sorpresas al finalizar',
      'Coordinación total con aseguradoras para la tramitación del siniestro',
      'Equipo multidisciplinar propio — un único interlocutor para todo',
    ],
    proceso: [
      {
        titulo: 'Evaluación de daños estructurales',
        descripcion:
          'Evaluamos los daños en la estructura, instalaciones y acabados del inmueble en {ciudad} para elaborar el presupuesto completo de restauración.',
      },
      {
        titulo: 'Trabajos de reparación',
        descripcion:
          'Reparamos techos, paredes y suelos dañados. Sustituimos elementos estructurales si es necesario y preparamos las superficies para los acabados.',
      },
      {
        titulo: 'Pintura y revestimientos',
        descripcion:
          'Aplicamos pintura, alicatados, pavimentos y todos los revestimientos necesarios para devolver el inmueble a su estado original.',
      },
      {
        titulo: 'Entrega y revisión final',
        descripcion:
          'Entregamos el inmueble completamente restaurado. Revisamos cada detalle contigo y facilitamos toda la documentación para la aseguradora.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Podéis gestionar toda la restauración tras un incendio o inundación?',
        respuesta:
          'Sí. Ofrecemos el servicio completo desde la limpieza inicial hasta la entrega del inmueble restaurado en {ciudad}, coordinando todos los gremios necesarios con un único presupuesto.',
      },
      {
        pregunta: '¿Trabajáis directamente con las aseguradoras?',
        respuesta:
          'Sí. Colaboramos con las principales aseguradoras y peritajes en {ciudad}. Elaboramos informes detallados y facilitamos la gestión del siniestro para que no tengas que preocuparte de nada.',
      },
      {
        pregunta: '¿Cuánto tarda la restauración de un piso tras un siniestro?',
        respuesta:
          'Depende de la gravedad de los daños. Un siniestro moderado suele restaurarse en 2–4 semanas. Te damos el plazo exacto tras la inspección gratuita en {ciudad}.',
      },
      {
        pregunta: '¿El presupuesto incluye materiales y mano de obra?',
        respuesta:
          'Sí. El presupuesto cerrado incluye todos los materiales, mano de obra y gestión de residuos. Sin sorpresas ni extras al finalizar la obra.',
      },
    ],
  },
];
