import { useContext, useEffect, useState } from "react"
import Header from "../Header"
import axios from 'axios'
import StudentTable from "../tables/StudentTable"
// import { LoginContext } from "../LoginContext"
// import InfoPage from "./InfoPage"

export default function TeacherPage() {
    const [showTable, setShowTable] = useState(false)
    const [dbData, setDBData] = useState(null)
    // const [ready, setReady] = useState(false)
    // const [info, setInfo] = useState([])
    // const { user } = useContext(LoginContext)
    const handleBtnClick = async (dbName) => {
        const {data} = await axios.get(`/readData/${dbName}`)
        setDBData(data);
        setShowTable(!showTable);
    }
    // const getInfo = async () => {
    //     const { data } = await axios.post('/getInfo', { id: user.id, role: 'Teacher' });
    //     console.log(data);
    //     if(data){
    //         setInfo(data);
    //         if(data)setReady(true);
    //     }else{
    //     }
    // }
    // useEffect(() =>{
    //     getInfo()}, [])
    return (
        <div>
            <Header role="Teacher" />
            {/* {ready && (<InfoPage role={"Teacher"} info={info} />)} */}
            <nav className="w-full flex justify-around mt-12">
                <button className="border border-black rounded-lg bg-gray-200 px-52 py-1" onClick={() => handleBtnClick('Student')}>
                    Show Student's Database
                </button>
            </nav>
            {showTable && (<StudentTable data={dbData} />)}
        </div>
    )
}