import React, { Component } from "react";
import {
  Input,
  Form,
  Button,
  Table,
  Dropdown,
  Label,
  Icon
} from "semantic-ui-react";
import { post } from "axios";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3'

let address;

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      name: "",
      p1: "",
      p2: "",
      p3: "",
      email: ""
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.makeAddress();
    this.addUser().then(response => {
      console.log(response.data);
    });
    this.setState({
      id: "",
      pw: "",
      name: "",
      p1: "",
      p2: "",
      p3: "",
      email: ""
    });
    address= "";
    //window.location.reload();
  };

  makeAddress = async () => {
    const accounts = await web3.eth.getAccounts();
    const test = await factory.methods.createMail();
    address = await test.call();
    console.log(address);
    test.send({
      from: accounts[0]
    });
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  addUser = async () => {
    const url = "/api/users";
    const formData = new FormData();
    formData.append("id", this.state.id);
    formData.append("pw", this.state.pw);
    formData.append("name", this.state.name);
    formData.append("p1", this.state.p1);
    formData.append("p2", this.state.p2);
    formData.append("p3", this.state.p3);
    formData.append("email", this.state.email);
    formData.append("address", address);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  };

  render() {
    return (
      <Layout>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">회원가입</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Form onSubmit={this.handleFormSubmit}>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>아이디</label>
                    <Input
                      icon="user"
                      iconPosition="left"
                      name="id"
                      style={{ minWidth: "30em" }}
                      value={this.state.id}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>비밀번호</label>
                    <Input
                      icon="lock"
                      name="pw"
                      iconPosition="left"
                      type="password"
                      value={this.state.pw}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이름</label>
                    <Input
                      style={{ minWidth: "30em" }}
                      name="name"
                      value={this.state.name}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>연락처</label>
                      <Input
                        style={{ maxWidth: "5em" }}
                        name="p1"
                        value={this.state.p1}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input
                        style={{ maxWidth: "5em" }}
                        name="p2"
                        value={this.state.p2}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input
                        style={{ maxWidth: "5em" }}
                        name="p3"
                        value={this.state.p3}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이메일</label>
                    <Input
                      icon="at"
                      name="email"
                      iconPosition="left"
                      placeholder="Email"
                      style={{ minWidth: "30em" }}
                      value={this.state.email}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Button type="submit" basic color="violet">
                      접수 완료
                    </Button>
                    <Link to="/">
                      <Button type="submit" basic color="teal">
                        홈으로{" "}
                      </Button>
                    </Link>
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Layout>
    );
  }
}

export default signUp;
