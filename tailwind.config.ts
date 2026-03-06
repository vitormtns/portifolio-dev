import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07090E",
        panel: "#0D111B",
        text: "#F5F7FA",
        muted: "#A0A9BA",
        accent: {
          blue: "#38BDF8",
          violet: "#A78BFA",
          green: "#34D399"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(167,139,250,0.25), 0 10px 40px rgba(56,189,248,0.25)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(167,139,250,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(52,211,153,0.12), transparent 40%), linear-gradient(120deg, #06070b 0%, #0c1020 48%, #0a121a 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseLine: "pulseLine 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
