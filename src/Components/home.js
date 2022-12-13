import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CountUp from 'react-countup';
import twitter1 from './images/twitter1.png';
import facebook1 from './images/facebook1.png';
import header from './images/header.jpeg';
import whatsapp from './images/whatsapp.png';
import Footer from './footer';
import Hero from './images/hero.jpg';

export default function Home(){

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    });

    let navbarClasses = ['navi']

    if(scrolled){
        navbarClasses.push('scrolled')
    };

    return (
        <div className="container">
            <header>
                <div className="head">
                    <h1>To Own Property Call/Text/Whatsapp: +254 (707) 117 203 </h1>
                    <div className="email">
                        <EmailOutlinedIcon />
                        <h2 style={{paddingLeft: '10px'}}>info@greatfortunesproperties.com</h2>
                    </div>
                    <div className="social-links">
                        <ul>
                            <li>
                                <a href="https://twitter.com/greatfortunes1"><img src={twitter1} alt="twitter" /></a>
                                <a href="https://www.facebook.com/profile.php?id=100086559135760"><img src={facebook1} alt="facebook" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={navbarClasses.join(" ")}>
                <div className={isExpanded ? "navigation expanded" : "navigation"}>
                    <Link to="/"><img src={header} alt="logo" /></Link>
                    <ul>
                        <Link to="/" style={{textDecoration: 'none', color: '#111'}}><li>Home</li></Link>
                        <Link to="/properties" style={{textDecoration: 'none', color: '#111'}}><li>Properties</li></Link>
                        <Link to="/blog" style={{textDecoration: 'none', color: '#111'}}><li>Blog</li></Link>
                        <li onMouseOver={() => setOpen(!open)} onClick={() => setOpen1(!open1)} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>About <span style={{paddingLeft: '10px'}}><ExpandMoreIcon /></span></li>
                        <div className="mini-links" style={{display: open1 ? 'block' : 'none'}}>
                        <ol>
                            <Link to="/our-team" style={{textDecoration: 'none', color: '#111'}}><li>Our Team</li></Link>
                            <Link to="/mission-vision" style={{textDecoration: 'none', color: '#111'}}><li>Mission & Vision</li></Link>
                            <Link to="/core-values" style={{textDecoration: 'none', color: '#111'}}><li>Core Values</li></Link>
                        </ol>
                        </div>
                        <Link to="/contact" style={{textDecoration: 'none', color: '#111'}}><li>Contact Us</li></Link>
                    </ul>
                    <div className="hamburger">
                        <div className="hamburg-menu" onClick={() => setIsExpanded(!isExpanded)}>
                            <span className="h-top"></span>
                            <span className="h-middle"></span>
                            <span className="h-bottom"></span>
                        </div>
                    </div>
                </div>
                </div>

                <a href="https://wa.me/254707117203">
                    <div className="i">
                    <img src={whatsapp} alt="whatsapp" />
                    <h5>Whatsapp us</h5>
                    </div>
                </a>

                    <div className="modal" style={{display: open ? 'block' : 'none'}}>
                        <ul>
                            <Link to="/our-team" style={{textDecoration: 'none', color: '#111'}}><li>Our Team</li></Link>
                            <Link to="/mission-vision" style={{textDecoration: 'none', color: '#111'}}><li>Mission & Vision</li></Link>
                            <Link to="/core-values" style={{textDecoration: 'none', color: '#111'}}><li>Core Values</li></Link>
                        </ul>
                    </div>

            </header>

            <section onClick={() => setOpen(false)}>
                <div className="hero-container">
                    <h1>Start Your Investment Journey with Us.</h1>
                    <div className="explore">
                        <Link to="/properties"><button>Explore properties</button></Link>
                    </div>
                </div>

                <div className="about-container">
                    <div className="about-content">
                        <h1>Why Invest with Great Fortunes Properties?</h1>
                        <ol>
                            <li>
                                <h3>Genuine Title deeds.</h3>
                                <p>To ensure credibility and satisfaction to our customers, Great fortunes conduct maximum due diligence before investing in any project. Investing in Great Fortunes, you’re assured of clean and legitimate title deeds.</p>
                            </li>
                            <li>
                                <h3>Properties value addition.</h3>
                                <p>In Great Fortunes, we believe in providing our clients with ready to settle properties. We do this by ensuring that all our properties have all the required utilities-water, electricity, access roads and they’re well fenced.</p>
                            </li>
                            <li>
                                <h3>Customer obsession.</h3>
                                <p>One of our core values is customer obsession. Great Fortunes believes in genuinely listening to our customer’s needs and providing tailored solutions which meets their needs.</p>
                            </li>
                        </ol>
                    </div>
                    <div className="about-img">
                        <img src={Hero} alt='property' />
                    </div>
                </div>

                <div className="cta-container">
                    <h1>Current Statistics</h1>
                    <ul>
                        <li>
                            <h4><CountUp end={10} duration={3} delay={3}/></h4>
                            <p>Years of Experience</p>
                        </li>
                        <li>
                            <h4><CountUp end={20} duration={3} delay={3}/></h4>
                            <p>Projects</p>
                        </li>
                        <li>
                            <h4><CountUp end={9} duration={3} delay={3}/></h4>
                            <p>Happy CLients</p>
                        </li>
                        <li>
                            <h4><CountUp end={9} duration={3} delay={3}/></h4>
                            <p>Title Deeds Awarded</p>
                        </li>
                    </ul>
                </div>

                <div className='contact1' id='contact1'>
                    <form>
                        <h1>Get In Touch</h1>
                        <div className='contact-first'>
                            <input type='text' placeholder='Name' required />
                            <input type='text' placeholder='Your Phone No.' required />
                        </div>
                        <div className='message'>
                            <textarea placeholder='Your Message' required></textarea>
                        </div>
                        <input type='submit' value='SEND' />
                    </form>
                </div>
                <Footer />
            </section>
        </div>
    )
}