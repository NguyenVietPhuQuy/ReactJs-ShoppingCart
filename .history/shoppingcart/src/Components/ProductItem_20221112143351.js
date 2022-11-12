import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    
    return (
      <div>
        <div className=' card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent' style={{textAlign:"left"}}>
          <img alt='' src={this.props.item.image} />
          <h3 className='fs-1' style={{height:100}}>{this.props.item.name}</h3>
          <h3 className='fs-1 bg-dark px-2 py-1' style={{borderRadius:5}}>Price:{this.props.item.price}</h3>
          <button className='btn btn-info mb-2'>Detail</button>
          <button className='btn btn-danger '>Add To Cart</button>
        </div>
      </div>
    )
  }
}
