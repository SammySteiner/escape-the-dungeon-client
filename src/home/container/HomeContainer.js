import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { fetchBoards, createBoard } from '../../api'

import HomeMessage from '../components/HomeMessage'
import HomeCreateForm from '../components/HomeCreateForm'
import HomeSelectForm from '../components/HomeSelectForm'
import BoardContainer from '../../board/container/BoardContainer'
import EndGameContainer from '../../endGame/containers/EndGameContainer'

export default class HomeContainer extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      size: '4',
      monsters: 0,
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

  handleMonstersInputChange(e){
    this.setState({
      monsters: e.target.value
    })
  }

  handleCreateSubmit(e){
    e.preventDefault()
    const name = this.state.name
    createBoard(this.state.name, this.state.size, this.state.monsters)
    .then(() => {
      this.props.history.push('/' + name )
      return this.setState({name: '', size: '4', monsters: 0, select: ''})
    })
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

  removeBoard(name){
    this.setState((prevState) => {
      Object.assign({}, prevState, prevState.boards = prevState.boards.filter((board) => board.name !== name))
    })
  }

  render(){
    return (
      <Switch>
        <Route exact path='/' render={ ({history}) =>
          {return (<div>
            <HomeMessage />
            <div className='row'>
              <HomeCreateForm
                onSubmit={this.handleCreateSubmit.bind(this)}
                onNameChange={this.handleNameInputChange.bind(this)}
                onSizeChange={this.handleSizeInputChange.bind(this)}
                onMonstersChange={this.handleMonstersInputChange.bind(this)}
                name={this.state.name}
                size={this.state.size}
                monsters={this.state.monsters}
              />
              <HomeSelectForm
                onSubmit={this.handleContinueSubmit.bind(this)}
                onChange={this.handleSelect.bind(this)}
                select={this.state.select}
                boardList={this.state.boards.map(function(board){
                  return (<option key={board.name}>{board.name}</option>)
                })}/>
            </div>
          </div>)
        }}/>
        <Route exact path='/:name' render={( { match, history } ) =>
         <BoardContainer removeBoard={this.removeBoard.bind(this)} history={history} name={match.params.name}/>}/>
        <Route exact path='/:name/lose' render={({ match, history }) =>
          <EndGameContainer status={'lose'} name={match} history={history}/>}/>
        <Route exact path='/:name/win' render={({ match, history }) =>
          <EndGameContainer status={'win'} name={match} history={history}/>}/>
      </Switch>
    )
  }
}
