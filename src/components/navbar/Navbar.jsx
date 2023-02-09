import React from 'react'
import logo from '../../assets/portfolio1.png';
import './navbar.scss';
// import {motion} from 'framer-motion'
import {CloseRounded, MenuRounded} from '@mui/icons-material'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
    <div className='navbar'>
        <Link to='/'>
            <div className="navbarlogo">
                <img className='' src={logo} alt="" />
            </div>
        </Link>
        <ul className="container">
                <li>
                    <div className="round"></div>
                    <Link to='/' className='link a'>Home</Link>
                </li>
            <li>
                <div className="round"></div>
                <Link to='/about' className='link a'>About</Link>
            </li>
            <li>
                <div className="round"></div>
                <Link to='/projects' className='link a'>Projects</Link>
            </li>
            <li>
                <div className="round"></div>
                <Link to='/resume' className='link a'>Resume</Link>
            </li>
            <li>
                <div className="round"></div>
                <Link to='/contact' className='link a'>Contact</Link>
            </li>
        </ul>
    </div>
        <div className="navbar-menu">
            <MenuRounded className='menubtn' onClick={()=>setToggle(true)} />

            {
                toggle && (
                    <motion.div
                     whileInView={{x:[300,0]}}
                     transition={{duration:0.7,ease:'easeOut'}}
                     className='insidebtns'>
                        <CloseRounded className='closebtn' onClick={()=>setToggle(false)}/>
                        <ul>
                            <li>
                                <div className="round"></div>
                                <Link to="/" className='link' onClick={()=>setToggle(false)}>Home</Link>
                            </li>
                            <li>
                                <div className="round"></div>
                                <Link to="/about" className='link' onClick={()=>setToggle(false)}>About</Link>
                            </li>
                            <li>
                                <div className="round"></div>
                                <Link to="/projects" className='link' onClick={()=>setToggle(false)}>Projects</Link>
                            </li>
                            <li>
                                <div className="round"></div>
                                <Link to="/resume" className='link' onClick={()=>setToggle(false)}>Resume</Link>
                            </li>
                            <li>
                                <div className="round"></div>
                                <Link to="/contact" className='link' onClick={()=>setToggle(false)}>Contact</Link>
                            </li>
                        </ul>
                    </motion.div>
                )
            }
        </div>
    </>
  )
}

export default Navbar