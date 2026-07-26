import { siteConfig } from "@/config/site.config";

export const heroContent = {
  title: "Prepárate para destacar frente a las empresas con Activa tu Carrera",
  description:
    "La UTP y Laboratoria te invitan a postular a Activa tu Carrera, un programa exclusivo de 6 semanas para fortalecer tu perfil profesional y prepararte para afrontar tu búsqueda de empleo con mayor confianza.",
  cta: "Postular",
  tagline: "Impulsando el talento",
  imageDesktop: "/assets/hero/hero-banner--desktop.webp",
  imageMobile: "/assets/hero/hero-banner--mobile.webp",
};

export const insightContent = {
  title: "Hoy una buena formación académica ya no es suficiente por sí sola",
  titleAccent: "ya no es suficiente por sí sola",
  bodyBefore:
    "Las empresas buscan mucho más que conocimientos técnicos,",
  bodyBold:
    "buscan personas que sepan adaptarse, aprender rápido, trabajar en equipo y aprovechar herramientas como la IA",
  bodyAfter: "para generar más impacto.",
  decorTop: "/assets/decoradores/vector-top.png",
  decorBottom: "/assets/decoradores/vector-bottom.png",
};

export const situationsContent = {
  titleBefore: "Si te identificas con alguna de estas situaciones,",
  titleAccent: "Activa tu carrera",
  titleAfter: "es para ti.",
  slides: [
    {
      id: "destacar",
      bg: "bg-primary",
      text: "Tengo la formación, pero no sé cómo destacar frente a otros candidatos.",
      bold: "no sé cómo destacar",
      image: "/assets/section3/no-se-como-destacar.webp",
      alt: "Ilustración de personas en reunión",
    },
    {
      id: "potencial",
      bg: "bg-accent-pink",
      text: "No sé cómo demostrar mi potencial en un proceso de selección.",
      bold: "demostrar mi potencial",
      image: "/assets/section3/demostrar-mi-potencial.webp",
      alt: "Ilustración de entrevista",
    },
    {
      id: "herramientas",
      bg: "bg-accent-cyan",
      text: "Siento que me faltan las herramientas para enfrentar el mercado laboral actual.",
      bold: "Siento que me faltan las herramientas",
      image: "/assets/section3/me-faltan-herramientas.webp",
      alt: "Ilustración de presentación",
    },
  ],
};

export const skillsContent = {
  title: "Desarrolla las habilidades que marcarán la diferencia en tus procesos de selección",
  subtitle:
    "No es solo teoría. Son herramientas que aplicarás desde la primera semana para prepararte para tu búsqueda de empleo.",
  cards: [
    {
      title: "Entrenarás para entrevistas reales",
      description:
        "Practicarás entrevistas y recibirás feedback personalizado para llegar con mayor preparación y seguridad.",
      image: "/assets/section4/entrenaras-entrevistas.webp",
    },
    {
      title: "Usarás la IA como una aliada",
      description:
        "Aprenderás a utilizar herramientas de inteligencia artificial para potenciar tu búsqueda de empleo.",
      image: "/assets/section4/usaras-ia-como-salida.webp",
    },
    {
      title: "Definirás tu siguiente paso profesional",
      description:
        "Construirás un plan para iniciar tu carrera con mayor claridad y seguridad.",
      image: "/assets/section4/siguiente-paso-profesional.webp",
    },
    {
      title: "Fortalecerás tu confianza",
      description:
        "Te prepararás para afrontar entrevistas y dar tus primeros pasos profesionales con mayor seguridad.",
      image: "/assets/section4/fortalecer-confianza.webp",
    },
    {
      title: "Aprenderás a comunicar el valor que puedes aportar",
      description:
        "Transformarás tus conocimientos, proyectos y habilidades en un relato que conecte con las empresas.",
      image: "/assets/section4/aprender-comunicar.webp",
    },
    {
      title: "Construirás un perfil profesional sólido",
      description:
        "Transformarás tus conocimientos, proyectos y habilidades en un relato que conecte con las empresas.",
      image: "/assets/section4/construiras-perfil-profesional.webp",
    },
  ],
};

export const requirementsContent = {
  title: "¿Qué necesitas para participar?",
  cta: "Postular",
  image: "/assets/section5/universitarios-pareja.webp",
  arrows: "/assets/decoradores/multiple-arrows-vertical.png",
  cards: [
    {
      icon: "/assets/icons/icon-lapiz.png",
      title: "Requisitos para postular",
      items: [
        "Estás en los últimos años de tu carrera en la UTP.",
        "Tienes 18 años o más.",
        "Cuentas con el tiempo para participar durante las 6 semanas del programa.",
      ],
    },
    {
      icon: "/assets/icons/icon-cursor.png",
      title: "Postulación e inicio del programa",
      items: [
        siteConfig.program.applicationWindow,
        siteConfig.program.startDate,
      ],
    },
    {
      icon: "/assets/icons/icon-reloj.png",
      title: "Duración y sesiones del programa",
      items: [
        "6 semanas de duración.",
        "2 sesiones en vivo por semana (3 horas cada una).",
        "15 horas de trabajo individual aproximadamente.",
      ],
    },
    {
      icon: "/assets/icons/icon-horarios.png",
      title: "Horarios de sesiones en vivo",
      items: [siteConfig.program.liveSchedule],
    },
  ],
};

export const experienceContent = {
  title: "Así será tu experiencia en Activa tu Carrera",
  subtitle: "Este será tu camino durante las próximas 6 semanas",
  slides: [
    {
      tag: "Prácticas",
      description: "Sesiones en vivo con aprendizaje práctico",
      bold: "aprendizaje práctico",
      image: "/assets/section6/1_practicas.webp",
    },
    {
      tag: "Entrevista",
      description: "Simulaciones de entrevistas",
      bold: "Simulaciones",
      image: "/assets/section6/2_entrevistas.webp",
    },
    {
      tag: "Asesorías 1 a 1",
      description: "Coaching y acompañamiento personalizado",
      bold: "personalizado",
      image: "/assets/section6/3_asesorias.webp",
    },
    {
      tag: "Feedback",
      description: "Feedback personalizado de especialistas",
      bold: "Feedback personalizado",
      image: "/assets/section6/4_feedback.webp",
    },
    {
      tag: "Herramientas de IA",
      description: "Uso de herramientas de inteligencia artificial",
      bold: "inteligencia artificial",
      image: "/assets/section6/5_herramientas.webp",
    },
    {
      tag: "Comunidad",
      description: "Comunidad exclusiva de estudiantes UTP",
      bold: "Comunidad exclusiva",
      image: "/assets/section6/6_comunidad.webp",
    },
    {
      tag: "Certificado",
      description: "Certificado de participación",
      bold: "Certificado",
      image: "/assets/section6/7_certificacion.webp",
    },
  ],
};

export const finalCtaContent = {
  title: "Convierte tu potencial en oportunidades profesionales",
  description:
    "Da el siguiente paso en tu carrera con un programa diseñado para ayudarte a destacar en el mercado laboral, fortalecer tu perfil profesional y prepararte para los procesos de selección con mayor confianza.",
  cta: "Postular",
  image: "/assets/section7/convierte-tu-potencial.webp",
};

export const faqContent = {
  title: "Preguntas frecuentes",
  items: [
    {
      question: "¿Quiénes pueden postular?",
      answer:
        "Estudiantes de la UTP que estén en los últimos años de su carrera, tengan 18 años o más y puedan dedicar el tiempo requerido durante las 6 semanas del programa.",
    },
    {
      question: "¿Cómo será el proceso de selección?",
      answer:
        "Revisaremos tu postulación y te contactaremos con los siguientes pasos. El proceso busca identificar motivación, disponibilidad y compromiso con el programa.",
    },
    {
      question: "¿Cuántos estudiantes serán seleccionados?",
      answer:
        "El cupo es limitado para asegurar acompañamiento cercano. Los detalles de plazas se comunicarán durante el proceso de postulación.",
    },
    {
      question: "¿Cuánto dura el programa?",
      answer: "El programa tiene una duración de 6 semanas.",
    },
    {
      question: "¿Cuánto tiempo debo dedicar cada semana?",
      answer:
        "Son 2 sesiones en vivo por semana de 3 horas cada una, más aproximadamente 15 horas de trabajo individual a lo largo del programa.",
    },
    {
      question: "¿Tiene algún costo?",
      answer:
        "Activa tu Carrera es un programa impulsado por Laboratoria en colaboración con UTP. La información de costo se confirmará en la convocatoria oficial.",
    },
    {
      question: "¿Cuándo inicia?",
      answer: siteConfig.program.startDate,
    },
  ],
};

export const navContent = {
  sobreLaboratoria: "Sobre Laboratoria",
  postular: "Postular",
  conoceNos: "Conócenos",
};
