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

class mailInform extends Component {

  exit = () => {
    window.close();
  }


  render() {
  this.props.history.block();
  let  read = ()  =>{
      console.log(this.props.location.state.data);
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
                  <Table.Cell>{this.props.location.state.data.senderName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">연락처</Table.Cell>
                  <Table.Cell>{this.props.location.state.data.senderPhone}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">이메일</Table.Cell>
                  <Table.Cell>{this.props.location.state.data.senderEmail}</Table.Cell>
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
                  <Table.Cell>{this.props.location.state.data.receiverName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">연락처</Table.Cell>
                  <Table.Cell>{this.props.location.state.data.receiverPhone}</Table.Cell>
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
                  <Table.Cell>{this.props.location.state.data.productName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">포장수량</Table.Cell>
                  <Table.Cell>{this.props.location.state.data.quantity}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">부피</Table.Cell>
                  <Table.Cell>          {" "}
                            {(() => {
                              switch (this.props.location.state.data.weight) {
                                case "1":
                                  return "극소";
                                case "2":
                                  return "소";
                                case "3":
                                  return "중";
                                case "4":
                                  return "대";
                              }
                            })()}</Table.Cell>
                </Table.Row>
                <Table.Row verticalAlign="top">
                  <Table.Cell textAlign="center">특이사항</Table.Cell>
                  <Table.Cell>{this.props.location.state.data.other}</Table.Cell>
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
