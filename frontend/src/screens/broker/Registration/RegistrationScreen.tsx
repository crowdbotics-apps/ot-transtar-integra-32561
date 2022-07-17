import { useState } from "react"
import { useStyletron } from "baseui"
import RegistrationForm from "components/Forms/broker/Registration/Registration.form"
import Header from "components/Header/Header"
import { Banner } from "./Registration.style"
import {
  StyledHeaderText,
  StyledDarkParagraphText,
  addSpace
} from "components"
import { FirmData } from 'types'
import Api from 'Api'
import { toast } from 'react-toastify'
import Spinner from 'components/Spinner'

const RegistrationScreem = () => {
  const [css] = useStyletron();
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: FirmData) => {
    setLoading(true)
    const res = await Api.create('company/', data);
    setLoading(false);
    if (res) {
      toast.success('Firm registered successfully',);
      return true
    }
  }
  return (
    <div
      className={css({
        width: "100vw",
        height: "fit-content",
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 150px 150px"
      })}
    >
      {loading && <Spinner />}
      <Header />
      {addSpace("vert", "100px")}
      <Banner>
        <div
          className={css({
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            background: "rgba(14, 41, 75, 0.7)"
          })}
        />
        <StyledHeaderText style={{ zIndex: 1 }}>
          OdysseyXpress: Broker Gateway
        </StyledHeaderText>
      </Banner>
      <div
        className={css({
          height: "fit-content",
          width: "100%",
          border: "1px solid rgba(14, 41, 75, 1)",
          display: "grid",
          placeItems: "center",
          padding: "30px",
          margin: "50px auto"
        })}
      >
        <StyledDarkParagraphText weight={600}>
          To register for access, you must have your firm’s account number with
          Odyssey and enter it below. If you do not have your firm’s account
          number, please contact us.
          <br />
          <br />
          As a firm, you will register at least one Access Coordinator, who will
          also be authorized to use the site. Access Coordinator(s) are able to
          add additional authorized users and Access Coordinator(s).
        </StyledDarkParagraphText>
      </div>
      <RegistrationForm onSubmitData={onSubmit} />
    </div>
  )
}

export default RegistrationScreem
