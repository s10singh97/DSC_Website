import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PagesController from './PagesController'

export default class App extends Component {

    state={
        page:''
    }

    render() {
        return (
            <div className="app">
                <Header />

                <PagesController page={this.state.page}/>
                
                <Footer />
            </div>
        )
    }
}
