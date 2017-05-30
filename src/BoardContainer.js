import React, { Component } from 'react'
import Board from './Board'

import { showBoard } from './api'

export default class BoardContainer extends Component {
  constructor( props ) {
    super()
  }

  componentDidMount(){
    showBoard(this.props.name)
    .then( (data) => {
      return this.setState({board: data})
    })
  }

  createBoard() {
    if (this.state && this.state.board !== null)
    {
      const numberOfRows = this.state.board.size
      const boardArr = []
      for (var i=0; i < numberOfRows; i++) {
        boardArr.push([])
      }
      boardArr.forEach(function(row){
        for (var i=0; i < numberOfRows; i++) {
          row.push([''])
        }
      })
      boardArr[this.state.board.player.x - 1][this.state.board.player.y - 1] = 'player'
      boardArr[this.state.board.key.x - 1][this.state.board.key.y - 1] = 'key'
      boardArr[this.state.board.door.x - 1][this.state.board.door.y - 1] = 'door'
      this.state.board.monsters.forEach(function(monster){
        boardArr[monster.x - 1][monster.y - 1] = 'monster'
      })
      return boardArr
    }
  }


  render() {
    const boardArr = this.createBoard()
    console.log('rendered');
    return (
      <div className="container-fluid">
        {this.state && this.state.board !== null ? this.state.board.name : 'Loading'}
        {this.state && this.state.board !== null ? <Board boardArr={boardArr} size={this.state.board.size}/> : <h1>Loading</h1>}
      </div>

    )
  }
}
