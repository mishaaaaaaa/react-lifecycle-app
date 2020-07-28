import React, {Component} from 'react'
import './App.css'
import cards from './cards.js'
import Createcard from './component/createCards.js'
import Header from './component/header.js'
import Cardslist from './component/cardsList.js'

class App extends Component  {
  state = {
    cards: cards.slice(),
    page:'cards',
    name:'',
    phone:''
  }


        render(){



          let create = this.state.page === 'create'&&<Createcard save = {this.saveCard}
                                                                  name = {this.state.name}
                                                                   phone = {this.state.phone}
                                                                    saveInput ={this.saveInput}/>
          let cardsList = this.state.page === 'cards'&&<Cardslist cards = {this.state.cards} delete = {this.deleteCard}/>
            return (
              <div className="App">
              <Header changeState = {this.changeState} cards = {this.state.cards} search ={this.findCard}/>
              {create}
              {cardsList}
              </div>
            )

      }

      saveInput = (name,phone)=>{
          this.setState({
            name,
            phone
          })
      }

      changeState = (name)=>{
        this.setState({
          page: name
        })
      }

      saveCard = (card)=>{
        let cards = this.state.cards.slice()
        cards.push(card)

        this.setState({
          cards: cards,
          page: 'cards'
        })
      }

      deleteCard = (id)=>{
        console.log(id);
        let cards = this.state.cards.slice()
        const index = cards.findIndex(n => n.phone === id);
        if (index !== -1) {
          cards.splice(index, 1);
        }

        this.setState({
          cards: cards,
          page: 'cards'
        })
      }

      findCard = (id)=>{
        console.log('id of search is :' + id);
        let searchedcards = cards.filter(el=> el.phone.includes(id))

      this.setState({
        cards: searchedcards,
        page:'cards'
      })
    }
}

export default App;
