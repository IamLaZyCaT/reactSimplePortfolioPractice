import React from 'react'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <body>
    <Navbar/>
    {/* <main>
        
        <section>
            <h2>Contact Me</h2>
            <p>You can reach me at ashishkumal89@gmail.com or connect with me.</p>
            <li>you can follow me in git hub ImLaZyCat</li>
        </section>
    </main> */}
    <main>
        <section>
        <div className="contain">
        <h2>Contact Me</h2>
            <p>If you have any questions or would like to get in touch, please feel free to contact me:</p>
            
            <ul>
                <li>Email: ashishkumal89@email.com</li>
                <li>Phone: +977 9863184429</li>
            </ul>
    
    <h2>message me</h2>

<div className="form">

            <form action="">
                <label htmlFor="">Name:</label>
                <input type="text" />
                <br />
                <br />
                <label htmlFor="">Email:</label>
                <input type="email" />
                <br />
                <br />
                <label htmlFor="">Message:</label>
                <input type="text" rows="5"/>
                <br />
                <br />
                <input type="submit" value="Submit"/>
            </form>
</div>
           
            </div>
        </section>
        <Button title="Bye"/>
            
        
    </main>

    
   <Footer/>
</body>
    </>
  )
}

export default Contact