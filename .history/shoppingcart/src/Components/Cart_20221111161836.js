import React, { Component } from 'react'

export default class Cart extends Component {
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
            <button onClick={this.props.hidden}
                className='btn-danger position-absolute'
                style={{ top: 15, right: 15, outline: "none", }}>X</button>

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
                                <td className='text-center align-middle'>{item.prod.name}</td>
                                <td className='text-center align-middle'>
                                    <img alt='' src={item.prod.image} style={{ width: 100 }} />
                                </td>
                                <td className='text-center align-middle'>
                                    <button onClick={()=>{this.props.decreaseProduct(item.prod.id)}} className='btn btn-info'>-</button>
                                    <span className='mx-2'>{item.quantity}</span>
                                    <button onClick={()=>{this.props.increaseProduct(item.prod.id)}} className='btn btn-info'>+</button>
                                </td>
                                <td className='text-center align-middle'>{item.prod.price}</td>
                                <td className='text-center align-middle'>{item.prod.price * item.quantity}</td>
                                <td className='text-center align-middle'>
                                    <button className='btn btn-danger' onClick={()=>{this.props.deleteProduct(item.prod.id)}}>Remove</button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td  colSpan={7} style={{textAlign:"right"}}>Total: {this.calcAmount()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div >
    )
  }
}
