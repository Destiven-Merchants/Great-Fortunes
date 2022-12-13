import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import header from './images/header.jpeg';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import twitter1 from './images/twitter1.png';
import facebook1 from './images/facebook1.png';
import whatsapp from './images/whatsapp.png';
import Footer from './footer';

export default function Contact() {

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

    const [message, setMessage] = useState({
        name: '',
        email: '',
        text: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message)
    }

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

                    <div className="modal" style={{display: open ? 'block' : 'none'}}>
                        <ul>
                            <Link to="/our-team" style={{textDecoration: 'none', color: '#111'}}><li>Our Team</li></Link>
                            <Link to="/mission-vision" style={{textDecoration: 'none', color: '#111'}}><li>Mission & Vision</li></Link>
                            <Link to="/core-values" style={{textDecoration: 'none', color: '#111'}}><li>Core Values</li></Link>
                        </ul>
                    </div>

            </header>

            <a href="https://wa.me/254707117203">
                    <div className="i">
                    <img src={whatsapp} alt="whatsapp" />
                    <h5>Whatsapp us</h5>
                    </div>
                </a>

            <section onClick={() => setOpen(false)}>
                <div className='contact' id='contact'>
                <form onSubmit={handleSubmit}>
                    <h1>Get In Touch</h1>
                    <div className='contact-first'>
                        <input type='text' placeholder='Name' required 
                            value={message.name}
                            onChange={(e) => setMessage(prev => ({
                                ...prev, name: e.target.value
                            }))}
                        />
                        <input type='text' placeholder='Your Phone No.' required 
                            value={message.email}
                            onChange={(e) => setMessage(prev => ({
                                ...prev, email: e.target.value
                            }))}
                        />
                    </div>
                    <div className='message'>
                        <textarea placeholder='Your Message' required
                            value={message.text}
                            onChange={(e) => setMessage(prev => ({
                                ...prev, text: e.target.value
                            }))}
                        ></textarea>
                    </div>
                    <input type='submit' value='SEND' />
                </form>
                <div className='contact__dets'>
                    <ul>
                        <li>
                            <LocationOnOutlinedIcon />
                            <div className='dets'>
                                <h3>Address</h3>    
                                <p>Assumption Center CDN 4th Floor, along Moi road</p>
                            </div>
                        </li>
                        <li>
                            <LocalPhoneOutlinedIcon />
                            <div className='dets'>
                                <h3>Call us</h3>
                                <p>+254 (707) 117 203</p>
                            </div>
                        </li>
                        <li>
                            <EmailOutlinedIcon />
                            <div className='dets'>
                                <h3>info@greatfortunesproperties.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

                <Footer />
            </section>
        </div>
    )
}