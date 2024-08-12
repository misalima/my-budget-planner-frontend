import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-poppins)'],
      },
      colors: {
        "title": "var(--title)",
        "lightgreen": "var(--lightgreen)",
        "orange": "var(--orange)",
        "blue": "var(--blue)",
        "lightgrey": "var(--lightgrey)",
        "darkblue": "var(--darkblue)",
      },
    },
  },
  plugins: [],
};
export default config;
