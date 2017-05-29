import React, { Component } from 'react'
import Board from './Board'

export default class BoardContainer extends Component {
  constructor() {
    super()
    this.state = {
      size: '2',
      name: 'test',
      player: {
        x: 1,
        y: 2,
        key: false,
        hearts: 1
        },
      key: {
        x: 2,
        y: 1,
        available: false
      },
      door: {
        x: 1,
        y: 1
      },
      monsters: [
        {
          id: 1,
          x: 2,
          y: 2
        }
      ]
    }
  }

  createBoard() {
    const numberOfRows = this.state.size
    const numberOfSquares = this.state.size * this.state.size
    const boardArr = []
    for (var i=0; i < numberOfRows; i++) {
      boardArr.push([])
    }
    boardArr.forEach(function(row){
      for (var i=0; i < numberOfRows; i++) {
        row.push(['empty'])
      }
    })
    boardArr[this.state.player.x - 1][this.state.player.y - 1] = 'player'
    boardArr[this.state.key.x - 1][this.state.key.y - 1] = 'key'
    boardArr[this.state.door.x - 1][this.state.door.y - 1] = 'door'
    this.state.monsters.forEach(function(monster){
      boardArr[monster.x - 1][monster.y - 1] = 'monster'
    })
    return boardArr
  }


  render() {
    const boardArr = this.createBoard()
    return (
      <div className="container-fluid">
        {this.state.name}
        <Board boardArr={boardArr} size={this.state.size}/>
      </div>

    )
  }
}
