import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import BoardContainer from './BoardContainer'
import NavBar from './NavBar'
import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path="/:name" render={( { match } ) =>
            {return <BoardContainer name={match.params.name}/>}}/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
