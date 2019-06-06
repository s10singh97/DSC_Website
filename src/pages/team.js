import React, { Component } from 'react'
import '../assets/css/team.css' 
import Member from '../components/Member'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Team extends Component {

    render() {
        return (
            <div>
                <Header selected="Team"/>
            <div className="blue-900 containers-padding padding-left">
              <div className="big-title white-text">Team</div>
              <div className="big-subtitle italic white-text">Alone we can do so little; together we can do so much.</div>
            </div>
            <div className="Subtitle italic align-center containers-padding green-900 white-text">
              <div className="small-container">Here comes about team Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus inventore voluptate veritatis excepturi ut iusto officia necessitatibus, esse quisquam ex facere. Obcaecati deleniti incidunt ipsa voluptatem quas, ea expedita.</div>
              <div className="small-container">Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi doloribus minima dignissimos non. Corrupti rerum soluta laborum dolorum, ullam nihil tenetur quo autem dolores, sint ipsum, officiis ratione quas.</div>
              <div className="small-container">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quae. Saepe consequuntur consequatur possimus vero doloremque placeat repellat quaerat non dolore voluptatum! Quidem ducimus quisquam mollitia consectetur! Corrupti, nostrum tempore!</div>
            </div>
            <div className="Title align-center">Our Core team</div>
            <div className="hz-divider" />
            <Footer />
          </div>
        )
    }
}
