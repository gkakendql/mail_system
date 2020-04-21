import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import mailInform from "../../pages/mailInform";

  function qrPopup() {
    window.open("/qrCode", "QR코드", "width=508, height=453, location = no");
  }

class MailRow extends Component {
  mailLink = () => {
    window.open(window.location.pathname + "/mailInform", "QR코드", "width=770, height=800, location = no");
  }


  render() {
    const { Row, Cell } = Table;

    let data = () => {
      console.log(this.props.data);
      return [<mailInform
        data={this.props.data}
      />,window.open(window.location.pathname + "/mailInform", "QR코드", "width=770, height=800, location = no")];
    }
    return(
      <Row>
        <Cell>{this.props.data.senderName}</Cell>
        <Cell>{this.props.data.senderAddress}</Cell>
        <Cell>{this.props.data.senderPhone}</Cell>
        <Cell>{this.props.data.mailName}</Cell>
        <Cell> {(() => {
        switch (this.props.data.complete) {
          case false:return "배송중";
          case true: return "배송완료";
            }
          })()}
        </Cell>
        <Cell>
          <Button color="green" basic onClick={qrPopup}>
            클릭
          </Button>
        </Cell>
        <Cell>
            <Button color="purple" basic onClick={this.mailLink}>
              클릭
            </Button>
            <Button color="purple" basic onClick={data}>
              test
            </Button>
        </Cell>
      </Row>
    );
  }
}

export default MailRow;
