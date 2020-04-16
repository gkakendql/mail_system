import React, { Component } from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import MailRow from "../../components/List/MailRow";
import { Link } from "react-router-dom";

class MailList extends Component {

  renderRow() {
    return (
      <MailRow/>
    );
  }


  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <Link to="/mail/:address/addMail">
          <Button icon labelPosition='left' basic color="purple" floated="left" style={{marginBottom: '10px'}}>
            <Icon name='add' />
            택배 접수
          </Button>
        </Link>

        <Table >
          <Header>
            <Row>
              <HeaderCell style={{minWidth: "6em"}}>받는 사람</HeaderCell>
              <HeaderCell >주소</HeaderCell>
              <HeaderCell style={{minWidth: "9em"}}>연락처</HeaderCell>
              <HeaderCell style={{minWidth: "6em"}}>상품명</HeaderCell>
              <HeaderCell style={{minWidth: "6em"}}>배송 상태</HeaderCell>
              <HeaderCell style={{minWidth: "7em"}}>QR코드</HeaderCell>
            </Row>
          </Header>
          {this.renderRow()}
          {this.renderRow()}
          {this.renderRow()}
          {this.renderRow()}
        </Table>
      </Layout>
    );
  }
}

export default MailList;
