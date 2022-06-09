import FormWrapper from "../../FormWrapper/FormWrapper";
import { useStyletron } from "baseui";
import { StyledInput } from "../..";
import {
  StyledDarkParagraphText,
  StyledHeaderText,
  StyledButton,
  addSpace,
} from "../..";
type Props = {};

const PasswordResetForm = (props: Props) => {
  const [css, theme] = useStyletron();
  return (
    <FormWrapper style={{ width: "70%", maxWidth: "370px", minWidth: "350px" }}>
      <div style={{ width: "100%" }}>
        <StyledHeaderText
          size="30px"
          weight={700}
          className={css({
            margin: "50px 0 30px",
            letterSpacing: 0,
            color: theme.colors.primary,
          })}
        >
          Password Reset
        </StyledHeaderText>
        <StyledDarkParagraphText size="14px" weight={400}>
          Please enter your email address we will send you an email to reset
          your password.
        </StyledDarkParagraphText>
        {addSpace("vert", "30px")}
        <StyledInput type="email" placeholder="Email Address" />
      </div>
      <StyledButton>send email</StyledButton>
      {addSpace("vert", "30px")}
    </FormWrapper>
  );
};

export default PasswordResetForm;
