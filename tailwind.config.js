/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  safelist: [
    "border-accent1",
    "border-accent2",
    "border-accent3",
    "border-accent4",
    "text-accent1",
    "text-accent2",
    "text-accent3",
    "text-accent4",
    "bg-accent1",
    "bg-accent2",
    "bg-accent3",
    "bg-accent4",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        modal: "rgb(var(--color-modal) / <alpha-value>)",
        accent1: {
          DEFAULT: "rgb(var(--color-accent1) / <alpha-value>)",
          hover: "rgb(var(--color-accent1-hover) / <alpha-value>)",
        },
        accent2: "rgb(var(--color-accent2) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        around: "0px 0px 12px 2px var(--tw-shadow)",
      },
    },
  }
};
