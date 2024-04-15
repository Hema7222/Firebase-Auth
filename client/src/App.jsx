import { useState } from 'react'
import Login from './Login'
import SignupForm from './SignupForm'
import '../src/Style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignupForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
