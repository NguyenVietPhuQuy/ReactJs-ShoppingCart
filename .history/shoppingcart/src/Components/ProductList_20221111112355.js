import React, { Component } from 'react'
import ProductItem from './ProductItem'
export default class ProductList extends Component {
    render() {
        return (
            <div row mt-3>
                <ProductItem/>
            </div>
        )
    }
}
