import React, { Component } from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import MailRow from "../../components/List/MailRow";
import { Link } from "react-router-dom";
import { post } from "axios";
import mailInform  from "../mailInform";

class mailList extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: "initial"
    };
  }
  async componentWillMount(props) {
<<<<<<< HEAD
    //console.log(this);
=======
    console.log(this);
>>>>>>> 8e6ce78ff8a0b25b3035999d02f64a53a873fc71
    const url = "/api/getmail";
    const formData = new FormData();
    formData.append("address", this.props.match.params.address);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    let response = await post(url, formData, config);
<<<<<<< HEAD
    //console.log(response);
=======
    console.log(response);
>>>>>>> 8e6ce78ff8a0b25b3035999d02f64a53a873fc71

    let sender_name = response.data.senderInfos[0];
    let sender_phone = response.data.senderInfos[1];
    let sender_email = response.data.senderInfos[2];
    let sender_address = response.data.senderInfos[3];
    let receiver_name = response.data.receiverInfos[0];
    let receiver_phone = response.data.receiverInfos[1];
    let receiver_address = response.data.receiverInfos[2];
    let product_name = response.data.mailInfos[0];
    let product_price = response.data.mailInfos[1];
    let quantity = response.data.mailInfos[2];
    let volume = response.data.mailInfos[3];
    let others = response.data.mailInfos[4];
    let status = response.data.mailInfos[6];

<<<<<<< HEAD
    if(response.data.mailInfos[6] === false) {
      status = "배송중";
    }
    else {
      status="배송 완료";
    }

=======
>>>>>>> 8e6ce78ff8a0b25b3035999d02f64a53a873fc71
    this.testdata = {
      sender_name,
      sender_address,
      sender_phone,
<<<<<<< HEAD
      sender_email,
      receiver_name,
      receiver_phone,
      receiver_address,
      product_name,
      product_price,
      quantity,
      volume,
      others,
=======
      product_name,
>>>>>>> 8e6ce78ff8a0b25b3035999d02f64a53a873fc71
      status
    };
    this.setState({
      loading: "false"
    });
  }

  mailButton = () => {
    return this.props.history.push(window.location.pathname + "/addMail");
  };

  renderRow() {
<<<<<<< HEAD
    console.log(this.testdata.sender_name);
    return (
      <MailRow
        sender_name={this.testdata.sender_name}
        sender_phone = {this.testdata.sender_phone}
        sender_email = {this.testdata.sender_email}
        sender_address = {this.testdata.sender_address}
        receiver_name = {this.testdata.receiver_name}
        receiver_phone = {this.testdata.receiver_phone}
        receiver_address = {this.testdata.receiver_address}
        product_name = {this.testdata.product_name}
        product_price = {this.testdata.product_price}
        quantity = {this.testdata.quantity}
        volume = {this.testdata.volume}
        others = {this.testdata.others}
        status = {this.testdata.status}
=======
    console.log(this.testdata);
    console.log(this.props.sender_address);
    return (
      <MailRow
        sender_name={this.props.sender_name}
        sender_address={this.props.sender_address}
        sender_phone={this.props.sender_phone}
        product_name={this.props.product_name}
        status={this.props.status}
>>>>>>> 8e6ce78ff8a0b25b3035999d02f64a53a873fc71
      />
    );
  }

  render() {
    if (this.state.loading === "initial") {
      console.log(
        "This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM."
      );
      return <h2>Intializing...</h2>;
    }
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <Button
          icon
          labelPosition="left"
          onClick={this.mailButton}
          basic
          color="purple"
          floated="left"
          style={{ marginBottom: "10px" }}
        >
          <Icon name="add" />
          택배 접수
        </Button>
<<<<<<< HEAD
=======

        <Button onClick={this.getMail} basic color="purple">
          <Icon name="add" />
          확인
        </Button>
>>>>>>> 8e6ce78ff8a0b25b3035999d02f64a53a873fc71

        <Table>
          <Header>
            <Row>
              <HeaderCell style={{ minWidth: "6em" }}>받는 사람</HeaderCell>
              <HeaderCell>주소</HeaderCell>
              <HeaderCell style={{ minWidth: "9em" }}>연락처</HeaderCell>
              <HeaderCell style={{ minWidth: "6em" }}>상품명</HeaderCell>
              <HeaderCell style={{ minWidth: "6em" }}>배송 상태</HeaderCell>
              <HeaderCell style={{ minWidth: "7em" }}>QR코드</HeaderCell>
              <HeaderCell style={{ minWidth: "7em" }}>상세 정보</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRow()}</Body>
        </Table>
      </Layout>
    );
  }
}

export default mailList;
