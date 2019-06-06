import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/home.css' 
export default class Home extends Component {
    render() {
        return (
            <div>
            <Header />
            <div className="hero-container">
            <div className="hero-text">
                <img src={require("../assets/images/dsc-logo.png")} alt="DSC LOGO"/>
                <div className="hero-title">Development Student Club</div>
                <div className="hero-subtitle">IIIT Kota</div>
            </div>
        </div>
            <div className="row-container containers-padding blue-900">
              <div className="text-section">
                <p className="title">What is DSC ?</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam at ab amet, incidunt nemo aperiam? Accusantium delectus, incidunt eaque eos maxime rem autem atque magni odio quae nostrum adipisci!</p>
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
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam at ab amet, incidunt nemo aperiam? Accusantium delectus, incidunt eaque eos maxime rem autem atque magni odio quae nostrum adipisci!</p>
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
                <p className="description blue-grey-800-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam at ab amet, incidunt nemo aperiam? Accusantium delectus, incidunt eaque eos maxime rem autem atque magni odio quae nostrum adipisci!</p>
                <div style={{display: 'flex'}}>
                  <div className="button-container black">
                    <a href="events.html" className="white-text">Know more about Events</a>
                    <i className="material-icons white-text">arrow_forward</i>
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
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam at ab amet, incidunt nemo aperiam? Accusantium delectus, incidunt eaque eos maxime rem autem atque magni odio quae nostrum adipisci!</p>
                <div style={{display: 'flex'}}>
                  <div className="button-container black">
                    <a className="white-text" href="index.html">Know more about Projects</a>
                    <i className="material-icons white-text">arrow_forward</i>
                  </div>
                </div>
              </div>
            </div>
            {/* section-4-end */}
            {/* section-5-started */}
            <div id="about" className="containers-padding black">
              <div className="text-container">
                <div className="title">About</div>
                <div className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta maxime, quod iste blanditiis illum quisquam optio, consectetur nobis sapiente officiis rerum necessitatibus neque vero aliquid sint dolor nulla sit laudantium?</div>
                <div className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta maxime, quod iste blanditiis illum quisquam optio, consectetur nobis sapiente officiis rerum necessitatibus neque vero aliquid sint dolor nulla sit laudantium?</div>
                <div className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta maxime, quod iste blanditiis illum quisquam optio, consectetur nobis sapiente officiis rerum necessitatibus neque vero aliquid sint dolor nulla sit laudantium?</div>
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
