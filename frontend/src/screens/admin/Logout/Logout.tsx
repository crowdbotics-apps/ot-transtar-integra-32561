import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import { LogoutModal } from "../../../components/Modals/Modals"
type Props = {}

const Logout = (props: Props) => {
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(AuthContext)
  return (
    <div>
      <LogoutModal
        open={true}
        closeModal={() => navigate(-1)}
        onConfirm={() => {
          navigate("/login")
          setIsLoggedIn(false)
        }}
      />
    </div>
  )
}

export default Logout
