/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "64px",
        xxl: "120px",
      },
    },
    colors: {
      primary: "#00A56B",
      secondary: "#FF6622",
      tertiary: "#FDBE0F",
      white: "#FDFDFD",
      black: "#000014",
    },
    maxWidth: {
      base: "1200px",
      128: "128px",
    },
    width: {
      base: "1200px",
    },
    lineHeight: {
      sm: "88px",
    },
  },
  plugins: [],
};
