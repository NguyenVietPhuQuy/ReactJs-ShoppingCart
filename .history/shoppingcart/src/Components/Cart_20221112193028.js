import React, { Component } from 'react'
import { connect } from 'react-redux'
class Cart extends Component {
    deleteProduct = (id) => {
        const cloneCart = [...this.props.cart];
        const foundIndex = cloneCart.findIndex((item) => id === item.prod.id);
        cloneCart.splice(foundIndex, 1);
        this.props.handleDelete(cloneCart)
    };
    increaseProduct = (id) => {
        const cloneCart = [...this.props.cart];
        const foundItem = cloneCart.find(item => id === item.prod.id);
        if (foundItem) {
            foundItem.quantity += 1
        }
        console.log(foundItem)
        this.props.handleIncrease(cloneCart)

    };
    decreaseProduct = (id) => {
        const cloneCart = [...this.props.cart];
        const foundItem = cloneCart.find(item => id === item.prod.id);
        if (foundItem) {
            foundItem.quantity -= 1
        }

    }
    render() {
        return (
            <div className=' position-fixed w-100 h-100'
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "rgba(0,0,0,0.8)",
                }}>
                <div className="w-50 bg-white position-absolute p-5" style={
                    {
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        opacity: 1
                    }
                }>
                    <button onClick={this.props.hiddenCart}
                        className='btn-danger position-absolute'
                        style={{ top: 20, right: 20, outline: "none", zIndex: 100, cursor: "pointer" }}>X</button>

                    <h1 className='text-center fs-3'>Shopping Cart</h1>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th> Id SP</th>
                                <th> Name SP</th>
                                <th> IMG </th>
                                <th> Quantity</th>
                                <th> Price</th>
                                <th> Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cart.map((item) => {
                                return (
                                    <tr className='text-center align-middle'>
                                        <td className='text-center align-middle'> {item.prod.id}</td>
                                        <td className='text-center align-middle'> {item.prod.name}</td>
                                        <td className='text-center align-middle'>
                                            <img alt='' style={{ width: 100 }} src={item.prod.image} />
                                        </td>
                                        <td className='text-center align-middle d-flex flex-row' style={{ justifyContent: "center", alignItems: "center", marginTop: 27 }}>
                                            <button className='btn btn-info align-middle ' style={{ heigh: 40, width: 40 }}>-</button>
                                            <span className='mx-2'>{item.quantity}</span>
                                            <button className='btn btn-info' style={{ heigh: 40, width: 40 }} onClick={()=>{this.increaseProduct(item.prod.id)}}>+</button>
                                        </td>
                                        <td className='text-center align-middle'>{item.prod.price}</td>
                                        <td className='text-center align-middle'></td>
                                        <td className='text-center align-middle'>
                                            <button className='btn btn-danger' onClick={()=>{this.deleteProduct(item.prod.id)}} >Remove</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}
const mapStateProps = (state) => {
    return {
        cart: state.product.cart
    }
}
const mapDispatchProps = (dispatch)=>{
    return{
        handleDelete:(type)=>{
            dispatch({
                type:"Delete_Product",
                payload: type
            })
        },
        handleIncrease:(type)=>{
            dispatch({
                type:"Increasing_Product",
                payload: type
            })
        }
    }
}
export default connect(mapStateProps,mapDispatchProps)(Cart)