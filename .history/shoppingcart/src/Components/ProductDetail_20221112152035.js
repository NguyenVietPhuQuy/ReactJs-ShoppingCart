import React, { Component } from 'react'
import { connect } from 'react-redux'
class ProductDetail extends Component {
  renderDetail() {
    const htmlDetail = this.props.detailList.map((item) => {
      return (
        <div className='card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent'>
          <h4>Tên Sản Phẩm:{item.name}</h4>
          <h4>phiên bản:{item.type} </h4>
          <img alt='' src={item.image}></img>
          <h4>Gía:{item.price} </h4>
          <h4>Mô tả:{item.description} </h4>
          <h4>số lượng: {item.quantity}</h4>
        </div>
      )
    })
    return htmlDetail
  }
  render() {
    return (
      <div>

      </div>
    )
  }

}
const mapStateProps = (state) => {
  return {
    detailList: state.product.isDetail
  }
}
export default connect(mapStateProps)(ProductDetail)