import React from 'react'
import {Form} from "react-router-dom";
import './HomePageStyle.css'
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import HomeContent from '../../components/Contents/HomeContent/HomeContent';

function HomePage() {
  return (
    <div className='container'>
      <Nav></Nav>
      <HomeContent></HomeContent>
      <Footer></Footer>

    </div>
  )
}

export default HomePage