import { useState } from "react";
import { Wrapper, Overlay } from "./VerificationScreen.style";
import VerificationForm from "../../../components/Forms/client/ClientVerification.form";
import { useStyletron } from "baseui";
import { StyledHeaderText, StyledParagraphText } from "../../../components";

const VerificationScreen = () => {
  const [css] = useStyletron();
  return (
    <Wrapper>
      <Overlay />
      <div className={css({ zIndex: 1, flex: 1.3 })}>
        <div className={css({ width: "510px", margin: "-200px 0 0 auto" })}>
          <StyledHeaderText className={css({ marginBottom: "30px" })}>
            OdysseyXpress: Connect
          </StyledHeaderText>
          <StyledParagraphText>
            Odyssey makes it <strong>simple</strong>, <strong>fast</strong> and{" "}
            <strong>easy</strong> for registered security holders to sign up for
            online access to confirm holdings, download a current DRS statement
            or make updates to account information.
          </StyledParagraphText>
        </div>
      </div>
      <div className={css({ flex: 1, zIndex: 1, alignSelf: "center" })}>
        <VerificationForm />
      </div>
    </Wrapper>
  );
};

export default VerificationScreen;
