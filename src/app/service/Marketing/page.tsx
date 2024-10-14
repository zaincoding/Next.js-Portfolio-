import Link from "next/link";
import web from '../Web-Development/web.module.css';
import Image from 'next/image';

console.log(web, "CSS-web");



function Marketing(){
    return(
        <div>
        <div>
        <nav id="nav">
  <Image src="/images/logo2.png" alt="logo" className='logo'/>
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
          <h1 className='homePage'>Marketing</h1>
        <p className={web.p}>
        I offer professional social media marketing services to help grow your brand and engage your audience across platforms like Facebook, Instagram, Twitter, and LinkedIn.
         My services include creating tailored content, managing social media accounts, developing strategies to boost engagement, and running targeted ad campaigns to reach the right audience.
        I focus on enhancing your online presence, building brand awareness, and driving traffic to your website. Whether you need content creation, 
        community management, or paid advertising, my social media marketing services are designed to deliver measurable results and increase your business^apos;s success online
             </p>
             
        </div>
        <br/> <span className={web.text}>For Contact</span>
        <button  className={web.btn}><Link href="/contact">Click Here</Link></button>
        </div>
    )
}

export default Marketing;
