import React, { Component } from 'react'
import { connect }  from 'react-redux'
 class Category extends Component {
  render() {
    return (
      <div className='btn-group d-flex justify-content-center mr-3'>
        {this.props.CategoryList.map((item)=>{
          return (<button key={item.id} className='btn btn-dark bg-transparent my-1'>{item.type}</button>)
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
export default connect(mapStateProps)(Category)