import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNav from '../components/header-nav'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - mattbauer.me</title>
        <meta property="og:title" content="Contact - mattbauer.me" />
      </Helmet>
      <HeaderNav rootClassName="header-nav-root-class-name"></HeaderNav>
      <div className="contact-container1">
        <div className="contact-container2">
          <img
            alt="image"
            src="/external/avatarmaker-200h.png"
            className="contact-image"
          />
          <h1 className="contact-text">
            Please give me a brief description of your project. Or just say hi!
          </h1>
        </div>
        <div className="contact-container3">
          <form
            action="https://usebasin.com/f/677bb964773a"
            method="POST"
            className="contact-form"
          >
            <div className="contact-container4">
              <div className="contact-container5">
                <label className="contact-text1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  rows="ex. Marty McFly"
                  placeholder="ex. Marty McFly"
                  className="contact-textinput input"
                />
              </div>
              <div className="contact-container6">
                <label className="contact-text2">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="ex. you@fluxcapacitor.com"
                  className="contact-textinput1 input"
                />
              </div>
            </div>
            <div className="contact-container7">
              <label>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="ex. I have to tell you about the future..."
                className="contact-textarea textarea"
              ></textarea>
            </div>
            <button type="submit" className="contact-button button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
