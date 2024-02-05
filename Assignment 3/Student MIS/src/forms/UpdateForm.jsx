import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from "react"
import axios from "axios"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: '2px solid black',
        borderRadius : '20px',
        transform: 'translate(-50%, -50%)',
    },
};


export default function UpdateForm({ data, role }) {
    const [name, setName] = useState(role === 'Student' ? data.student_name : data.teacher_name)
    const [email, setEmail] = useState(data.email)
    const [password, setPassword] = useState(data.password)
    const [grade, setGrade] = useState(role === 'Student' ? data.grade : data.subject)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const handleUpdateBtn = async (ev) =>{
        ev.preventDefault();
        if (!name || !email || !password || !grade) {
            alert('Please fill all the fields')
            return
        }
        try {
            const  response = await axios.post(`/update`,{
                id: role === 'Student'? data.student_id : data.teacher_id,
                name,
                email,
                password,
                diffField:role === 'Student' ? Number(grade):'"'+grade+'"',
                role
            })
            if (response.data) {
                alert('Update Success')
                setEmail('')
                setPassword('')
                setName('')
                setGrade('')
            }else{
                alert('Update Failed')
            }
        } catch (error) {
            alert('Update Failed here')
        }
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}
                className="bg-gray-200 px-4 mx-2 my-1 py-1 rounded-lg">
                Update
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="mt-3 mx-10 text-center mb-32" onSubmit={(ev) => handleUpdateBtn(ev)}>
                    <h1 className="text-4xl">Update</h1>
                    <div className="mt-8 max-w-96 mx-auto  w-max h-52 py-2 ">
                        <input type="text" placeholder={role === 'Student' ? data.student_name : data.teacher_name}
                            value={name} onChange={ev => setName(ev.target.value)}
                            className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                        />
                        <input type="text" placeholder={data.email}
                            value={email} onChange={ev => setEmail(ev.target.value)}
                            className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                        />
                        <input type="text" placeholder={role === 'Student' ? data.grade : data.subject}
                            value={grade} onChange={ev => setGrade(ev.target.value)}
                            className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                        />
                        <input type="password" placeholder={'Enter your new/old password'}
                            value={password} onChange={ev => setPassword(ev.target.value)}
                            className="h-8 my-2 px-4 rounded-lg w-full border-2 border-black"
                        />
                        <button type="submit"
                            className="my-2 border border-black bg-gray-300 w-full rounded-lg py-1 hover:bg-gray-400"
                        >Update</button>
                    </div>
                </form>

            </Modal>
        </div>
    );
}

