import React, { Component } from 'react'
import ProductList from './ProductList'
import Category from './Category'
import ProductDetail from './ProductDetail'
export default class Main extends Component {
    showCart = (value) => {
        if(value) return false
        else return true
      }
    render() {
        return (
            <div>
                <div className="row text-center">
                    <div className='col-7'>
                        <Category />
                        <ProductList />
                    </div>
                    <div className='col-5'>
                        <ProductDetail showCart={this.showCart}/>
                    </div>
                </div>
            </div>
        )
    }
}
