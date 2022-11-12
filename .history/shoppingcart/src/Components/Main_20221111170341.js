import React, { Component } from 'react'
import ProductList from './ProductList'
import Category from './Category'
import ProductDetail from './ProductDetail'
export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="row text-center">

                        <Category />
                        <ProductList />
                        <ProductDetail/>

                </div>
            </div>
        )
    }
}
