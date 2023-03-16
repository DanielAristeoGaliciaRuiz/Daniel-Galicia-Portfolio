import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import MainProyects from './components/mainProyects/MainProyects'
import Navbar from './components/navbar/Navbar'
import OtherProyects from './components/otherProyects/OtherProyects'
import RightBar from './components/rigthBar/RightBar'


function App() {
 
  return (
    <div className="App">
   <Navbar/>
   <div style={{display:'flex', justifyContent:'space-between'}}>
   <RightBar/>
   <div className='home'>
   <About/>
   <MainProyects/>
   <OtherProyects/>
   <Contact />
   </div>
   <RightBar/>
   </div>
   
    </div>
  )
}

export default App
