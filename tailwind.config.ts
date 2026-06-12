import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#10185A",
        blue: "#2861AF",
        teal: "#0C8A91",
        red: "#ED1C2E",
        cloud: "#F5F8FC",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 24, 90, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
