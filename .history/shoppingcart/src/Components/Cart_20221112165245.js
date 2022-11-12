import React, { Component } from 'react'

export default class Cart extends Component {
    renderTbody() {
        return (
            <div>
                <tr className='text-center align-middle'>
                    <td className='text-center align-middle'> x</td>
                    <td className='text-center align-middle'>czxcz</td>
                    <td className='text-center align-middle'>
                        <img alt='' style={{ width: 100 }} />
                    </td>
                    <td className='text-center align-middle'>
                        <button className='btn btn-info'>-</button>
                        <span className='mx-2'></span>
                        <button className='btn btn-info'>+</button>
                    </td>
                    <td className='text-center align-middle'></td>
                    <td className='text-center align-middle'></td>
                    <td className='text-center align-middle'>
                        <button className='btn btn-danger' >Remove</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={7} style={{ textAlign: "right" }}>Total:</td>
                </tr>
            </div>
        )
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
                            {this.renderTbody()}
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}
