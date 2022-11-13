import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpeg';
import logo2 from './images/logo-footer.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';

export default function Contact() {
    return (
        <div className="container">
            <header>
                <div className="head">
                    <h1>To Own Property Call/Text/Whatsapp: +254 (707) 117 203 </h1>
                    <div className="email">
                        <EmailOutlinedIcon />
                        <h2 style={{paddingLeft: '10px'}}>info@greatfortunesproperties.com</h2>
                    </div>
                </div>
                <div className="navigation">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <ul>
                        <Link to="/" style={{textDecoration: 'none', color: '#111'}}><li>Home</li></Link>
                        <Link to="/properties" style={{textDecoration: 'none', color: '#111'}}><li>Properties</li></Link>
                        <Link to="/blog" style={{textDecoration: 'none', color: '#111'}}><li>Blog</li></Link>
                        <Link to="/about" style={{textDecoration: 'none', color: '#111'}}><li>About</li></Link>
                        <Link to="/contact" style={{textDecoration: 'none', color: '#111'}}><li>Contact Us</li></Link>
                    </ul>
                </div>
            </header>

            <section>
                <div className='contact' id='contact'>
                <form>
                    <h1>Get In Touch</h1>
                    <div className='contact-first'>
                        <input type='text' placeholder='Name' required />
                        <input type='email' placeholder='Your Email' required />
                    </div>
                    <div className='message'>
                        <textarea placeholder='Your Message' required></textarea>
                    </div>
                    <input type='submit' value='SEND' />
                </form>
                <div className='contact__dets'>
                    <ul>
                        <li>
                            <LocationOnOutlinedIcon />
                            <div className='dets'>
                                <h3>Address</h3>    
                                <p>Avenue 2 Kenyatta Rd (Off-Thika Rd)</p>
                            </div>
                        </li>
                        <li>
                            <LocalPhoneOutlinedIcon />
                            <div className='dets'>
                                <h3>Call us</h3>
                                <p>(254) 715-657-003</p>
                            </div>
                        </li>
                        <li>
                            <EmailOutlinedIcon />
                            <div className='dets'>
                                <h3>stephen@destivenmerchants.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-top">
                            <img src={logo2} alt='logo' />
                            <div className="footer-about">
                                <h2>Who we are:</h2>
                                <p>Great Fortunes Properties is a leading brand in the African real estate sector. The Group’s main objective is to empower property investors and transform the Society.</p>
                            </div>
                        </div>

                        <div className="footer-centre">
                            <h1>Contact Information:</h1>
                            <ul>
                                <li>
                                    <LocalPhoneOutlinedIcon />
                                    <h5 style={{paddingLeft: '10px'}}>+254 (707) 117 203</h5>
                                </li>
                                <li>
                                    <EmailOutlinedIcon />
                                    <h5 style={{paddingLeft: '10px'}}>info@greatfortunesproperties.com</h5>
                                </li>
                                <li>
                                    <a href="https://twitter.com/greatfortunes1"><img src={twitter} alt="twitter" /></a>
                                    <a href="https://www.facebook.com/profile.php?id=100086559135760"><img src={facebook} alt="facebook" /></a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-bottom">
                            <h1>Office Location:</h1>
                            <ul>
                                <li><LocationOnOutlinedIcon /></li>
                                <li style={{paddingLeft: '10px'}}>Assumption Center CDN 4th Floor, along Moi road</li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright">
                        <h3>2022 © Great Fortunes Properties</h3>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}