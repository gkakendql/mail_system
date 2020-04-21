import React, { Component } from "react";
import Layout from "../components/Layout";
import {
  Table,
  Icon,
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Input,
  Container
} from "semantic-ui-react";
import { post } from "axios";

class mailInform extends Component {

  constructor(props) {
    super();
    this.state = {
      loading: "initial"
    };
  }
  async componentWillMount(props) {
    console.log(this);
    const url = "/api/getmail";
    const formData = new FormData();
    formData.append("address", this.props.match.params.address);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    let response = await post(url, formData, config);
    console.log(response);

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

    if(response.data.mailInfos[6] === false) {
      status = "배송중";
    }
    else {
      status="배송 완료";
    }

    this.testdata = {
      sender_name,
      sender_address,
      sender_phone,
      sender_email,
      receiver_name,
      receiver_phone,
      receiver_address,
      product_name,
      product_price,
      quantity,
      volume,
      others,
      status
    };
    console.log(this.testdata.sender_name)
    this.setState({
      loading: "false"
    });
  }

  mailButton = () => {
    return this.props.history.push(window.location.pathname + "/addMail");
  };

  renderRow() {
    console.log(this);
  }

  exit = () => {
    window.close();
  }


  render() {
    if (this.state.loading === "initial") {
      console.log(
        "This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM."
      );
      return <h2>Intializing...</h2>;
    }
    return (
      <Container style={{width:"800px", padding:40}}>
        <Table basic style={{ width: "500px" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={4}>보내는 분</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign="center">이름</Table.Cell>
              <Table.Cell>{this.testdata.sender_name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">연락처</Table.Cell>
              <Table.Cell>{this.testdata.sender_phone}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">이메일</Table.Cell>
              <Table.Cell>{this.testdata.sender_email}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="top">
              <Table.Cell textAlign="center">주소</Table.Cell>
              <Table.Cell verticalAlign="top">{this.testdata.sender_address}</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">받는 분</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign="center">이름</Table.Cell>
              <Table.Cell>{this.testdata.receiver_name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">연락처</Table.Cell>
              <Table.Cell>{this.testdata.receiver_phone}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="top">
              <Table.Cell textAlign="center">주소</Table.Cell>
              <Table.Cell verticalAlign="top">{this.testdata.receiver_address}</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">상품 정보</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign="center">상품명</Table.Cell>
              <Table.Cell>{this.testdata.product_name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">상품가격</Table.Cell>
              <Table.Cell>{this.testdata.product_price}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">포장수량</Table.Cell>
              <Table.Cell>{this.testdata.quantity}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">부피</Table.Cell>
              <Table.Cell>{this.testdata.volume}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="top">
              <Table.Cell textAlign="center">특이사항</Table.Cell>
              <Table.Cell>{this.testdata.others}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button color="red" basic onClick={this.exit}>
          닫기
        </Button>
      </Container>
    );
  }
}

export default mailInform;
