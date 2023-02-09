import React from 'react'
import mypic from '../../assets/bgimage.png';
import js from '../../assets/javascript.png';
import sass from '../../assets/sass.png';
import react from '../../assets/react.png';
import java from '../../assets/javalogo.png';
import html from '../../assets/html.png';
import './header.scss';
import introimg from '../../assets/introimage.jpg';
import Copyright from '../../components/copyright/Copyright';
import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';


const Header = () => {
  return (
    <>
    <div className='header'>
        <div className="container">
            <div className="boxes">
                <div className="box1">
                    <div className="wave">👋</div>
                    <div className="hello">
                        <span>Hello I am,</span>
                        <span className='name'>Yashraj</span>
                    </div>
                </div>
                <div className="box2">
                    <div>Full Stack Developer</div>
                    <div>Engineer</div>
                </div>
            </div>
            <div className="right">
                <div className="skill">
                    <div className="skillimg h">
                        <img className='html' src={html} alt="" />
                    </div>
                    <div className="skillimg j">
                        <img className='js' src={js} alt="" />
                    </div>
                    <div className="skillimg s">
                        <img className='sass' src={sass} alt="" />
                    </div>
                    <div className="skillimg r">
                        <img className='react' src={react} alt="" />
                    </div>
                    <div className="skillimg ja">
                        <img className='java' src={java} alt="" />
                    </div>
                </div>
                <div className="imgcontainer">
                    <div className="imground">
                        <img className='mypic' src={mypic} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="intro">
            <div className="content">
                <h1>Let me <span>introduce </span>myself</h1>
                <p>Coding has become a passion for me, the day i started my coding journey</p>
                <p>I am fluent in classical programming languages like <span>Java and Javascript</span></p>
                <p>My field of interest's are building new <span>Web Technologies and Products</span>  both in the frontend as well as on the backend</p>
                <p>Whenever possible, I also apply my passion for developing products with <span>Spring Boot</span>  and <span>Modern Javascript Library and Frameworks  like React.js</span></p>
            </div>
            <div className="image">
                <img src={introimg} alt="" />
            </div>
        </div>
        <div className="connectwithme">
            <hr />
            <h2>Find <span>me</span>  on</h2>
            <p>Feel free to connect with me</p>
            <div className="social">
                <a href="https://github.com/Yashrajgoudar" className="link"><GitHub  className='icon'/></a>
                <a href="https://www.linkedin.com/in/yashraj-goudar-8577361b0/" className="link"><LinkedIn className='icon'/></a>
                <a className='link' href="https://www.instagram.com/yashgoudar/" target={"_blank"}><Instagram className='icon'/></a>
                <a className='link' href="https://www.facebook.com/YashrajGoudar" target={"_blank"}><Facebook className='icon' /></a>        
            </div>
        </div>
    </div>
    <Copyright/>
    </>
  )
}

export default Header