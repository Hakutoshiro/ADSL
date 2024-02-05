import { useState } from "react"
import { Link, Navigate } from "react-router-dom"



export default function functionName() {
    const [render ,setRender] = useState(false)
    const [role,setRole] = useState('')
    const handleBtn =(r)=>{
        setRender(true)
        setRole(r)
    }
    if(render){
        return <Navigate to={'/login/'+role} />
    }
    return (
        <div className="flex flex-col w-full items-center h-screen pt-52 ">
            <div className="flex flex-col w-80 h-80 items-center pt-14 rounded-3xl border-2 border-black">
                <h1 className="text-3xl">Login</h1>
                <div className="flex flex-col mt-9 gap-5  text-xl">
                    <button className="bg-gray-200 border border-gray-400 px-6  py-1 rounded-xl " 
                    onClick={()=>handleBtn('Admin')}>
                        Admin
                    </button>
                    <button className="bg-gray-200  border border-gray-400 px-6  py-1 rounded-xl"
                    onClick={()=>handleBtn('Teacher')}>
                        Teacher
                    </button>
                    <button className="bg-gray-200  border border-gray-400 px-6  py-1 rounded-xl"
                    onClick={()=>handleBtn('Student')}>
                        Student
                    </button>
                </div>
            </div>
        </div>
    )
}