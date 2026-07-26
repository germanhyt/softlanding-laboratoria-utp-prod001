import { siteConfig } from "./site.config";

/** Metadata SEO según Documento SEO Landing Activa tu Carrera (v2). */
export const seoConfig = {
  title: "Activa tu Carrera | Programa Laboratoria + UTP",
  titleTemplate: `%s | ${siteConfig.brand}`,
  description: siteConfig.description,
  canonical: siteConfig.url,
  keywords: [
    "Activa tu Carrera",
    "Activa tu Carrera UTP",
    "Laboratoria UTP",
    "Programa Activa tu Carrera",
    "Estudiantes UTP",
    "Empleabilidad universitaria",
    "Preparación laboral",
    "Desarrollo profesional",
    "Habilidades profesionales",
    "Inserción laboral",
    "Orientación laboral",
    "Simulación de entrevistas",
    "Programa de empleabilidad",
    "Programa Laboratoria UTP",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: `${siteConfig.name} | ${siteConfig.brand} + ${siteConfig.partner}`,
    title: "Activa tu Carrera | Laboratoria + UTP",
    description:
      "Potencia tu perfil profesional, fortalece tus habilidades y prepárate para tus próximos procesos de selección.",
    images: [
      {
        url: "/assets/hero/hero-banner--desktop.webp",
        width: 1200,
        height: 630,
        alt: "Estudiantes de UTP participando en el programa Activa tu Carrera de Laboratoria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Activa tu Carrera | Laboratoria + UTP",
    description:
      "Potencia tu perfil profesional, fortalece tus habilidades y prepárate para tus próximos procesos de selección.",
    image: "/assets/hero/hero-banner--desktop.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
  hreflang: [
    { lang: "es-PE", href: siteConfig.url },
    { lang: "x-default", href: siteConfig.url },
  ],
} as const;

export type SeoConfig = typeof seoConfig;
