import React,{Component} from 'react'
import '../assets/css/navbar.css'
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

class BurgerButton extends Component {
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleClass() {
        this.setState({ active: !this.state.active });
    };

    render() {
        return (
        <div class="link-container">
        <ul 
            className={this.state.active ? 'list-container nav-active': 'list-container'}
        >
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/events">Events</Link></li>
            <li><Link to ="/team">Team</Link></li>
            <li><Link to= "/contact">Contact Us</Link></li>
            <li><Link to ="/#about-us">About</Link></li>
        </ul>
        <div 
            className={this.state.active ? 'burger toggle': 'burger'}
            onClick={this.toggleClass}
        >
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
        </div>
        </div>
        )
    }
}

export default class Navbar extends Component {
    render() {
        return (
        <div className="header">
            <nav style={{backgroundColor: this.props.bgcolor }}>
                <div className="logo-container">
                <Link to="/" >
                    <img src={require("../assets/images/dsc-logo.png")}  alt="dsc" />
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }} >
                    <div class="logo-title">DSC IIITK</div>
                </Link>
                </div>
                <BurgerButton />
            </nav>
        </div>
        );
    }
}