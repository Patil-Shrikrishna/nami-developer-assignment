/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "8px": "8px",
        "12px": "12px",
        "16px": "16px",
        "20px": "20px",
      },
    },
  },
  plugins: [],
};
