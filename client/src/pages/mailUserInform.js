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
  Container,
  Dimmer,
  Loader
} from "semantic-ui-react";
import ShipRow from "../components/List/ShipRow";
import { post } from "axios";

class mailInform extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: "initial"
    };
  }
  async componentWillMount(props) {
    const url = "/api/getallhub";
    const formData = new FormData();
    formData.append("address", this.props.match.params.address);
    formData.append("index", this.props.location.state.index);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    let response = await post(url, formData, config);
    console.log(response.data);
    if (response.data.length != 0) {
      let data = response.data.datas;
      let comp = response.data.comp;
      let length = response.data.length;

      this.testdata = {
        data,
        comp,
        length
      };
    } else {
      let length = response.data.length;
      this.testdata = {
        length
      };
    }
    console.log("aaaaaaaaaaaa");
    this.setState({
      loading: "false"
    });
  }

  exit = () => {
    window.close();
  };

  renderRow() {
    console.log(this.testdata);
    if (this.testdata.length != 0) {
      return this.testdata.data.map((data, index) => {
        return <ShipRow data={data} key={index} index={index} />;
      });
    }
  }

  render() {
    this.props.history.block();
    let read = () => {
      console.log(this.props.location.state.data);
    };

    if (this.state.loading === "initial") {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

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
          </Table.Body>
        </Table>

        <Table basic style={{ width: "700px" }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={4}>배송상태</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell style={{ minWidth: "3em" }}>
                단계
              </Table.HeaderCell>
              <Table.HeaderCell style={{ minWidth: "6em" }}>
                처리
              </Table.HeaderCell>
              <Table.HeaderCell style={{ minWidth: "9em" }}>
                상품상태
              </Table.HeaderCell>
              <Table.HeaderCell style={{ minWidth: "4em" }}>
                담당 점소
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderRow()}</Table.Body>
        </Table>

        <Button color="red" basic onClick={this.exit}>
          닫기
        </Button>
      </Container>
    );
  }
}

export default mailInform;
