
import web from './web.module.css'
import Link from 'next/link';
const WebDevelopment = () =>{
    return(
        <div>

<div>
        <nav id="nav">
  <img src="/images/logo2.png" alt="logo" className='logo'/>
          <ul>
            <li>
              <Link href="/">Home</Link>
              </li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><a href="/service/Web-Development">Web Development</a></li>
          </ul>
        </nav>
          </div>

            <h1 className={web.h1}>Web Development</h1>
            <p className={web.p}>
            I am a web development expert offering professional services in creating responsive, dynamic, and user-friendly websites.
             With expertise in HTML, CSS, JavaScript, TypeScript, and modern frameworks like React and Next.js,
              i specializes in building high-performance web applications. 
              Whether it's front-end design using Tailwind CSS or integrating back-end functionality,
               i delivers tailored solutions to meet business needs. From simple landing pages to complex web applications, 
               i ensures the highest standards of functionality, design, and performance.
                With a keen focus on user experience and optimization,
             i am dedicated to helping businesses thrive in the digital world.
            </p>
            </div>
    )
}


export default WebDevelopment;