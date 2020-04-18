import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

class MailRow extends Component {
  render() {
    const { Row, Cell } = Table;

    return(
      <Row>
        <Cell>김덕배</Cell>
        <Cell>부산광역시 해운대구 해운대로61번지 더샵센텀그린 103동 2202호</Cell>
        <Cell>010-7777-3333</Cell>
        <Cell>아이패드</Cell>
        <Cell>배송중</Cell>
        <Cell>
          <Button color="green" basic>
            클릭
          </Button>
        </Cell>
      </Row>
    );
  }
}

export default MailRow;
