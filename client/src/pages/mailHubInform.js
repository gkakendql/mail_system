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
    super(props);
    this.state = {
      next: ""
    };
  }

  addHub = async () => {
    const url = "/api/addhub";
    const formData = new FormData();
    formData.append("hub", this.state.next);
    formData.append("index", this.props.location.state.index);
    formData.append("address", this.props.match.params.address);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    await post(url, formData, config);
    window.close();
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.id] = e.target.value;
    this.setState(nextState);
  };

  exit = () => {
    window.close();
  };

  render() {
    this.props.history.block();
    console.log(this.props.location.state);

    return (
      <Container style={{ width: "800px", padding: 40 }}>
        <Table basic>
          <Table.Header />
          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign="center">이전 터미널</Table.Cell>
              <Table.Cell textAlign="center">
                {this.props.location.state.data.hub}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {this.props.location.state.data.hub_time}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">다음 터미널</Table.Cell>
              <Table.Cell textAlign="center">
                <Input
                  id="next"
                  style={{ minWidth: "30em" }}
                  value={this.state.next}
                  onChange={this.handleValueChange}
                />
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Button onClick={this.addHub} >
                  다음 터미널 등록 (임시)
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">배송 주소</Table.Cell>
              <Table.Cell width="10" textAlign="center">
                {this.props.location.state.data.receiverAddress}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default mailInform;
