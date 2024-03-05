import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import logo from './../../../assets/images/logo.png'
import { Link } from 'react-router-dom';

import Navitem,{NavitemDropdown} from '../../Navitem/Navitem'
const Header = () => {
    return (
        <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt=''/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ms-auto">
                            <Navitem><Link to="/" className="nav-link">Home</Link></Navitem>
                            <Navitem><a href="#features" className="nav-link">Browse</a></Navitem>
                            <NavitemDropdown>
                                <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#learn" className="dropdown-item">Fortmote</a></li>
                                    <li><a href="#next" className="dropdown-item">Call Of Duty</a></li>
                                </ul>
                            </NavitemDropdown>
                            <Navitem><a href="#faq" className="nav-link">Streams</a></Navitem>
                            <Navitem><Link to="/profile" className="nav-link">Profile</Link></Navitem>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Header
