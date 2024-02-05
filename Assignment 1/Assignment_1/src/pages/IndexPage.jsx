import { Link } from "react-router-dom";



export default function IndexPage() {
    
    return(
        <div className="mt-4 grow flex   h-  justify-around items-center bg-gray-200">
            <div className="flex  flex-col h-full w-60 gap-5 justify-center my-60">
                <button className="primary"><Link to={'/adduser'} >Add User</Link></button>
                <button className="primary"><Link to={'/updateuser'} >Update User</Link></button>
                <button className="primary" ><Link to={'/readdata'} >Read Data</Link></button>
                <button className="primary"><Link to={'/deleteuser'} >Delete User</Link></button>
            </div>
        </div>
    )
}
