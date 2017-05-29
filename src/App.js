import React, { Component } from 'react';
import BoardContainer from './BoardContainer'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a className='navbar-brand'>
                Welcome to the Dungeon
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
              </ul>
            </div>
          </div>
        </nav>
        <BoardContainer />
      </div>
    );
  }
}

export default App;
