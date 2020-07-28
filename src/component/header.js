import React, {Component} from 'react'

export default class Header extends Component{

  state = {
    isSearched:''
  }


  render(){

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick = {this.props.changeState.bind(this,'cards')}>All Cards <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick = {this.props.changeState.bind(this,'create')}>Create <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input onChange = {this.handleChange} value = {this.state.isSearched} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }

  handleChange = (ev) =>{

    this.setState({
      isSearched: ev.target.value
    })
    this.props.search(ev.target.value)
  }



}
