import { useEffect, useState } from "react"
import Header from "../Header"
import axios from 'axios'
import StudentTable from "../tables/StudentTable"
import TeacherTable from "../tables/TeacherTable"

export default function AdminPage() {
    const [showTable, setShowTable] = useState('')
    const [dbData,setDBData] = useState(null)
    const handleBtnClick = async (dbName) => {
        const { data } = await axios.post('/readData', {
            dbName: dbName
        })
        setDBData(data);
        setShowTable(dbName)
    }

    return (
        <div>
            <Header role={"Admin"}/>
            <nav className="w-full flex justify-around mt-12">
                <button className="border border-black rounded-lg bg-gray-200 px-52 py-1" onClick={()=>handleBtnClick('Teacher')}>
                    Show Teacher's Database
                </button>
                <button className="border border-black rounded-lg bg-gray-200 px-52 py-1" onClick={()=>handleBtnClick('Student')}>
                    Show Student's Database
                </button>
            </nav>
            {showTable === 'Student'&& (<StudentTable data={dbData}/>)}
            {showTable ==='Teacher' && (<TeacherTable data={dbData}/>)}
        </div>
    )
}