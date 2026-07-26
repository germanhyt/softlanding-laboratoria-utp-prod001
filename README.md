# Softlanding Laboratoria × UTP

Landing estática de **Activa tu Carrera** (Laboratoria en colaboración con UTP).

## Stack

- Astro 5 (static) + React islands
- Tailwind CSS 3 + `tailwind.config.ts`
- Framer Motion, Swiper, React Icons
- pnpm

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Configuración

- Dominio de producción: `https://activatucarrera-laboratoria-utp.com`
- Enlaces y datos del programa: `src/config/site.config.ts`
- SEO / Open Graph: `src/config/seoConfig.ts`
- Datos estructurados (JSON-LD): `src/config/structuredData.ts`
- Contenido de secciones: `src/data/content.ts`
- Assets: `public/assets/` (copiados desde `info/img/`)
- `public/robots.txt` + sitemap vía `@astrojs/sitemap`

El enlace de **Postular** está pendiente (`#postular`) según el SDD.
