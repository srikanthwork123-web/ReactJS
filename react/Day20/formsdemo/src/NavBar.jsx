import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item"><NavLink className="nav-link me-2" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link me-2" to="/about">About US</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link me-2" to="/contactus">Contact US</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link me-2" to="/controlled">Controlled Form</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link me-2" to="/uncontrolled">Uncontrolled Form</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/Apis">Apis</NavLink></li>
        </ul>
        </div>
        </div>
        </nav>
    );
}
export default NavBar