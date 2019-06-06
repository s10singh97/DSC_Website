import React, { Component } from 'react'

export default class Member extends Component {
    render() {
        return (
            <div>
                <div className="flex-row containers-padding">
                    <div className="Image-section">
                    </div>
                    <div className="Text-section">
                        <div className="Title align-center">Member 1</div>
                        <div className="Subtitle align-center">Skill 1 | Skill 2</div>
                        <div className="social">
                            <a href="##" className="fa fa-linkedin" />
                            <a href="##" className="fa fa-github" />
                        </div>
                    </div>
                </div>
                <div className="hz-divider" />
            </div>
        )
    }
}
