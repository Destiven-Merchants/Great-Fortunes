import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import header from './images/header.jpeg';
import footer from './images/footer.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import twitter1 from './images/twitter1.png';
import facebook1 from './images/facebook1.png';

export default function Values(){
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

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
                        <h1>Core Values</h1>
                        <div className="values">
                            <ul>
                                <li>
                                    <h3>Integrity</h3>
                                    <p>We uphold honesty and strong moral principles in all our undertakings. At no time, will we ever compromise our ethics, honesty and our values to get results.</p>
                                </li>
                                <li>
                                    <h3>Creativity & Innovation</h3>
                                    <p>We believe that everything which can be imagined is real and that what is now proved was once an imagination. We leverage creativity to come up with projects that positively impact our clients helping them to seamlessly and safely realize their goals.</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h3>Teamwork</h3>
                                    <p>The reason we work as a team is to combine our different talents and gifts to come up with well thought out projects that not only impact our stakeholders but also our society.</p>
                                </li>
                                <li>
                                    <h3>Competency and professionalism</h3>
                                    <p>Our projects are informed by research and prediction of future economic growth and developments of certain areas. We advise our clients on the entire process of acquiring land which includes but not limited to land viewing, search and title processing.</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h3>Customer Obsession</h3>
                                    <p>We are obsessed about our client’s satisfaction rather than competitors focus. We strive to be the world most customer centric company.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-top">
                            <img src={footer} alt='logo' />
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