import React from 'react'
import './Contact.css'

const Contact = () => {
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
            <h2>Form</h2>
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
        
            
        
    </main>

    
    <footer>
        &copy; 2023 | Ashish Kumal | ImLaZyCaT
    </footer>
</body>
    </>
  )
}

export default Contact