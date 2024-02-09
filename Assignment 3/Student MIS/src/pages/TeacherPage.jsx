import { useContext, useEffect, useState } from "react"
import Header from "../Header"
import axios from 'axios'
import StudentTable from "../tables/StudentTable"
import { LoginContext } from "../LoginContext"
import InfoPage from "./InfoPage"


export default function TeacherPage() {
    const {user,ready} = useContext(LoginContext);
    const [show,setShow] = useState(false);
    const [teacherData,setTeacherData] = useState({});
    const [showTable, setShowTable] = useState(false)
    const [dbData, setDBData] = useState(null)
    const handleBtnClick = async (dbName) => {
        const {data} = await axios.get(`/readData/${dbName}`)
        setDBData(data);
        setShowTable(!showTable);
    }
    const getTeacherData = async () =>{
        try{
            const {data} = await axios.get(`/loginInfo?id=${user.id}&role=${user.role}`)
            setTeacherData(...data);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        if(ready){
            getTeacherData();
            setShow(true)
        }
    },[])
    return (
        <div>
            <Header role="Teacher" />
            {ready && show && (<InfoPage info={teacherData} role ={'Teacher'} />)}
            <nav className="w-full flex justify-around mt-12">
                <button className="border border-black rounded-lg bg-gray-200 px-52 py-1" onClick={() => handleBtnClick('Student')}>
                    Show Student's Database
                </button>
            </nav>
            {showTable && (<StudentTable data={dbData} />)}
        </div>
    )
}