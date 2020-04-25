import React, {Component} from 'react'
import {render} from 'react-dom'
import QrCode from 'react.qrcode.generator'

class qrCode extends Component {
  render() {
    return <div>
      <QrCode size='200' value='http://192.168.0.7:3000/mail/0xecBE8f860A53A8D1D9696327EFdcE304d2E32295/test/0'/>
    </div>
  }
}
export default qrCode;
