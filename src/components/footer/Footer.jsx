import React from 'react'
import "./footer.css"
import {FaTelegramPlane} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {GrFacebook} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <ul className="footer_contacts">
        <li><a href="mailto:kirill@fedorov.uno"><MdEmail/></a></li>
        <li><a href="https://t.me/m3nd0r"><FaTelegramPlane/></a></li>
      </ul>
      <ul className="footer_socials">
        <li><a href="https://www.facebook.com/m3nd0r/"><GrFacebook/></a></li>
        <li><a href="https://www.linkedin.com/in/m3nd0r/"><BsLinkedin/></a></li>
        <li><a href="https://www.instagram.com/m3nd0r/"><GrInstagram/></a></li>
      </ul>
      <div className="copyright">
        <small>&copy; Kirill Fedorov, 2022, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer