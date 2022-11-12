import React, { Component } from 'react'
import styles from "./Home.module.css"
import Header from './Header'
export default class Home extends Component {
    


  render() {
    return (
      <div className={styles.home}>
        <div className={styles.container}>
        <Header/>
        {this.random_bg_color()}
        </div>
      </div>
    )
  }
}
