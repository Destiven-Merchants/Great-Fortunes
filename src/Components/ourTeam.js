import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpeg';
import logo2 from './images/logo-footer.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';

export default function OurTeam(){
    const [open, setOpen] = useState(false);

    return(
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
                <div className="about-section-container">
                    <div className="about-section">
                        <h1>Our Team</h1>
                        <div className="company">
                            <div className="company-ceo">
                                <h2>CEO</h2>
                                <p>Benson Mutuike is a holder of Bachelor of Economics degree from Kenyatta University. He has worked at various capacities: as a researcher and data analyst at Equity Group Foundation and as an accountant at the Ministry of Devolution and planning and as a marketer selling real estate properties. He has a great passion in real estate and aspires to use his vast knowledge in real estate investments to help as many clients as possible have a stake in the real estate sector.</p>
                            </div>

                            <div className="company-director">
                                <h2>Director</h2>
                                <p>Kelvin Kahiga is a holder of B.A Economics from Maasai Mara University. He has worked at various capacities at Unaitas Sacco as a relationship officer and as an accountant at the Ministry of Devolution and Planning, he’s also an investment consultant. He has a strong believe that if innovation and creativity is leveraged in the Kenyan real estate, everybody in Kenya can own a home.</p>
                            </div>
                        </div>
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