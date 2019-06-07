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
                <div className="header-title blue-grey-800-text">Events</div>
                <div className="sub-header yellow-light">
                  <div className="about-events-container green-light containers-padding">
                    <div className="description align-center roboto white-text">"When anything can happen, everything matters"</div>
                    <div className="description align-center roboto white-text">Keeping this in mind we organize events from small video lessons to large gatherings with demos, tech talks, hackathons and conferences.</div>
                    <div className="description align-center roboto white-text">Our Workshops  provides opportunities to enhance technical knowledge.We also teach skills needed to become a android and  web developers.</div>
                    <div className="description align-center roboto white-text">We believe to boost one's performance a healty competition is needed. Keeping this in mind we organize many competitions with exciting prizes to encourage many more to Develop and Grow.</div>
                  </div>
                  <div className="containers-padding yellow-light">
                    <div className="fancy-title align-end">Next Event</div>
                    <div className="e-hz-divider black" />
                    <div className="title2 italic align-center containers-margin">Event Name</div>
                    <div className="subtitle margin-bottom">Date- 5/12/2019</div>
                    <div className="subtitle margin-bottom">Time- 16:00</div>
                    <div className="subtitle margin-bottom">Venue- VLTC204, MNIT CAMPUS</div>
                  </div>
                </div>
                {/* events-informations-ended */}
                {/* previous-events-started */}
                <div className="containers-padding red-light">
                  <div className="white-text title align-center">Previous Events</div>
                  <div className="e-hz-divider white margin-bottom" />
                  {/* row-1-started */}
                  <div className="flex-row">
                    {/* event-1 */}
                    <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">Event 1</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE" />
                      </div>
                      <div className="description roboto align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                      <div className="e-hz-divider white containers-margin" />
                    </div>
                    {/* event-2 */}    
                    <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">Event 2</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE" />
                      </div>
                      <div className="description roboto align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                      <div className="e-hz-divider white containers-margin" />
                    </div>
                  </div>
                  {/* row-1-ended */}
                  {/* row-2-started */}
                  <div className="flex-row">
                    {/* event-3 */}    
                    <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">Event 3</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE" />
                      </div>
                      <div className="description roboto align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                      <div className="e-hz-divider white containers-margin" />
                    </div>
                    {/* event-4 */}
                    <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">Event 4</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE"/>
                      </div>
                      <div className="description roboto align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                      <div className="e-hz-divider white containers-margin" />
                    </div>
                  </div>
                  {/* row-2-ended */}
                  {/* row-3-started */}
                  <div className="flex-row">
                    {/* event-5 */}
                    <div className="event-container">
                      <div className="title2 italic align-center margin-bottom white-text">Event 5</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE"/>
                      </div>
                      <div className="description roboto align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                    </div>
                  </div>
                  {/* row-3-ended */}
                </div>
                {/* previous-events-ended */}
                {/* upcoming-events-list */}
                <div className="containers-padding green-900">
                  <div className="title align-center">Upcoming Events List</div>
                  <div className="subtitle white-text margin-bottom align-center">Event 1 Name</div>
                  <div className="subtitle white-text margin-bottom align-center">Event 2 Name</div>
                  <div className="subtitle white-text margin-bottom align-center">Event 3 Name</div>
                  <div className="subtitle white-text margin-bottom align-center">Event 4 Name</div>
                  <div className="subtitle white-text margin-bottom align-center">Event 5 Name</div>
                  <div className="subtitle white-text margin-bottom align-center">Event 6 Name</div>
                </div>
             
                <Footer />
            </div>
        )
    }
}
