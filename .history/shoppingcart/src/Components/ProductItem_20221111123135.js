import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
  
    console.log(this.props.item)
    return (
      
      <div>
        <div className='card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent'>
          <img alt='' />
          <h3>asd</h3>
          <h3>asd</h3>
          <button className='btn btn-info'>Try</button>
        </div>
      </div>
    )
  }
}
