import React, { Component } from 'react'
import {connect} from 'react-redux'
class ProductDetail extends Component {
  render() {
    const {name, price, image,type,description,quantity} = this.props.detailList
    return (
      <div key="Detail" className='card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent'>
        <h4>Tên Sản Phẩm: {name}</h4>
        <h4>phiên bản: {type}</h4>
        <img alt='' src={image}></img>
        <h4>Gía: {price}</h4>
        <h4>Mô tả: {description} </h4>
        <h4>số lượng: {quantity}</h4>
      </div>
    )
  }
}
const mapStateProps = (state)=>{
  return {
  detailList: state.product.isDetail
  }
}
export default connect(mapStateProps)(ProductDetail)