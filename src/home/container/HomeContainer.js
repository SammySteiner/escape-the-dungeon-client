import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { fetchBoards, createBoard } from '../../api'

import HomeMessage from '../components/HomeMessage'
import HomeCreateForm from '../components/HomeCreateForm'
import HomeSelectForm from '../components/HomeSelectForm'
import BoardContainer from '../../board/container/BoardContainer'

export default class HomeContainer extends Component {
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
    return (
      <Switch>
        <Route path='/:name' render={( { match } ) =>
         <BoardContainer name={match.params.name}/>}/>
        <Route exact path='/' render={ ({history}) =>
          {return (<div>
            <HomeMessage />
            <div className='row'>
              <HomeCreateForm
                onSubmit={this.handleCreateSubmit.bind(this)}
                onNameChange={this.handleNameInputChange.bind(this)}
                onSizeChange={this.handleSizeInputChange.bind(this)}
                name={this.state.name}
                size={this.state.size}/>
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
      </Switch>
    )
  }
}
