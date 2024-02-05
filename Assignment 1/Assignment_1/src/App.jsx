import './App.css'
import {Route, Routes} from 'react-router-dom'
import IndexPage from './pages/IndexPage.jsx'
import DeleteUser from './pages/DeleteUser.jsx'
import UpdateUser from './pages/UpdateUser.jsx'
import ReadData from './pages/ReadData.jsx'
import AddUser from './pages/addUser.jsx'


function App() {
  
  return (
    <Routes>
      <Route path='/' index element={<IndexPage/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/readdata' element={<ReadData/> }></Route>
      <Route path='/updateuser' element={<UpdateUser/>}/>
      <Route path='/deleteuser' element={<DeleteUser/>}/>
    </Routes>
  )
}

export default App
