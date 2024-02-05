import { useState } from "react";
import axios from "axios";


export default  function AddUser(){
    const [Name,setName] = useState('');
    const [PRN,setPrn] = useState('');
    async function addtheUser(ev){
        ev.preventDefault();
        await axios.post('http://localhost:4001/addUser',{
            Name,
            PRN
        })
    }
    return (
        <div className="mt-4 grow flex   h-screen  justify-around items-center  ">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4 ">Add User</h1>
                <form className="max-w-md mx-auto " onSubmit={addtheUser}>
                    <input type="text" placeholder="Your Name" value={Name} onChange={ev => setName(ev.target.value)}/>
                    <input type="text" placeholder="PRN" value={PRN} onChange={ev =>setPrn(ev.target.value)}/>
                    <button className="primary">ADD</button>
                </form>
            </div>
        </div>
    );
}