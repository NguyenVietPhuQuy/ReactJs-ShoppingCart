import React, { Component } from 'react'
import {connect} from 'react-redux'
export default class ProductDetail extends Component {
  render() {
    return (
      <div key="Detail" className='card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent'>
        <h4>Tên Sản Phẩm: </h4>
        <img alt='' ></img>
        <h4>Gía:</h4>
        <h4>Mô tả: </h4>
        <h4>số lượng:</h4>
      </div>
    )
  }
}
