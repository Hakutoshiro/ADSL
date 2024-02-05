import { useState } from "react";
import axios from "axios";


export default  function UpdateUser(){
    const [Name,setName] = useState('');
    const [PRN,setPrn] = useState('');
    async function updatetheUser(ev){
        ev.preventDefault();
        await axios.post('http://localhost:4001/updateUser',{
            Name,
            PRN
        })
    }
    return (
        <div className="mt-4 grow flex   h-screen  justify-around items-center  ">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4 ">Update User's Name</h1>
                <form className="max-w-md mx-auto " onSubmit={updatetheUser}>
                    <input type="text" placeholder="PRN" value={PRN} onChange={ev =>setPrn(ev.target.value)}/>
                    <input type="text" placeholder="Your Name" value={Name} onChange={ev => setName(ev.target.value)}/>
                    <button className="primary">Update</button>
                </form>
            </div>
        </div>
    );
}