import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../assets/css/home.css' 
export default class Home extends Component {
    constructor(props) {
      super(props);
      this.onScroll = this.onScroll.bind(this);
      this.state = {
        isTop: true
      };
    }

    onScroll(isTop) {
      this.setState({ isTop });
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      document.addEventListener('scroll', () => {
        const isTop = window.scrollY < 25;
        if (isTop !== this.state.isTop) {
          this.onScroll(isTop);
        }
      });
    }

    render() {
        return (
            <div>
            <Navbar bgcolor={this.state.isTop ? 'transparent' : 'white'} />
            <div class="hero-container">
            <div class="hero-text">
                <img src={require("../assets/images/dsc-logo.png")} alt="DSC LOGO"/>
                <div class="hero-title">Development Student Club</div>
                <div class="hero-subtitle">IIIT Kota</div>
            </div>
            </div>
            <div className="row-container containers-padding blue-900">
              <div className="text-section">
                <p className="title">What is DSC ?</p>
                <p className="description">Developer Student Clubs(DSC) is a Google Developers program for university students with the aim to train thousands of student developers globally and work with their communities to solve real-life problems.</p>
              </div>
              <div className="image-section">
                <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC_TILE"/>
              </div>
            </div>
            {/* section-1-ended */}
            {/* section-2-started */}
            <div className="row-container green-900 justify-start">
              <div className="text-section order-2 containers-padding margin-left">
                <p className="title">What we do here ?</p>
                <p className="description">The DSC program is a grassroots channel through which Google provides development skills. Here we as a team work together to learn different skills needed to solve real-life problems and inspire other to be world class developers and changemakers.</p>
              </div>
              <div className="image-section order-1">
                <img src={require("../assets/images/red-shirt-dev.png") }alt="Red Shirt Developer"/>
              </div>
            </div>
            {/* section-2-ended */}
            {/* section-3-started */}
            <div className="row-container containers-padding yellow-700">
              <div className="text-section">
                <p className="title black-text">Events</p>
                <p className="description blue-grey-800-text">We have taken initiative to provide development skills in both mobile and web development through various workshops and competitions throughout the year.</p>
                <div style={{display: 'flex'}}>
                  <div className="button-container yellow-light">
                    <a href="events" >Know more about Events</a>
                    <i className="material-icons">arrow_forward</i>
                  </div>
                </div>
              </div>
              <div className="image-section">
                <img src={require("../assets/images/dsc-workshop.jpg")} alt="Workshop"/>
              </div>
            </div>
            {/* section-3-ended */}
            {/* section-4-started */}
            <div className="row-container red-900 justify-start">
              <div className="image-section">
                <img src={require("../assets/images/blue-shirt-dev.gif")} alt="Blue Shirt GIF" />
              </div>
              <div className="text-section containers-padding margin-left">
                <p className="title">Projects</p>
                <p className="description">"With great team comes great Projects"</p>
                <p class="description">Checkout some cool projects by DSC_IIITK</p>
                <div style={{display: 'flex'}}>
                  <div className="button-container red-light">
                    <a className="white-text" href="index.html">Know more about Projects</a>
                    <i className="material-icons white-text">arrow_forward</i>
                  </div>
                </div>
              </div>
            </div>
            {/* section-4-end */}
            {/* section-5-started */}
            <div id="about-us" className="black">
              <div className="text-container">
                <div className="title">About</div>
                <div className="description">Developer Student Clubs(DSC) is a Google Developers program for university students to learn mobile and web development skills.Developer Student Clubs train thousands of student developers globally and work with their communities to solve real-life problems.</div>
                <div class="description">The club will be open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills.</div>
                <div class="description">Google Developer Clubs can take many forms - from just a few people getting together to watch some videos, to large gatherings with demos, tech talks, hackathons and conferences. We work on various technical domains and try to make use of Google Technologies to empower the audience around us.</div>
                <div style={{display: 'flex'}}>
                  <div className="button-container blue-grey-800  ">
                    <a className="white-text" href="index.html">Know more about us</a>
                    <i className="material-icons white-text">arrow_forward</i>
                  </div>
                </div>
              </div>
            </div>
            {/* section-5-ended */}
            {/* section-6-started */}
            <div className="containers-padding blue-grey-800">
              <div className="text-container">
                <div className="title">Location</div>
                <p className="address">IIIT Kota,</p>
                <p className="address">Prabha Bhawan 2nd floor,</p>
                <p className="address">MNIT Campus,</p>
                <p className="address">Jaipur 361008.</p>
                <div style={{display: 'flex'}}>
                  <div className="button-container black location-button">
                    <a className="white-text" href="index.html">Show in Google Maps</a><i className="material-icons white-text">send</i>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        )
    }
}
