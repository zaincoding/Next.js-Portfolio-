
import Link from "next/link";
import web from '../Web-Development/web.module.css';

console.log(web, "CSS-web");



function SEO(){
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
          <div>
          <h1 className='homePage'>SEO Optimization</h1>
        <p className={web.p}>I provide professional SEO optimization services to help improve your website's visibility and ranking on search engines like Google. 
            With a focus on both on-page and off-page SEO, I ensure that your site is optimized for relevant keywords, has fast loading times, and is mobile-friendly. 
            I also implement strategies to enhance your site's content, structure, and backlink profile, driving more organic traffic and improving search rankings.
             Whether you’re a small business or a growing enterprise, my SEO services are tailored to meet your needs and help you achieve your digital marketing goals.
             </p>
             
        </div>
        <br/> <span className={web.text}>For Contact</span>
        <button  className={web.btn}><Link href="/contact">Click Here</Link></button>
        </div>
    )
}

export default SEO;