import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
        center: true,
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
        sans: ["Work Sans", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FFE521",
          dark: "#F5D800",
        },
        accent: {
          pink: "#EE77F2",
          "pink-soft": "#EEA0F2",
          cyan: "#7AD8FE",
          mint: "#57F7AA",
        },
        text: {
          DEFAULT: "#000000",
          muted: "#444444",
          soft: "#282828",
        },
        background: {
          DEFAULT: "#FFFFFF",
          muted: "#F4F4F4",
          dark: "#232323",
        },
        line: {
          DEFAULT: "#C0C0C0",
        },
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(90deg, rgba(0, 0, 0, 0.52) 18%, rgba(0, 0, 0, 0.28) 48%, rgba(0, 0, 0, 0.04) 78%)",
        "gradient-hero-mobile":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.32) 55%, rgba(0, 0, 0, 0.18) 100%)",
      },
      borderRadius: {
        section: "20px",
        pill: "25px",
      },
      boxShadow: {
        cta: "0px 7px 4px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
