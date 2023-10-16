import React from 'react'
import './Home.css'

const Home = () => {
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
            <div className="container">
            <div className='img'>
                     <img src="/portfolio.png" alt="ashish photo" />
                </div>
        
                <div className='text'>
                     <h2>Hello, </h2>
                     <p>I'm Ashish Kumal. </p>
                </div>
            </div>
               
                 
        </section>
        {/* <section>
            <h2>Portfolio</h2>
             <!-- Add links or content related to your portfolio here --> 
        </section> */}
        {/* <section>
            <h2>Contact Me</h2>
            <p>You can reach me at ashishkumal89@gmail.com or connect with me.</p>
            <li>you can follow me in git hub ImLaZyCat</li>
        </section> */}
    </main>
    <footer>
        &copy; 2023 | Ashish Kumal | ImLaZyCaT
    </footer>
</body>

   




    </>

  )
}

export default Home
