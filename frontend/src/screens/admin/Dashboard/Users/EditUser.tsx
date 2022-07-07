import React, { ChangeEvent, useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import UserForm from "../../../../components/Forms/admin/User.form"
import { AdminContext, User } from "../../../../context/AdminContext"
import Header from "../../Header"
import { DashboardWrapper } from "../Dashboard.style"



const EditUser = () => {

    const [user, setUser] = useState({} as User);
    const { getUser, editUser } = useContext(AdminContext)
    const { userId } = useParams<{ userId: string }>()
    const navigate = useNavigate()
    useEffect(() => {
        if (userId) {
            const user = getUser(+userId)

            if (user) {
                setUser(user)
            }
            else navigate(-1)
        }
        else navigate(-1)
    }, [userId])
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setUser(d => ({ ...d, [name]: value }))
    }

    return (
        <DashboardWrapper>
            <Header showBack> </Header>
            <UserForm isEdit handleInputChange={handleInputChange} data={user} onSubmit={() => {
                editUser(+userId!, user);
                navigate(-1)
            }} />
        </DashboardWrapper>
    )
}

export default EditUser
