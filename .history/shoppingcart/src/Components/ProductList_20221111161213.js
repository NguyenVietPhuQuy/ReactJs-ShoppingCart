import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
class ProductList extends Component {
    // runShowCart(value){
    //     if (value === false) return value =!value
    //     console.log(value)
    // }
    state = {
        isShowCart:false
    }
    renderProduct() {
       const html = this.props.productList.map((item) => {
            return (
                <div key={item.id}className='col-4'>
                    <ProductItem item={item} />
                </div>
            )
        })
        console.log(this.props.showCart)
        return html;
    }
    render() {
        return (
            <div className='row mt-3 '>
                <h3 style={{ position: "absolute", top: -60, right: -500 }}> Cart</h3>
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
const mapDispatchProps =(dispatch)=>{
    return {
        handleShowCart: (value)=>{
            dispatch({
                value:"Show_Cart",
                payload: value
            })
        }
    }
}
export default connect(mapStateProps,mapDispatchProps)(ProductList);
