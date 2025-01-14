import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in the `src` directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff8700", // McLaren orange
        secondary: "#e06d00", // Darker orange for hover states
      },
    },
  },
  plugins: [],
};

export default config;
