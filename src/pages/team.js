import React, { Component } from 'react'
import '../assets/css/team.css' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Team extends Component {
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
                <Navbar bgcolor={this.state.isTop ? 'transparent' : 'white'} selected="Team"/>
            <div className="blue-900 m-top containers-padding padding-left">
              <div className="big-title white-text">Team</div>
              <div className="big-subtitle italic white-text">Alone we can do so little; together we can do so much.</div>
            </div>
            <div className="Subtitle italic align-center containers-padding green-900 white-text">
              <div class="small-container">Here at DSC-IIITK we work as a  family. Seniors and juniors work together as a well oiled Machine, Helping and learning form each other to create an environment for coding and developing different skills.</div>
              <div class="small-container">DSC aspires to expand its student community of passionate and fervent developers to encapsulate the latest and advanced technologies such as cloud computing, machine learning, big data, web, and app development, etc. through their interactive and free workshops. </div>
              <div class="small-container"> The students get an exceptional experience through the seminars conducted involving the industry professionals. With the cooperation of various domains such as Technical, Business, Creatives and Public Relations and Documentation these events are organized with rewarding feedbacks.</div>
            </div>
            <div className="Title align-center">Our Core team</div>
            <div className="hz-divider" />
            <Footer />
          </div>
        )
    }
}
