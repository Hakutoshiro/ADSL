import axios from 'axios'
import { useEffect, useState } from 'react';
export default function ReadData(){
    var [arr,setArr]=useState([]);
    useEffect(()=>{
         Readdata()
    },[])
    async function Readdata(){
        const result=await axios.get('http://localhost:4001/readdata',{});
        console.log([...result.data]);
        setArr([...result.data]);   
        // console.log(arr);
        arr.forEach((element)=>{console.log(element);})
    }
    
    return (
        <>
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>PRN</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody> 
                {arr.map((element)=>
                     <tr>
                        <td>{element.Name}</td>
                        <td>{element.PRN}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        
        </>
    );
}