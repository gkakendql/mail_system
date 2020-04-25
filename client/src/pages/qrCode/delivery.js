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

class delivery extends Component {

  render() {
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
              <Table.Cell>김*</Table.Cell>
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
              <Table.Cell>최*</Table.Cell>
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
              <Table.Cell>아이패드</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell textAlign="center">포장수량</Table.Cell>
              <Table.Cell>1개</Table.Cell>
            </Table.Row>

          </Table.Body>

        </Table>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>배송 상태</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">단계</Table.Cell>
              <Table.Cell textAlign="center">처리</Table.Cell>
              <Table.Cell textAlign="center">상품상태</Table.Cell>
              <Table.Cell textAlign="center">담당 점소</Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>


            <Table.Row>
              <Table.Cell textAlign="center">상품인수</Table.Cell>
              <Table.Cell textAlign="center">2020-04-15 18:34:11"</Table.Cell>
              <Table.Cell textAlign="center">보내시는 고객으로부터 상품을 인수받았습니다.</Table.Cell>
              <Table.Cell textAlign="center">서울강남</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell textAlign="center">상품 이동중</Table.Cell>
              <Table.Cell textAlign="center">2020-04-16 01:11:12"</Table.Cell>
              <Table.Cell textAlign="center">배송지역으로 상품이 이동중입니다.</Table.Cell>
              <Table.Cell textAlign="center">청원HUB</Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>



        <Button color="red" basic onClick={this.exit} style={{ marginTop: "10px" }}>
          닫기
        </Button>
      </Container>
    );
  }
}

export default delivery;
