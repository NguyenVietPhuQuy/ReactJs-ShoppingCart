import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
 class ProductList extends Component {
    render() {
        return (
            <div className='row mt-3 '>
                <h3 onClick={this.showCart} style={{ textAlign: "right", padding: 10 }}> Cart({this.calcTotal()})</h3>
                {this.props.productList.map((item)=>{
                    return(
                    <div className='col-4'>
                        <ProductItem item={item}/>
                    </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateProps =(state)=>{
    return {
        productList: state.product.products
    }
}
export default connect(mapStateProps)(ProductList);
