import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
// import LeftBar from './components/leftbar/LeftBar'
import MainProyects from './components/mainProyects/MainProyects'
import Navbar from './components/navbar/Navbar'
import OtherProyects from './components/otherProyects/OtherProyects'


function App() {
 
  return (
    <div className="App">
   <Navbar/>
   <div style={{display:'flex', justifyContent:'space-between'}}>
   {/* <LeftBar/> */}
   <div className='home'>
   <About/>
   <MainProyects/>
   <OtherProyects/>
   <Contact />
   </div>
   {/* <LeftBar/> */}
   </div>
   
    </div>
  )
}

export default App
