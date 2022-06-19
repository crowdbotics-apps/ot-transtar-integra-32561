import { createContext, Dispatch, SetStateAction, FC, ReactNode, useState } from 'react'

interface Auth {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
    role: 'broker' | 'admin'
}
export const AuthContext = createContext({} as Auth)

const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [role, setRole] = useState<"broker" | "admin">('broker')

    return <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, role}}>{ children}</AuthContext.Provider>
}

export default AuthProvider