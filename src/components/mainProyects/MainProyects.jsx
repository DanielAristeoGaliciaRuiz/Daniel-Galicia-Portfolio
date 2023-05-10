import React, { useEffect } from 'react'
import './mainProyects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const MainProyects = () => {
    useEffect(() => {
        Aos.init({duration:2000})
      }, [])
  return (
    <div className='mainProyects-container' name='mainProyects'>
       <div className='title-container'> 
       <p  className='title'> <span>02.</span> Proyectos Principales </p> 
        </div> 

        <div className='proyect-containerI ' >
            <div className='imgProyect-container cuatro'></div>
            <div className='descrition-containerI '>
                <div data-aos='fade-up' className='favorite-proyectsI '>Proyecto Favorito</div>
                <div data-aos='fade-up' className='name-proyectI '>Web de agencia de viajes local</div>
                <div data-aos='fade-up' className='description-proyectI  '>Primera versión de una página web enfocada en tours locales en el destino Huatulco Oaxaca México.</div>

                <div className='tecnologys-usedI '>
                    <p data-aos='fade-up'>JavaScript</p>
                    <p data-aos='fade-up'>ReactJs</p>
                    <p data-aos='fade-up'>CSS</p>
                    <p data-aos='fade-up'></p>
                </div>
                
                <div className='icons-containerI '>
                <a data-aos='fade-up' href="https://github.com/DanielAristeoGaliciaRuiz/RodovrWeb" target='_blank'>
                <i className='bx bxl-github'></i>
                </a>

                <a data-aos='fade-up' href="https://main--rodorvtouragency.netlify.app/" target='_blank'>
                <i className='bx bx-link-external'></i>  
                </a>   
                </div>
            </div>
        </div>
        <div className='proyect-container'>
            <div className='imgProyect-container uno'>
                
            </div>
            <div  className='descrition-container'>
                <div data-aos='fade-up' className='favorite-proyects'>Proyecto Favorito</div>
                <div data-aos='fade-up' className='name-proyect'> E-commerce</div>
                <div data-aos='fade-up' className='description-proyect'>Aplicación creada utilizando una API de academlo.
                 Para el manejo de estados  globales se utilizó Redux-Toolkit y para el manejo de las rutas y rutas protegidas se utilizó React-Router-Dom.   </div>

                <div className='tecnologys-used'>
                    <p data-aos='fade-up'>JavaScript</p>
                    <p data-aos='fade-up'>ReactJs</p>
                    <p data-aos='fade-up'>Redux-toolkit</p>
                    <p data-aos='fade-up'>React-router-dom</p>
                </div>
                
                <div className='icons-container'>
                <a data-aos='fade-up' href="https://github.com/DanielAristeoGaliciaRuiz/e-commerce" target='_blank'>
                <i className='bx bxl-github'></i>
                </a>

                <a data-aos='fade-up' href="https://e-commerce-reactjs-redux.netlify.app/" target='_blank'>
                <i className='bx bx-link-external'></i>  
                </a>
                </div>
            </div>
        </div>

        
        <div className='proyect-containerI '>
            <div className='imgProyect-container dos'></div>
            <div className='descrition-containerI '>
                <div data-aos='fade-up' className='favorite-proyectsI '>Proyecto Favorito</div>
                <div data-aos='fade-up' className='name-proyectI '> Wheather App</div>
                <div data-aos='fade-up' className='description-proyectI  '>
                    Aplicacioón funcional que muestra el estado del clima utilizando geolocalización. Tambien cuenta con un buscador para visualizar el estado del clima en otras partes del mundo.
                </div>

                <div className='tecnologys-usedI '>
                    <p data-aos='fade-up'>JavaScript</p>
                    <p data-aos='fade-up'>ReactJs</p>
                    <p data-aos='fade-up'></p>
                    <p data-aos='fade-up'></p>
                </div>
                
                <div className='icons-containerI '>
                <a data-aos='fade-up' href="https://github.com/DanielAristeoGaliciaRuiz/weather-app" target='_blank'>
                <i className='bx bxl-github'></i>
                </a>

                <a data-aos='fade-up' href="https://weather-app-with-openweatherapi.netlify.app" target='_blank'>
                <i className='bx bx-link-external'></i>  
                </a> 
                </div>
            </div>
        </div>

        
        <div className='proyect-container'>
            <div className='imgProyect-container tres'></div>
            <div className='descrition-container'>
                <div data-aos='fade-up' className='favorite-proyects'>Proyecto Favorito</div>
                <div data-aos='fade-up' className='name-proyect'> CRUD Users</div>
                <div data-aos='fade-up' className='description-proyect'>Aplicación cuyo principal objetivo es realizar las acciones básicas de un CRUD. Realizando algunas modificaciones se puede adaptar para crear una to-do list.  </div>

                <div className='tecnologys-used'>
                    <p data-aos='fade-up'>JavaScript</p>
                    <p data-aos='fade-up'>ReactJs</p>
                    <p data-aos='fade-up'></p>
                    <p data-aos='fade-up'></p>
                </div>
                
                <div className='icons-container'>
                <a data-aos='fade-up' href="https://github.com/DanielAristeoGaliciaRuiz/crud-user" target='_blank'>
                <i className='bx bxl-github'></i>
                </a>

                <a data-aos='fade-up' href="https://crud-user-react.netlify.app" target='_blank'>
                <i className='bx bx-link-external'></i>  
                </a>  
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default MainProyects