import React from 'react'
import '../assets/css/footer.css'

export default function Footer() {
    return (
        <div className="containers-padding blue-grey-100">
        <div className="footer-title">Follow us on</div>
        <div className="social">
          <a href="##" className="fa fa-facebook" />
          <a href="##" className="fa fa-linkedin"/>
          <a href="##" className="fa fa-instagram"/>
          <a href="##" className="fa fa-slack"/>
          <a href="##" className="fa fa-github"/>
        </div>
        <div className="footer-title small-text blue-grey-800">
          <div>© 2019 - DSC IIITK</div> 
          <div>Developed with <i className="fa fa-heart" /> by Team DSC IIITK</div>
        </div>
      </div>
    )
}
