import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  colors: {
    bgColor: "white",
    main: "white",
    secondary: "black",
    textColor: "black",
  },
};

const dark: DefaultTheme = {
  colors: {
    bgColor: "#161616",
    main: "#161616",
    secondary: "white",
    textColor: "white",
  },
};

export { light, dark };
