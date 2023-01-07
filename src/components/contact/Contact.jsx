import React from 'react'
import "./contact.css"
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contacts">
      <div className="container contacts_container">
          <a href="https://github.com/m3nd0r"><BsGithub/></a>
          <a href="https://www.linkedin.com/in/m3nd0r/"><BsLinkedin/></a>
          <a href="https://t.me/m3nd0r"><BsTelegram/></a>
      </div>
    </section>
  )
}

export default Contact