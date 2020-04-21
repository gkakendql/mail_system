import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import mailInform  from "../../pages/mailInform";
  function qrPopup() {
    window.open("/qrCode", "QR코드", "width=508, height=453, location = no");
  }

class MailRow extends Component {
  componentWillMount(props) {
    console.log(this);
    return(
      <mailInform
        sender_name={this.props.sender_name} />
    );
  }

  mailLink = () => {
    window.open(window.location.pathname + "/mailInform", "QR코드", "width=770, height=800, location = no");
  }



  render() {
    const { Row, Cell } = Table;

    return(
      <Row>
        <Cell>{this.props.sender_name}</Cell>
        <Cell>{this.props.sender_address}</Cell>
        <Cell>{this.props.sender_phone}</Cell>
        <Cell>{this.props.product_name}</Cell>
        <Cell>{this.props.status}</Cell>
        <Cell>
          <Button color="green" basic onClick={qrPopup}>
            클릭
          </Button>
        </Cell>
        <Cell>
            <Button color="purple" basic onClick={this.mailLink}>
              클릭
            </Button>
        </Cell>
      </Row>
    );
  }
}

export default MailRow;
