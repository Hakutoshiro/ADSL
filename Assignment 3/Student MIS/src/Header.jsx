import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { LoginContext } from "./LoginContext"

export default function Header({role}) {
    const {ready, setReady} = useContext(LoginContext)
    const [render,setRender] = useState(false)
    const handleLogoutBtn = () =>{
        setReady(false)
        setRender(true)
    }  
    if(render || !ready){
        return <Navigate to={'/'}/>
    }
    return (
        <div className="flex justify-between items-center border-b-2 pb-2">
            <h1 className="text-2xl font-bold pl-2">Management Information System </h1>
            <div className="flex gap-3 py-1 items-center">
            {role}
            <button onClick={handleLogoutBtn} className="px-4 mr-2 pb-2 mt-2 border border-black rounded-lg bg-gray-200">Logout</button>
            </div>
        </div>

    )
}