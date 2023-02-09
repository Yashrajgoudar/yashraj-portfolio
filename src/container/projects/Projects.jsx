import React from 'react';
import './projects.scss';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/EmployeesList.png'
import {AiFillGithub} from 'react-icons/ai';
import {GoBrowser} from 'react-icons/go';
import Copyright from '../../components/copyright/Copyright';


const Projects = () => {
  return (
    <div className='projects'>
      <div className="headers">
        <h1>My Recent <span>Works</span></h1>
        <p>Here are a few projects I've worked on recently</p>
      </div>
        <div className="work">
          <div className="project1">
            <img src={project1} alt="" />
            <h2 className='logo'>enerGYM</h2>
            <p>enerGYM is a multi-page web application built with modern Javascript framework,<span> React JS, SASS, React-Router and Material-UI</span> .This web application has modern navigation bar which improves the User-Interface. This web application allows the user to know about the plans and various trainers that are available in the enerGYM.</p>
            <div className="btns">
              <a href="https://github.com/Yashrajgoudar/enerGYM" target="_blank" className='link'><button><AiFillGithub className='icons'/> Github</button></a>
              <a href="https://extraordinary-sorbet-a8ef19.netlify.app/" target="_blank" className='link'><button><GoBrowser className='icons'/> Demo</button></a>
            </div>
          </div>
          <div className="project2">
            <img src={project2} alt="" />
            <h2>Employee-Management System</h2>
            <p>Employee Management System is a REST API which performs CRUD operations on Employee details.This application is built with <span>Java,Spring-Boot,Hibernate,MySQL </span>for backend and <span>React and SASS</span> for frontend. </p>
            <div className="btns">
            <a href="https://github.com/Yashrajgoudar/employee-management" target="_blank" className='link'><button><AiFillGithub className='icons'/> Github</button></a>
            </div>
          </div>
        </div>
        <Copyright/>
    </div>
  )
}

export default Projects