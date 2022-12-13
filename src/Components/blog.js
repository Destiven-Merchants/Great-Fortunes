import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import header from './images/header.jpeg';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import twitter1 from './images/twitter1.png';
import facebook1 from './images/facebook1.png';
import whatsapp from './images/whatsapp.png';
import Footer from './footer';

export default function Blog() {

    const [blogs, setBlogs] = useState([]);
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
        async function getBlogs(){
            const data = await fetch('https://greatfortunesproperties.herokuapp.com/blogs', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })

            const res = await data.json()
            setBlogs(res)
        }
        getBlogs()
    }, []);

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
                <div className="blog-container">
                    <h1>Our Blog Articles</h1>
                    <div className="blog-samples">
                        {blogs.map((post, index) => 
                            <div className="blog" key={index}>
                                <img src={post.thumbnail} alt="blog" />
                                <Link to={`/blogpost/${post.slug}`} style={{textDecoration: 'none'}}><div className="blog-content">
                                    <h3>{post.title}</h3>
                                    <h5 dangerouslySetInnerHTML={{ __html: post.content.substring(0, 150)}} style={{color: '#111', fontWeight: '400', fontSize: '1rem'}}/>
                                    <h4>Learn more</h4>
                                </div></Link>
                            </div>
                        )}
                    </div>
                </div>

                <Footer />
            </section>
        </div>
    )
}