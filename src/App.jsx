import { useState } from 'react'
import Nav from "../src/Nav/Nav";
import Login from "../src/Login/Login"
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div className="page-grid">
    <Nav className="nav" />
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
       
    </div>
  )
}

export default App
