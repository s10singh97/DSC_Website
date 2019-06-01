import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PagesController from './PagesController'
require('dotenv').config()

export default class App extends Component {

    state={
        page:''
    }

    render() {
        return (
            <div className="app">
                <i className="fab fa-google fa-7x "></i>
            </div>
        )
    }
}
