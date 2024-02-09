import { useContext, useState } from "react"
import { useParams,Navigate } from "react-router-dom"
import axios from 'axios'
import { LoginContext } from "../LoginContext"

export default function LoginPage() {
    const {setReady,setUser} = useContext(LoginContext)
    const { role } = useParams()
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [render, setRender] = useState('')
    const handleSubmitBtn = async (ev) => {
        ev.preventDefault()
        if (!id || !password) {
            alert('Please fill all the fields')
            return
        }
        try {
            const { data } = await axios.post('/login', { id, password,role })
            if (data) {  
                alert('Login Success')
                setReady(true)
                setUser({id,role})
                setRender(role)
            }else{
                alert('Login Failed-Incorrect ID or Password')
            }
        } catch (error) {
            alert('Login Failed')
        }

        setId('')
        setPassword('')
    }
    if (render !== '') {
        return <Navigate to={`/${render}Page`} />
    }
    return (
        <div className="w-full h-screen ">
            <form className="max-w-xl mx-auto bg-gray-50 my-36 rounded-3xl text-center pt-8  border-2 border-black"
                onSubmit={(ev) => handleSubmitBtn(ev)}>
                <h1 className="text-4xl">Login</h1>
                <div className="mt-8 max-w-96 mx-auto  w-max h-52 py-2 ">
                    <input type="text" placeholder={`Enter ${role} ID`}
                        className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                        value={id} onChange={ev => setId(ev.target.value)} />
                    <input type="password" placeholder="Enter Password"
                        className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                        value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button type="submit"
                        className="my-2 border border-black bg-gray-300 w-full rounded-lg py-1 hover:bg-gray-400"
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}