import React from 'react'

const Navbar = () => {
  return (
    <>
     <header>
        <h1>PortFolio</h1>
    </header>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        {/* <a href="#">Portfolio</a> */}
        <a href="/contact">Contact</a>
    </nav>
    </>
  )
}

export default Navbar