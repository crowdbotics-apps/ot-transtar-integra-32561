import { createTheme, lightThemePrimitives } from "baseui";

type Breakpoints = {
  small: number | string;
  medium: number | string
  large: number | string
  xLarge: number | string
}
const breakpoints: Breakpoints = {
  small: 769,
  medium: 1024,
  large: 1440,
  xLarge: 1940
};
const ResponsiveTheme = (
  Object.keys(breakpoints) as (keyof Breakpoints)[]
).reduce(
  (acc, key) => {
    acc.mediaQuery[
      key
    ] = `@media screen and (min-width: ${breakpoints[key]}px)`;
    return acc;
  },
  {
    breakpoints,
    mediaQuery: {} as Record<keyof Breakpoints, string>,
  }
);
export const theme = createTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily: "'Lato', sans-serif",
    primary: "#00C58D",
    primary700: "#00bd87",
  },
  {
    name: "custom-typography",
    ...ResponsiveTheme,
    typography: {
      primaryFontFamily: "'Inter', sans-serif",
      font12: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      fontBold12: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: 1.5,
      },
      font14: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      fontBold14: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: 1.5,
      },
    },
    sizing: {
      scale25: "25px",
      scale30: "30px",
    },
    borders: {
      borderE6: {
        borderColor: "#E6E6E6",
        borderStyle: "solid",
        borderWidth: "1px",
      },
      borderEA: {
        borderColor: "#eaeaea",
        borderStyle: "solid",
        borderWidth: "1px",
      },
    },
    colors: {
      primary: "rgba(14, 41, 75, 1)",
      overlay: "rgba(14, 41, 75, 0.7)",
    },
    buttonBorderRadius: "3px",
  }
);

export type MyTheme = typeof theme;