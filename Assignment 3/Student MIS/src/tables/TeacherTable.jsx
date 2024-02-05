import { useState } from "react"
import UpdateForm from "../forms/UpdateForm"
import EnrollForm from "../forms/EnrollForm"
import axios from "axios"


export default function TeacherTable({ data }) {
    const [showForm, setShowForm] = useState(false)
    const [dataDB, setDataDB] = useState(data)
    const handleEnrollBtn = async () => {
        setShowForm(!showForm)
    }
    const handleRefreshBtn = async () => {
        const response = await axios.post('/readData',{
            dbName:'Teacher'
        })
        setDataDB(response.data)
    }
    return (
        <div className="w-full">
            <div className="flex justify-around">
                <button className="   mt-3 px-36 py-1 bg-gray-200 border border-black rounded-lg"
                    onClick={handleEnrollBtn}>Enroll Teacher</button>
                <button className="   mt-3 px-36 py-1 bg-gray-200 border border-black rounded-lg"
                    onClick={handleRefreshBtn}>Refresh Table</button>
            </div>
            {showForm && (<EnrollForm role={'Teacher'} />)}

            <table className="table-fixed w-full mt-4">
                <thead>
                    <tr className=" bg-gray-400 h-10 text-lg">
                        <th>Teacher ID</th>
                        <th>Name      </th>
                        <th>Subject   </th>
                        <th>Email ID  </th>
                        <th>Actions   </th>
                    </tr>
                </thead>
                <tfoot>
                    {dataDB && dataDB.map((element, index) => {
                        return <tr key={index} className=" text-center"  >
                            <td>{element.teacher_id}</td>
                            <td>{element.teacher_name}</td>
                            <td>{element.subject}</td>
                            <td>{element.email}</td>
                            <td className="flex justify-center">
                                <UpdateForm data = {element} role = {'Teacher'}/>
                                <button className="bg-gray-200 px-4 mx-2 my-1 py-1 rounded-lg">Delete</button>
                            </td>
                        </tr>
                    })}
                </tfoot>
            </table>
        </div>
    )
}