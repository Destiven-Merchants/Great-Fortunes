import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo2.jpg';
import logo2 from './images/logo-footer.png';
import ActuaProperty from './actualProperty';
import {Modal} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function Properties(){

    const [property, setProperty] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);

    useEffect(() => {
        try{
            fetch('http://127.0.0.1:8000/property',{
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
                <div className="properties-container">
                    <h1>Affordable Plots for Sale</h1>
                    {property.map(plot =>
                    <>
                        <div className="available" key={plot.id} onClick={() => {
                            setOpen(true)
                            setId(plot.id)
                        }}>
                            <div className="property-img">
                                <img src={plot.thumbnail} alt="property-img" />
                            </div>
                            <div className="property-content">
                                <h2>{plot.location}</h2>
                                <p>{plot.description}</p>
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
                        </div>

                        <Modal open={open} onClose={() => setOpen(false)}>
                            <ActuaProperty pk={id} />
                        </Modal>
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