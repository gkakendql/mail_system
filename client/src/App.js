import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import signUp from './pages/signUp';
import login from './pages/login';
import addMail from './pages/addMail';
import juso from './pages/juso';
import mailList from './pages/mail/mailList';
import list from './containers/PostContainer/PostContainer';
import mailInform from './pages/mailInform';
import mailUserInform from './pages/mailUserInform';
import mailDeliveryInform from './pages/mailDeliveryInform';
import test from './pages/test';
import qrCode from './pages/qrCode';
import qr from './components/qrCode';


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
          <Route exact path="/mail/:address/test/:index" component={test}/>
          <Route exact path="/mail/:address/qr/:index" component={qrCode}/>
          <Route exact path="/mail/:address/addMail" component={addMail}/>
          <Route exact path="/mail/:address/mailInform" component={mailInform}/>
          <Route exact path="/mail/:address/mailUserInform" component={mailUserInform}/>
          <Route exact path="/mail/:address/mailDeliveryInform" component={mailDeliveryInform}/>
          <Route path="/qrcode" component={qr}/>
        </div>
    );
  }
}

export default App;
