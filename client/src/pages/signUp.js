import React, { Component } from "react";
import { Input, Form, Button, Table, Message } from "semantic-ui-react";
import { post } from "axios";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

let address;

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      loading: false,
      success: false,
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

    //window.location.reload();
  };

  makeAddress = async () => {
    this.setState({ loading: true });
    try {
      const response = await post("/api/address");
      console.log(response);
      address = response.data;
      console.log(address);
      this.setState({ success: true });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });

    if (this.state.success === true) {
      this.addUser().then(response => {
        //console.log(response.data);
      });
      alert("가입 완료");
    }

    this.setState({
      id: "",
      pw: "",
      name: "",
      p1: "",
      p2: "",
      p3: "",
      email: "",
      success: false
    });
    address = "";
    console.log(address);
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  addUser = () => {
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
                <Form
                  onSubmit={this.handleFormSubmit}
                  error={this.state.errorMessage}
                >
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
                    <Message
                      error
                      header="Oops!"
                      content={this.state.errorMessage}
                    />
                    <Button
                      loading={this.state.loading}
                      type="submit"
                      basic
                      color="violet"
                    >
                      가입 완료
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
