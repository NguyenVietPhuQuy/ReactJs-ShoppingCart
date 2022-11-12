import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
class ProductList extends Component {
    // runShowCart(value){
    //     if (value === false) return value =!value
    //     console.log(value)
    // }
    renderProduct() {
       const html = this.props.productList.map((item) => {
            return (
                <div key={item.id}className='col-4'>
                    <ProductItem item={item} />
                </div>
            )
        })
        return html;
    }
    render() {
        return (
            <div className='row mt-3 '>
                <h3 style={{ position: "absolute", top: -100, right: -500 }}> Cart</h3>
                {this.renderProduct()}
            </div>
        )

    }
}
const mapStateProps = (state) => {
    return {
        productList: state.product.products,
        showCart: state.product.isShowCart
    }
}
export default connect(mapStateProps)(ProductList);
