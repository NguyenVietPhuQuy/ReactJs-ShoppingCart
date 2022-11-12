import React, { Component } from 'react'
import ProductList from './ProductList'
import Category from './Category'
import ProductDetail from './ProductDetail'
import {connect} from 'react-redux'
 class Main extends Component {
    render() {
        console.log("test",this.props.valueReturn)
        return (
            <div>
                <div className="row text-center">
                    <div className='col-5'>
                        <ProductDetail/>
                    </div>
                    <div className='col-7'>
                        <Category />
                        <ProductList />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateProps = (state)=>{
    return{
    valueReturn: state.product.isDetail
    }
}
export default connect(mapStateProps)(Main)
