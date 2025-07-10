import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        navy: "var(--color-navy)",
        gold: "var(--color-gold)",
        lp2: "var(--color-lp2)",
        lp3: "var(--color-lp3)",
      },
    },
  },
  plugins: [],
} satisfies Config;