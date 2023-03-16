import React from 'react'
import './leftbar.css'

const LeftBar = () => {

  const handleclickGit =()=>{
    window.open('https://github.com/DanielAristeoGaliciaRuiz', '_blank')
  }

  const handleclickLinkedin=()=>{
    window.open('https://www.linkedin.com/in/daniel-aristeo-galicia-ruiz-85615b259/', '_blank')
  }

  const handleclickWS=()=>{
    window.open('https://wa.me/529581365685', '_blank')
  }
  return (
    <div className='leftbar-container'>
        <div className='icon'>
          <i className='bx bxl-github' onClick={handleclickGit} ></i>
        </div>

        <div className='icon'>
          <i className='bx bxl-whatsapp' onClick={handleclickWS}></i>
        </div>
        
        <div className='icon'>
        <i className='bx bxl-linkedin' onClick={handleclickLinkedin} ></i>
        </div>
       
       <div>
        <hr />
        </div>

      </div>
  )
}

export default LeftBar