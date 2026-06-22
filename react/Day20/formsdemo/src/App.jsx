import './App.css'
import ControlledForm from './ControlledForm'
import UncontrolledForm from './UncontrolledForm'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import API from './APICalls.jsx'
import NavBar from './NavBar.jsx'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return(
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contactus" element={<Contact/>} />
    <Route path="/controlled" element={<ControlledForm/>} />
    <Route path="/uncontrolled" element={<UncontrolledForm/>} />
     <Route path="/Apis" element={<API/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
