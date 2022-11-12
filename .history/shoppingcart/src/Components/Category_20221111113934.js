import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div className='btn-group d-flex justify-content-center mr-3'>
        <button className='btn btn-dark bg-transparent me-1'>ver1</button>
        <button className='btn btn-dark bg-transparent'>ver2</button>
        <button className='btn btn-dark bg-transparent'>ver3</button>
        <button className='btn btn-dark bg-transparent'>ver4</button>
      </div>
    )
  }
}
