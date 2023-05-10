import React, { useEffect } from 'react'
import './about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <div  className='about-container' name='about'>
    <div data-aos='fade-up' className='hi-text'>Hola, soy </div>

    <div data-aos='fade-up' className='name'>Daniel Galicia.</div>

    <div data-aos='fade-up' className='little-description'>
        Soy un desarrollador con experiencia en Backend y Frontend
    </div>

    {/* <div className='main-description'> 
    I am a web developer with a background in actuarial sciences. My interest in development introduced me to this branch.
    </div> */}

    <div data-aos='fade-up' className="contact-title-container">
            <span>01.</span> Sobre mí
        </div>


    <div  className='aboutMe-section-container'>
        <div className='description-container'>
          <div data-aos='fade-up' className='mainDescription'>Soy Daniel Galicia, disfruto practicando y aprendiendo nuevas tecnologias enfocadas al desarrollo web.   </div>
          <div data-aos='fade-up' className='secondDescription'>
            Mi primer acercamiento en el área fue del lado del backend, aprendí temas relacionados a bases de datos, iniciando con <span>Postgres</span> para el manejo de bases de datos <span>SQL</span> para luego introducirme a la creación de <span>APIS</span> utilizando <span>NodeJs</span> como entorno de desarrollo con librerías como: <span>Express</span> y <span>Passport</span>.         
          </div>

          <div data-aos='fade-up' className='thirdDescription'>
          Por el lado del Front mi experiencia se basa en el uso de <span>ReactJs</span> para la desarrollo de interfaces de usuario utilizando librerías como: <span>Redux</span>, <span>React-Hook-Form</span>, <span>React-Router-Dom</span><span></span><span></span>
          </div>
          {/* <div></div><div></div><div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div> */}

            <div data-aos='fade-up' className='some-exprecience'>
            Tengo experiencia utilizando las siguientes tecnologías:
            </div>

          <div data-aos='fade-up' className='tecnologiesExperiences'>
              
            <div data-aos='fade-up' className="left-tecnologies">
            <p> <span><i className='bx bxs-chevrons-right'></i></span> JavaScrip (ES6+)</p>
            <p> <span><i className='bx bxs-chevrons-right'></i></span> ReactJs</p>
            <p> <span><i className='bx bxs-chevrons-right'></i></span> CSS </p>
            </div>

            <div data-aos='fade-up' className="right-tecnologies">
            <p> <span><i className='bx bxs-chevrons-right'></i></span> NodeJS</p>
            <p> <span><i className='bx bxs-chevrons-right'></i></span> Postgres</p>
            <p> <span><i className='bx bxs-chevrons-right'></i></span> SQL </p>
            </div>
          </div>
        </div>
        
        <div data-aos='fade-up' className='photo-container'>
          <img src="../../picture/photo.jpg" alt="" />
        </div>
    </div>

    
    </div>
  )
}

export default About