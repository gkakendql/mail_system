import React, {Component} from 'react';
import { Input, Form, Button, Table, Dropdown, Label, Icon } from "semantic-ui-react";
import { post } from 'axios';

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      name: '',
      p1: '',
      p2: '',
      p3: '',
      email: ''
    }
  }

  addUser = () => {
    const url = '/api/users';
    const formData = new FormData();
    formData.append('id', this.state.id);
    formData.append('pw', this.state.pw);
    formData.append('name', this.state.name);
    formData.append('p1', this.state.p1);
    formData.append('p2', this.state.p2);
    formData.append('p3', this.state.p3);
    formData.append('email', this.state.email);
  }

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
                <Form onSubmit={this.onSubmit}>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>아이디</label>
                    <Input
                      icon='user' iconPosition='left'
                      style={{ minWidth: "30em" }}
                      onChange={event => this.setState({ this.handleValueChange})}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>비밀번호</label>
                    <Input
                      icon='lock'
                      iconPosition='left'
                      type='password'
                      style={{ minWidth: "30em" }}
                      onChange={event => this.setState({ this.handleValueChange})}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이름</label>
                    <Input style={{ minWidth: "30em" }}
                      onChange={event => this.setState({ this.handleValueChange})}
                    />
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>연락처</label>
                      <Input style={{ maxWidth: "5em" }}
                        onChange={event => this.setState({ this.handleValueChange})}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "5em" }}
                        onChange={event => this.setState({ this.handleValueChange})}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "5em" }}
                        onChange={event => this.setState({ this.handleValueChange})}
                      />
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이메일</label>
                    <Input
                      icon='at'
                      iconPosition='left'
                      placeholder='Email'
                      style={{ minWidth: "30em" }}
                      onChange={event => this.setState({ this.handleValueChange})}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Button attached='bottom'>접수 완료</Button>
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>

          </Table.Body>

        </Table>

      </Layout>

    )
  }
}

export default UserAdd;
