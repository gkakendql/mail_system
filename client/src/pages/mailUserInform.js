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
              </Table.Body>
            </Table>

            <Table basic style={{ width: "700px" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={4}>배송상태</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell textAlign="center">단계</Table.Cell>
                  <Table.Cell textAlign="center">처리</Table.Cell>
                  <Table.Cell textAlign="center">상품상태</Table.Cell>
                  <Table.Cell textAlign="center">담당 점소</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">상품인수</Table.Cell>
                  <Table.Cell textAlign="center">2020-04-15 18:00</Table.Cell>
                  <Table.Cell textAlign="center">고객으로부터 상품을 인수 받았습니다.</Table.Cell>
                  <Table.Cell textAlign="center">서울 강남</Table.Cell>
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
