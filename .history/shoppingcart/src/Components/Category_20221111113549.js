import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div className='btn-group d-flex justify-content-center'>
        <button className='btn btn-transparent shadow p-3 mb-5  rounded'>ver1</button>
        <button className='btn btn-transparent shadow p-3 mb-5  rounded'>ver2</button>
        <button className='btn btn-transparent shadow p-3 mb-5  rounded'>ver3</button>
        <button className='btn btn-transparent shadow p-3 mb-5  rounded'>ver4</button>
      </div>
    )
  }
}
