import './App.css'
import ControlledForm from './ControlledForm'
import UncontrolledForm from './UncontrolledForm'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import API from './APICalls.jsx'
import NavBar from './NavBar.jsx'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import NotFound from './NotFound.jsx'
import QueryParams from './QueryParams.jsx'


function App() {
  return(
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about/:id" element={<About/>} />
    <Route path="/contactus/:id/:name" element={<Contact/>} />
    <Route path="/controlled" element={<ControlledForm/>} />
    <Route path="/queryparams" element={<QueryParams/>} />
    <Route path="/uncontrolled" element={<UncontrolledForm/>} />
    <Route path="/Apis" element={<API/>} />
    <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
