import React from 'react'
import './style/NavStyle.css'
import TraffyLogo from './style/TraffyLogo-A1zlgBaG.png'
import BkLogo from './style/1555Logo-0q31Mp9M.png'
import LineLogo from './style/LineLogo.png'
import EngLogo from './style/EngLogo.png'
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <div className='nav'>
        <div className='navcon'>
            <div className='logo'>
                <img className='tlogo' src={TraffyLogo} alt="Traffy Logo"/>
                <img className='blogo' src={BkLogo} alt="Bangkok Logo"/>
            </div>
            <div className='report'>
                <a href='https://page.line.me/105rlyvn?openQrModal=true' target="_blank"className='btn'>
                    <p className='-text'>แจ้งปัญหาผ่านไลน์</p>
                    <div className='-logo'>
                        <img src={LineLogo}/>
                    </div>
                </a>
                
                <Link to={'/report'} className='btn'>
                    <p className='-text'>Report in English</p>
                    <div className='-logo'>
                        <img src={EngLogo}/>
                    </div>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Nav