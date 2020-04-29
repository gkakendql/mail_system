import React, { Component } from "react";
import {Table} from "semantic-ui-react";

class MailRow extends Component {
  render() {
    const { Row, Cell } = Table;
    return (
      <Row>
        <Cell textAlign="center">상품 이동중</Cell>
        <Cell textAlign="center">{this.props.data.hub_time}</Cell>
        <Cell textAlign="center">배송지역으로 상품이 이동중입니다.</Cell>
        <Cell textAlign="center">{this.props.data.hub}</Cell>
      </Row>
    );
  }
}

export default MailRow;
