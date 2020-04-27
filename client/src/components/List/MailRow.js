import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import mailInform from "../../pages/mailInform";

class MailRow extends Component {
  data = () => {
    console.log(this.props);
    //return this.props.history.push(window.location.pathname + "/test");
    window.open(
      window.location.pathname + "/test/" + this.props.index,
      "QR코드",
      "width=770, height=800, location = no"
    );
  };
  qrPopup = () => {
    window.open(
      window.location.pathname + "/qr/" + this.props.index,
      "QR코드",
      "width=508, height=453, location = no"
    );
  };

  render() {
    const { Row, Cell } = Table;
    return (
      <Row>
        <Cell>{this.props.data.receiverName}</Cell>
        <Cell>{this.props.data.receiverAddress}</Cell>
        <Cell>{this.props.data.receiverPhone}</Cell>
        <Cell>{this.props.data.productName}</Cell>
        <Cell>
          {" "}
          {(() => {
            switch (this.props.data.complete) {
              case false:
                return "배송중";
              case true:
                return "배송완료";
            }
          })()}
        </Cell>
        <Cell>
          <Button color="green" basic onClick={this.qrPopup}>
            클릭
          </Button>
        </Cell>
        <Cell>
          <Button color="purple" basic onClick={this.data}>
            클릭
          </Button>
        </Cell>
      </Row>
    );
  }
}

export default MailRow;
