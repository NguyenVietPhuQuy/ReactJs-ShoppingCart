import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductItem extends Component {
  addToCart(prod){
    const cloneCart =[...this.props.cart]
    let foundItem = this.props.cart.find((item)=>prod.id === item.prod.id)
    let varCart ={
      prod:prod,
      quantity:1,
    }
    if (foundItem){foundItem.quantity +=1}
    else {cloneCart.push(varCart)}
    console.log("clonecart:",cloneCart)
  }
  render() {
    return (
      <div>
        <div className=' card p-2 mb-4 shadow p-3 mb-5 bg-body rounded bg-transparent' style={{textAlign:"left"}}>
          <img alt='' src={this.props.item.image} />
          <h3 className='fs-1' style={{height:100}}>{this.props.item.name}</h3>
          <h3 className='fs-1 bg-dark px-2 py-1' style={{borderRadius:5}}>Price: {this.props.item.price}$</h3>
          <button className='btn btn-info mb-2' onClick={()=>{this.props.handleDetail(this.props.item)}}>Detail</button>
          <button className='btn btn-danger' onClick={()=>{this.addToCart(this.props.item)}}>Add To Cart</button>
        </div>
      </div>
    )
  }
}
const mapStateProps = (state)=>{
  return{
    cart: state.product.cart
  }
}
const mapDispatchProps = (dispatch)=>{
  return{
    handleDetail: (type)=>{
      dispatch({
        type:"Change_Detail",
        payload: type
      })
    },
    }
    // addToCart(prod){
    //   const cloneCart =[...this.props.cart]
    //   let foundItem = this.props.cart.find((item)=>prod.id === item.prod.id)
    //   let varCart ={
    //     prod:prod,
    //     quantity:1,
    //   }
    //   if (foundItem){foundItem.quantity +=1}
    //   else {cloneCart.push(varCart)}
    // }
  }
export default connect(mapStateProps,mapDispatchProps)(ProductItem)

