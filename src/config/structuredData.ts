import { siteConfig } from "./site.config";
import { seoConfig } from "./seoConfig";
import { faqContent } from "@/data/content";

type FaqItem = (typeof faqContent.items)[number];

function faqAnswerText(item: FaqItem): string {
  const parts = [item.answer];
  if ("steps" in item && item.steps?.length) {
    parts.push(item.steps.map((step, i) => `${i + 1}. ${step}`).join(" "));
  }
  if ("closing" in item && item.closing) {
    parts.push(item.closing);
  }
  return parts.filter(Boolean).join(" ");
}

/** Schema.org JSON-LD para SEO / IA (Documento SEO v2). */
export function buildStructuredData(canonicalUrl: string) {
  const orgLaboratoria = {
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.url}/#organization-laboratoria`,
    name: siteConfig.brand,
    url: siteConfig.links.sobreLaboratoria,
    sameAs: [siteConfig.links.sobreLaboratoria],
  };

  const orgUtp = {
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.url}/#organization-utp`,
    name: siteConfig.partner,
    description: "Universidad Tecnológica del Perú",
  };

  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: `${siteConfig.name} — ${siteConfig.brand} + ${siteConfig.partner}`,
    url: siteConfig.url,
    logo: new URL("/assets/logos/logo-black.png", siteConfig.url).toString(),
    parentOrganization: { "@id": orgLaboratoria["@id"] },
    member: [{ "@id": orgLaboratoria["@id"] }, { "@id": orgUtp["@id"] }],
  };

  const course = {
    "@type": "Course",
    "@id": `${siteConfig.url}/#course`,
    name: siteConfig.name,
    description: seoConfig.description,
    url: canonicalUrl,
    inLanguage: siteConfig.language,
    provider: { "@id": orgLaboratoria["@id"] },
    sponsor: { "@id": orgUtp["@id"] },
    educationalLevel: "HigherEducation",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Estudiantes universitarios UTP en últimos años de carrera",
    },
    timeRequired: `P${siteConfig.program.durationWeeks}W`,
    courseWorkload: "PT10H",
    teaches: [
      "Preparación para entrevistas laborales",
      "Habilidades profesionales",
      "Uso de inteligencia artificial para búsqueda de empleo",
      "Comunicación del valor profesional",
      "Construcción de perfil profesional",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PEN",
      category: "Free",
      availability: "https://schema.org/InStock",
      url: new URL(siteConfig.links.postular, siteConfig.url).toString(),
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      name: `${siteConfig.name} — Edición actual`,
      courseMode: "Blended",
      courseWorkload: "PT10H",
      maximumAttendeeCapacity: siteConfig.program.selectedStudents,
      description:
        "Programa de 6 semanas con sesiones en vivo, actividades prácticas y acompañamiento para potenciar la empleabilidad.",
    },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: seoConfig.title,
    description: seoConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": organization["@id"] },
      inLanguage: siteConfig.language,
    },
    about: { "@id": course["@id"] },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: new URL(seoConfig.openGraph.images[0].url, siteConfig.url).toString(),
      width: seoConfig.openGraph.images[0].width,
      height: seoConfig.openGraph.images[0].height,
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: canonicalUrl,
      },
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faqContent.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(item),
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, orgLaboratoria, orgUtp, course, webPage, breadcrumb, faqPage],
  };
}
