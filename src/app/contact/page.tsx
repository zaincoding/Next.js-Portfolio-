
import cssStyle  from './contact.module.css';
import Link from 'next/link';
import Image from 'next/image';

console.log(cssStyle, "CSS-style")




function ContactPage(){ 
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

    <div className={cssStyle.contactPage}>Contact Page</div>

    <section className={cssStyle.contact}>
    <div className={cssStyle.contactContainer}>
        <div className={cssStyle.contactAddress}>
            <div>
                <h4>Phone:</h4>
                <p>0123456789</p>
            </div>
            <div>
                <h4>Email:</h4>
                <p>xyz@example.com</p>
            </div>
            <div>
                <h4>Website:</h4>
                <p>www.example.com</p>
            </div>
            <div>
                <h4>Address:</h4>
                <p>D-123, Sultalabad <br/><br/>Karachi, Pakistan</p>
            </div>

        </div>
       
      <div className={cssStyle.contactForm} id="contacts">
          <form action="#">
              <label htmlFor="name" >Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your message" required />

              <button type="submit">Submit</button>
          </form>
      </div>
      </div>
      </section>
      </div>
   )
   }

export default ContactPage;
