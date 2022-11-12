import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    
    return (
      <div>
        <div className='card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent' style={{height: 500}}>
          <img alt='' src={this.props.item.image} />
          <h3>{this.props.item.name}</h3>
          <h3>{this.props.item.price}</h3>
          <button className='btn btn-info'>Try</button>
        </div>
      </div>
    )
  }
}
