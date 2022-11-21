import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpeg';
import logo2 from './images/logo-footer.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import property1 from './images/property1.jpg';
import property2 from './images/property2.jpg';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import CountUp from 'react-countup';

export default function Home(){

    const [open, setOpen] = useState(false);

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
                                <a href="https://twitter.com/greatfortunes1"><img src={twitter} alt="twitter" /></a>
                                <a href="https://www.facebook.com/profile.php?id=100086559135760"><img src={facebook} alt="facebook" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navigation">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <ul>
                        <Link to="/" style={{textDecoration: 'none', color: '#111'}}><li>Home</li></Link>
                        <Link to="/properties" style={{textDecoration: 'none', color: '#111'}}><li>Properties</li></Link>
                        <Link to="/blog" style={{textDecoration: 'none', color: '#111'}}><li>Blog</li></Link>
                        <Link to="/about" style={{textDecoration: 'none', color: '#111'}} onMouseOver={() => setOpen(!open)}><li>About</li></Link>
                        <Link to="/contact" style={{textDecoration: 'none', color: '#111'}}><li>Contact Us</li></Link>
                    </ul>
                </div>

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
                    <h2>Featured properties</h2>
                    <div className="properties">
                        <div className="property">
                            <img src={property1} alt="property1" />
                            <h5>Plots in Nanyuki</h5>
                        </div>
                        <div className="property">
                            <img src={property2} alt="property2" />
                            <h5>Plots in Kiambu</h5>
                        </div>
                        <div className="property">
                            <img src={property1} alt="property3" />
                            <h5>Plots in Nakuru</h5>
                        </div>
                    </div>
                    <div className="explore">
                        <Link to="/properties"><button>Explore more</button></Link>
                    </div>
                </div>

                <div className="about-container">
                    <div className="about-content">
                        <h1>Why Invest with Great Fortunes Properties?</h1>
                        <ol>
                            <li>Over 10 years of experience. Great Fortunes Properties is a leading brand in the African real estate sector.</li>
                            <li>Genuine Titles Deeds. We have prime plots on sale in Kiambu, Thika, Gatanga Road, Machakos, Kitengela, Nyeri.</li>
                            <li>Property Transformation. The Real Estate arm’s flagship product is transformed value added plots which are particularly enhanced to suit immediate residential settlement, commercial purposes and futuristic.</li>
                            <li>Our prices are very affordable starting from Kshs. 199,000 only.</li>
                            <li>Our prices are inclusive of title processing fees and legal fees, no hidden charges.</li>
                            <li>Title deed delivery – we do all the paperwork for you and deliver title deeds within 6 – 12 months upon completion of payment.</li>
                            <li>We offer a flexible installment payment plan of up to 12 months.</li>
                        </ol>
                    </div>
                    <div className="about-img">
                        <img src={property1} alt='property' />
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
                            <h4><CountUp end={10000} duration={3} delay={3}/></h4>
                            <p>Happy CLients</p>
                        </li>
                        <li>
                            <h4><CountUp end={1000} duration={3} delay={3}/></h4>
                            <p>Title Deeds Awarded</p>
                        </li>
                    </ul>
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