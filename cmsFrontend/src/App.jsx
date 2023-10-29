import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

import Home from './pages/Home/home'
import Test from './pages/Test/test'
import Test1 from './pages/Test1/Test1'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
      <Routes>



          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/test' element={<Test/>}/>
          <Route path='/test1' element={<Test1/>}/>
 

      </Routes>

    </BrowserRouter>
  )
}

export default App
