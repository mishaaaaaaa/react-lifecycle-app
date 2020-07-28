import React, {Component} from 'react'
import './createCards.css'

class Createcard extends Component{

state = {
  name:this.props.name,
  phone:this.props.phone
}

  componentWillUnmount(){
    this.props.saveInput(this.state.name,this.state.phone)

  }

  render(){

    return(
      <>

      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Create your own card</h5>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
            </div>
            <input type="text" onChange = {this.handleName} value = {this.state.name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
            </div>
            <input type="text" onChange = {this.handlePhone} value = {this.state.phone}className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <a href="#" className="btn btn-primary" onClick = {this.saveCard}>Create</a>
        </div>
      </div>
      </>
    )
  }
  handleName = (ev)=>{
    console.log(ev.target.value);
    this.setState({
      name: ev.target.value
    })

  }

  handlePhone = (ev)=>{
    console.log(ev.target.value);
    this.setState({
      phone: ev.target.value
    })

  }

  saveCard = () =>{
    this.props.save({
      name: this.state.name,
      phone: this.state.phone,
      img: 'https://via.placeholder.com/300x150'
    })
  }
}

export default Createcard
