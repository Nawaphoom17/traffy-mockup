import React from 'react'
import './style/NavStyle.css'
import TraffyLogo from './style/TraffyLogo-A1zlgBaG.png'
import BkLogo from './style/1555Logo-0q31Mp9M.png'
import LineLogo from './style/LineLogo.png'
import EngLogo from './style/EngLogo.png'

function Nav() {
  return (
    <div className='nav'>
        <div className='navcon'>
            <div className='logo'>
                <img className='tlogo' src={TraffyLogo} alt="Traffy Logo"/>
                <img className='blogo' src={BkLogo} alt="Bangkok Logo"/>
            </div>
            <div className='report'>
                <button className='bt'>
                    <p>แจ้งปัญหาผ่านไลน์</p>
                    <img src={LineLogo}/>
                </button>
                <button className='bt'>
                    <p>Report in English</p>
                    <img src={EngLogo}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Nav