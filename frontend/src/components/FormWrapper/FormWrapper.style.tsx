import { styled, useStyletron } from "baseui";

export const Wrapper = styled<{ style?: React.CSSProperties }, any>(
  "form",
  ({ style }) => ({
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "36px 35px",
    background: "white",
    gap: "40px",
    zIndex: 1,
    ...style,
  })
);
