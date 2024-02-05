import { useState } from "react"
import axios from "axios"

export default function EnrollForm({role}){
    const [id,setId] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [grade, setGrade] = useState('')

    const handleSubmitBtn = async (ev) => {
        ev.preventDefault()
        if (!id || !name || !email || !password || !grade) {
            alert('Please fill all the fields')
            return
        }
        try {
            const { data } = await axios.post(`/enroll`,{
                id:Number(id),
                name,
                email,
                password,
                diffField:role === 'Student' ? Number(grade):'"'+grade+'"',
                role
            })
            if (data) {
                alert('Enroll Success')
                setId('')
                setEmail('')
                setPassword('')
                setName('')
                setGrade('')
            }else{
                alert('Enroll Failed')
            }
        } catch (error) {
            alert('Enroll Failed ')
        }
    }

    return (
        <form  className="mb-32" onSubmit={(ev)=>handleSubmitBtn(ev)}>
            <h1 className="text-4xl">Enroll</h1>
            <div className="mt-8 max-w-96 mx-auto  w-max h-52 py-2 ">
                <input type="text" placeholder={`Enter ${role} ID`}
                    value={id} onChange={ev => setId(ev.target.value)}
                    className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                />
                <input type="text" placeholder={`Enter Name`}
                    value={name} onChange={ev => setName(ev.target.value)}
                    className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                />
                <input type="text" placeholder={`Enter Email`}
                    value={email} onChange={ev => setEmail(ev.target.value)}
                    className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                />
                <input type="text" placeholder={`Enter ${role==='Student'?'Grades':'Subject'}`}
                    value={grade} onChange={ev => setGrade(ev.target.value)}
                    className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                />
                <input type="password" placeholder={`Enter Password`} 
                    value={password} onChange={ev => setPassword(ev.target.value)}
                    className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                />
                <button type="submit"
                    className="my-2 border border-black bg-gray-300 w-full rounded-lg py-1 hover:bg-gray-400"
                >Submit</button>
            </div>
        </form>
    )

}