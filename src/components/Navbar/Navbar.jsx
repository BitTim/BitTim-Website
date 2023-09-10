import bitTimLogo from './../../assets/BitTim Logo.png'
import "./Navbar.css"

import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import { useState } from "react";

function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => { setExpanded(!expanded) }
    
    return <nav>
        <img src={ bitTimLogo } alt="Logo" className="nav-logo" onClick={ toggleExpanded }/>
        
        { !expanded &&
            <button className="nav-expand-btn" onClick={ toggleExpanded }>
                <MdChevronRight/>
            </button>
        }

        { expanded && 
            <React.Fragment>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                </ul>
            
                <button className="nav-expand-btn" onClick={ toggleExpanded }>
                    <MdChevronLeft/>
                </button>
            </React.Fragment>
        }
    </nav>;
}

export default Navbar;