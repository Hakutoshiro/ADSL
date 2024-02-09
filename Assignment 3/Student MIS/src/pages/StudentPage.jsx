import { useContext, useEffect, useState } from "react"
import Header from "../Header"
import { LoginContext } from "../LoginContext"
import axios from "axios";
import InfoPage from "./InfoPage";


export default function StudentPage() {
    const {user,ready} = useContext(LoginContext);
    const [show,setShow] = useState(false);
    const [studentData,setStudentData] = useState({});
    const getStudentData = async () =>{
        try{
            const {data} = await axios.get(`/loginInfo?id=${user.id}&role=${user.role}`)
            setStudentData(...data);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        if(ready){
            getStudentData();
            setShow(true)
        }
    },[])
    return (
        <div className="">
            <Header role={'Student'}/>
            {ready && show && (<InfoPage info={studentData} role ={'Student'} />)}
        </div>
    )
}