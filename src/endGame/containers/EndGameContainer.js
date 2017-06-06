import React, { Component } from 'react'
import { createBoard } from '../../api'

import WinMessage from '../components/WinMessage'
import LoseMessage from '../components/LoseMessage'
import HomeButton from '../components/HomeButton'
import HomeCreateForm from '../../home/components/HomeCreateForm'

export default class EndGameContainer extends Component {
  constructor( props ){
    super()
    this.state = {
      name: '',
      size: '4',
      monsters: ''
    }
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
    .then(() => this.props.history.push('/' + name ))
  }

  winLose(){
    if (this.props.status === 'win') { return true}
    else if (this.props.status === 'lose') { return false}
    else {console.log('How did you get here??? Back from whence you came, foul demon!');}
  }

  render(){
    return (
      <div>
        {this.winLose() ? <WinMessage name={this.props.name}/> : <LoseMessage name={this.props.name}/>}
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
          <HomeButton />
        </div>
      </div>
    )
  }
}
