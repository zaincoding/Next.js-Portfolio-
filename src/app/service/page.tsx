
"use client";
import Link from 'next/link';
import { useEffect } from 'react';
import {animateText} from'@/lib/services';
import cssStyle from './services.module.css';
console.log(cssStyle, "CSS-services")
function  ServicePage(){

    useEffect(() =>{
        animateText();
    }, [])

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


        <div className={cssStyle.services}>My Services</div>
        <div className={cssStyle.boxContainer}>
        <div className={cssStyle.boxes}>
        <div>
        <Link href="service/SEO" target='_blank'>
        <h1>SEO Optimization</h1>
        <p>I am providing SEO optimization services.</p>
        </Link>
        </div>
        </div>


        <div  className={cssStyle.boxes}>
        <div>
        <Link href="service/Editing"  target='_blank'>
        <h1>Video Editing</h1>
        <p>I am providing video editing services</p>
        </Link>
        </div>
        </div>

        <div  className={cssStyle.boxes}>
        <div>
        <Link href="service/Graphics" target='_blank'>
        <h1>Graphics Designing</h1>
        <p>I am providing Graphic Designing services</p>
        </Link>
        
        </div>
        </div>


        <div  className={cssStyle.boxes}>
        <div>
        <Link href="service/Marketing" target='_blank'>
        <h1>Social Media Marketing</h1>
        <p>I am providing social media marketing services</p>
        </Link>
        </div>
        </div>

        <div  className={cssStyle.boxes}>
        <div>
        <Link href="service/Content" target='_blank'>
        <h1>Content Writting</h1>
        <p>I am providing content writting services</p>
        </Link>
        </div>
        </div>
        <h1 id="dynamic-text" style={{fontSize:48,}}></h1>

        </div>
<hr/>
        </div>

    )
}

export default ServicePage;
