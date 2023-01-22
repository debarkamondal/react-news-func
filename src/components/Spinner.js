import React from 'react'
import loading from '../assets/loading.gif'

const Spinner =()=> {
    return (
      <div className="container text-center">
        <img src={loading} alt="loading" />
      </div>
    )
  }


export default Spinner