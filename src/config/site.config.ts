export const siteConfig = {
  name: "Activa tu Carrera",
  brand: "Laboratoria",
  partner: "UTP",
  description:
    "Programa exclusivo de 6 semanas de Laboratoria en colaboración con UTP para fortalecer tu perfil profesional y prepararte para la búsqueda de empleo.",
  url: "https://laboratoria.la",
  locale: "es_PE",
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
  },
} as const;

export type SiteConfig = typeof siteConfig;
