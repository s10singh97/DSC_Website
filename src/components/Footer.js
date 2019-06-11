import React from 'react'
import '../assets/css/footer.css'

export default function Footer() {
    return (
        <div className="containers-padding blue-grey-100">
        <div className="footer-title">Follow us on</div>
        <div className="social">
          <a href="https://www.facebook.com" className="fa fa-facebook" />
          <a href="https://www.instagram.com/" className="fa fa-instagram"/>
          <a href="https://www.github.com/" className="fa fa-github"/>
        </div>
        <div className="footer-title small-text blue-grey-800">
          <div>© 2019 - DSC IIITK</div> 
          <div>Developed with <i className="fa fa-heart" /> by Team DSC IIITK</div>
        </div>
      </div>
    )
}
