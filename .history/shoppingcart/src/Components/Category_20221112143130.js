import React, { Component } from 'react'
import { connect }  from 'react-redux'
 class Category extends Component {
  render() {
    return (
      <div className='btn-group d-flex justify-content-center '>
        {this.props.CategoryList.map((item)=>{
          return (<button key={item.tabName} className='btn btn-dark bg-transparent my-1' onClick={()=>{this.props.handleShowCart(item.type)}}>{item.type}</button>)
        })}
      </div>
    )
  }
}
const mapStateProps =(state)=>{
  return {
    CategoryList: state.category.categories
  }
}
const mapDispatchProps = (dispatch) => {
  return {
      handleShowCart: (type) => {
          dispatch({
              type: "Change_ShowCart",
              payload: type
          })
      }
  }
}
export default connect(mapStateProps,mapDispatchProps)(Category)