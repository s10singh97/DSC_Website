import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../assets/css/events.css'

export default class Events extends Component {
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
                <Navbar bgcolor={this.state.isTop ? 'transparent' : 'white'} selected="Events"/>
                <div className="header-title white-text">Events</div>
                <div className="sub-header pink-700">
                  <div className="about-events-container blue-900 containers-padding">
                    <div className="description align-center roboto white-text">"When anything can happen, everything matters"</div>
                    <div className="description align-center roboto white-text">Keeping this in mind we organize events from small video lessons to large gatherings with demos, tech talks, hackathons and conferences.</div>
                    <div className="description align-center roboto white-text">Our Workshops  provides opportunities to enhance technical knowledge.We also teach skills needed to become a android and  web developers.</div>
                    <div className="description align-center roboto white-text">We believe to boost one's performance a healty competition is needed. Keeping this in mind we organize many competitions with exciting prizes to encourage many more to Develop and Grow.</div>
                  </div>
                  <div className="event-box containers-padding blue-dark">
                  <div className="title2 white-text align-center">We have Conducted</div>
                    <div style={{fontSize : 7 + 'em' }} className="roboto white-text align-center">10+</div>
                    <div className="title2 white-text align-center">Events</div>
                  </div>
                </div>
                {/* events-informations-ended */}
                <div className="black containers-padding">
                  <div className="fancy-title white-text align-center">Our Next Event</div>
                  <div className="small-hz-divider white"></div>
                  <div className="roboto largest-font align-center white-text">BEGIN WITH ANDROID</div>
                  <div className="small-hz-divider white"></div>
                  <div className="description roboto align-center containers-margin">Become familiar with Android Studio tools<br/>Learn Basic Components of Android</div>
                  <div style={{display: 'flex',justifyContent: 'center'}}>
                    <div className="button-container blue-grey-800">
                      <a className="white-text" href="index.html">RSVP Starting Soon</a>
                      <i className="material-icons white-text">event</i>
                    </div>
                  </div>
                </div>
                {/* previous-events-started */}
                <div className="containers-padding red-light">
                  <div className="white-text title align-center">Some of our Previous Events</div>
                  <div className="e-hz-divider white margin-bottom" />
                  {/* row-1-started */}
                  <div className="flex-row">
                    {/* event-1 */}
                    <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">Android Workshop</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/andy.jpg")} alt="DSC TILE" />
                      </div>
                      <div className="description roboto align-center">Workshop aimed to make IDE familiar for developers and introduce basic components of android</div>
                    </div>
                    {/* event-2 */}    
                    <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">Firebase Workshop</div>
                      <div className="event-image margin-bottom white">
                        <img src={require("../assets/images/firebase-logo.png")} alt="DSC TILE" />
                      </div>
                      <div className="description roboto align-center">Covered connectivity of Firebase with android application and basic services of Firebase</div>
                    </div>
                  </div>
                  {/* row-1-ended */}
                  {/* row-2-started */}
                  <div className="flex-row">
                    {/* event-3 */}    
                    <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">"Make To-Do" Competition</div>
                      <div className="event-image margin-bottom white align-center">
                        <img style={{width:60 + '%'}} src={require("../assets/images/todo-list.png")} alt="DSC TILE" />
                      </div>
                      <div className="description roboto align-center">Competition of making Todo list Android Application.</div>
                    </div>
                    {/* event-4 */}
                    <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">Android Workshop-2<br/>Recyclerview and Asynchronus Task</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/andy.jpg")} alt="DSC TILE"/>
                      </div>
                      <div className="description roboto align-center">Covered Recyclerview and Asynchronus Task in Android.</div>
                    </div>
                  </div>
                  <div className="title2 align-center white-text">and many more...</div>
                  {/* row-2-ended */}
                  {/* row-3-started */}
                  {/* <div className="flex-row"> */}
                    {/* event-5 */}
                    {/* <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">Event 5</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE"/>
                      </div>
                      <div className="description roboto align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                    </div> */}
                  {/* </div> */}
                  {/* row-3-ended */}
                </div>
                {/* previous-events-ended */}
                {/* upcoming-events-list */}
                <div className="containers-padding green-900">
                  <div className="title align-center">Upcoming Events List</div>
                  <div className="subtitle white-text margin-bottom align-center">Begin With Android - Workshop</div>
                  <div className="subtitle white-text margin-bottom align-center">Machine Learning - Workshop</div>
                  <div className="subtitle white-text margin-bottom align-center">Flutter - Workshop</div>
                  <div className="subtitle white-text margin-bottom align-center">Learn React - Workshop</div>
                  <div className="subtitle white-text margin-bottom align-center">Learn basic HTML/CSS - Workshop</div>
                </div>
             
                <Footer />
            </div>
        )
    }
}
