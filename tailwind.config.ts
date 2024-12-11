import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F8FAFC",
            foreground: "#11181C",
            primary: {
              50: "#E6F1FE",
              100: "#CCE4FD",
              200: "#99C9FB",
              300: "#66AEF9",
              400: "#3393F7",
              500: "#0078F5", // primary base color - medical blue
              600: "#0060C4",
              700: "#004893",
              800: "#003062",
              900: "#001831",
              DEFAULT: "#0078F5",
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            primary: {
              50: "#001831",
              100: "#003062",
              200: "#004893",
              300: "#0060C4",
              400: "#0078F5",
              500: "#3393F7", // primary base color for dark mode
              600: "#66AEF9",
              700: "#99C9FB",
              800: "#CCE4FD",
              900: "#E6F1FE",
              DEFAULT: "#3393F7",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
  layer: {
    base: {
      'h1, h2, h3, h4, h5, h6': {
        color: 'hsl(var(--foreground))',
      },
    },
  },
};

export default config;
