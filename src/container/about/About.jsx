import React from 'react'
import aboutimg from '../../assets/aboutsideimg.svg';
import './about.scss';
import java from '../../assets/javalogo.png';
import js from '../../assets/javascript.png';
import react from '../../assets/react.png';
import node from '../../assets/nodejs.png';
import mongo from '../../assets/mongodb.svg';
import express from '../../assets/express.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import mysql from '../../assets/mysql.png';
import hibernate from '../../assets/sanity.webp';
import material from '../../assets/materialui.png'
import vscode from '../../assets/vscode.png';
import eclipse from '../../assets/eclipse.svg';
import github from '../../assets/github.svg'
import Copyright from '../../components/copyright/Copyright';


const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="left">
                <h1>Know Who <span>I'M</span></h1>
                <p>Hello Everyone, I am <span>Yashraj B Goudar</span>  from <span>Bengaluru, India.</span> <br />I am a recent graduate from <span>Dr Ambedkar Institute Of Technology</span>  with a BE degree in Mechanical Engineering.<br /> I am a Fresher looking for opportunity to gain experience in <span>Web Technologies and Products.</span> </p>
                <p>Whenever possible, I will apply my passion for developing and improving the products with required skills.</p>
                <p>Apart from Technical Skills, some of the Extracurricular Activities that i like to do are,
                    <ul>
                        <li>Reading Books</li>
                        <li>Playing Cricket</li>
                        <li>Travelling</li>
                    </ul>
                </p>
            </div>
            <div className="right">
                <img src={aboutimg} alt="" />
            </div>
        </div>
        <div className="container2">
            <h1>Professional <span>Skillset</span> </h1>
            <div className="skills">
                <div className="logo">
                    <img src={java} alt="" />
                </div>
                <div className="logo">
                    <img src={js} alt="" />
                </div>
                <div className="logo">
                    <img src={react} alt="" />
                </div>
                <div className="logo">
                    <img src={node} alt="" />
                </div>
                <div className="logo">
                    <img src={mongo} alt="" />
                </div>
                <div className="logo">
                    <img src={express} alt="" />
                </div>
                <div className="logo">
                    <img src={html} alt="" />
                </div>
                <div className="logo">
                    <img src={css} alt="" />
                </div>
                <div className="logo">
                    <img src={mysql} alt="" />
                </div>
                <div className="logo">
                    <img src={hibernate} alt="" />
                </div>
            </div>
        </div>
        <div className="container3">
            <h1><span>Tools</span> I Use</h1>
            <div className="tools">
                <div className="logo">
                    <img src={vscode} alt="" />
                </div>
                <div className="logo">
                    <img src={eclipse} alt="" />
                </div>
                <div className="logo">
                    <img src={material} alt="" />
                </div>
                <div className="logo">
                    <img src={github} alt="" />
                </div>
            </div>
        </div>
        <div className="end">
            <Copyright />
        </div>
    </div>
  )
}

export default About