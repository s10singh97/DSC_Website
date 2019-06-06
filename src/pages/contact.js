import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/contact.css'

export default class Contact extends Component {
  
    render() {
        return (
            <div>
            <Header selected="Contact"/>
            <div className="black containers-padding">
              <div className="title white-text align-center">Want to write us a Message?</div>
            </div>
            <div className="red-900 containers-padding">
              <div className="input-container">
                <div className="fancy-title white-text margin-bottom align-center">What is your name ?</div>
                <input placeholder="Ex: John Wick" type="text" className="margin-bottom text-field" />
              </div>
              <div className="small-hz-divider white" />
              <div className="input-container margin-bottom">
                <div className="fancy-title white-text margin-bottom align-center">What is your email ?</div>
                <input placeholder="Ex: johnwick@gmail.com" type="email" className="margin-bottom text-field" />
              </div>
              <div className="small-hz-divider white" />
              <div className="input-container margin-bottom">
                <div className="fancy-title white-text margin-bottom align-center">Your Message/Feedback</div>
                <textarea rows={8} placeholder="Have a good day" className="text-field" defaultValue={""} />
              </div>
              <div className="small-hz-divider white" />
              <div className="send-button margin-bottom align-center">Send</div>
            </div>
            <div className="containers-padding blue-900">
              <div className="title white-text align-center">OR YOU CAN MAIL US DIRECTLY ON</div>
              <div className="subtitle white-text align-center">teamdsciiitk@gmail.com</div>
            </div>
            <Footer/>
          </div>
        )
    }
}
