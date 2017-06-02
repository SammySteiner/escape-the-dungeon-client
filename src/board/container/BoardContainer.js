import React, { Component } from 'react'
import Board from '../components/Board'

import { showBoard, updateBoard } from '../../api'

export default class BoardContainer extends Component {
  constructor( props ) {
    super()
    this.state = {
      board: null,
      hover: '',
      shading: ''
    }
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount(){
    showBoard(this.props.name)
    .then( (data) => {
      return this.setState({board: data})
    })
  }

  handleHover(e){
    this.setState({
      hover: e.target.id.split(',').map( string => parseInt(string, 10))

    }, () => this.validMove() ? this.setState({shading: 'valid move'}) : this.setState({shading: ''}))
  }

  validMove(){
    if ((this.state.hover[1] === this.state.board.player.y && (this.state.hover[0] === this.state.board.player.x + 1 || this.state.hover[0] === this.state.board.player.x - 1 ))
    ||
    ( this.state.hover[0] === this.state.board.player.x && (this.state.hover[1] === this.state.board.player.y + 1 || this.state.hover[1] === this.state.board.player.y - 1))) {
      return true
    }
  }

  handleClick(){
    if (this.validMove()){
      return this.setState( (prevState) => {
        Object.assign({}, prevState.board, prevState.board.player.x = this.state.hover[0], prevState.board.player.y = this.state.hover[1], prevState.board.monsters = this.moveMonsters(this.state.board.monsters), prevState.hover = '', prevState.shading = '')
      }, () => updateBoard(this.state.board))
    }
  }

  moveMonsters(monsterArr){
    return monsterArr.map(monster => this.moveMonster(monster))
  }

  moveMonster(monster){
    if ( parseInt(Math.random()*100, 10) > 50 ) {
      if ( monster.x === 1 ) { monster.x += 1 }
      else if (monster.x === this.state.board.size ) { monster.x -= 1 }
      else {
        if ( parseInt(Math.random()*100, 10) > 50 ) { monster.x += 1}
        else { monster.x -= 1 }
      }
    } else {
      if ( monster.y === 1 ) { monster.y += 1 }
      else if (monster.y === this.state.board.size ) { monster.y -= 1 }
      else  {
        if ( parseInt(Math.random()*100, 10) > 50 ) { monster.y += 1}
        else { monster.y -= 1 }
      }
    }
    return monster
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
    return (
      <div className="container-fluid">
        {this.state.board !== null ? this.state.board.name : 'Loading'}
        {this.state.board !== null ? <Board boardArr={boardArr}
        size={this.state.board.size}
        onHover={this.handleHover.bind(this)}
        validMove={this.validMove.bind(this)}
        shading={this.state.shading}
        onClick={this.handleClick.bind(this)}
        hover={this.state.hover}/> : <h1>Loading</h1>}
      </div>
    )
  }
}
