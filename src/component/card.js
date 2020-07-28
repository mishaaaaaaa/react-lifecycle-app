import React,{Component} from 'react'
import './card.css'

export default class Card extends Component{
  render(){
    console.log(this.props);

    return(

        <div className="card">
          <img src={this.props.card.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5  className="card-title">{this.props.card.name}</h5>
            <p className="card-text">{this.props.card.phone}</p>
          </div>
          <button type="button" onClick = {this.deleteCard} className="btn btn-danger">Delete</button>
        </div>
    )
  }

  deleteCard =()=>{
    this.props.deleteFunc(this.props.card.phone)
    console.log('delete func works');
  }
}
