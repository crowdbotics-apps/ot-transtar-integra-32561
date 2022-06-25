import React from "react"
import RegistrationForm from "../../../../components/Forms/broker/Registration/Registration.form"
import Header from "../../Header"
import { DashboardWrapper } from "../Dashboard.style"


const RegisterFirm = () => {
  return (
    <DashboardWrapper>
      <Header showBack> </Header>
      <RegistrationForm header="REGISTER NEW FIRM" />
    </DashboardWrapper>
  )
}

export default RegisterFirm
