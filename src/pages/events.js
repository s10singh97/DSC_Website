import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/events.css'

export default class Events extends Component {
    render() {
        return (
            <div>
                <Header selected="Events"/>
                <div className="sub-header">
                  <div className="about-events-container black containers-padding">
                    <div className="text-content align-center margin-bottom white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos ipsum alias, impedit soluta facilis dolor ipsam fuga dicta, aliquam suscipit voluptas velit minus aut. Blanditiis, delectus quibusdam. Expedita, voluptates?</div>
                    <div className="text-content margin-bottom align-center white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos ipsum alias, impedit soluta facilis dolor ipsam fuga dicta, aliquam suscipit voluptas velit minus aut. Blanditiis, delectus quibusdam. Expedita, voluptates?</div>
                  </div>
                  <div className="next-event-container containers-padding side-margin containers-margin">
                    <div className="fancy-title align-end">Next Event</div>
                    <div className="hz-divider black" />
                    <div className="title italic align-center containers-margin">Event Name</div>
                    <div className="subtitle margin-bottom">Date- 5/12/2019</div>
                    <div className="subtitle margin-bottom">Time- 16:00</div>
                    <div className="subtitle margin-bottom">Venue- VLTC204, MNIT CAMPUS</div>
                  </div>
                </div>
                {/* events-informations-ended */}
                {/* previous-events-started */}
                <div className="containers-padding red-900">
                  <div className="fancy-title padding-left-desktop white-text margin-bottom">Some of our Previous Events</div>
                  <div className="hz-divider white margin-bottom" />
                  {/* row-1-started */}
                  <div className="flex-row">
                    {/* event-1 */}
                    <div className="event-container">
                      <div className="title italic align-center margin-bottom white-text">Event 1</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE" />
                      </div>
                      <div className="text-content white-text align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                      <div className="hz-divider white containers-margin" />
                    </div>
                    {/* event-2 */}    
                    <div className="event-container">
                      <div className="title italic align-center margin-bottom white-text">Event 2</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE" />
                      </div>
                      <div className="text-content white-text align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                      <div className="hz-divider white containers-margin" />
                    </div>
                  </div>
                  {/* row-1-ended */}
                  {/* row-2-started */}
                  <div className="flex-row">
                    {/* event-3 */}    
                    <div className="event-container">
                      <div className="title italic align-center margin-bottom white-text">Event 3</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE" />
                      </div>
                      <div className="text-content white-text align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                      <div className="hz-divider white containers-margin" />
                    </div>
                    {/* event-4 */}
                    <div className="event-container">
                      <div className="title italic align-center margin-bottom white-text">Event 4</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE"/>
                      </div>
                      <div className="text-content white-text align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                      <div className="hz-divider white containers-margin" />
                    </div>
                  </div>
                  {/* row-2-ended */}
                  {/* row-3-started */}
                  <div className="flex-row">
                    {/* event-5 */}
                    <div className="event-container">
                      <div className="title italic align-center margin-bottom white-text">Event 5</div>
                      <div className="event-image margin-bottom">
                        <img src={require("../assets/images/DSC_Tile_v11 no CTA.png")} alt="DSC TILE"/>
                      </div>
                      <div className="text-content white-text align-center">event-description Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat molestias deleniti adipisci consequuntur. Cum, hic impedit atque obcaecati explicabo delectus. Ea quae laudantium officiis sit nihil doloremque quis beatae.</div>
                    </div>
                  </div>
                  {/* row-3-ended */}
                </div>
                {/* previous-events-ended */}
                {/* upcoming-events-list */}
                <div className="containers-padding green-900">
                  <div className="title white-text margin-bottom align-center">Upcoming Events List</div>
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
