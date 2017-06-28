import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './NavBar'
import HomeContainer from './home/container/HomeContainer'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar />
        <BrowserRouter>
          <Route path='/' render={ ( { history } ) => <HomeContainer history={history}/> }/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
