import React from 'react'
import '../assets/css/navbar.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <nav>
                <div className="logo-container">
                <Link to="/" >
                    <img src={require("../assets/images/dsc-logo.png")}  alt="dsc" /></Link>
                    
                </div>
                <ul className="list-container">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/events">Events</Link></li>
                    <li><Link to ="/team">Team</Link></li>
                    <li><Link to= "/contact">Contact Us</Link></li>
                </ul>
                <div className="burger">
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </div>
            </nav>

        </div>
    )
}
