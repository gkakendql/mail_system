import React, { Component } from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import MailRow from "../../components/List/MailRow";
import { Link } from "react-router-dom";
import { post } from "axios";

class mailList extends Component {

  static async getInitialProps(props) {
    const url = "/api/getmail";
    const formData = new FormData();
    formData.append("address", this.props.match.params.address);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    let response = await post(url,formData,config);

    let sender_name = response.data.senderInfos[0];
    let sender_address = response.data.senderInfos[3];
    let sender_phone = response.data.senderInfos[1];
    let product_name = response.data.mailInfos[0];
    let status = response.data.mailInfos[6];

return { sender_name, sender_address, sender_phone, product_name, status };
  }


  mailButton = () => {
    return this.props.history.push(window.location.pathname+'/addMail');
  }



  renderRow() {
    console.log(this.props.sender_name);
    console.log(this.props.sender_address);
    return <MailRow
      sender_name = {this.props.sender_name}
      sender_address = {this.props.sender_address}
      sender_phone = {this.props.sender_phone}
      product_name = {this.props.product_name}
      status = {this.props.status} />;
  }


  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
          <Button icon labelPosition='left' onClick={this.mailButton} basic color="purple" floated="left" style={{marginBottom: '10px'}}>
            <Icon name='add' />
            택배 접수
          </Button>

          <Button onClick={this.getMail} basic color="purple" >
            <Icon name='add' />
            확인
          </Button>

        <Table >
          <Header>
            <Row>
              <HeaderCell style={{minWidth: "6em"}}>받는 사람</HeaderCell>
              <HeaderCell >주소</HeaderCell>
              <HeaderCell style={{minWidth: "9em"}}>연락처</HeaderCell>
              <HeaderCell style={{minWidth: "6em"}}>상품명</HeaderCell>
              <HeaderCell style={{minWidth: "6em"}}>배송 상태</HeaderCell>
              <HeaderCell style={{minWidth: "7em"}}>QR코드</HeaderCell>
              <HeaderCell style={{minWidth: "7em"}}>상세 정보</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRow()}</Body>
        </Table>
      </Layout>
    );
  }
}

export default mailList;
