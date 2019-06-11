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
            <div className="green-900 m-top containers-padding padding-left">
              <div className="big-title white-text">Team</div>
              <div className="big-subtitle italic white-text">Alone we can do so little; together we can do so much.</div>
            </div>
            <div className="Subtitle italic align-center containers-padding green-light white-text">
              <div class="small-container">Here at DSC-IIITK we work as a  family. Seniors and juniors work together as a well oiled Machine, Helping and learning form each other to create an environment for coding and developing different skills.</div>
              <div class="small-container">DSC aspires to expand its student community of passionate and fervent developers to encapsulate the latest and advanced technologies such as cloud computing, machine learning, big data, web, and app development, etc. through their interactive and free workshops. </div>
              <div class="small-container"> The students get an exceptional experience through the seminars conducted involving the industry professionals. With the cooperation of various domains such as Technical, Business, Creatives and Public Relations and Documentation these events are organized with rewarding feedbacks.</div>
            </div>
            <div className="Title align-center">Our Core team</div>
            <div className="hz-divider" />
            <div>
                <div className="flex-row containers-padding">
                    <div className="Image-section">
                      <img src={require("../assets/images/shashwat-singh.webp")} />
                    </div>
                    <div className="Text-section">
                        <div className="title2 large-font align-center">Shashwat Singh</div>
                        <div className="fancy-title margin-bottom align-center green-900-text">DSC LEAD</div> 
                        <div className="Subtitle align-center">Skill 1 | Skill 2</div>
                        <div className="social">
                            <a href="https://www.facebook.com/shashwat.singh.545" className="fa fa-facebook" />
                            <a href="https://www.linkedin.com/in/shashwat-singh-55a570149/" className="fa fa-linkedin" />
                            <a href="https://github.com/s10singh97/" className="fa fa-github" />
                        </div>
                    </div>
                </div>
                <div className="hz-divider" />
            </div>
            <div>
                <div className="flex-row containers-padding">
                    <div className="Image-section order-2">
                      <img src={require("../assets/images/ayush-aggarwal.webp")} />
                    </div>
                    <div className="Text-section order-1">
                        <div className="title2 margin-bottom large-font align-center">Ayush Aggarwal</div> 
                        <div className="Subtitle align-center">Android | Firebase |<br/>Flutter | Unity |<br/> Teamwork | Creative </div>
                        <div className="social">
                            <a href="https://www.facebook.com/ayush23.agarwal11" className="fa fa-facebook" />
                            <a href="https://www.linkedin.com/in/ayush-agarwal-312493188/" className="fa fa-linkedin" />
                            <a href="https://github.com/RIPTIDEKING" className="fa fa-github" />
                        </div>
                    </div>
                </div>
                <div className="hz-divider" />
            </div>
            <div>
                <div className="flex-row containers-padding">
                    <div className="Image-section">
                      <img src={require("../assets/images/mayank-goyal.webp")} />
                    </div>
                    <div className="Text-section">
                        <div className="title2 margin-bottom large-font align-center">Mayank Goyal</div> 
                        <div className="Subtitle align-center">Skill 1 | Skill 2</div>
                        <div className="social">
                            <a href="https://www.facebook.com/heromayank2" className="fa fa-facebook" />
                            <a href="https://www.linkedin.com/in/mayank-goyal-92bb9882/" className="fa fa-linkedin" />
                            <a href="https://github.com/heromayank2" className="fa fa-github" />
                        </div>
                    </div>
                </div>
                <div className="hz-divider" />
            </div>
            <div>
                <div className="flex-row containers-padding">
                    <div className="Image-section order-2">
                      <img src={require("../assets/images/pranav-sindura.webp")} />
                    </div>
                    <div className="Text-section order-1">
                        <div className="title2 margin-bottom large-font align-center">Pranav Sindura</div> 
                        <div className="Subtitle align-center">Skill 1 | Skill 2</div>
                        <div className="social">
                            <a href="https://www.facebook.com/ps.jmaster" className="fa fa-facebook" />
                            <a href="https://www.linkedin.com/in/pranav-sindura-197419184/" className="fa fa-linkedin" />
                            <a href="https://github.com/pranavsindura" className="fa fa-github" />
                        </div>
                    </div>
                </div>
                <div className="hz-divider" />
            </div>
            <div>
                <div className="flex-row containers-padding">
                    <div className="Image-section">
                      <img src={require("../assets/images/raghav-garg.webp")} />
                    </div>
                    <div className="Text-section">
                        <div className="title2 margin-bottom large-font align-center">Raghav Garg</div> 
                        <div className="Subtitle align-center">Android | Firebase |<br/> SQL-Databases </div>
                        <div className="social">
                            <a href="https://www.facebook.com/raghav.garg.12935" className="fa fa-facebook" />
                            <a href="https://www.linkedin.com/in/raghav-garg-bab42b16a/" className="fa fa-linkedin" />
                            <a href="https://github.com/rvgarg" className="fa fa-github" />
                        </div>
                    </div>
                </div>
                <div className="hz-divider" />
            </div>
            <div>
                <div className="flex-row containers-padding">
                    <div className="Image-section order-2">
                      <img src={require("../assets/images/shaktiraj-daudra.webp")} />
                    </div>
                    <div className="Text-section order-1">
                        <div className="title2 margin-bottom large-font align-center">Shaktiraj Daudra</div> 
                        <div className="Subtitle align-center">Patience | Teamwork |<br/> Decision Maker | Creative |<br/> Android and Firebase Developer</div>
                        <div className="social">
                            <a href="https://www.facebook.com/shaktiraj.daudra" className="fa fa-facebook" />
                            <a href="https://www.linkedin.com/in/shaktiraj-daudra-974295185/" className="fa fa-linkedin" />
                            <a href="https://github.com/sxillocc" className="fa fa-github" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
          </div>
          
        )
    }
}
