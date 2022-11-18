import React from 'react'
import {Link} from 'react-router-dom';
import logo from './images/logo.jpeg';
import logo2 from './images/logo-footer.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';

export default function About(){
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
                <div className="about-section-container">
                    <div className="about-section">
                        <h1>About Us</h1>

                        <div className="company-ceo">
                            <h2>CEO</h2>
                            <p>Benson Mutuike is a holder of Bachelor of Economics degree from Kenyatta University. He has worked at various capacities: as a researcher and data analyst at Equity Group Foundation and as an accountant at the Ministry of Devolution and planning and as a marketer selling real estate properties. He has a great passion in real estate and aspires to use his vast knowledge in real estate investments to help as many clients as possible have a stake in the real estate sector.</p>
                        </div>

                        <div className="company-director">
                            <h2>Director</h2>
                            <p>Kelvin Kahiga is a holder of B.A Economics from Maasai Mara University. He has worked at various capacities at Unaitas Sacco as a relationship officer and as an accountant at the Ministry of Devolution and Planning, he’s also an investment consultant. He has a strong believe that if innovation and creativity is leveraged in the Kenyan real estate, everybody in Kenya can own a home.</p>
                        </div>

                        <div className="mission-vision">
                            <div className="mission">
                                <h2>Our Mission</h2>
                                <p>Leveraging creativity and innovation to provide timely investments opportunities that empower out clients socially and economically.</p>
                            </div>

                            <div className="vision">
                                <h2>Our Vision</h2>
                                <p>To be the champion provider of affordable housing in Africa.</p>
                            </div>
                        </div>


                        <div className="values">
                            <h2>Core Values</h2>
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