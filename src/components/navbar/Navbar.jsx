import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import cv from '../../assets/DanielGaliciaCV.pdf'

const Navbar = () => {

  const [burger_class, setBuger_class] = useState('burger-bar unclicked')
  const [menuClass, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu=()=>{
    if(!isMenuClicked){
      setBuger_class('burger-bar clicked')
      setMenuClass('menu visible')
    }else{
      setBuger_class('burger-bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }
  
  return (
    <div className='container'>
      
      <div className='deskView-container'>
          <Link to='about' smooth={true} duration={500}> 
        <div className='sections'>
          <span>01.</span> Sobre Mi 
          </div>
          </Link>

        <Link to='mainProyects' smooth={true} duration={500}> <div className='sections'> <span>02.</span> Proyectos Principales</div></Link>
       <Link to='otherProyects' smooth={true} duration={500}> <div className='sections'>  <span>03.</span> Otros Proyectos</div></Link>
        <Link to='contact' smooth={true} duration={1000}><div className='sections'> <span>04.</span> Contacto </div></Link>
         <a href= {cv} download><button className='cv-button'>Descargar CV</button></a> 
      </div>

      <div className='burger-menu' onClick={updateMenu}>
      <div className={burger_class}></div>
      <div className={burger_class}></div>
      <div className={burger_class}></div>
      </div>


      <div className={menuClass}>
      <Link to='about' smooth={true} duration={500}> 
        <div className='sections'>
          <span>01.</span> Sobre Mi 
          </div>
          </Link>

        <Link to='mainProyects' smooth={true} duration={500}> <div className='sections'> <span>02.</span> Proyectos Principales</div></Link>
       <Link to='otherProyects' smooth={true} duration={500}> <div className='sections'>  <span>03.</span> Otros Proyectos</div></Link>
        <Link to='contact' smooth={true} duration={1000}><div className='sections'> <span>04.</span> Contacto </div></Link>
        <button className='cv-button'>Descargar CV</button>
      </div>

        </div>
  )
}

export default Navbar