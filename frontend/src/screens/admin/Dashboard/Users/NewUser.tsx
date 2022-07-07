import React, { ChangeEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserForm from "../../../../components/Forms/admin/User.form"
import { AdminContext, User } from "../../../../context/AdminContext"
import Header from "../../Header"
import { DashboardWrapper } from "../Dashboard.style"




const NewUser = () => {
    const [data, setData] = useState({} as User)
    const { addUser } = useContext(AdminContext)
    const navigate = useNavigate()
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setData(d => ({ ...d, [name]: value }))
    }
    return (
        <DashboardWrapper>
            <Header showBack> </Header>
            <UserForm handleInputChange={handleInputChange} data={data} onSubmit={() => {
                addUser(data);
                navigate(-1)

            }} />
        </DashboardWrapper>
    )
}

export default NewUser
