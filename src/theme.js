// color design tokens export
export const tokensDark = {
  text: {
    100: "#d4ffff",
    200: "#a8ffff",
    300: "#80feff", //manually adjusted
    400: "#51feff",
    500: "#26feff",
    600: "#1ecbcc",
    700: "#179899",
    800: "#0f6666",
    900: "#083333",
  },
  primary: {
    100: "#d7e0ef",
    200: "#afc2e0",
    300: "#86a3d0",
    400: "#5e85c1",
    500: "#3666b1",
    600: "#2b528e",
    700: "#203d6a4f",
    800: "#162947",
    900: "#0b2856", //manually adjusted
  },
  secondary: {
    100: "#d8d3f6",
    200: "#b1a8ed",
    300: "#8a7ce5",
    400: "#6351dc",
    500: "#3c25d3",
    600: "#301ea9",
    700: "#24167f",
    800: "#02042c",
    900: "#04001e", //manually adjusted
  },
  accent: {
    100: "#f6d2d2",
    200: "#eda6a6",
    300: "#e25a5a", //manually adjusted
    400: "#da4d4d",
    500: "#d12020",
    600: "#a71a1a",
    700: "#7d1313",
    800: "#540d0d",
    900: "#2a0606",
    901: "#FFFFFF1A" //manually adjusted
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[900],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[900],
            },
            text: {
              ...tokensDark.text,
              main: tokensDark.text[500],
              light: tokensDark.text[300],
              dark: tokensDark.text[900],
            },
            accent: {
              ...tokensDark.accent,
              main: tokensDark.accent[500],
              light: tokensDark.accent[300],
              dark: tokensDark.accent[901],
            },
            background: {
              default: tokensDark.secondary[900],
              alt: tokensDark.secondary[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.primary[300],
              light: tokensDark.primary[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            text: {
              ...tokensDark.text,
              main: tokensDark.text[400],
              light: tokensDark.text[600],
            },
            accent: {
              ...tokensLight.primary,
              main: tokensDark.primary[500],
              dark: tokensDark.accent[100],
            },
            background: {
              default: tokensDark.primary[100],
              alt: tokensDark.primary[300],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
