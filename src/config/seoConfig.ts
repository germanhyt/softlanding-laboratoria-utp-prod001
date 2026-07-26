import { siteConfig } from "./site.config";

export const seoConfig = {
  title: `${siteConfig.name} | ${siteConfig.brand} × ${siteConfig.partner}`,
  titleTemplate: `%s | ${siteConfig.brand}`,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: `${siteConfig.brand} — ${siteConfig.name}`,
    title: `${siteConfig.name} | ${siteConfig.brand} × ${siteConfig.partner}`,
    description: siteConfig.description,
    images: [
      {
        url: "/assets/hero/hero-banner--desktop.webp",
        width: 1358,
        height: 604,
        alt: `${siteConfig.name} — Prepárate para destacar frente a las empresas`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.brand} × ${siteConfig.partner}`,
    description: siteConfig.description,
    image: "/assets/hero/hero-banner--desktop.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
} as const;

export type SeoConfig = typeof seoConfig;
