export const siteConfig = {
  name: "Activa tu carrera",
  brand: "Laboratoria",
  partner: "UTP",
  description:
    "Participa en Activa tu carrera, el programa de Laboratoria y UTP para fortalecer tu perfil profesional, prepararte para entrevistas y potenciar tu empleabilidad.",
  url: "https://activatucarrera-laboratoria-utp.com",
  locale: "es_PE",
  language: "es-PE",
  links: {
    conoceNos: "https://laboratoria.la",
    sobreLaboratoria: "https://laboratoria.la",
    postular: "https://laboratoria.typeform.com/to/TPTchbnr",
  },
  program: {
    durationWeeks: 6,
    sessionsPerWeek: 2,
    sessionHours: 4,
    individualHoursApprox: 4,
    liveSchedule:
      "Miércoles de 5:00 p.m a 7:00 p.m y sábado de 10:00 a.m a 12:00 p.m",
    applicationWindow: "Las postulaciones están abiertas del 14 hasta el X.",
    startDate: "Inicio del programa: 16 de septiembre de 2026",
    selectedStudents: 70,
  },
} as const;

export type SiteConfig = typeof siteConfig;
