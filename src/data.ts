import { 
  Search, 
  Target, 
  Network, 
  LayoutTemplate, 
  MousePointerClick, 
  Palette, 
  Blocks, 
  LineChart, 
  Award, 
  CalendarDays 
} from 'lucide-react';

export const proposalData = {
  client: "Rimmer Lighting",
  title: "Estrategia de Transformación Digital B2B",
  subtitle: "Propuesta de Rediseño Web y Experiencia de Usuario",
  date: new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' }),
  sections: [
    {
      id: "diagnostico",
      title: "1. Diagnóstico del Sitio Actual",
      icon: Search,
      content: [
        "Tras un análisis heurístico del ecosistema digital actual de Rimmer Lighting, identificamos que el sitio opera principalmente como un folleto informativo estático, perdiendo oportunidades críticas de conversión B2B.",
        "**Puntos críticos de fricción:**",
        "• **Propuesta de valor diluida:** No se comunica de inmediato el valor consultivo de Rimmer; el sitio parece un directorio de marcas en lugar de un socio estratégico en iluminación.",
        "• **Navegación técnica deficiente:** Los especificadores (arquitectos/ingenieros) enfrentan demasiados clics para encontrar recursos vitales (fichas técnicas, archivos IES, modelos Revit).",
        "• **Falta de embudos de conversión:** Los llamados a la acción (CTAs) son genéricos ('Contáctanos'). No hay mecanismos para capturar leads en diferentes etapas del ciclo de compra (ej. 'Solicitar estudio fotométrico').",
        "• **Rendimiento y UX Móvil:** La experiencia en dispositivos móviles no está optimizada para consultas rápidas en obra, un caso de uso común para ingenieros residentes."
      ]
    },
    {
      id: "objetivos",
      title: "2. Objetivos del Rediseño",
      icon: Target,
      content: [
        "El nuevo sitio web no será solo un escaparate, sino una **herramienta de ventas y especificación** que trabaje 24/7. Los objetivos rectores son:",
        "**1. Generación de Leads Calificados (B2B):** Implementar flujos que conviertan el tráfico anónimo en MQLs (Marketing Qualified Leads) y SQLs (Sales Qualified Leads) a través de formularios inteligentes.",
        "**2. Posicionamiento de Autoridad:** Transicionar la percepción de 'vendedores de lámparas' a 'Consultores Expertos en Soluciones de Iluminación Arquitectónica e Industrial'.",
        "**3. Facilitar la Especificación Técnica:** Convertir el sitio en la herramienta favorita de los arquitectos e ingenieros en México y Centroamérica, haciendo que especificar productos de Rimmer sea la opción más fácil y rápida del mercado."
      ]
    },
    {
      id: "sitemap",
      title: "3. Arquitectura de la Información (Sitemap)",
      icon: Network,
      content: [
        "Una estructura plana y orientada a la intención de búsqueda del usuario:",
        "• **Inicio** (Orientado a conversión y propuesta de valor)",
        "• **Soluciones por Industria** (Hospitalidad, Retail, Corporativo, Industrial, Salud)",
        "• **Catálogo de Productos** (Buscador facetado avanzado)",
        "• **Marcas Representadas** (Páginas dedicadas por fabricante con su respectivo catálogo)",
        "• **Proyectos / Casos de Éxito** (Galería de impacto visual con desglose técnico)",
        "• **Recursos Técnicos** (Portal de descargas IES/Revit, Blog técnico, Webinars)",
        "• **Nosotros** (Historia, equipo, cobertura en México y Centroamérica)",
        "• **Contacto / Cotizar Proyecto** (Formularios dinámicos)"
      ]
    },
    {
      id: "secciones",
      title: "4. Descripción de Secciones Clave",
      icon: LayoutTemplate,
      content: [
        "**Home orientado a conversión:** Hero section con video/render arquitectónico de alto impacto. Propuesta de valor clara en el primer segundo. Tres vías de navegación inmediatas: 'Soy Arquitecto', 'Soy Contratista', 'Soy Cliente Final'.",
        "**Catálogo Inteligente:** No es un e-commerce tradicional. Es un motor de especificación. Filtros por: Aplicación (Interior/Exterior), Tipo de Montaje, Temperatura de Color (CCT), Flujo Luminoso, y Certificaciones (LEED, WELL).",
        "**Página de Proyectos:** Formato 'Problema - Solución - Resultado'. Fotografías profesionales de gran formato. Listado exacto de las luminarias utilizadas en ese proyecto con enlaces directos al catálogo.",
        "**Página de Industrias:** Landing pages específicas. Un arquitecto de hospitales no busca lo mismo que un diseñador de retail. Mensajes, normativas y productos curados por sector.",
        "**Formularios Avanzados:** Formularios multi-paso lógicos. En lugar de un solo campo de 'Mensaje', preguntaremos: Tipo de proyecto, Metraje aproximado, Etapa del proyecto (Diseño, Licitación, Construcción). Esto pre-califica al lead para el equipo de ventas."
      ]
    },
    {
      id: "ux",
      title: "5. Experiencia de Usuario (UX)",
      icon: MousePointerClick,
      content: [
        "Diseñada específicamente para el modelo mental de profesionales técnicos:",
        "• **Fricción Cero en Descargas:** Los usuarios registrados podrán descargar paquetes completos de fotometrías (archivos .IES) y modelos BIM/Revit con un solo clic, sin llenar formularios repetitivos.",
        "• **Búsqueda Predictiva:** Barra de búsqueda global con autocompletado que reconozca SKUs, nombres de familias de productos o términos técnicos (ej. 'wall washer 3000k').",
        "• **Modo 'En Obra' (Mobile):** Interfaz móvil simplificada con botones grandes, alto contraste para lectura bajo el sol, y acceso rápido a fichas técnicas en PDF para consultas rápidas durante la instalación."
      ]
    },
    {
      id: "ui",
      title: "6. Propuesta Visual (UI)",
      icon: Palette,
      content: [
        "**Concepto: 'La luz define el espacio'.**",
        "• **Estilo 'Dark Mode' por defecto:** Un fondo oscuro (Deep Zinc/Onyx) permite que las fotografías de iluminación y los renders arquitectónicos resalten de manera espectacular, simulando el efecto de la luz en la oscuridad.",
        "• **Tipografía:** Uso de tipografías geométricas y limpias (ej. Space Grotesk para titulares, Inter para lectura técnica) que transmiten precisión, ingeniería y modernidad.",
        "• **Acentos de Color:** Uso estratégico de tonos cálidos (ámbar, oro) y fríos (blanco puro, azul hielo) exclusivamente para guiar la atención hacia los CTAs (Call to Actions) y elementos interactivos.",
        "• **Micro-interacciones:** Efectos sutiles de 'glow' al pasar el cursor sobre los productos, elevando la percepción de marca premium."
      ]
    },
    {
      id: "integraciones",
      title: "7. Integraciones Recomendadas",
      icon: Blocks,
      content: [
        "Para que el sitio sea una máquina de ventas, debe conectarse con su stack tecnológico:",
        "• **CRM (HubSpot o Salesforce):** Sincronización bidireccional de leads. Cada formulario llenado crea un negocio en el pipeline de ventas automáticamente.",
        "• **Marketing Automation:** Integración con ActiveCampaign o Mailchimp para nutrir a los leads que descargan archivos IES pero aún no cotizan.",
        "• **PIM (Product Information Management):** Si el catálogo es muy extenso, recomendamos integrar un PIM para que la actualización de fichas técnicas, lúmenes y SKUs se refleje en la web en tiempo real sin intervención manual.",
        "• **Analytics Avanzado:** Google Tag Manager y GA4 configurados para medir eventos clave (clics en 'Descargar PDF', envíos de formulario de cotización)."
      ]
    },
    {
      id: "seo",
      title: "8. Estrategia SEO y Contenido",
      icon: LineChart,
      content: [
        "**SEO Técnico y B2B:**",
        "• **Keywords Long-Tail Transaccionales:** Optimización no solo para 'iluminación', sino para términos de alta intención de compra como 'distribuidor iluminación industrial Monterrey', 'luminarias para quirófano especificaciones', 'representante marca X en México'.",
        "• **Arquitectura en Silos:** Estructuración de URLs lógica (ej. `/industrias/retail/iluminacion-aparadores`) para transferir autoridad de dominio.",
        "• **Estrategia de Contenidos (Hub de Autoridad):** Creación de artículos técnicos, guías de cumplimiento de normativas (ej. NOM-025-STPS), y whitepapers sobre eficiencia energética. Esto atrae a ingenieros en fase de investigación."
      ]
    },
    {
      id: "diferenciadores",
      title: "9. Diferenciadores frente a la Competencia",
      icon: Award,
      content: [
        "Mientras la competencia tiene catálogos en PDF obsoletos o sitios web genéricos, Rimmer Lighting destacará por:",
        "• **Ser una Herramienta, no un Folleto:** El sitio le ahorra horas de trabajo al arquitecto al centralizar todos los recursos técnicos.",
        "• **Enfoque Consultivo Digital:** La web guía al usuario hacia la solución correcta mediante filtros inteligentes, replicando la experiencia de hablar con uno de sus ingenieros de ventas.",
        "• **Prueba Social Innegable:** Casos de éxito documentados con rigor técnico y estético que generan confianza inmediata en tomadores de decisión de alto nivel."
      ]
    },
    {
      id: "roadmap",
      title: "10. Roadmap de Implementación",
      icon: CalendarDays,
      content: [
        "Metodología ágil dividida en 4 fases (Tiempo estimado: 12-14 semanas):",
        "• **Fase 1: Discovery & UX (Semanas 1-3):** Entrevistas con stakeholders, definición de buyer personas (Arquitecto, Contratista), wireframes de baja fidelidad y arquitectura de información.",
        "• **Fase 2: UI & Branding Digital (Semanas 4-6):** Diseño visual de alta fidelidad, creación del sistema de diseño, prototipos interactivos y aprobación de look & feel.",
        "• **Fase 3: Desarrollo Frontend & Backend (Semanas 7-11):** Programación a medida, integración de CMS para autogestión del catálogo, desarrollo de calculadoras/filtros e integraciones CRM.",
        "• **Fase 4: QA, Contenido y Lanzamiento (Semanas 12-14):** Pruebas de estrés, revisión en múltiples dispositivos, optimización SEO técnica, capacitación al equipo de Rimmer y Go-Live."
      ]
    }
  ]
};
