import React from 'react'
import useLocalStorage from 'use-local-storage'
import "./about.css"
import ME from '../../assests/me.resized.jpg'
import CV from '../../assests/CV_v2.0_monochrome.pdf'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const About = (props) => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
    props.onClick(newTheme)
  }

  return (
    <section id="about">
      <h4>Hey there! My name is</h4>
      <h1>Kirill Fedorov</h1>
      <h4>Python Developer</h4>
      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="About Image" className='about_me-image'/>
        </div>

        <div className="about_content">
          <p>
            I'm 34 years old. Married. Happy father of 11 years old almost-a-teenager daughter<br/>
            I was able to become a Python Backend Developer (with more than 2 years of experience so far) after being sales manager for more than 10 years.<br/>
            Now I enjoy my job, new challenges I have, new possibilities I discover, new firends and a whole new world of the Development.<br/>
            Totally in love with <i onClick={switchTheme}>Python</i><br/>
            Huge basketball fan and a Gamer<br/>
          </p>
        </div>
        <div className='download_cv'>
          <a href={CV} download className='btn download_button'>Download CV</a>
        </div>
        <div className='socials'>
          <a href="https://github.com/m3nd0r"><BsGithub/></a>
          <a href="https://www.linkedin.com/in/m3nd0r/"><BsLinkedin/></a>
          <a href="https://www.instagram.com/m3nd0r/"><GrInstagram/></a>

        </div>
      </div>
    </section>
  );
}

export default About
