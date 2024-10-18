import Link from "next/link";
import web from '../Web-Development/web.module.css';
import Image from 'next/image';

console.log(web, "CSS-web");



function ContentWritting(){
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
          <h1 className='homePage'>Content Writting</h1>
        <p className={web.p}>I offer professional content writing services to help businesses effectively communicate their message and engage their audience.
           Whether you need blog posts, articles, website copy, or product descriptions, I create high-quality, well-researched content tailored to your brand’s voice and goals. 
           My services focus on creating compelling, SEO-friendly content that improves your search rankings and attracts organic traffic. 
           From engaging readers to building credibility, I ensure that your content resonates with your target audience. Whether you need content for digital marketing, 
           social media, or email campaigns, I deliver impactful writing that helps your business stand out.

                       <div className={web.div}>
             <button  className={web.btn}><Link href="/contact">Contact Us to Avail Service</Link></button>
           </div>
        
        </p>
             
        </div>
        </div>
    )
}

export default ContentWritting;
