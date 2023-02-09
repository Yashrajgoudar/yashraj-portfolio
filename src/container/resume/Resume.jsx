import {  Download } from '@mui/icons-material';
import Copyright from '../../components/copyright/Copyright';
import React from 'react';
import resume from '../../assets/resume.jpg';
import './resume.scss';
import download from '../../assets/yresume.pdf';

const Resume = () => {
  return (
    <div className='resume'>
        <div className="container">
            <div className="download">
                <Download className='icon' />
                <a href={download} download className='link'>Download Resume</a>
            </div>
            <img src={resume} className="resumeimg" alt="" />
            <div className="download">
                <Download className='icon' />
                <a href="../../assets/yresume.pdf" download className='link'>Download Resume</a>
            </div>
        </div>
        <Copyright />
    </div>
  )
}

export default Resume