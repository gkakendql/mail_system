import React, { Component } from "react";
import { Button, Dimmer, Loader } from "semantic-ui-react";
import { post } from "axios";
import QrCode from 'react.qrcode.generator';

class qrCode extends Component {
  getMail = () => {
    console.log(this.props);
  };

  constructor(props) {
    super(props);
    this.getMail();
  }
  value = () => {
    console.log('https:/www.safetypost.xyz/mail/'+this.props.match.params.address+'/qrResult/'+this.props.match.params.index);
    return ('https:/www.safetypost.xyz/mail/'+this.props.match.params.address+'/qrResult/'+this.props.match.params.index);
  }


  render() {

    return <div>
      <QrCode size='200' value={this.value()}/>
    </div>
  }
}

export default qrCode;
