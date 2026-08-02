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
    /** Pendiente según SDD */
    postular: "#postular",
  },
  program: {
    durationWeeks: 6,
    sessionsPerWeek: 2,
    sessionHours: 3,
    individualHoursApprox: 15,
    liveSchedule: "Los lunes y jueves de: 9:00 a.m - 12:00 p.m",
    applicationWindow: "Las postulaciones están abiertas del X hasta el X del X",
    startDate: "Inicio del programa: X de X de 2026",
    selectedStudents: 70,
  },
} as const;

export type SiteConfig = typeof siteConfig;
