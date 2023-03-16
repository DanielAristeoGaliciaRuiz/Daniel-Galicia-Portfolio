import React from 'react'
import './mainProyects.css'

const MainProyects = () => {
  return (
    <div className='mainProyects-container'>
       <div className='title-container'> 
       <p className='title'> <span>02.</span> Proyectos Principales </p> 
        </div> 

        <div className='proyect-container'>
            <div className='imgProyect-container uno'>
                
            </div>
            <div className='descrition-container'>
                <div className='favorite-proyects'>Proyecto Favorito</div>
                <div className='name-proyect'> E-commerce</div>
                <div className='description-proyect'>Aplicación creada utilizando una API de academlo.
                 Para el manejo de estados  globales se utilizó Redux-toolkit y para el manejo de las rutas y rutas protegidas se utilizó React-outer-dom.   </div>

                <div className='tecnologys-used'>
                    <p>JavaScript</p>
                    <p>ReactJs</p>
                    <p>Redux-toolkit</p>
                    <p>React-router-dom</p>
                </div>
                
                <div className='icons-container'>
                <a href="https://github.com/DanielAristeoGaliciaRuiz/e-commerce" target='_blank'>
                <i className='bx bxl-github'></i>
                </a>

                <a href="https://e-commerce-reactjs-redux.netlify.app/" target='_blank'>
                <i className='bx bx-link-external'></i>  
                </a>
                </div>
            </div>
        </div>

        
        <div className='proyect-containerI '>
            <div className='imgProyect-container dos'></div>
            <div className='descrition-containerI '>
                <div className='favorite-proyectsI '>Proyecto Favorito</div>
                <div className='name-proyectI '> Wheather App</div>
                <div className='description-proyectI  '>
                    Aplicacioón funcional que muestra el estado del clima utilizando geolocalización. Tambien cuenta con un buscador para visualizar el estado del clima en otras partes del mundo.
                </div>

                <div className='tecnologys-usedI '>
                    <p>JavaScript</p>
                    <p>ReactJs</p>
                    <p></p>
                    <p></p>
                </div>
                
                <div className='icons-containerI '>
                <a href="https://github.com/DanielAristeoGaliciaRuiz/weather-app" target='_blank'>
                <i className='bx bxl-github'></i>
                </a>

                <a href="https://weather-app-with-openweatherapi.netlify.app" target='_blank'>
                <i className='bx bx-link-external'></i>  
                </a> 
                </div>
            </div>
        </div>

        
        <div className='proyect-container'>
            <div className='imgProyect-container tres'></div>
            <div className='descrition-container'>
                <div className='favorite-proyects'>FProyecto Favorito</div>
                <div className='name-proyect'> CRUD Users</div>
                <div className='description-proyect'>Aplicación cuyo principar objetivo es realizar las acciones básicas de un CRUD. Realizando algunas modificaciones se puede adaptar para crear una to-do list.  </div>

                <div className='tecnologys-used'>
                    <p>JavaScript</p>
                    <p>ReactJs</p>
                    <p></p>
                    <p></p>
                </div>
                
                <div className='icons-container'>
                <a href="https://github.com/DanielAristeoGaliciaRuiz/crud-user" target='_blank'>
                <i className='bx bxl-github'></i>
                </a>

                <a href="https://crud-user-react.netlify.app" target='_blank'>
                <i className='bx bx-link-external'></i>  
                </a>  
                </div>
            </div>
        </div>

        
        <div className='proyect-containerI ' >
            <div className='imgProyect-container cuatro'></div>
            <div className='descrition-containerI '>
                <div className='favorite-proyectsI '>Proyecto Favorito</div>
                <div className='name-proyectI '>Generador de  Citas</div>
                <div className='description-proyectI  '>Aplicación que muestra una cita de un personaje célebre de la historia.</div>

                <div className='tecnologys-usedI '>
                    <p>JavaScript</p>
                    <p>ReactJs</p>
                    <p></p>
                    <p></p>
                </div>
                
                <div className='icons-containerI '>
                <a href="https://github.com/DanielAristeoGaliciaRuiz/QuoteRandomGenerator" target='_blank'>
                <i className='bx bxl-github'></i>
                </a>

                <a href="https://generatesrandomquote.netlify.app" target='_blank'>
                <i className='bx bx-link-external'></i>  
                </a>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainProyects