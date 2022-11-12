import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import Category from './Category'
export default class ProductList extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className='col-7'>
                    <Category/>
                </div>
                <div className='col-5'>
                    <ProductDetail/>
                </div>
            </div>
        )
    }
}
