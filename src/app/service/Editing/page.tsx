import Image from 'next/image';
import Link from "next/link";
import web from '../Web-Development/web.module.css';

console.log(web, "CSS-web");



function Editing(){
    return(
        <div>
        <div>
        <nav id="nav">
  <Image src="/images/logo2.PNG" alt="logo" className='logo'/>
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
          <div>
          <h1 className='homePage'>Video Editing</h1>
        <p className={web.p}>I provide professional video editing services to bring your vision to life.
             Whether you need to enhance personal projects, create engaging social media content, or produce high-quality promotional videos, I’m here to help.
              My services include cutting footage, adding transitions, color grading, sound design, and motion graphics to ensure a polished final product.
               I work with various video formats and tailor each project to suit your brand or message, delivering high-quality results on time.
                Let’s collaborate to create videos that stand out.
<div className={web.div}>
        <button  className={web.btn}><Link href="/contact">Contact Us to Avail Service</Link></button>
</div>
        </p>
             
        </div>
        </div>
    )
}

export default Editing;
