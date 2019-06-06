import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/contact.css'
import Axios from "axios";

export default class Contact extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message:''
    }
  }

  handleChange = (e)=>{
    this.setState({[e.target.id]: e.target.value})
  }

  handleClick = ()=>{
    // console.log(this.state)
    Axios.post('/feedback', this.state).then(()=>{
      this.handleSuccess()
    }).catch((err)=>{
      console.log(err)
      this.handleFail()
    })
  }

  handleSuccess = ()=>{
    window.alert('Thank you for the Feedback!')
    this.setState({name:'', email:'', message:''})
  }

  handleFail = ()=>{
    window.alert('Your response could not be submitted. Please Try Again')
  }
  
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
                <input value={this.state.name} placeholder="Ex: John Wick" type="text" id="name" className="margin-bottom text-field" onChange={(e)=>this.handleChange(e)} />
              </div>
              <div className="small-hz-divider white" />
              <div className="input-container margin-bottom">
                <div className="fancy-title white-text margin-bottom align-center">What is your email ?</div>
                <input value={this.state.email} placeholder="Ex: johnwick@gmail.com" type="email" id="email" className="margin-bottom text-field" onChange={(e)=>this.handleChange(e)} />
              </div>
              <div className="small-hz-divider white" />
              <div className="input-container margin-bottom">
                <div className="fancy-title white-text margin-bottom align-center">Your Message/Feedback</div>
                <textarea value={this.state.message} rows={8} placeholder="Have a good day" id="message" onChange={(e)=>this.handleChange(e)} className="text-field" />
              </div>
              <div className="small-hz-divider white" />
              <div className="send-button margin-bottom align-center" onClick={()=>this.handleClick()}>Send</div>
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
