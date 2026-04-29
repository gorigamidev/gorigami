export interface GlobalLevel {
  level: number;
  range: [number, number];
  name: string;
  diagnosis: string;
  status: string;
}

export interface BenchmarkRange {
  type: string;
  score_range: [number, number];
  message: string;
}

export interface DimensionBenchmark {
  name: string;
  ranges: BenchmarkRange[];
}

export interface ResultsDataQA {
  global_levels: GlobalLevel[];
  dimension_benchmarks: {
    [key: string]: DimensionBenchmark;
  };
}

export const DataQA: ResultsDataQA[] = [
{ 
    "global_levels": [
    {
      "level": 1,
      "range": [1.0, 1.9],
      "name": "Inicial / Incompleto",
      "diagnosis": "Gestión 'Ad-Hoc'. La información vive en silos (computadores personales y correos).",
      "status": "No existe un plan de datos y hay una dependencia total de personas clave y procesos manuales. Riesgo alto de pérdida de información."
    },
    {
      "level": 2,
      "range": [2.0, 2.9],
      "name": "Realizado / Reactivo",
      "diagnosis": "La empresa reconoce que los datos son importantes, pero solo actúa cuando hay problemas o incendios que apagar.",
      "status": "Se usan herramientas básicas (Excel) de forma intensiva, pero no hay estándares comunes entre áreas."
    },
    {
      "level": 3,
      "range": [3.0, 3.9],
      "name": "Gestionado / Definido",
      "diagnosis": "Existe una visión y estrategia formalizada. La organización sabe hacia dónde va.",
      "status": "Se han definido roles, estándares y reglas de calidad. La integración es funcional pero falta automatización."
    },
    {
      "level": 4,
      "range": [4.0, 4.9],
      "name": "Establecido / Proactivo",
      "diagnosis": "Los datos se gestionan de forma integral y proactiva. La gobernanza es la norma, no la excepción.",
      "status": "Sistemas integrados en la nube y mejora continua. Decisiones basadas 100% en hechos."
    },
    {
      "level": 5,
      "range": [5.0, 5.0],
      "name": "Optimizado / Innovador",
      "diagnosis": "Los datos son el ADN de la empresa. La organización es capaz de predecir y adaptarse rápidamente.",
      "status": "Uso avanzado de IA y automatización total. La cultura de datos es vivida por todos los niveles."
    }
  ],
  "dimension_benchmarks": {
    "D1": {
      "name": "Estrategia y Visión",
      "ranges": [
        {
          "type": "low",
          "score_range": [1.0, 2.5],
          "message": "La dirección no tiene un plan claro. Se ve el dato como un gasto administrativo y no como una inversión para ganar dinero."
        },
        {
          "type": "mid",
          "score_range": [2.6, 3.9],
          "message": "Hay intención y proyectos aislados, pero la estrategia no llega a todos los niveles de la empresa todavía."
        },
        {
          "type": "high",
          "score_range": [4.0, 5.0],
          "message": "Existe un roadmap claro y presupuesto asignado que guía el crecimiento y la innovación del negocio."
        }
      ]
    },
    "D2": {
      "name": "Cómo fluye y se cuida la información",
      "ranges": [
        {
          "type": "low",
          "score_range": [1.0, 2.5],
          "message": "Dependencia crítica de tareas manuales (copiar/pegar). El flujo de información es lento, propenso a errores y genera frustración."
        },
        {
          "type": "mid",
          "score_range": [2.6, 3.9],
          "message": "Existen procesos documentados, pero la integración entre departamentos aún requiere intervención manual frecuente."
        },
        {
          "type": "high",
          "score_range": [4.0, 5.0],
          "message": "Procesos estandarizados y automatizados. La información fluye sin fricciones y se limpia proactivamente."
        }
      ]
    },
    "D3": {
      "name": "Las personas y la cultura de datos",
      "ranges": [
        {
          "type": "low",
          "score_range": [1.0, 2.5],
          "message": "Baja alfabetización de datos (Data Literacy). Las decisiones se toman por 'olfato' o intuición y hay recelo al compartir información."
        },
        {
          "type": "mid",
          "score_range": [2.6, 3.9],
          "message": "El personal entiende los reportes básicos, pero aún falta autonomía para realizar análisis más profundos."
        },
        {
          "type": "high",
          "score_range": [4.0, 5.0],
          "message": "Cultura de datos sólida. El personal es autónomo, colabora entre áreas y cuestiona los resultados basándose en evidencias."
        }
      ]
    },
    "D4": {
      "name": "Confianza y calidad de la información",
      "ranges": [
        {
          "type": "low",
          "score_range": [1.0, 2.5],
          "message": "Inconsistencia en las cifras. Falta de definiciones comunes y desconfianza general en lo que dicen los sistemas."
        },
        {
          "type": "mid",
          "score_range": [2.6, 3.9],
          "message": "Los datos maestros están en proceso de unificación. La calidad es aceptable pero requiere validación constante."
        },
        {
          "type": "high",
          "score_range": [4.0, 5.0],
          "message": "Datos precisos, únicos y actualizados. Existe una 'única versión de la verdad' protegida por reglas de seguridad claras."
        }
      ]
    },
    "D5": {
      "name": "Herramientas y conexión de sistemas",
      "ranges": [
        {
          "type": "low",
          "score_range": [1.0, 2.5],
          "message": "Sistemas obsoletos, lentos o aislados (silos). La infraestructura colapsa o se frena ante el crecimiento de la información."
        },
        {
          "type": "mid",
          "score_range": [2.6, 3.9],
          "message": "Uso parcial de la nube y herramientas de BI, pero la conexión entre programas principales es limitada."
        },
        {
          "type": "high",
          "score_range": [4.0, 5.0],
          "message": "Ecosistema moderno en la nube. Los sistemas están integrados (APIs) y responden con rapidez a las consultas del negocio."
        }
      ]
    }
  }
}
]