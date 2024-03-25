import React from 'react'

import PropTypes from 'prop-types'

import './hero-container.css'

const HeroContainer = (props) => {
  return (
    <div className={`hero-container-hero-container ${props.rootClassName} `}>
      <h1 className="hero-container-text">{props.heading}</h1>
      <span className="hero-container-text1">
        <span className="">
          I design simple, beautiful, functional websites.
        </span>
        <br className=""></br>
      </span>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="hero-container-image"
      />
    </div>
  )
}

HeroContainer.defaultProps = {
  rootClassName: '',
  heading: 'Designer and Frontend Developer',
  imageAlt: 'image',
  imageSrc: '/external/avatarmaker-200h.png',
}

HeroContainer.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default HeroContainer
