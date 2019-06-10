import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (

            <div className="GoogleLoader">
                <img src={require('../assets/images/googleloader.gif')} alt="Loading" style={{ width: "300px", height: "300px" }} />
            </div>

        )

    }
}
