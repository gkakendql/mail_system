import React, { Component } from "react";
import {Table} from "semantic-ui-react";

class MailRow extends Component {
  render() {
    const { Row, Cell } = Table;
    return (
      <Row>
        <Cell>상품 이동중</Cell>
        <Cell>{this.props.data.hub_time}</Cell>
        <Cell>배송지역으로 상품이 이동중입니다.</Cell>
        <Cell>{this.props.data.hub}</Cell>
      </Row>
    );
  }
}

export default MailRow;
