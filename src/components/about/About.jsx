import React from 'react'
import './about.css'


const About = () => {
  return (
    <div className='about-container'>
    <div className='hi-text'>Hola, soy </div>

    <div className='name'>Daniel Galicia.</div>

    <div className='little-description'>
        Soy un desarrollador con experiencia en Backend y Frontend
    </div>

    {/* <div className='main-description'> 
    I am a web developer with a background in actuarial sciences. My interest in development introduced me to this branch.
    </div> */}

    <div className="contact-title-container">
            <span>01.</span> Sobre mí
        </div>


    <div className='aboutMe-section-container'>
        <div className='description-container'>
          <div className='mainDescription'>Soy Daniel Galicia, disfruto practicando y aprendiendo nuevas tecnologias enfocadas al desarrollo web.   </div>
          <div className='secondDescription'>
            Mi primer acercamiento en el área fue del lado del backend, aprendí temas relacionados a bases de datos, iniciando con <span>Postgres</span> para el manejo de bases de datos <span>SQL</span> para luego introducirme a la creación de <span>APIS</span> utilizando <span>NodeJs</span> como entorno de desarrollo con librerías como: <span>Express</span>, <span>Passport</span>.         
          </div>

          <div className='thirdDescription'>
          Por el lado del Front mi experiencia se basa en el uso de <span>ReactJs</span> para la desarrollo de interfaces de usuario utilizando librerías como: <span>Redux</span>, <span>React-Hook-Form</span>, <span>React-Router-Dom</span><span></span><span></span>
          </div>
          <div></div><div></div><div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

            <div className='some-exprecience'>
            Tengo experiencia utilizando las siguientes tecnologías:
            </div>

          <div className='tecnologiesExperiences'>
              
            <div className="left-tecnologies">
            <p> <span><i class='bx bxs-chevrons-right'></i></span> JavaScrip (ES6+)</p>
            <p> <span><i class='bx bxs-chevrons-right'></i></span> ReactJs</p>
            <p> <span><i class='bx bxs-chevrons-right'></i></span> CSS </p>
            </div>

            <div className="right-tecnologies">
            <p> <span><i class='bx bxs-chevrons-right'></i></span> NodeJS</p>
            <p> <span><i class='bx bxs-chevrons-right'></i></span> Postgres</p>
            <p> <span><i class='bx bxs-chevrons-right'></i></span> SQL </p>
            </div>
          </div>
        </div>
        
        <div className='photo-container'>
          <img src="../../picture/photo.jpg" alt="" />
        </div>
    </div>

    
    </div>
  )
}

export default About