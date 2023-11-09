import { useState } from 'react'
import Page from './PageFolder/Page'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Page />} />
    </Routes>
       
    </>
  )
}

export default App
