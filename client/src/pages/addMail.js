import MobileDetect from "mobile-detect";
import Head from "next/head";
import React, { Component } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  Container,
  Responsive,
  Input,
  Form,
  Button,
  Table,
  Dropdown
} from "semantic-ui-react";

let opt;

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



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender_name: "",
      sender_p1: "",
      sender_p2: "",
      sender_p3: "",
      receiver_name: "",
      receiver_p1: "",
      receiver_p2: "",
      receiver_p3: "",
      receiver_address: "",
      product_name: "",
      product_price: "",
      quantity: "",
      volume: "",
      others: "",
      password: "",

      Spost: "",
      Saddr1: "",
      Saddr2: "",
      Rpost: "",
      Raddr1: "",
      Raddr2: "",
    };
  }


   senderJusoPopup = () => {
    opt = 0;
    window.open("../../juso", "주소창", "width=508, height=453, location = no");
  }

  receiverJusoPopup = () => {
    opt = 1;
    window.open("../../juso", "주소창", "width=508, height=453, location = no");
  }


  handleValueChange = (e) => {

  }



  testF = data => {
    console.log(this);
    if (opt === 0) {
      this.setState({
        Spost: data.zonecode,
        Saddr1: data.address
      });
      console.log(this.state);
    } else {
      this.setState({
        Rpost: data.zonecode,
        Raddr1: data.address
      });
      console.log(this.state);
    }
  };

  testB = () => {
    this.props.history.goBack();
  };

  render() {

    return (
      <Layout>
          <Button basic onClick={window.testB} color='purple'>뒤로 가기(임시)</Button>


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
                    <Input id="Sname" style={{ minWidth: "30em" }}
                      value={this.state.sender_name}
                      onChange={this.handleValueChange}/>
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>연락처</label>
                      <Input id="Sp1" style={{ maxWidth: "5em" }}
                        value={this.state.sender_p1}
                        onChange={this.handleValueChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input id="Sp2" style={{ maxWidth: "5em" }}
                        value={this.state.sender_p2}
                        onChange={this.handleValueChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input id="Sp3" style={{ maxWidth: "5em" }}
                        value={this.state.sender_p3}
                        onChange={this.handleValueChange}/>
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이메일</label>
                    <Input id="Semail" style={{ minWidth: "30em" }}
                      value={this.state.sender_email}
                      onChange={this.handleValueChange}/>
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
                      <Input
                        id="Szip"
                        value={this.state.Spost}
                        style={{ maxWidth: "8em" }}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Button onClick={this.senderJusoPopup}>Submit</Button>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input
                      id="Saddr1"
                      value={this.state.Saddr1}
                      onChange={this.handleValueChange}
                      style={{ minWidth: "30em" }}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input id="Saddr2" style={{ minWidth: "30em" }}
                      value={this.state.Saddr2}
                      onChange={this.handleValueChange}/>
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
                    <Input id="Rname" style={{ minWidth: "30em" }}
                      value={this.state.receiver_name}
                      onChange={this.handleValueChange}/>
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>연락처</label>
                      <Input id="Rp1" style={{ maxWidth: "5em" }}
                        value={this.state.receiver_p1}
                        onChange={this.handleValueChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input id="Rp2" style={{ maxWidth: "5em" }}
                        value={this.state.receiver_p2}
                        onChange={this.handleValueChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input id="Rp3" style={{ maxWidth: "5em" }}
                        value={this.state.receiver_p3}
                        onChange={this.handleValueChange}/>
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
                      <Input
                        id="Rzip"
                        value={this.state.Rpost}
                        onChange={this.handleValueChange}
                        style={{ maxWidth: "8em" }}
                      />
                    </Form.Field>
                    <Button onClick={this.receiverJusoPopup}>Submit</Button>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input
                      id="Raddr1"
                      value={this.state.Raddr1}
                      onChange={this.handleValueChange}
                      style={{ minWidth: "30em" }}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input id="Raddr2" style={{ minWidth: "30em" }}
                      value={this.state.Raddr2}
                      onChange={this.handleValueChange}/>
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
                    <Input id="Iname" style={{ minWidth: "30em" }}
                      value={this.state.RZz}
                      onChange={this.handleValueChange}/>
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>상품가격</label>
                      <Input id="Iprice" style={{ maxWidth: "15em" }}
                        value={this.state.product_price}
                        onChange={this.handleValueChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>원</label>
                    </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>포장수량</label>
                      <Input id="Iamount" style={{ maxWidth: "15em" }}
                        value={this.state.quantity}
                        onChange={this.handleValueChange}/>
                    </Form.Field>
                    <Form.Field>
                      <label>박스 (BOX)</label>
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>부피</label>
                    <Dropdown
                      style={{ minWidth: "5em" }}
                      selection
                      options={gdsVol}
                      onChange={this.handleValueChange}/>
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>특이사항 기재</label>
                    <Input id="Ietc" style={{ minWidth: "30em" }}
                      value={this.state.others}
                      onChange={this.handleValueChange}/>
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>비밀번호</label>
                    <Input
                      id="pass"
                      type="password"
                      style={{ minWidth: "30em" }}
                      value={this.state.password}
                      onChange={this.handleValueChange}/>

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

export default App;
