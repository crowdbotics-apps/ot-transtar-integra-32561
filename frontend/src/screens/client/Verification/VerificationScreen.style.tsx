import { styled, useStyletron } from "baseui";
import { MyTheme } from "../../../theme";
import img from "../../../assets/backdrop.png";

export const Wrapper = styled<{}, "div", MyTheme>("div", ({ $theme }) => ({
  width: "100vw",
  height: "100vh",
  background: `url(${img}) no-repeat center center/cover`,
  position: "fixed",
  left: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 120px",
  gap: "100px",
  overflowY: "auto",
}));

export const Overlay = styled<{}, "div", MyTheme>(
  "div",
  ({ $theme }: { $theme: MyTheme }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: $theme.colors.overlay,
    zIndex: 0,
  })
);
