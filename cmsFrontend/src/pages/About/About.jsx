import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <body>
    <header>
        <h1>PortFolio</h1>
    </header>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        {/* <a href="#">Portfolio</a> */}
        <a href="/contact">Contact</a>
    </nav>
    <main>
        <section>
            <h2>About Me</h2>
            <p>Hello, I'm Ashish Kumal. I am passionate about practicing so, this is the practice website made in vite react.</p>
        </section>
       
    </main>
    <footer>
        &copy; 2023 | Ashish Kumal | ImLaZyCaT
    </footer>
</body>
    </>
  )
}

export default About