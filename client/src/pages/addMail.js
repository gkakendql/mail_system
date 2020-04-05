import React, { Component } from "react";
import Layout from "../components/Layout";
import { Input, Form, Button, Table, Dropdown } from "semantic-ui-react";
import factory from "../ethereum/factory";

const gdsVol = [
  {
    key: "ss",
    text: "극소",
    value: "1"
  },
  {
    key: "sm",
    text: "소",
    value: "2"
  },
  {
    key: "mid",
    text: "중",
    value: "3"
  },
  {
    key: "big",
    text: "대",
    value: "4"
  }
];

class AddMail extends Component {
  render() {
    return (
      <Layout>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">보내는 분</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이름</label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>연락처</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이메일</label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>주소</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                </Form>
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
              <Table.Cell>
                <Form>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이름</label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>연락처</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>주소</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "6em" }} />
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                </Form>
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
              <Table.Cell>
                <Form>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>상품명</label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>상품가격</label>
                      <Input style={{ maxWidth: "15em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>원</label>
                    </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>포장수량</label>
                      <Input style={{ maxWidth: "15em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>박스 (BOX)</label>
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>부피</label>
                    <Dropdown style={{ minWidth: "5em" }} selection options={gdsVol}/>
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>특이사항 기재</label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>비밀번호</label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Button attached="bottom">접수 완료</Button>
            </Table.Row>
          </Table.Body>
        </Table>
      </Layout>
    );
  }
}

export default AddMail;
