import cssStyle from "./about.module.css";
import Link from 'next/link';

console.log(cssStyle,"CSS-style");

function AboutPage(){
    return (
        
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

    <h2  className={cssStyle.about}>About Me</h2>
    <section  className={cssStyle.aboutGrid}>
    <div className={cssStyle.aboutItem}>Hi, I’m Zain Khan, a dedicated web developer with a passion for creating intuitive, responsive websites. I love turning ideas into reality through code and design. My journey in web development is driven by curiosity and a desire to craft seamless user experiences.
    </div>
   <div className={cssStyle.aboutItem}>I specialize in HTML, CSS, JavaScript, and TypeScript, ensuring that I can build modern, dynamic web applications. I enjoy working with frameworks like React for building interactive UIs and using Tailwind CSS to streamline the design process, allowing me to focus on functionality and aesthetics.
   </div>

 <div className={cssStyle.aboutItem}>As a web developer, I have worked on a variety of projects, focusing on delivering high-quality, user-centered web solutions. I take pride in understanding client needs and translating them into functional websites that stand out. My experience helps me tackle challenges and innovate with each new project.
 </div>

 <div className={cssStyle.aboutItem}>
I graduated with a Bachelor’s in Software Engineering, equipping me with strong problem-solving and coding skills. I am currently enhancing my knowledge through the Governor Sindh IT Program, staying updated with the latest industry trends and constantly improving my skill set.

 </div>

  <div className={`${cssStyle.aboutItem} ${cssStyle.aboutCenter}`}>I aspire to become a full-stack developer, mastering both frontend and backend technologies. My long-term goal is to contribute to impactful projects, continuously learn, and grow in the ever-evolving field of web development. I believe in pushing boundaries to create solutions that make a difference.

  </div>
    </section>
    <div>
<hr style={{backgroundColor: 'gray',  height: '2px', margin: '20px 0'}} />
</div>
  <h2  className={cssStyle.eduH2}>Education & Experience</h2>

  <div className={cssStyle.cont}>
    <div  className={cssStyle.verticalLine}> </div>
    {/* <!-- Left Column for Years --> */}
    <div className={cssStyle.leftColumn}>
        <div className={cssStyle.year}>2013 - 2017</div>
        <div className={cssStyle.year}>2023 - Present</div>
        <div className={cssStyle.year}>2017 - 2020</div>
        <div className={cssStyle.year}>2024 - Present</div>
    </div>
    
    <div className={cssStyle.rightColumn}>
        <div className={cssStyle.card}>
            <h3>Bachelor of Software Engineering</h3>
            <p>ILMA UNIVERSITY</p>
            <p>Studied key areas of software development, focusing on programming languages, algorithms, and project management.</p>
        </div>
        <div className={cssStyle.card}>
            <h3>Governor Sindh IT Program</h3>
            <p>IT Institute</p>
            <p>Learning web development technologies including JavaScript, TypeScript, and frameworks like React and Tailwind CSS.</p>
        </div>
        <div className={cssStyle.card}>
            <h3>Sales Executive</h3>
            <p>XYZ Company</p>
            <p>Worked in sales and customer relations, focused on building and maintaining client relationships, exceeding sales targets.</p>
        </div>
        <div className={cssStyle.card}>
            <h3>Freelance Web Developer</h3>
            <p>Self-employed</p>
            <p>Developing web applications and responsive websites for clients using HTML, CSS, JavaScript, and modern libraries like React.</p>
        </div>
    </div>

</div>
</div>

);
}

export default AboutPage;

//nave bar link tags
//rafce
//rfc
