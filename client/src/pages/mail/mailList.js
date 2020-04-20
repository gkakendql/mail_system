import React, { Component } from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import MailRow from "../../components/List/MailRow";
import { Link } from "react-router-dom";
import { post } from "axios";

class mailList extends Component {
  mailButton = () => {
    return this.props.history.push(window.location.pathname+'/addMail');
  }

  getMail = async () => {
    const url = "/api/getmail";
    const formData = new FormData();
    formData.append("address", this.props.match.params.address);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
<<<<<<< HEAD
    let data = post(url,formData,config);
    console.log(data.mailInfos);
=======
    let response = await post(url,formData,config);
    console.log(response.data);
>>>>>>> ab050316b77dd91ba6dcd11beedce082d699d6dc
  };

  renderRow() {
    return (
      <MailRow

        //key={index} 같이 값 넣기
      />
    );
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
