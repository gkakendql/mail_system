import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import signUp from './pages/signUp';
import login from './pages/login';
import list from './pages/userList';
import juso from './components/juso';

import addMail from './pages/mail/addMail';
import mailDeliveryInform from './pages/mail/mailDeliveryInform';
import mailHubInform from './pages/mail/mailHubInform';
import mailUserInform from './pages/mail/mailUserInform';
import mailInform from './pages/mail/mailInform';
import mailList from './pages/mail/mailList';
import qrCode from './pages/mail/qrCode';
import qrResult from './pages/mail/qrResult';

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
          <Route exact path="/mail/:address/qrResult/:index" component={qrResult}/>
          <Route exact path="/mail/:address/qr/:index" component={qrCode}/>
          <Route exact path="/mail/:address/addMail" component={addMail}/>
          <Route exact path="/mail/:address/mailInform" component={mailInform}/>
          <Route exact path="/mail/:address/mailUserInform" component={mailUserInform}/>
          <Route exact path="/mail/:address/mailHubInform" component={mailHubInform}/>
          <Route exact path="/mail/:address/mailDeliveryInform" component={mailDeliveryInform}/>
        </div>
    );
  }
}

export default App;
