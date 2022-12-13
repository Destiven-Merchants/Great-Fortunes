import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import header from './images/header.jpeg';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import twitter1 from './images/twitter1.png';
import facebook1 from './images/facebook1.png';
import whatsapp from './images/whatsapp.png';
import Footer from './footer';

export default function ActualProperty() {

    const [actualProperty, setActualProperty] = useState([]);
    const [images, setImages] = useState([]);
    const [curImage, setCurImage] = useState('');
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

    useEffect(() => {
        const url = window.location.pathname
        const field = url.split('/')
        const pk = field[2]

        async function fetchData(){
            const data = await fetch(`https://greatfortunesproperties.herokuapp.com/property/${pk}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })

            const res = await data.json()
            setActualProperty(res)
        }

        async function fetchImages(){
            const images = await fetch(`https://greatfortunesproperties.herokuapp.com/propertyimages/${pk}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })

            const res = await images.json()
            setImages(res)
        }

        fetchData()
        fetchImages()

    }, []);

    useEffect(() => {
        let thumbnail = actualProperty.map(thumb => thumb.thumbnail)
        setCurImage(thumbnail)
    }, [actualProperty]);

    return (
        <>
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
            </div>
            <a href="https://wa.me/254707117203">
                    <div className="i">
                    <img src={whatsapp} alt="whatsapp" />
                    <h5>Whatsapp us</h5>
                    </div>
                </a>
            <div className="actualproperty-container" onClick={() => setOpen(false)}>

                {actualProperty.map(property => 
                    <div className="actualproperty" key={property.id}>
                        <div className="actualproperty-img">
                            <img src={curImage} alt="property" />
                        </div>

                        <div className="actualproperty-content">
                            <h2>{property.location}</h2>
                            <p>{property.description}</p>
                            <ul>
                                <li>
                                    <h3>{property.size}</h3>
                                    <h4>{property.price}</h4>
                                </li>
                                <li>
                                    <h3>Booking fee:</h3>
                                    <h4>{property.discount}</h4>
                                </li>
                            </ul>
                            <p>Installment payment option upto 12 months</p>
                        </div>
                    </div>
                )}

                <div className="review-images">
                    {images.map(image => 
                        <img src={image.images} alt="review properties" onClick={() => setCurImage(image.images)} />
                    )}
                </div>

                <section>
                    <Footer />
                </section>
            </div>
        </>
    )
}