import { createContext, useState } from "react";
export const LoginContext = createContext();

export function LoginContextProvider({children}){
    const [ready , setReady] = useState(false)
    const [user,setUser] = useState({})
    return(
        <LoginContext.Provider value={{ready,setReady,user,setUser}}>
            {children}
        </LoginContext.Provider>
    )
}