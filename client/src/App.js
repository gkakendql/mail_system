import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import signUp from './pages/signUp';
import login from './pages/login';
import addMail from './pages/addMail';
import juso from './pages/juso';
import mailList from './pages/mail/mailList';
import list from './containers/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
        <div align="center">
          <Route exact path="/" component={login}/>
          <Route path="/signUp" component={signUp}/>
          <Route path="/addMail" component={addMail}/>
          <Route path="/list" component={list}/>
          <Route path="/juso" component={juso}/>
          <Route exact path="/mail/:address" component={mailList}/>
        </div>
    );
  }
}

export default App;
