import { createContext, Dispatch, SetStateAction, FC, ReactNode, useState } from 'react'
import { Data } from 'components/Forms/broker/Registration/Registration.form'
export type User = {
    full_name: string,
    phone: string;
    title: string;
    email: string;
    sector: string;
    id: number
}
type Firm = Data & { id: number }
interface Admin {
    users: User[],
    filteredUsers: User[],
    setFilteredUsers: Dispatch<SetStateAction<User[]>>
    firms: Firm[],
    filteredFirms: Firm[],
    setFilteredFirms: Dispatch<SetStateAction<Firm[]>>
    setFirms: Dispatch<SetStateAction<Firm[]>>
    getUser: (id: number) => User | undefined
    deleteUser: (id: number) => void
    editUser: (id: number, user: Partial<User>) => void,
    addUser: (user: User) => void
}
const sampleUsersData = [
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 1
    },
    {
        full_name: "John Doe",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 2
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 3
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 4
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 5
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 6
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 7
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 8
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 9
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 10
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 11
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 12
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 13
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 22
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 31
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 42
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 51
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 61
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 73
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 82
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 94
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 102
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 113
    },
    {
        full_name: "John Dawanson",
        title: "Mr",
        sector: "N/A",
        phone: "+123456789",
        email: "johndoe@gmail.com",
        id: 122
    }
]
export const AdminContext = createContext({} as Admin)

const AdminProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState(sampleUsersData)
    const [filteredUsers, setFilteredUsers] = useState(sampleUsersData)
    const [firms, setFirms] = useState([] as Firm[])
    const [filteredFirms, setFilteredFirms] = useState([] as Firm[])

    const getUser = (id: number) => users.find(user => user.id === id);
    const editUser = (id: number, data: Partial<User>) => {
        setUsers(users.map(user => user.id === id ? ({ ...user, ...data }) : user))
    }

    const deleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id))
        setFilteredUsers(filteredUsers.filter(user => user.id !== id))
    }

    const addUser = (user: User) => {
        const nextId = Math.max(...users.map(u => u.id)) + 1
        setUsers([{ ...user, id: nextId }, ...users,])
        setFilteredUsers([{ ...user, id: nextId }, ...filteredUsers,])
    }
    return <AdminContext.Provider value={{
        users, getUser, editUser, deleteUser, filteredUsers, setFilteredUsers, addUser, firms, filteredFirms, setFilteredFirms, setFirms
    }}>{children}</AdminContext.Provider>
}

export default AdminProvider