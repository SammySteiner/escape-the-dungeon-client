import React, { Component } from 'react'

import { fetchBoards, createBoard } from './api'

export default class Welcome extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      size: '',
      select: '',
      boards: []
    }
  }

  componentDidMount(){
    fetchBoards()
    .then( data => this.setState({ boards: data }))
  }

  handleNameInputChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSizeInputChange(e){
    this.setState({
      size: e.target.value
    })
  }

  handleCreateSubmit(e){
    e.preventDefault()
    const name = this.state.name
    createBoard(this.state.name, this.state.size)
    .then(() => this.props.history.push('/' + name ))
  }

  handleSelect(e){
    this.setState({
      select: e.target.value
    })
  }

  handleContinueSubmit(e){
    e.preventDefault()
    this.props.history.push('/' + this.state.select )
  }

  render(){
    const boardList = this.state.boards.map(function(board){
      return (<option key={board.name}>{board.name}</option>)
    })
    return (
      <div>
        <h2>Welcome to Escape the Dungeon</h2>
        <p>To continue your dungeon escape, select your game from the dropdown menu. To create a new dungeon, git it a name in the form below and some customizations.</p>
        <div className='row'>
          <div className='col-sm-6'>
            <h3>Create New Dungeon</h3>
            <form onSubmit={this.handleCreateSubmit.bind(this)}>
              <label>Dungeon Name:</label>
              <div className="form-group">
                <input type='text' value={this.state.name} onChange={this.handleNameInputChange.bind(this)}/>
              </div>
              <label>Dungeon Size:</label>
              <div className="form-group">
                <input type='text' value={this.state.size} onChange={this.handleSizeInputChange.bind(this)}/>
              </div>
              <button className="btn btn-default" type='submit'>Build Dungeon</button>
            </form>
          </div>
          <div className='col-sm-6'>
            <h3>Continue Your Escape</h3>
            <form onSubmit={this.handleContinueSubmit.bind(this)}>
              <div className="form-group">
                <label>Select Dungeon:</label>
                <select onChange={this.handleSelect.bind(this)}
                  className="form-control"
                  value={this.state.select}>
                  <option>Choose from the list</option>
                  {boardList}
                </select>
              </div>
              {this.state.select ? <button className="btn btn-default" type='submit'>Continue Dungeon</button> : ''}
            </form>
          </div>
        </div>

      </div>
    )
  }
}
