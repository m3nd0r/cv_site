import React from 'react'
import "./experience.css"

const Experience = () => {
  return (
    <section id="experience">
      <div className='container experience_container'>
      <h1>Experience</h1>
        <div className="experience_content">
          <h2>Coding Skills:</h2>
          <div className="experience_skills">
            <article className="experience_details">
              <h4>Python</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>Flask, Fast API</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>Postgres</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>SQLAlchemy</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <h4>Javascript, jQuery</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience_details">
              <h4>React</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience_details">
              <h4>HTML/CSS</h4>
              <small>Experienced</small>
            </article>
            </div>
          <h2>Bonus Skills:</h2>
          <div className="experience_bonus_skills">
            <article className="experience_details">
              <h4>Docker</h4>
            </article>
            <article className="experience_details">
              <h4>RabbitMQ, Celery</h4>
            </article>
            <article className="experience_details">
              <h4>APIs</h4>
            </article>
            <article className="experience_details">
              <h4>Telegram/Slack bots</h4>
            </article>
            <article className="experience_details">
              <h4>Redis</h4>
            </article>
          </div>
          <h2>Work Experience:</h2>
          <div className="experience_item">
            <article className="experience_details">
              <b>SHUTTLE99</b> – <i>Python Developer</i><br/>
              <small>April 2021 – TILL NOW</small><br/>
              <ul>
                <li>Development and supporting more than 40 websites for affiliate marketing team.</li>
                <li>Developed a new internal service to work with different clients APIs. Optimized the data storing algorithms.</li>
                <li>Building ours and integrating partners APIs</li>
                <li>Built some daily/weekly reports for a Slack bot at all stages - server side and client side</li>
                <li>Structurized the project to match the MVC pattern. Refactored a lot of old code.</li>
                <li>Implemented the transition from Codeship CI/CD tool to CircleCI and optimized test builds run time from 30+ minutes to 6-8 minutes.</li>
                <li>Initiated and implemented the dockerized development environment</li>
                <li><i>Stack: </i>Flask + SQLAlchemy. Postgres as DB. Redis. Celery. Unitests + Behave with Selenium for testing.</li>
              </ul>
            </article>
            <article className="experience_details">
              <b>Stratoshpera</b> – <i>Python Developer</i><br/>
              <small>June 2020 – April 2022</small><br/>
              <ul>
                <li>Development and supporting the processing system - "Sphera".</li>
                <li>Implemented async integration with client’s internal services using SOAP protocol and RabbitMQ</li>
                <li>Building and integrating different APIs</li>
                <li>Implementation of complex business logic</li>
                <li>Refactoring and optimization of old code</li>
                <li>Mentoring new employees.</li>
                <li><i>Stack:</i> Flask and Django + SQLAlchemy. Postgres as DB. Docker.</li>
              </ul>
            </article>
            <article className="experience_details">
              <b>Freelance and studying</b> – <i>Junior Python Developer</i><br/>
              <small>June 2019 – June 2020</small><br/>
              <ul>
                <li>Own small projects during my studying in Geek Brains University (by Mail.ru Group, owner of vk.com) </li>
                <li>I've made some easy web-scrapers for different customers (https://store.nba.com/, online school diary, Author.today and some others) using default libs – BeautifulSoup, Selenium and Pandas</li>
                <li>I've made some bots for Telegram. Most of them for myself and for my daughter. But one has been sold.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience