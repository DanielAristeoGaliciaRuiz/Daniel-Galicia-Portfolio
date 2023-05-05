import React, { useEffect } from 'react'
import './contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <div className='main-container-section' name='contact'>
        <div className="contact-title-container">
            <span>04.</span> Contacto
        </div>

    <div className="infoContact-container">
        <div data-aos='fade-up' className='paragraph'>
            Actualmente me encuentro en busca de nuevas oportunidades. Puedes contactarme vía whatsapp o enviando un correo electrónico a <span>
            danielaristeo <br /> galiciaruiz@gmail.com
            </span>
            . Me alegrará saber de ti.
                <br /> <br />
            
        </div>
    </div>
    </div>
  )
}

export default Contact