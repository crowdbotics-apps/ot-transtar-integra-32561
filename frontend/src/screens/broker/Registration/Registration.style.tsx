import { styled, useStyletron } from "baseui"
import img from "../../../assets/banner.svg"
export const Banner = styled("div", () => ({
  width: "100vw",
  height: "180px",
  background: `url(${img}) no-repeat center center/cover`,
  display: "grid",
  placeItems: "center",
  position: "relative"
}))
