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
        const productFilter = this.props.productList.filter((item)=>item.type === this.props.selected)
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
                <h3 onClick={this.showCart} style={{ textAlign: "right", padding: 10, position:"absolute", top:-70, right:40 ,zIndex:1000}}> Cart</h3>
                {this.renderProduct()}
                {this.state.isShowCart && <Cart hiddenCart={this.hiddenCart}/>}
            </div>
        )

    }
}
const mapStateProps = (state) => {
    return {
        productList: state.product.products,
        selected: state.product.isSelected
    }
}
const mapDispatchProps = (dispatch) => {
    return {
        handleShowCart: (type) => {
            dispatch({
                type: "Show_Cart",
                payload: type
            })
        }
    }
}
export default connect(mapStateProps, mapDispatchProps)(ProductList);
