import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import signUp from './pages/signUp';
import login from './pages/login';
import addMail from './pages/addMail';
import juso from './pages/juso';
import mailList from './pages/mail/mailList';
import list from './containers/PostContainer/PostContainer';
<<<<<<< HEAD
import mailInform from './pages/MailInform';
=======
import qr from './components/qrCode';
import mailInform from './pages/mailInform';
>>>>>>> 6cb6a84a425a319290fbaba48f854bfa22caadda

class App extends Component {
  render() {
    return (
        <div align="center">
          <Route exact path="/" component={login}/>
          <Route path="/signUp" component={signUp}/>
          <Route path="/list" component={list}/>
          <Route path="/juso" component={juso}/>
          <Route path="/mailInform" component={mailInform}/>
          <Route exact path="/mail/:address" component={mailList}/>
          <Route exact path="/mail/:address/addMail" component={addMail}/>
          <Route exact path="/mail/:address/mailInform" component={mailInform}/>
          <Route path="/qrcode" component={qr}/>
        </div>
    );
  }
}

export default App;
