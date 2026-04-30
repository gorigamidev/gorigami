interface DataQARow {
  ID: string;
  D_Block: string;
  QA_Type: string;
  QA: string;
  Opciones?: string[];
}

export const DataQA: DataQARow[] = [
  {
    "ID": "1.1",
    "D_Block": "D1",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Los datos que recolectamos (ventas, inventarios) son la fuente principal para las decisiones que tomamos en las reuniones semanales/mensuales."
  },
  {
    "ID": "1.2",
    "D_Block": "D1",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "He visto o me han presentado formalmente los proyectos tecnológicos que la empresa ejecutará en los próximos 12 meses."
  },
  {
    "ID": "1.3",
    "D_Block": "D1",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "En el último año, la empresa ha aprobado presupuesto o tiempo para adquirir/mejorar herramientas de manejo de información."
  },
  {
    "ID": "1.4",
    "D_Block": "D1",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "En mi empresa, los datos se cuidan y se valoran tanto como si fueran dinero o maquinaria pesada."
  },
  {
    "ID": "1.5",
    "D_Block": "D1",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Cuando se hace un cambio tecnológico o se estrena un nuevo reporte, nos explican claramente cómo eso nos va a facilitar el trabajo a todos."
  },
  {
    "ID": "1.6",
    "D_Block": "D1",
    "QA_Type": "Si/No",
    "QA": "¿Existe algún documento o guía escrita donde se explique cómo debe la empresa usar y cuidar sus datos?"
  },
  {
    "ID": "1.7",
    "D_Block": "D1",
    "QA_Type": "Si/No",
    "QA": "¿Se reúnen los líderes al menos una vez al año para revisar si la forma en que manejamos los datos sigue ayudando al negocio?"
  },
  {
    "ID": "1.8",
    "D_Block": "D1",
    "QA_Type": "Si/No",
    "QA": "¿Existe una partida presupuestaria específica para software, hardware o capacitación en datos?"
  },
  {
    "ID": "1.9",
    "D_Block": "D1",
    "QA_Type": "SeleccionMultiple",
    "QA": "¿Qué motiva a la empresa a mejorar su manejo de datos? (Marca todas las que apliquen)",
    "Opciones": [
      "Cumplir con leyes de protección de datos personales o auditorías.",
      "Reducir costos operativos y tiempos de trabajo.",
      "Crear nuevos productos o servicios basados en información.",
      "Entender mejor las necesidades de nuestros clientes.",
      "No hay una motivación clara o comunicada actualmente."
    ]
  },
  {
    "ID": "1.10",
    "D_Block": "D1",
    "QA_Type": "Abierta",
    "QA": "Si hoy tuvieras una \"varita mágica\" de datos, ¿qué problema de la empresa te gustaría que se resolviera mañana mismo?"
  },
  {
    "ID": "2.1",
    "D_Block": "D2",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Al ingresar al cargo, recibí un paso a paso claro (guía/manual) de cómo usar los sistemas de la empresa."
  },
  {
    "ID": "2.2",
    "D_Block": "D2",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Tenemos procesos de limpieza de datos programados (ej. corregir nombres, correos o duplicados) antes de que generen errores en los reportes."
  },
  {
    "ID": "2.3",
    "D_Block": "D2",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "La información pasa de un departamento a otro de forma rápida; no tenemos que esperar días o pedir favores para obtener un dato o cifra que necesitamos."
  },
  {
    "ID": "2.4",
    "D_Block": "D2",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "En los últimos 6 meses, hemos eliminado al menos un paso manual o un reporte innecesario para hacer el trabajo más ágil."
  },
  {
    "ID": "2.5",
    "D_Block": "D2",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "La mayoría de mis tareas diarias se registran directamente en un sistema, reduciendo el uso de anotaciones en papel o archivos Excel sueltos."
  },
  {
    "ID": "2.6",
    "D_Block": "D2",
    "QA_Type": "Si/No",
    "QA": "¿Existen manuales de procedimientos actualizados para la captura de datos maestros (clientes/productos)?"
  },
  {
    "ID": "2.7",
    "D_Block": "D2",
    "QA_Type": "Si/No",
    "QA": "¿Usamos programas que mueven o conectan la información entre sistemas automáticamente, sin que una persona tenga que copiar y pegar manualmente?"
  },
  {
    "ID": "2.8",
    "D_Block": "D2",
    "QA_Type": "Si/No",
    "QA": "¿La empresa lleva la cuenta de cuánto tiempo nos toma procesar un registro o cuánto tardamos en corregir un dato equivocado?"
  },
  {
    "ID": "2.9",
    "D_Block": "D2",
    "QA_Type": "SeleccionMultiple",
    "QA": "¿Cómo se procesa y mueve la información hoy? (Marca todas las que apliquen)",
    "Opciones": [
      "Escribimos datos manualmente en planillas o papel.",
      "Copiamos y pegamos datos entre diferentes archivos de Excel.",
      "Enviamos reportes y bases de datos por correo electrónico.",
      "Los sistemas se envían información entre sí automáticamente (APIs/Interfaces).",
      "Realizamos limpiezas de datos antes de generar informes."
    ]
  },
  {
    "ID": "2.10",
    "D_Block": "D2",
    "QA_Type": "Abierta",
    "QA": "¿Cuál es la tarea o el reporte que más tiempo te quita y que crees que debería ser más sencillo de hacer?"
  },
  {
    "ID": "3.1",
    "D_Block": "D3",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Me siento capaz de tomar decisiones asertivas con base en reportes, datos y/o gráficos."
  },
  {
    "ID": "3.2",
    "D_Block": "D3",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "En mi área, es obligatorio presentar una cifra o reporte que respalde cualquier propuesta antes de que sea aprobada."
  },
  {
    "ID": "3.3",
    "D_Block": "D3",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Tengo claro quién es el \"dueño\" de la información que uso (a quién le pertenece) y quién es el responsable de mantenerla al día."
  },
  {
    "ID": "3.4",
    "D_Block": "D3",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Si necesito información de otro departamento, me la comparten con facilidad y sin secretos; trabajamos como un solo equipo."
  },
  {
    "ID": "3.5",
    "D_Block": "D3",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "La empresa se preocupa por crear equipos de personas expertas que nos ayuden a entender y sacar provecho de la información."
  },
  {
    "ID": "3.6",
    "D_Block": "D3",
    "QA_Type": "Si/No",
    "QA": "¿Existe en la empresa un líder o un grupo de personas encargado oficialmente de poner las reglas sobre cómo manejar los datos?"
  },
  {
    "ID": "3.7",
    "D_Block": "D3",
    "QA_Type": "Si/No",
    "QA": "¿La empresa nos da cursos o capacitaciones frecuentes sobre cómo usar herramientas para analizar mejor la información?"
  },
  {
    "ID": "3.8",
    "D_Block": "D3",
    "QA_Type": "Si/No",
    "QA": "¿Sé exactamente a qué persona o área debo avisar si encuentro un error o dato equivocado en mi sistema de trabajo?"
  },
  {
    "ID": "3.9",
    "D_Block": "D3",
    "QA_Type": "SeleccionMultiple",
    "QA": "¿Qué capacidades tienen las personas respecto a los datos? (Marca todas las que apliquen)",
    "Opciones": [
      "Sabemos leer e interpretar gráficas básicas de rendimiento.",
      "Existen personas que saben crear sus propios reportes desde cero.",
      "Hay personal experto en análisis estadístico o ciencia de datos.",
      "La mayoría del personal necesita ayuda para entender los reportes actuales.",
      "Los empleados proponen mejoras basadas en lo que ven en los datos."
    ]
  },
  {
    "ID": "3.10",
    "D_Block": "D3",
    "QA_Type": "Abierta",
    "QA": "¿Qué es lo que más frena a la gente en esta empresa para confiar más en los datos y menos en la \"intuición\"?"
  },
  {
    "ID": "4.1",
    "D_Block": "D4",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "La información que uso para trabajar es correcta, está al día y no tengo que dudar de ella antes de usarla."
  },
  {
    "ID": "4.2",
    "D_Block": "D4",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Todos en la empresa entendemos lo mismo por conceptos clave (ej. todos sabemos qué es un \"cliente activo\" o qué es una \"venta cerrada\")."
  },
  {
    "ID": "4.3",
    "D_Block": "D4",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Puedo encontrar la información que necesito en los sistemas oficiales sin tener que pedirla por correo o buscarla en archivos guardados en computadores personales."
  },
  {
    "ID": "4.4",
    "D_Block": "D4",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "El sistema me avisa o me impide cometer errores cuando ingreso información (ej. no me deja dejar campos vacíos o poner letras donde van números)."
  },
  {
    "ID": "4.5",
    "D_Block": "D4",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "La información coincide entre los diferentes programas que usamos; no encuentro datos distintos para una misma cosa en dos sistemas diferentes."
  },
  {
    "ID": "4.6",
    "D_Block": "D4",
    "QA_Type": "Si/No",
    "QA": "¿Tenemos una lista o \"mapa\" oficial donde se explica qué información tiene la empresa y en qué programa o carpeta está guardada?"
  },
  {
    "ID": "4.7",
    "D_Block": "D4",
    "QA_Type": "Si/No",
    "QA": "¿Se limpia y organiza la información de los sistemas con frecuencia para que no se acumulen datos viejos o repetidos?"
  },
  {
    "ID": "4.8",
    "D_Block": "D4",
    "QA_Type": "Si/No",
    "QA": "¿Contamos con reglas estrictas para que la información privada (ej. cédulas, teléfonos o salarios) no sea vista por personas no autorizadas?"
  },
  {
    "ID": "4.9",
    "D_Block": "D4",
    "QA_Type": "SeleccionMultiple",
    "QA": "¿Qué problemas de calidad enfrentan frecuentemente? (Marca todos los que apliquen)",
    "Opciones": [
      "Información duplicada (ej. un mismo cliente registrado dos veces).",
      "Datos incompletos (campos vacíos en el sistema).",
      "Datos desactualizados (la información llega tarde).",
      "Diferentes áreas tienen números distintos para el mismo indicador.",
      "Falta de confianza: preferimos re-confirmar los datos manualmente."
    ]
  },
  {
    "ID": "4.10",
    "D_Block": "D4",
    "QA_Type": "Abierta",
    "QA": "Si encuentras un número que \"no te cuadra\" en un reporte, ¿qué es lo primero que haces y en quién confías para arreglarlo?"
  },
  {
    "ID": "5.1",
    "D_Block": "D5",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Nuestros sistemas y equipos son lo suficientemente potentes para manejar toda la información de la empresa sin ponerse lentos o fallar cuando más los necesitamos."
  },
  {
    "ID": "5.2",
    "D_Block": "D5",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "La información se sincroniza entre programas al instante; lo que registro en un sistema se ve reflejado en los demás sin esperar a que alguien lo cargue."
  },
  {
    "ID": "5.3",
    "D_Block": "D5",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Utilizo herramientas modernas (Nube, Power BI, Dashboards) para visualizar mis indicadores en lugar de tablas estáticas."
  },
  {
    "ID": "5.4",
    "D_Block": "D5",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Cuando necesito consultar un dato o generar un reporte, el sistema me da la respuesta rápidamente, sin esperas largas ni bloqueos."
  },
  {
    "ID": "5.5",
    "D_Block": "D5",
    "QA_Type": "Cualitativa [1...5]",
    "QA": "Entiendo claramente cómo viaja la información desde que se registra hasta que llega a los reportes finales de la empresa."
  },
  {
    "ID": "5.6",
    "D_Block": "D5",
    "QA_Type": "Si/No",
    "QA": "¿Usamos servicios en la nube (como Google Cloud, AWS o Azure) para guardar o procesar la información de la compañía?"
  },
  {
    "ID": "5.7",
    "D_Block": "D5",
    "QA_Type": "Si/No",
    "QA": "¿Contamos con herramientas que conecten nuestros sistemas automáticamente para que no tengamos que subir o bajar archivos manualmente (Excel/CSV)?"
  },
  {
    "ID": "5.8",
    "D_Block": "D5",
    "QA_Type": "Si/No",
    "QA": "¿Tiene el equipo técnico un mapa o diagrama visual que muestre cómo están conectados todos los sistemas de datos de la empresa?"
  },
  {
    "ID": "5.9",
    "D_Block": "D5",
    "QA_Type": "SeleccionMultiple",
    "QA": "¿Qué tecnologías utilizan actualmente? (Marca todas las que apliquen)",
    "Opciones": [
      "Hojas de cálculo (Excel, Google Sheets).",
      "Sistemas de gestión específicos (ERP, CRM, Software contable).",
      "Herramientas de visualización (Power BI, Tableau, Looker).",
      "Almacenamiento en la nube (Google Drive, OneDrive, Dropbox, AWS).",
      "Chatbots o herramientas de Inteligencia Artificial."
    ]
  },
  {
    "ID": "5.10",
    "D_Block": "D5",
    "QA_Type": "Abierta",
    "QA": "Si pudieras cambiar un solo programa o equipo que usas hoy porque es muy lento o viejo, ¿cuál elegirías?"
  }
]
