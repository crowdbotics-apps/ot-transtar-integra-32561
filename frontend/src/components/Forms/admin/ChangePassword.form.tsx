import FormWrapper from "../../FormWrapper/FormWrapper";
import { useStyletron } from "baseui";
import {
  StyledButton,
  StyledPasswordInput,
  addSpace,
} from "../..";
type Props = {};

const VerificationForm = (props: Props) => {
  const [css] = useStyletron();
  return (
    <FormWrapper style={{ width: "70%", maxWidth: "370px", minWidth: "350px" }}>
      <div style={{ width: "100%" }}>
        <StyledPasswordInput placeholder="New Password" />
        <StyledPasswordInput placeholder="Confirm Password" />
      </div>
      <StyledButton top="20px" bottom="10px">update</StyledButton>
      {addSpace()}
    </FormWrapper>
  );
};

export default VerificationForm;
