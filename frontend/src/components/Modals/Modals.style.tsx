import { styled } from "baseui"
import { Wrapper } from "../FormWrapper/FormWrapper.style"
interface ModalProps {
  small: boolean;
  large?: boolean;
}
export const Overlay = styled("div", () => ({
  width: "100vw",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "rgba(14, 41, 75, 0.9)",
  zIndex: 2
}))

export const ModalWrapper = styled(Wrapper, ({ small, large }: ModalProps) => ({
  width: "fit-content",
  maxWidth: small ? "360px" : large ? "calc(100vw - 100px)" : "450px",
  minHeight: small ? "350px" : large ? "700px" : "500px",
  maxHeight: "calc(100vh - 100px)",
  overflowY: "scroll",
  padding: large ? "50px 80px" : "40px",
  backgroundColor: "white",
  position: "relative",
  zIndex: 3,
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "flex-start"
}))
