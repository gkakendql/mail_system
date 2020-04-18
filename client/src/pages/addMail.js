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

const DesktopContainer = ({ children, getWidth, state }) => (
  <Responsive
    fireOnMount
    getWidth={getWidth}
    minWidth={Responsive.onlyTablet.minWidth}
  >
    <Layout>
      <Link to="/mail/:address">
        <Button basic color='purple'>뒤로 가기(임시)</Button>
      </Link>


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
                  <Input id="Sname" style={{ minWidth: "30em" }} />
                </Form.Field>
                <Form.Group inline>
                  <Form.Field>
                    <label style={{ minWidth: "6em" }}>연락처</label>
                    <Input id="Sp1" style={{ maxWidth: "5em" }} />
                  </Form.Field>
                  <Form.Field>
                    <label>-</label>
                    <Input id="Sp2" style={{ maxWidth: "5em" }} />
                  </Form.Field>
                  <Form.Field>
                    <label>-</label>
                    <Input id="Sp3" style={{ maxWidth: "5em" }} />
                  </Form.Field>
                </Form.Group>
                <Form.Field inline>
                  <label style={{ minWidth: "6em" }}>이메일</label>
                  <Input id="Semail" style={{ minWidth: "30em" }} />
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
                      value={state.Spost}
                      style={{ maxWidth: "8em" }}
                    />
                  </Form.Field>
                  <Button onClick={senderJusoPopup}>Submit</Button>
                </Form.Group>
                <Form.Field inline>
                  <label style={{ minWidth: "6em" }}></label>
                  <Input
                    id="Saddr1"
                    value={state.Saddr1}
                    style={{ minWidth: "30em" }}
                  />
                </Form.Field>
                <Form.Field inline>
                  <label style={{ minWidth: "6em" }}></label>
                  <Input id="Saddr2" style={{ minWidth: "30em" }} />
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
                  <Input id="Rname" style={{ minWidth: "30em" }} />
                </Form.Field>
                <Form.Group inline>
                  <Form.Field>
                    <label style={{ minWidth: "6em" }}>연락처</label>
                    <Input id="Rp1" style={{ maxWidth: "5em" }} />
                  </Form.Field>
                  <Form.Field>
                    <label>-</label>
                    <Input id="Rp2" style={{ maxWidth: "5em" }} />
                  </Form.Field>
                  <Form.Field>
                    <label>-</label>
                    <Input id="Rp3" style={{ maxWidth: "5em" }} />
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
                      value={state.Rpost}
                      style={{ maxWidth: "8em" }}
                    />
                  </Form.Field>
                  <Button onClick={receiverJusoPopup}>Submit</Button>
                </Form.Group>
                <Form.Field inline>
                  <label style={{ minWidth: "6em" }}></label>
                  <Input
                    id="Raddr1"
                    value={state.Raddr1}
                    style={{ minWidth: "30em" }}
                  />
                </Form.Field>
                <Form.Field inline>
                  <label style={{ minWidth: "6em" }}></label>
                  <Input id="Raddr2" style={{ minWidth: "30em" }} />
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
                  <Input id="Iname" style={{ minWidth: "30em" }} />
                </Form.Field>
                <Form.Group inline>
                  <Form.Field>
                    <label style={{ minWidth: "6em" }}>상품가격</label>
                    <Input id="Iprice" style={{ maxWidth: "15em" }} />
                  </Form.Field>
                  <Form.Field>
                    <label>원</label>
                  </Form.Field>
                </Form.Group>
                <Form.Group inline>
                  <Form.Field>
                    <label style={{ minWidth: "6em" }}>포장수량</label>
                    <Input id="Iamount" style={{ maxWidth: "15em" }} />
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
                  />
                </Form.Field>
                <Form.Field inline>
                  <label style={{ minWidth: "6em" }}>특이사항 기재</label>
                  <Input id="Ietc" style={{ minWidth: "30em" }} />
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
                  />
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
    {children}
  </Responsive>
);

const MobileContainer = ({ children, getWidth, state }) => (
  <Responsive
    fireOnMount
    getWidth={getWidth}
    maxWidth={Responsive.onlyMobile.maxWidth}
  >
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
                <label style={{ minWidth: "5em" }}>이름</label>
                <Input id="Sname" style={{ minWidth: "15em" }} />
              </Form.Field>
              <Form.Group inline>
                <Form.Field>
                  <label style={{ minWidth: "5em" }}>연락처</label>
                  <Input id="Sp1" style={{ maxWidth: "5em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input id="Sp2" style={{ maxWidth: "5em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input id="Sp3" style={{ maxWidth: "5em" }} />
                </Form.Field>
              </Form.Group>
              <Form.Field inline>
                <label style={{ minWidth: "5em" }}>이메일</label>
                <Input id="Semail" style={{ minWidth: "15em" }} />
              </Form.Field>
            </Form>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Form>
              <Form.Group inline>
                <Form.Field>
                  <label style={{ minWidth: "5em" }}>주소</label>
                  <Input
                    id="Szip"
                    value={state.Spost}
                    style={{ maxWidth: "8em" }}
                  />
                </Form.Field>
                <Button onClick={senderJusoPopup}>Submit</Button>
              </Form.Group>
              <Form.Field inline>
                <label style={{ minWidth: "5em" }}></label>
                <Input
                  id="Saddr1"
                  value={state.Saddr1}
                  style={{ minWidth: "15em" }}
                />
              </Form.Field>
              <Form.Field inline>
                <label style={{ minWidth: "5em" }}></label>
                <Input id="Saddr2" style={{ minWidth: "15em" }} />
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
                <label style={{ minWidth: "5em" }}>이름</label>
                <Input id="Rname" style={{ minWidth: "15em" }} />
              </Form.Field>
              <Form.Group inline>
                <Form.Field>
                  <label style={{ minWidth: "5em" }}>연락처</label>
                  <Input id="Rp1" style={{ maxWidth: "5em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input id="Rp2" style={{ maxWidth: "5em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input id="Rp3" style={{ maxWidth: "5em" }} />
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
                  <label style={{ minWidth: "5em" }}>주소</label>
                  <Input
                    id="Rzip"
                    value={state.Rpost}
                    style={{ maxWidth: "8em" }}
                  />
                </Form.Field>
                <Button onClick={receiverJusoPopup}>Submit</Button>
              </Form.Group>
              <Form.Field inline>
                <label style={{ minWidth: "5em" }}></label>
                <Input
                  id="Raddr1"
                  value={state.Raddr1}
                  style={{ minWidth: "15em" }}
                />
              </Form.Field>
              <Form.Field inline>
                <label style={{ minWidth: "5em" }}></label>
                <Input id="Raddr2" style={{ minWidth: "15em" }} />
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
                <Input id="Iname" style={{ minWidth: "15em" }} />
              </Form.Field>
              <Form.Group inline>
                <Form.Field>
                  <label style={{ minWidth: "6em" }}>상품가격</label>
                  <Input id="Iprice" style={{ maxWidth: "15em" }} />
                </Form.Field>
                <Form.Field>
                  <label>원</label>
                </Form.Field>
              </Form.Group>
              <Form.Group inline>
                <Form.Field>
                  <label style={{ minWidth: "6em" }}>포장수량</label>
                  <Input id="Iamount" style={{ maxWidth: "10em" }} />
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
                />
              </Form.Field>
              <Form.Field inline>
                <label style={{ minWidth: "6em" }}>특이사항 기재</label>
                <Input id="Ietc" style={{ minWidth: "15em" }} />
              </Form.Field>
            </Form>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Form>
              <Form.Field inline>
                <label style={{ minWidth: "6em" }}>비밀번호</label>
                <Input id="pass" type="password" style={{ minWidth: "15em" }} />
              </Form.Field>
            </Form>
          </Table.Cell>
          <Table.Cell>
            <Button attached="bottom">접수 완료</Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    {children}
  </Responsive>
);

const ResponsiveContainer = ({ children, getWidth, state }) => (
  <React.Fragment>
    <DesktopContainer getWidth={getWidth} state={state}>
      {children}
    </DesktopContainer>
    <MobileContainer getWidth={getWidth} state={state}>
      {children}
    </MobileContainer>
  </React.Fragment>
);

const Homepage = ({ deviceInfo, isMobileFromSSR, state }) => (
  <React.Fragment>
    <Head>
      <title>Semantic UI React: Responsive & SSR</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
    </Head>

    <Container>
      <ResponsiveContainer
        getWidth={getWidthFactory(isMobileFromSSR)}
        state={state}
      />
    </Container>
  </React.Fragment>
);

const getWidthFactory = isMobileFromSSR => () => {
  const isSSR = typeof window === "undefined";
  const ssrValue = isMobileFromSSR
    ? Responsive.onlyMobile.maxWidth
    : Responsive.onlyTablet.minWidth;

  return isSSR ? ssrValue : window.innerWidth;
};

Homepage.getInitialProps = async ({ req }) => {
  const md = new MobileDetect(req.headers["user-agent"]);
  const isMobileFromSSR = !!md.mobile();

  return {
    isMobileFromSSR,
    deviceInfo: {
      mobile: md.mobile(),
      tablet: md.tablet(),
      os: md.os(),
      userAgent: md.userAgent()
    }
  };
};

function senderJusoPopup() {
  opt = 0;
  window.open("juso", "주소창", "width=508, height=453, location = no");
}

function receiverJusoPopup() {
  opt = 1;
  window.open("juso", "주소창", "width=508, height=453, location = no");
}

class App extends Component {
  state = {
    Spost: "",
    Saddr1: "",
    Rpost: "",
    Raddr1: ""
  };

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

  render() {
    window.testF = this.testF;
    return <Homepage state={this.state} />;
  }
}

export default App;
