import { useContext, useEffect, useState } from "react"
import Header from "../Header"
import axios from 'axios'
import StudentTable from "../tables/StudentTable"


export default function TeacherPage() {
    const [showTable, setShowTable] = useState(false)
    const [dbData, setDBData] = useState(null)
    const handleBtnClick = async (dbName) => {
        const {data} = await axios.get(`/readData/${dbName}`)
        setDBData(data);
        setShowTable(!showTable);
    }

    return (
        <div>
            <Header role="Teacher" />
            <nav className="w-full flex justify-around mt-12">
                <button className="border border-black rounded-lg bg-gray-200 px-52 py-1" onClick={() => handleBtnClick('Student')}>
                    Show Student's Database
                </button>
            </nav>
            {showTable && (<StudentTable data={dbData} />)}
        </div>
    )
}