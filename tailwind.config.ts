import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { canvas: "#fafaf8", accent: "#6d7a5c" },
      borderRadius: { card: "22px" },
    },
  },
  plugins: [],
};
export default config;
