import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpeg';
import logo2 from './images/logo-footer.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';

export default function ActualProperty() {

    const [actualProperty, setActualProperty] = useState([]);
    const [images, setImages] = useState([]);
    const [curImage, setCurImage] = useState('')

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
            </div>
            <div className="actualproperty-container">

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
        </>
    )
}