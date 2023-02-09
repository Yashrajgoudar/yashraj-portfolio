import React from 'react';
import './copyright.scss';
import {CopyrightOutlined, Facebook, GitHub, Instagram, LinkedIn} from '@mui/icons-material'

const Copyright = () => {
  return (
    <div className='copyright'>
        <div className="design">
            <p>Designed and developed by Yashraj B Goudar</p>
        </div>
        <div className="dec">
            <p>Copyright <span><CopyrightOutlined className='icon'/></span> 2023 YBG</p>
        </div>
        <div className="social">
            <GitHub  className='icon'/>
            <LinkedIn className='icon'/>
            <a className='link' href="https://www.instagram.com/yashgoudar/" target={"_blank"}><Instagram className='icon'/></a>
            <a className='link' href="https://www.facebook.com/YashrajGoudar" target={"_blank"}><Facebook className='icon' /></a>
            
        </div>
    </div>
  )
}

export default Copyright