import Image from 'next/image';
import web from './web.module.css';
import Link from 'next/link';

const WebDevelopment = () => {
    return (
        <div>
            <div>
                <nav id="nav">
                    <Image
                        src="/images/logo2.PNG"
                        alt="logo"
                        className='logo'
                        width={150}  
                        height={50}  
                    />
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/service">Service</Link>
                        </li>
                        <li>
                            <Link href="/service/Web-Development">Web Development</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <h1 className={web.h1}>Web Development</h1>
            <p className={web.p}>
                I am a web development expert offering professional services in creating responsive, dynamic, and user-friendly websites.
                With expertise in HTML, CSS, JavaScript, TypeScript, and modern frameworks like React and Next.js,
                I specialize in building high-performance web applications. 
                Whether it&apos;s front-end design using Tailwind CSS or integrating back-end functionality,
                I deliver tailored solutions to meet business needs. From simple landing pages to complex web applications, 
                I ensure the highest standards of functionality, design, and performance.
                With a keen focus on user experience and optimization,
                I am dedicated to helping businesses thrive in the digital world.
            </p>
        </div>
    );
};

export default WebDevelopment;
