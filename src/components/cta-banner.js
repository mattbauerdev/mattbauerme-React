import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta-banner.css'

const CTABanner = (props) => {
  return (
    <div className="cta-banner-container">
      <div className="cta-banner-container1">
        <div className="cta-banner-container2">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="cta-banner-image"
          />
          <h1 className="cta-banner-text">{props.heading}</h1>
        </div>
        <Link to="/contact" className="cta-banner-navlink button">
          {props.button}
        </Link>
      </div>
    </div>
  )
}

CTABanner.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/external/avatarmaker-200h.png',
  heading: 'Interested in working with me?',
  button: 'Request a project?',
}

CTABanner.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
}

export default CTABanner
