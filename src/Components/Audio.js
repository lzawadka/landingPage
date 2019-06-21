import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'

export default class Waveform extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    this.$el = ReactDOM.findDOMNode(this)
    this.$waveform = this.$el.querySelector('.wave')
    this.wavesurfer = WaveSurfer.create({
      container: this.$waveform,
      waveColor: 'blue',
      progressColor: 'black'
    })
    this.wavesurfer.load(this.props.src)
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className='waveform'>
        <div className='wave'></div>
      </div>
    )
  }
}

Waveform.defaultProps = {
  src: ""
}

<Waveform src={'src/assets/img/Lil Nas X - Old Town Road (Official Movie) ft. Billy Ray Cyrus.mp3'} />