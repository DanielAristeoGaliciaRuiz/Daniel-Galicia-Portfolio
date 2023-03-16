import React, { useState } from 'react'
import './navbar.css'
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
        <div className='sections'> <span>01.</span> Sobre Mi</div>
        <div className='sections'> <span>02.</span> Proyectos Principales</div>
        <div className='sections'> <span>03.</span> Otros Proyectos</div>
        <div className='sections'> <span>04.</span> Contacto</div>
         <a href= {cv} download><button className='cv-button'>Descargar CV</button></a> 
      </div>

      <div className='burger-menu' onClick={updateMenu}>
      <div className={burger_class}></div>
      <div className={burger_class}></div>
      <div className={burger_class}></div>
      </div>


      <div className={menuClass}>
      <div className='sections'> <span>01.</span> Sobre Mi</div>
        <div className='sections'> <span>02.</span> Proyectos Principales</div>
        <div className='sections'> <span>03.</span> Otros Proyectos</div>
        <div className='sections'> <span>04.</span> Contacto</div>
        <button className='cv-button'>Descargar CV</button>
      </div>

        </div>
  )
}

export default Navbar