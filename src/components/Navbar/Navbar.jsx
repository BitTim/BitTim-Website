import bitTimLogo from './../../assets/BitTim Logo.png'
import "./Navbar.css"

import { Link } from 'react-router-dom'
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

function Navbar() {
    return <nav>
        <img src={ bitTimLogo } alt="Logo" className="nav-logo"/>
        <button className="nav-expand">
            <MdChevronRight/>
        </button>
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/music">Music</Link></li>
        </ul>
        
        <button className="nav-collapse">
            <MdChevronLeft/>
        </button>
    </nav>;
}

export default Navbar;