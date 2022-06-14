import { styled, useStyletron } from "baseui"

export const Wrapper = styled("header", () => ({
  width: "100vw",
  height: "100px",
  padding: "50px 25px",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "#fff",
  zIndex: 2,
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
}))
