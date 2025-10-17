export const topics = [
  {
    id: 'gramatica',
    title: 'Gramática',
    summary: 'Domina las reglas clave para construir oraciones claras.',
    description:
      'La gramática te ayuda a ordenar las ideas y a expresar correctamente el tiempo, la persona y el modo. Dominarla hará que tu comunicación sea mucho más precisa.',
    example:
      'Por ejemplo: "Si hubiera estudiado, habría aprobado el examen" combina el pluscuamperfecto de subjuntivo con el condicional compuesto para expresar una situación hipotética en el pasado.',
    steps: [
      'Identifica el tiempo verbal y la persona de cada verbo en un párrafo corto.',
      'Reescribe tres oraciones cambiando del modo indicativo al subjuntivo.',
      'Crea dos ejemplos propios utilizando conectores condicionales como "si" o "a menos que".',
    ],
  },
  {
    id: 'lectura',
    title: 'Lectura',
    summary: 'Mejora tu comprensión con lecturas breves y análisis guiados.',
    description:
      'La lectura comprensiva entrena tu capacidad para inferir información, reconocer argumentos y ampliar el vocabulario en contexto.',
    example:
      'Lee este fragmento: "El avance tecnológico redefine la forma en que nos relacionamos, pero también exige nuevas habilidades". Identifica la idea principal y dos detalles que la respalden.',
    steps: [
      'Subraya palabras desconocidas y deduce su significado a partir del contexto inmediato.',
      'Resume el texto en dos oraciones que conserven la idea principal.',
      'Formula una pregunta abierta que invite a debatir sobre el tema leído.',
    ],
  },
  {
    id: 'vocabulario',
    title: 'Vocabulario',
    summary: 'Amplía tu repertorio con palabras y expresiones útiles.',
    description:
      'Un vocabulario rico permite matizar tus ideas y elegir palabras que se adapten a cada situación comunicativa.',
    example:
      'Aprende estas expresiones: "dar el brazo a torcer" (ceder), "ir al grano" (ser directo) y "estar en las nubes" (distraerse). Úsalas en oraciones propias.',
    categories: [
      {
        id: 'vocabulario-enfermeras',
        title: 'Vocabulario para enfermeras',
        description:
          'Expresiones útiles para hablar con pacientes y coordinarse con el equipo de salud.',
        levels: [
          {
            id: 'enfermeras-basico',
            title: 'Nivel básico',
            description:
              'Frases esenciales para las primeras interacciones y la recopilación de datos rápidos.',
            items: [
              {
                term: 'Paciente',
                definition: 'Persona que recibe atención médica o de enfermería.',
              },
              {
                term: 'Presión arterial',
                definition:
                  'Medida de la fuerza que ejerce la sangre contra las paredes de las arterias.',
              },
              {
                term: 'Temperatura corporal',
                definition:
                  'Valor que indica el nivel de calor del cuerpo y ayuda a detectar fiebre o hipotermia.',
              },
            ],
          },
          {
            id: 'enfermeras-intermedio',
            title: 'Nivel intermedio',
            description:
              'Vocabulario para describir procedimientos y dar seguimiento a la evolución clínica.',
            items: [
              {
                term: 'Signos vitales',
                definition:
                  'Conjunto de mediciones como presión arterial, pulso y temperatura que permiten evaluar el estado del paciente.',
              },
              {
                term: 'Historia clínica',
                definition:
                  'Registro de antecedentes médicos, tratamientos y alergias que guía la atención del paciente.',
              },
              {
                term: 'Administrar medicamentos',
                definition:
                  'Acción de preparar y entregar fármacos siguiendo la dosis, vía y horario prescritos.',
              },
            ],
          },
          {
            id: 'enfermeras-avanzado',
            title: 'Nivel avanzado',
            description:
              'Términos que facilitan la coordinación multidisciplinaria y la educación del paciente.',
            items: [
              {
                term: 'Ingreso hospitalario',
                definition:
                  'Proceso mediante el cual un paciente es admitido para recibir cuidados continuos en un hospital.',
              },
              {
                term: 'Consentimiento informado',
                definition:
                  'Autorización del paciente tras conocer los beneficios, riesgos y alternativas de un procedimiento.',
              },
              {
                term: 'Plan de cuidados',
                definition:
                  'Documento que organiza diagnósticos de enfermería, intervenciones y resultados esperados.',
              },
            ],
          },
        ],
      },
      {
        id: 'vocabulario-contadores',
        title: 'Vocabulario para contadores',
        description:
          'Términos frecuentes al preparar informes financieros y asesorar a clientes.',
        levels: [
          {
            id: 'contadores-basico',
            title: 'Nivel básico',
            description:
              'Conceptos fundamentales para registrar operaciones y entender reportes iniciales.',
            items: [
              {
                term: 'Factura',
                definition:
                  'Documento que respalda una venta o prestación de servicios y detalla los importes asociados.',
              },
              {
                term: 'Ingresos',
                definition: 'Entradas de dinero provenientes de la actividad principal de una organización.',
              },
              {
                term: 'Gastos',
                definition:
                  'Salidas de dinero necesarias para operar un negocio o sostener una actividad económica.',
              },
            ],
          },
          {
            id: 'contadores-intermedio',
            title: 'Nivel intermedio',
            description:
              'Lenguaje clave para la elaboración y análisis de estados financieros periódicos.',
            items: [
              {
                term: 'Estado de resultados',
                definition:
                  'Informe que resume ingresos, costos y utilidades de un periodo contable.',
              },
              {
                term: 'Conciliación bancaria',
                definition:
                  'Comparación entre el registro contable y el estado de cuenta del banco para identificar diferencias.',
              },
              {
                term: 'Depreciación',
                definition:
                  'Reconocimiento contable de la pérdida de valor de un activo a lo largo del tiempo.',
              },
            ],
          },
          {
            id: 'contadores-avanzado',
            title: 'Nivel avanzado',
            description:
              'Términos especializados para la planificación estratégica y el cumplimiento normativo.',
            items: [
              {
                term: 'Flujo de efectivo',
                definition:
                  'Registro de entradas y salidas de dinero que permite evaluar la liquidez de la empresa.',
              },
              {
                term: 'Balance general',
                definition:
                  'Estado financiero que muestra activos, pasivos y capital contable en una fecha determinada.',
              },
              {
                term: 'NIIF',
                definition:
                  'Conjunto de Normas Internacionales de Información Financiera que guían la presentación contable.',
              },
            ],
          },
        ],
      },
    ],
    steps: [
      'Agrupa nuevas palabras en categorías temáticas como trabajo, viajes o emociones.',
      'Escribe tarjetas con definiciones y sinónimos para repasarlas a diario.',
      'Incluye las palabras aprendidas en una breve narración o diálogo.',
    ],
  },
];
