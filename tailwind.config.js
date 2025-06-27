/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        background: "rgba(99, 102, 241, 0.1)",
        secondary: "#8b5cf6",
        accent: "#06b6d4",
      },
      height: {
        projectH: "28rem",
        projectHeight: "31rem",
      },
      width: {
        projectW: "22rem",
        projectFull: "32rem",
        projectHalf: "30rem",
      },
    },
  },
  plugins: [],
};
