import React, { Component } from 'react'
import { connect } from 'react-redux'
class ProductDetail extends Component {
  renderFake() {
    return (
      <div className='card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent text-left'>
      <h4>Tên Sản Phẩm:<span>{this.props.detail[0].name}</span></h4>
      <h4>phiên bản:{this.props.detail[0].type}</h4>
      <img alt='' src={this.props.detail[0].image}></img>
      <h4>Gía: {this.props.detail[0].price}</h4>
      <h4>Mô tả: {this.props.detail[0].description}</h4>
      <h4>số lượng: {this.props.detail[0].quantity}</h4>
      </div>
    )
  }
  renderDetail() {
      console.log(this.props.detail)
        return(
        <div className='card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent text-left'>
          <h4>Tên Sản Phẩm:<span>{this.props.detail.name}ádasdsad</span></h4>
          <h4>phiên bản:{this.props.detail.type}</h4>
          <img alt='' src={this.props.detail.image}></img>
          <h4>Gía: {this.props.detail.price}</h4>
          <h4>Mô tả: {this.props.detail.description}</h4>
          <h4>số lượng: {this.props.detail.quantity}</h4>
        </div>
        )
  }
  render() {
    return (
      <div>
        {this.renderDetail()}
      </div>
    )
  }

}
const mapStateProps = (state) => {
  return {
      detail: state.product.isDetail,
  }
}
export default connect(mapStateProps)(ProductDetail);