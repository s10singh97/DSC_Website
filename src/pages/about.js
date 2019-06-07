import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default class About extends Component {
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
                <Navbar bgcolor={this.state.isTop ? 'transparent' : 'white'} selected={"About"}/>
                    <h1>About Page Not Done Yet</h1>
                <Footer />
            </div>
        )
    }
}
