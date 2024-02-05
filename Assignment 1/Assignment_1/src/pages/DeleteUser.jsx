import { useState } from "react";
import axios from "axios";


export default  function DeleteUser(){
    const [PRN,setPrn] = useState('');
    async function deletetheUser(ev){
        ev.preventDefault();
        await axios.post('http://localhost:4001/deleteUser',{
            PRN
        })
    }
    return (
        <div className="mt-4 grow flex   h-screen  justify-around items-center  ">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4 ">Delete User</h1>
                <form className="max-w-md mx-auto " onSubmit={deletetheUser}>
                    <input type="text" placeholder="PRN" value={PRN} onChange={ev =>setPrn(ev.target.value)}/>
                    <button className="primary">Delete</button>
                </form>
            </div>
        </div>
    );
}