import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import header from './images/header.jpeg';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import whatsapp from './images/whatsapp.png';
import twitter1 from './images/twitter1.png';
import facebook1 from './images/facebook1.png';
import Footer from './footer';

export default function OurTeam(){
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

                <Footer />
            </section>
        </div>
    )
}