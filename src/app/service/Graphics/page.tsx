import Image from 'next/image';
import Link from "next/link";
import web from '../Web-Development/web.module.css';

console.log(web, "CSS-web");



function Graphics(){
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
          <h1 className='homePage'>Graphics Designing</h1>
        <p className={web.p}>I offer professional graphic design services tailored to meet the unique needs of your brand.
             Whether you need eye-catching logos, stunning brochures, social media graphics, or marketing materials, I’m here to help bring your ideas to life.
              My design process focuses on understanding your vision and ensuring that every design element aligns with your brand identity. 
              From typography to color schemes and layouts, I create visually appealing and impactful designs that resonate with your target audience.

My services cover a wide range of design needs, including logo design, business cards, posters, flyers, banners, and more. 
Whether you&apos;re launching a new product, updating your brand’s image, or need graphics for online and print platforms,
 I work closely with you to ensure that your message is delivered effectively through creative design.
             </p>
             
        </div>
        <br/> <span className={web.text}>For Contact</span>
        <button  className={web.btn}><Link href="/contact">Click Here</Link></button>
        </div>
    )
}

export default Graphics;
