import React, { Component } from 'react'
import ProductItem from './ProductItem'
import Cart from './Cart'
import { connect } from 'react-redux'
class ProductList extends Component {
    // runShowCart(value){
    //     if (value === false) return value =!value
    //     console.log(value)
    // }
    showCart = () => {
        this.setState({
            isShowCart: true,
        })
        console.log(this.state.isShowCart)
    }
    hiddenCart = () => {
        this.setState({
            isShowCart: false,
        })
        console.log(this.state.isShowCart)
    }
    renderProduct() {
        const html = this.props.productList.map((item) => {
            return (
                <div key={item.id} className='col-4'>
                    <ProductItem item={item} />
                </div>
            )
        })
        return html;
    }
    render() {
        return (
            <div className='row mt-3 '>
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
const mapDispatchProps = (dispatch) => {
    return {
        handleShowCart: (value) => {
            dispatch({
                value: "Show_Cart",
                payload: value
            })
        }
    }
}
export default connect(mapStateProps, mapDispatchProps)(ProductList);
