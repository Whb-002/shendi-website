/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00D4FF",
          light: "#66E5FF",
          dark: "#0099CC",
        },
        accent: {
          DEFAULT: "#7B2FFF",
          light: "#9D5FFF",
          dark: "#5A1FCC",
        },
        surface: {
          dark: "#0A0E27",
          medium: "#111640",
          light: "#1A1F4A",
          card: "#16205A",
        },
        text: {
          primary: "#E8ECF4",
          secondary: "#8892B0",
          muted: "#5A6380",
        },
        success: "#00F5A0",
        warning: "#FF6B35",
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', "sans-serif"],
        serif: ['"Noto Serif SC"', '"SimSun"', "serif"],
        mono: ['"JetBrains Mono"', '"Space Grotesk"', "monospace"],
        display: ['"Orbitron"', '"Space Grotesk"', "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "scroll-arrow": "scrollArrow 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scrollArrow: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #00D4FF 0%, #7B2FFF 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(0,212,255,0.08), rgba(123,47,255,0.08))",
        "gradient-text": "linear-gradient(90deg, #00D4FF, #7B2FFF)",
        "gradient-hero": "linear-gradient(180deg, transparent 0%, rgba(10,14,39,0.7) 70%, #0A0E27 100%)",
      },
    },
  },
  plugins: [],
};
