import React, { Component } from 'react'
import { connect } from 'react-redux'
class ProductDetail extends Component {
  renderDetail() {
      console.log(this.props)


        // <div className='card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent'>
        //   <h4>Tên Sản Phẩm:</h4>
        //   <h4>phiên bản:</h4>
        //   <img alt='' ></img>
        //   <h4>Gía:</h4>
        //   <h4>Mô tả:</h4>
        //   <h4>số lượng:</h4>
        // </div>
 
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