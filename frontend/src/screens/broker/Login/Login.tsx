import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import {
  Wrapper,
  Overlay
} from "../../client/Verification/VerificationScreen.style"
import LoginForm from "../../../components/Forms/common/Login.form"
import { AuthContext } from "../../../context/AuthContext"
import { useStyletron } from "baseui"
import { StyledHeaderText, StyledParagraphText } from "../../../components"

const LoginScreen = () => {
  const [css] = useStyletron()
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(AuthContext)
  return (
    <Wrapper>
      <Overlay />
      <div className={css({ zIndex: 1, flex: 1.3 })}>
        <div className={css({ width: "600px", margin: "-200px 0 0 auto" })}>
          <StyledHeaderText className={css({ marginBottom: "30px" })}>
            OdysseyXpress: Broker Gateway
          </StyledHeaderText>
          <StyledParagraphText>
            OdysseyXpress: Broker Gateway Welcome to Odyssey’s Broker Gateway.
            Login here to confirm up-to-the-minute information on your clients’
            holdings including stops and restrictions and/or download their most
            recent DRS statements. <strong>Simple</strong>.{" "}
            <strong>Fast</strong>. <strong>Easy</strong>.
          </StyledParagraphText>
        </div>
      </div>
      <div className={css({ flex: 1, zIndex: 1, alignSelf: "center" })}>
        <LoginForm
          onSubmit={e => {
            e.preventDefault()
            setIsLoggedIn(true)
            navigate("/dashboard")
          }}
        />
      </div>
    </Wrapper>
  )
}

export default LoginScreen
