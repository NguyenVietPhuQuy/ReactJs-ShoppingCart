import React, { Component } from 'react'
import { connect } from 'react-redux'
class ProductDetail extends Component {
  renderDetail() {
      console.log(this.props.detail)
      const htmlDetail = this.props.detail.map((item)=>{
        return(
        <div className='card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent'>
          <h4>Tên Sản Phẩm:{item.name}</h4>
          <h4>phiên bản:{item.type}</h4>
          <img alt='' src={item.image}></img>
          <h4>Gía:</h4>
          <h4>Mô tả:</h4>
          <h4>số lượng:</h4>
        </div>
        )
      })
      return htmlDetail
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