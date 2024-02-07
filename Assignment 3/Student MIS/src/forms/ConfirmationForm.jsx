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


export default function ConfirmationForm({ data, role }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const handleDeleteBtn = async () =>{
        try {
            const result =await axios.delete(`/delete?id=${role==='Student'?data.student_id:data.teacher_id}&role=${role}`)
            if(result.data){
                alert('Delete Success')
            }else{
                alert('Delete Failure')
            }
        } catch (error) {
            console.log('err')
        }
        setIsOpen(false);
    }
    const handleCancelBtn = () =>{
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
                Delete
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false} 
            >
                <div className="">
                    <h1>Delete {role==='Student'?data.student_name:data.teacher_name}</h1>
                    <h2>Are you sure you want to delete?</h2>
                    <button onClick={handleCancelBtn} className="bg-gray-200 px-4 mx-2 my-1 py-1 rounded-lg">Cancel</button>
                    <button onClick={handleDeleteBtn} className="bg-gray-200 px-4 mx-2 my-1 py-1 rounded-lg">Delete</button>
                </div>

            </Modal>
        </div>
    );
}

