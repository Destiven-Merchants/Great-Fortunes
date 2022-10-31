import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo2.jpg';
import logo2 from './images/logo-footer.png';
import property1 from './images/property1.jpg';
import property2 from './images/property2.jpg';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function Home(){
    return (
        <div className="container">
            <header>
                <div className="head">
                    <h1>To Own Property Call/Text/Whatsapp: +254 72 562 2968 </h1>
                    <div className="email">
                        <EmailOutlinedIcon />
                        <h2 style={{paddingLeft: '10px'}}>info@greatfortunesproperties.com</h2>
                    </div>
                </div>
                <div className="navigation">
                    <img src={logo} alt="logo" />
                    <ul>
                        <Link to="/" style={{textDecoration: 'none', color: '#111'}}><li>Home</li></Link>
                        <Link to="/properties" style={{textDecoration: 'none', color: '#111'}}><li>Properties</li></Link>
                        <li>Blog</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </header>

            <section>
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
                        <button>Explore more</button>
                    </div>
                </div>

                <div className="about-container">
                    <div className="about-content">
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
                            <h4>10</h4>
                            <p>Years of Experience</p>
                        </li>
                        <li>
                            <h4>20</h4>
                            <p>Projects</p>
                        </li>
                        <li>
                            <h4>10,000</h4>
                            <p>Happy CLients</p>
                        </li>
                        <li>
                            <h4>1000</h4>
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
                            </ul>
                            <ol></ol>
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