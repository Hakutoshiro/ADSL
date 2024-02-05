import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import axios from 'axios';
import { LoginContextProvider, LoginContext } from './LoginContext';
axios.defaults.baseURL = 'http://localhost:4000'


export default function MyComponent() {
  return (
    <LoginContextProvider>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path='/login/:role?' element={<LoginPage />} />
        <Route path='/adminPage' element={<AdminPage />} />
        <Route path='/teacherPage' element={<TeacherPage />} />
        <Route path='/studentPage' element={<StudentPage />} />
      </Routes>
    </LoginContextProvider>
  );
}
