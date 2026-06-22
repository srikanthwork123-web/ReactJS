import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link me-2" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link me-2" to="/about">About US</Link></li>
        <li className="nav-item"><Link className="nav-link me-2" to="/contactus">Contact US</Link></li>
        <li className="nav-item"><Link className="nav-link me-2" to="/controlled">Controlled Form</Link></li>
        <li className="nav-item"><Link className="nav-link me-2" to="/uncontrolled">Uncontrolled Form</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Apis">Apis</Link></li>
        </ul>
        </div>
        </div>
        </nav>
    );
}
export default NavBar