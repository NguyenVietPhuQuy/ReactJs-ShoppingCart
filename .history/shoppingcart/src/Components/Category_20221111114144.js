import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div className='btn-group d-flex justify-content-center mr-3'>
        <button className='btn btn-dark bg-transparent my-1 shadow'>ver1</button>
        <button className='btn btn-dark bg-transparent my-1'>ver2</button>
        <button className='btn btn-dark bg-transparent my-1'>ver3</button>
        <button className='btn btn-dark bg-transparent my-1'>ver4</button>
      </div>
    )
  }
}
