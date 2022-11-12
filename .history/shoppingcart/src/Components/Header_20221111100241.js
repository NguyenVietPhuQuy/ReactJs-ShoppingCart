import React, { Component } from 'react'
import styles from "./Header.module.css"
export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.content}>
            FASHION SHOP - Design In Future
        </div>
      </div>
    )
  }
}
