import React, { ChangeEvent, FC, MouseEvent, useState } from "react"
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
import { useNavigate } from "react-router-dom"
import { InputField } from "../broker/Registration/Registration.style"
import { PulseLoader } from 'react-spinners'
const LoginForm: FC<{ onSubmit: (e: MouseEvent<HTMLButtonElement>, data: Record<string, any>) => void, loading: boolean }> =
  ({ onSubmit, loading }) => {
    const [css, theme] = useStyletron()
    const navigate = useNavigate()
    const [data, setData] = useState({ "email": "", password: "" })
    const isValidData = (Object.keys(data) as ["email", "password"]).every(key => !!data[key]?.length);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setData({ ...data, [name]: value })
    }
    return (
      <FormWrapper
        style={{ width: "70%", maxWidth: "370px", minWidth: "350px" }}
      >
        <div style={{ width: "100%" }}>
          <StyledHeaderText
            size="30px"
            weight={700}
            color="rgba(14, 41, 75, 1)"
            className={css({
              margin: "50px 0 30px",
              letterSpacing: 0,
              color: theme.colors.primary
            })}
          >
            Login
          </StyledHeaderText>
          <StyledInput onChange={handleChange} type="email" name="email" placeholder="Enter Email Address" value={data.email} />
          <StyledPasswordInput value={data.password} onChange={handleChange} placeholder="Enter Password" />
          <StyledDarkParagraphText weight={600} size="14px" align="right">
            <strong>Forgot Password</strong>
          </StyledDarkParagraphText>
        </div>
        {addSpace()}
        <StyledButton disabled={loading || !isValidData} onClick={(e) => onSubmit(e, data)}>{loading ? <PulseLoader color="#ffffff" size={10} /> : 'Login'}</StyledButton>
        {addSpace("vert", "-60px")}
        <StyledDarkParagraphText size="14px">
          Not registered? Sign up{" "}
          <strong
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            here.
          </strong>
        </StyledDarkParagraphText>
        {addSpace()}
      </FormWrapper>
    )
  }

export default LoginForm
