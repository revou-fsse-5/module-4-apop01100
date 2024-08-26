import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category';
import AddData from './components/AddData';
import UpdateData from './components/UpdateData';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/add' element={<AddData />}/>
        <Route path='/update/:id/:name/:description' element={<UpdateData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;