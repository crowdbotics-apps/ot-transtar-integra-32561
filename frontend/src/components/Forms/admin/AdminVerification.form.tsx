import { useState, ChangeEvent, useEffect, MouseEvent } from "react";
import FormWrapper from "../../FormWrapper/FormWrapper";
import { useStyletron } from "baseui";
import { StyledInput } from "../..";
import { StyledParagraphText, StyledButton } from "../..";
import Tooltip from "../../Tooltip/Tooltip";
import questionMark from "../../../assets/question_mark.svg";
import axios from "axios";
import { toast } from "react-toastify";

import {
  ClientVerificationFailedModal,
  ReviewInfoModal,
} from "../../Modals/Modals";
type Props = {};
export interface InputData {
  full_name: string;
  postal?: string;
  holder_id?: string;
  email?: string;
  sin_or_tin?: string;
}

const validateInputField = (value: string, type?: string) => {
  console.log(type);

  switch (type) {
    case "email":
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    case "number":
      return !isNaN(Number(value));
    default:
      return true;
  }
};
const getKeyValuepairs = (obj: Record<string, any>) => {
  return Object.entries(obj).map((e) => ({ key: e[0], value: e[1] }));
};
const checkObjValidity = (obj: Record<string, string>) => {
  let count = 0;
  for (let i in obj) {
    if (i !== "postal" && !!obj[i]) {
      count++;
    }
  }

  return count >= 3;
};

const VerificationForm = (props: Props) => {
  const [css, theme] = useStyletron();
  const [showButton, setShowButton] = useState(false);
  const [errorReasons, setErrorReasons] = useState([] as string[]);
  const [
    showClientVerificatioFailedModal,
    setShowClientVerificationFailedModal,
  ] = useState(false);
  const [showReviewInfoModal, setShowReviewInfoModal] = useState(false);
  const [input, setInput] = useState({
    full_name: "",
    postal: "",
    holder_id: "",
    email: "",
    sin_or_tin: "",
  });

  useEffect(() => {
    setShowButton(
      checkObjValidity(input) &&
        Object.entries(input)
          .filter((inp) => inp[1] !== "")
          .every((inp) => validateInputField(inp[1], inp[0]))
    );
    console.log(checkObjValidity(input));
  }, [input]);

  const handleInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const handleInitialFormSubmission = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowReviewInfoModal(true);
  };

  const verifyAndSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //make api call and do all validations with inputs
    try {
      const { data } = await axios.post(
        "http://localhost:4100/api/odyssey-trust/client/verification",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("returned data is ", data);
      if (data.status === "ok") {
        toast.success(data.message, { position: toast.POSITION.TOP_RIGHT });
      } else {
        setShowReviewInfoModal(false);
        setErrorReasons(JSON.parse(data.message));
        setShowClientVerificationFailedModal(true);
      }
    } catch (e) {
      setErrorReasons(Array.isArray(e.message) ? e.message : [e.message]);
      setShowClientVerificationFailedModal(true);
      toast.error(e.message);
    }
  };
  return (
    <FormWrapper style={{ width: "70%", maxWidth: "370px", minWidth: "350px" }}>
      <ReviewInfoModal
        inputData={getKeyValuepairs(input)}
        open={showReviewInfoModal}
        closeModal={() => setShowReviewInfoModal(false)}
        submit={verifyAndSubmit}
      />
      <ClientVerificationFailedModal
        open={showClientVerificatioFailedModal}
        closeModal={() => setShowClientVerificationFailedModal(false)}
        reasons={errorReasons}
      />

      <div>
        <StyledParagraphText
          weight={400}
          size="13px"
          className={css({
            lineHeight: "18px",
            marginBottom: "30px",
            letterSpacing: 0,
            color: theme.colors.primary,
          })}
        >
          In order to register for online access, we need to verify your
          identity. Please enter the following information exactly as it appears
          on your last DRS statement, proxy or certificate:
        </StyledParagraphText>
        <StyledInput
          type="text"
          placeholder="Your Name (Registration)"
          value={input.full_name}
          name="full_name"
          onChange={handleInputChange}
        />
        <StyledInput
          type="text"
          placeholder="Postal/Zip Code (optional)"
          value={input.postal}
          name="postal"
          onChange={handleInputChange}
        />

        <StyledParagraphText
          size="15px"
          weight={500}
          className={css({
            lineHeight: "19px",
            marginBottom: "20px",
            color: theme.colors.primary,
            letterSpacing: 0,
            margin: "30px 0 10px",
          })}
        >
          Enter at least two of the following:
        </StyledParagraphText>
        <div
          className={css({
            position: "relative",
            width: "100%",
            height: "fit-content",
          })}
        >
          <StyledInput
            type="text"
            placeholder="Holder ID"
            style={{ paddingRight: 35 }}
            value={input.holder_id}
            name="holder_id"
            onChange={handleInputChange}
          />
          <img
            src={questionMark}
            className={css({
              position: "absolute",
              width: "15px",
              height: "15px",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              ":hover + div": {
                opacity: 1,
                zIndex: 1,
              },
            })}
          />
          <Tooltip />
        </div>
        <StyledInput
          type="text"
          placeholder="Email Address"
          value={input.email}
          name="email"
          onChange={handleInputChange}
        />
        <StyledInput
          type="text"
          placeholder="SIN or TIN"
          value={input.sin_or_tin}
          name="sin_or_tin"
          onChange={handleInputChange}
        />
        <StyledButton
          top="30px"
          style={{ visibility: showButton ? "visible" : "hidden" }}
          onClick={handleInitialFormSubmission}
        >
          SUBMIT
        </StyledButton>
      </div>
    </FormWrapper>
  );
};

export default VerificationForm;
