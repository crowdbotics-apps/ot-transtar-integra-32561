import { useState } from "react"
import RegistrationForm from "components/Forms/broker/Registration/Registration.form"
import Spinner from 'components/Spinner'
import Header from "../../Header"
import Api from 'Api'
import { DashboardWrapper } from "../Dashboard.style"
import { FirmData } from 'types'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"


const RegisterFirm = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const onSubmit = async (data: FirmData) => {
    setLoading(true)
    const res = await Api.create('/company/', data);
    setLoading(false)
    if (res) {
      toast.success('Firm registered successfully', { autoClose: 2000, });
      navigate(-1)
      return true;
    } else {
      return false
    }
  }
  return (
    <DashboardWrapper>
      <Header showBack> </Header>
      <RegistrationForm header="REGISTER NEW FIRM" onSubmitData={onSubmit} />
      {loading && <Spinner />}
    </DashboardWrapper>
  )
}

export default RegisterFirm
