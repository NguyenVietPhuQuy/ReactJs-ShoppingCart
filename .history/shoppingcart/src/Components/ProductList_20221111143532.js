import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
 class ProductList extends Component {
    runShowCart(){
        this.props.showCart:true,
    }
    render() {
        return (
            <div  className='row mt-3 '>
                <h3 onClick={()=>{ this.props.runShowCart(this.props.showCart)}} style={{ position:"fixed", top:15,right:180 }}> Cart</h3>
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
        productList: state.product.products,
        showCart : state.product.valueCart
    }
}
export default connect(mapStateProps)(ProductList);
