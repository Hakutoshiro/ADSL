import { useState } from "react"
import EnrollForm from "../forms/EnrollForm"
import axios from "axios"
import UpdateForm from "../forms/UpdateForm"

export default function StudentTable({ data }) {
    const [showForm, setShowForm] = useState(false)
    const [dataDB, setDataDB] = useState(data)
    const handleEnrollBtn = async () => {
        setShowForm(!showForm)
    }
    const handleRefreshBtn = async () => {
        const response = await axios.get(`/readData/Student`)
        setDataDB(response.data)
    }
    return (
        <div className="w-full">
            <div className="flex justify-around">
                <button className="   mt-3 px-36 py-1 bg-gray-200 border border-black rounded-lg"
                    onClick={handleEnrollBtn}>Enroll Student</button>
                <button className="   mt-3 px-36 py-1 bg-gray-200 border border-black rounded-lg"
                    onClick={handleRefreshBtn}>Refresh Table</button>
            </div>

            {showForm && (<EnrollForm role={'Student'} />)}
            <table className="table-fixed w-full mt-4">
                <thead>
                    <tr className=" bg-gray-400 h-10 text-lg">
                        <th>Student ID</th>
                        <th>Name      </th>
                        <th>Grade     </th>
                        <th>Email ID  </th>
                        <th>Actions   </th>
                    </tr>
                </thead>
                <tfoot>
                    {dataDB && dataDB.map((element, index) => {
                        return <tr key={index} className=" text-center"  >
                            <td>{element.student_id}</td>
                            <td>{element.student_name}</td>
                            <td>{element.grade}</td>
                            <td>{element.email}</td>
                            <td className="flex justify-center">
                                <UpdateForm data={element} role={'Student'} />
                                <button className="bg-gray-200 px-4 mx-2 my-1 py-1 rounded-lg">Delete</button>
                            </td>
                        </tr>
                    })}
                </tfoot>
            </table>
        </div>
    )
}