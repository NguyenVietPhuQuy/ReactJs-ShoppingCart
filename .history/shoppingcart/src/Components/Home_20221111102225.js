import React, { Component } from 'react'
import styles from "./Home.module.css"
import Header from './Header'
export default class Home extends Component {
  random_bg_color(){
    let hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e']
    function populate(a){
        for(let i=0;i<6;i++){
            let x =Math.round(Math.random()*14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    console.log(Color1)
    let Color2 = populate('#');
    console.log(Color2)
    var angle = 'to right';
    let gradient = 'linear-gradient('+angle+','+ Color1+','+ Color2+')';
    document.body.style.background =gradient;
  }  


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
