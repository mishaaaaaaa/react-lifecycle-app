import React, {Component} from 'react'
import Card from './card.js'
import './cardList.css'
export default class Cardslist extends Component{

  render(){

    let cards = this.props.cards.map(el => <Card card ={el} key ={el.phone} deleteFunc = {this.props.delete}/>)
    console.log(cards);
    return(
      <>
      <div className="container-fluid">
      {cards}
      </div>
      </>
    )
  }
}
