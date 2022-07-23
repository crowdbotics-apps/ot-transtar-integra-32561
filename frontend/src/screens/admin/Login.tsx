import { useNavigate, useLocation } from "react-router-dom"
import {
  Wrapper,
  Overlay
} from "../client/Verification/VerificationScreen.style"
import LoginForm from "components/Forms/common/Login.form"
import { useStyletron } from "baseui"
import { StyledHeaderText, StyledParagraphText } from "components"
import { useContext, useState, MouseEvent } from "react"
import Api from "Api"
import { AuthContext } from "context/AuthContext"
import queryString from 'query-string'

const LoginScreen = () => {
  const [css] = useStyletron()
  const navigate = useNavigate();
  const location = useLocation();

  const { email, password } = queryString.parse(location.search) as { email: string, password: string }
  const { setIsLoggedIn } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

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
          onSubmit={async (e: MouseEvent<HTMLButtonElement>, data: any) => {
            setLoading(true)
            e.preventDefault();
            const res = await Api.create('login/', data);
            setLoading(false)
            if (res) {
              setIsLoggedIn(true)
              navigate("/admin/dashboard")
            }
          }}
          loading={loading}
          defaultData={{ email, password }}
        />
      </div>
    </Wrapper>
  )
}

export default LoginScreen
