
import './App.css'
import { Route, Routes } from 'react-router'
import Welcome from './Components/Welcome'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import Survey from './Components/Survey'

function App() {
  


  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/start' element={<Survey />}></Route>
      </Routes>
    </>
  )
}

export default App
