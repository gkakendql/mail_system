import React, {Component} from 'react'
import {render} from 'react-dom'
import QrCode from 'react.qrcode.generator'

class qrCode extends Component {
  render() {
    return <div>
      <QrCode size='200' value='www.pipi.com'/>
    </div>
  }
}
export default qrCode;
