import React, { Component } from "react";
import Layout from "../../components/Layout";
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

class mailDeliveryInform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      loading: false
    };
  }

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.id] = e.target.value;
    this.setState(nextState);
  };

  addMail = async () => {
    this.setState({ loading: true });
    console.log("1111111");
    const url = "/api/complete";
    const formData = new FormData();
    formData.append("password", this.state.password);
    formData.append("index", this.props.location.state.index);
    formData.append("address", this.props.match.params.address);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    let response = await post(url, formData, config);

    if(response.result == "true"){
      window.close();
    }

    else{
      this.setState({ loading: false });
      alert("비밀번호가 틀렸습니다.");
    }
  };

  render() {
    this.props.history.block();
    let read = () => {
      console.log(this.props.location.state.data);
    };

    return (
      <Container style={{ width: "800px", padding: 40 }}>
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
              <Table.Cell>
                {this.props.location.state.data.senderName}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">연락처</Table.Cell>
              <Table.Cell>
                {this.props.location.state.data.senderPhone}
              </Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="top">
              <Table.Cell textAlign="center">주소</Table.Cell>
              <Table.Cell verticalAlign="top">
                {this.props.location.state.data.senderAddress}
              </Table.Cell>
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
              <Table.Cell>
                {this.props.location.state.data.receiverName}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">연락처</Table.Cell>
              <Table.Cell>
                {this.props.location.state.data.receiverPhone}
              </Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="top">
              <Table.Cell textAlign="center">주소</Table.Cell>
              <Table.Cell verticalAlign="top">
                {this.props.location.state.data.receiverAddress}
              </Table.Cell>
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
              <Table.Cell>
                {this.props.location.state.data.productName}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">포장수량</Table.Cell>
              <Table.Cell>{this.props.location.state.data.quantity}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">비밀번호</Table.Cell>
              <Table.Cell>
                <Form>
                  <Input
                    value={this.state.password}
                    onChange={this.handleValueChange}
                    type="password"
                    id="password"
                  />
                </Form>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Button color="red" basic onClick={this.addMail} loading={this.state.loading}>
          배송 완료
        </Button>
      </Container>
    );
  }
}

export default mailDeliveryInform;
