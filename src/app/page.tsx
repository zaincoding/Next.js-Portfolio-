// // div or span  are container.// div is block element and span is inline element.
// //jsx  javascript xmal
// const HomePage = () =>{

//     return(<div>
//       <h1>Hello World - 1</h1>
//       <h1>Hello World - 2</h1>
//       <h1>Hello World - 3</h1>
//     </div>)
// }

// export default HomePage;
"use client"
//nav tag, asider tag, header tag, footer tag
import { useEffect } from 'react';
import { animateText } from '@/lib/animation';
import Link from "next/link"
function HomePage(){

  useEffect(() =>{
    animateText();
  }, []);

  return(
    
    <div>
      <div>
        <nav id="nav">
  <img src="/images/logo2.PNG" alt="logo" className='logo'/>
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

          <h1 className='homePage'>Home Page</h1>


          <div className="container">
  <img src="/images/Profile.PNG" alt="profile image" className="profile-image" />
  <p  className="text"><span id="dynamic-text"></span><br/>
    I am a passionate web developer dedicated to building responsive, user-friendly websites. With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I specialize in crafting tailored web solutions that meet specific client needs.
<br/> My expertise in modern technologies, particularly Tailwind CSS and React, enables me to create dynamic, high-performance web applications that offer seamless, engaging user experiences.
<br/> I focus on writing clean, efficient code, ensuring that websites are not only visually appealing but also accessible and optimized for performance across devices. My goal is to deliver high-quality, scalable solutions that elevate user interactions and exceed client expectations.
  </p>
     <a href="cv/My-Cv.pdf" download="your-file.pdf" className="download-button">
    Download CV
  </a>
</div>
</div>
  )
}

//   return(
//     <div>
//       <h1 style={{color:"green", backgroundColor:"blue", fontSize:"100px"}}>Hello World</h1>

     
//     <h1  className="green">Hello World</h1>
// </div>

//   )

// }

export default HomePage;
