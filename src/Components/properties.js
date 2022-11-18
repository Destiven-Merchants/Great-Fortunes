import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpeg';
import logo2 from './images/logo-footer.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function Properties(){

    const [property, setProperty] = useState([]);

    useEffect(() => {
        try{
            fetch('https://greatfortunesproperties.herokuapp.com/property',{
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).then(
                res => res.json()
            ).then((json) => {
                setProperty(json)
            }).catch(err => console.log(err))
        }catch(error){
            alert('error')
        }
    }, [])

    // console.log(images)

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
                <div className="properties-container">
                    <h1>Affordable Plots for Sale</h1>
                    {property.map(plot =>
                    <>
                    <Link to={`/property/${plot.id}`} style={{textDecoration: 'none'}}><div className="available" key={plot.id}>
                            <div className="property-img">
                                <img src={plot.thumbnail} alt="property-img" />
                            </div>
                            <div className="property-content">
                                <h2>{plot.location}</h2>
                                <p>{plot.description.substring(0, 100)}...</p>
                                <ul>
                                    <li style={{borderRight: '1px solid #868686', paddingRight: '120px'}}>
                                        <h3>{plot.size}</h3>
                                        <h4>{plot.price}</h4>
                                    </li>
                                    <li>
                                        <h3>Booking fee:</h3>
                                        <h4>{plot.discount}</h4>
                                    </li>
                                </ul>
                                <p>Installment payment option upto 12 months</p>
                            </div>
                        </div></Link>
                    </>
                    )}
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