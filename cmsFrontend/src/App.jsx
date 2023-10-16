import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/home'

 
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
      <Routes>

          <Route  path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
