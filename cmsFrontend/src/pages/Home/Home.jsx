import React from 'react'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import './Home.css'

const Home = () => {
  return (
    <>

<body>
   <Navbar/>
   <Button title="hello"/>
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
    <Footer/>
</body>

   




    </>

  )
}

export default Home
