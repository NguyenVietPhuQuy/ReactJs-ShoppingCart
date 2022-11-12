import React, { Component } from 'react'
import ProductItem from './ProductItem'
import Cart from './Cart'
import { connect } from 'react-redux'
class ProductList extends Component {
    state = {
        isShowCart: false,
        cart:[]
    }
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
                <h3 onClick={this.showCart} style={{ textAlign: "right", padding: 10, position:"absolute", top:-70, right:-500 }}> Cart</h3>
                {this.renderProduct()}
                {this.state.isShowCart && <Cart hiddenCart={this.hiddenCart}/>}
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
