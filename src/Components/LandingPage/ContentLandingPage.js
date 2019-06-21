import React, { Component, Fragment } from 'react'
import imgData from '../../assets/data/imgData';

class ContentLandingPage extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
      <Fragment>
        <p className='quote__LandingPage'>“The War is Only Begin“</p>
        <div className='logo__LandingPage'>
          <img src={require(`/Users/LouisHETIC/Documents/Projets/effect-transition/src/assets/img/${this.state.img.imgData.LandingPage.Logo}`)} alt='logo' />
        </div>
      </Fragment>
    )
  }
}

export default ContentLandingPage