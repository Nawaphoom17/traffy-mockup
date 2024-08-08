import React from 'react'
import Nav from '../../components/Nav/Nav'
import LoginBox from '../../components/LoginBox/LoginBox'
import Footer from '../../components/Footer/Footer'
import './LoginPage.css'
import { Outlet, Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className='container'>
        <Nav></Nav>
        <LoginBox></LoginBox>
        <Footer></Footer>
    </div>
  )
}

export default LoginPage