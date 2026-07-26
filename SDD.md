
Sobre el proyecto:

1) El proyecto es una landing para "Laboratoria en colaboración con UTP" para impulsar

2) La Arquitectura de informacióm se basa en los siguientes puntos
- en info/img/ enccontramos las imágenes que se asignarán a cada sección de la landing
- El frame general lo revisamos de mcp con figma que te indicaré
- En caso de haber problemas con el punto anterior (figma) vamos a leer las imagenes de info/prototype/

3) Secciones:
- Respetamos cada sección según el figma o las imágenes estructuradas que están en prototype
- RespectO a la sección "Qué necesitas para particpar" hay un imágens como flechas verticales donde debe tener animación con movimiento hacia arriba sin parar

4) Enlaces:
- Este es el enlace para conócenos y Sobre Laboratoria: https://laboratoria.la
- Enlace para postular: pendiente



Detalles técnicos:

1) Para maquetado y estilos:
- React island y typescript: con web componentes, hooks y buenas prácticas para un rendimiento óptimo de los renders.
- Tailwindcss 4 con tailwind.config.ts: estilos con orden jerárquico y buenas prácticas, en casos especiales usar css puro.
- React Icons: Para iconos
- Framer-motion: Para efectos y animaciones, en casos especiales usar css puro.
- Clippy css: Para aperutra de main en responsive y donde sea necesario
- Swiper: Para carousel de cards, reseñas, contenidos.

2) Para SEO:
- crear config/seoConfig.ts y config/site.config.ts: Preparado para personalizar datos del cliente
- además preparar el file de robots y sitemap

3) Helpers
- utils/helpers.ts: En caso de que se necesiten funciones comunes


4) Para el gestor de depndencias:
- pnpm

5) Consideramos tailwind.config.ts y responsive:
- "import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1.2rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
      },
      colors: {
        primary: {
        },
        text: {
        },
        background: {

        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient()',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
"

6) Basado en el package.json:
- "  "dependencies": {
    "@astrojs/react": "^4.4.0",
    "@astrojs/sitemap": "^3.6.0",
    "@astrojs/tailwind": "^6.0.2",
    "astro": "^5.15.3",
    "framer-motion": "^12.23.24",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "sweetalert2": "^11.26.3",
    "swiper": "^12.0.3"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^24.9.1",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "react-icons": "^5.5.0",
    "tailwindcss": "^3.4.18",
    "typescript": "^5.9.3",
  }" 


7) En caso sea landing basado en el astro.config.mjs cuyo ejemplo es (readaptamos):
- "// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.biotraining.pe",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2025-11-12"),
    }),
  ],
  output: "static",
});
"

--



====================================================


4)

Según las imágenes de los prototypes

- en "Hoy una buena formación"  este card separar con la sección de abajo, y los vector top/bottom separalo poco más, el fondo amarillo dar pooco más de ancho según prototype  -rigth y bottom acomodar de estos vectores

- en "Si te identificas" no solo son slides pasando sino vamos aplicar la animación de "Effect cards" de wiper donde cada card viene de la derecha a la izquierda, si paginación de puntos

. en "¿Qué necesitas para participar?" la imagen de los universitarios debe estar en el bottom y apegado a la siguiente sección, y que solo las flechas en momiento están pegados arriba y abajo de su sección


5)

commit de cambios,

luego centramos el set de cards y además refactorizar animación para que sea uno donde cada card va entrando de izquer da derecha de forma recta como observa en la imagen que te paso 

era de derecha a izquierda como entrante, además más widht y menos height, y jusntar poco más próimo al texto (estoc omo la imagen del protype)

6)
commit y luego

cambios en responsive
- en el footer también el conócenos al lado derecho del logo, acomodamos
- en "¿Qué necesitas para participar?" consideramos las felchas en movimiento también
- las preguntas frecuentes es: "¿Quiénes pueden postular?
El programa está dirigido a estudiantes de los últimos años de la UTP, mayores de 18 años, que quieran prepararse para su búsqueda de empleo y fortalecer las habilidades que hoy buscan las empresas. 

¿Cómo será el proceso de selección?
El proceso de selección consta de tres etapas:
Completar el formulario de postulación.
Compartir información sobre tu formación y experiencia.
Responder algunas preguntas grabadas para conocer mejor tu motivación e interés por participar.
Las personas seleccionadas recibirán un correo con los siguientes pasos para confirmar su participación.
¿Cuántos estudiantes serán seleccionados?
En esta primera edición se seleccionará un grupo de 70 estudiantes. 

¿Cuánto dura el programa?
El programa tiene una duración de 6 semanas y combina sesiones en vivo con actividades prácticas para que puedas aplicar lo aprendido desde el primer día. 

¿Cuánto tiempo debo dedicar cada semana?
Deberás dedicar aproximadamente 10 horas por semana, distribuidas entre:
6 horas de sesiones grupales en vivo.
4 horas de actividades individuales.

¿Tiene algún costo?
No. Gracias a la alianza entre la UTP y Laboratoria, este programa es exclusivo para estudiantes de la universidad. 

¿Cuándo inicia?
La próxima edición iniciará (fecha por confirmar).
Las personas seleccionadas recibirán toda la información por correo antes del inicio del programa."


7)
commit, luego

- en responsive la flecha en movimiento de arriba no parte del bpottom sino que ya sesté en movimiento en todo el hight, además que sea visible en el high veo que hay un fondo blanco que lo tapa solo debe estar detrás de los cards como tal, corregimos

- en el hero banner de desktop que no sea tan negro el gradient


