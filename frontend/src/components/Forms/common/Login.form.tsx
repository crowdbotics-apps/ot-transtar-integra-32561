import React from "react"
import FormWrapper from "../../FormWrapper/FormWrapper"
import { useStyletron } from "baseui"
import { StyledInput } from "../.."
import {
  StyledDarkParagraphText,
  StyledHeaderText,
  StyledButton,
  StyledPasswordInput,
  addSpace
} from "../.."
import { InputField } from "../broker/Registration/Registration.style"

const VerificationForm = () => {
  const [css, theme] = useStyletron()
  return (
    <FormWrapper style={{ width: "70%", maxWidth: "370px", minWidth: "350px" }}>
      <div style={{ width: "100%" }}>
        <StyledHeaderText
          size="30px"
          weight={700}
          className={css({
            margin: "50px 0 30px",
            letterSpacing: 0,
            color: theme.colors.primary
          })}
        >
          Login
        </StyledHeaderText>
        <StyledInput type="email" placeholder="Enter Email Address" />

        <StyledPasswordInput placeholder="Enter Password" />
        <StyledDarkParagraphText weight={600} size="14px" align="right">
          <strong>Forgot Password</strong>
        </StyledDarkParagraphText>
      </div>
      {addSpace()}
      <StyledButton>login</StyledButton>
      {addSpace("vert", "-60px")}
      <StyledDarkParagraphText size="14px">
        Not registered? Sign up <strong>here.</strong>
      </StyledDarkParagraphText>
      {addSpace()}
    </FormWrapper>
  )
}

export default VerificationForm
