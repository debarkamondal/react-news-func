import React, { Component } from 'react'
import loading from '../assets/loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner