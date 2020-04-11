import MobileDetect from "mobile-detect";
import Head from "next/head";
import React, { Component } from "react";
import Layout from "../components/Layout";
import {
  Container,
  Message,
  Responsive,
  Input,
  Form,
  Button,
  Table,
  Dropdown,
  Segment
} from "semantic-ui-react";
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

const DesktopContainer = ({ children, getWidth }) => (
  <Responsive
    fireOnMount
    getWidth={getWidth}
    minWidth={Responsive.onlyTablet.minWidth}
  >
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
                  <Button onClick={jusoPopup}>Submit</Button>
                </Form.Group>
                <Form.Field inline>
                  <label style={{ minWidth: "6em" }}></label>
                  <Input id="sendAddr" style={{ minWidth: "30em" }} />
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
                  <Dropdown
                    style={{ minWidth: "5em" }}
                    selection
                    options={gdsVol}
                  />
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
    {children}
  </Responsive>
);

const MobileContainer = ({ children, getWidth }) => (
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
                <Input style={{ minWidth: "15em" }} />
              </Form.Field>
              <Form.Group inline>
                <Form.Field>
                  <label style={{ minWidth: "5em" }}>연락처</label>
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
                <label style={{ minWidth: "5em" }}>이메일</label>
                <Input style={{ minWidth: "15em" }} />
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
                  <Input style={{ maxWidth: "5em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input style={{ maxWidth: "5em" }} />
                </Form.Field>
              </Form.Group>
              <Form.Field inline>
                <label style={{ minWidth: "5em" }}></label>
                <Input style={{ minWidth: "15em" }} />
              </Form.Field>
              <Form.Field inline>
                <label style={{ minWidth: "5em" }}></label>
                <Input style={{ minWidth: "15em" }} />
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
                <Input style={{ minWidth: "15em" }} />
              </Form.Field>
              <Form.Group inline>
                <Form.Field>
                  <label style={{ minWidth: "5em" }}>연락처</label>
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
                  <label style={{ minWidth: "5em" }}>주소</label>
                  <Input style={{ maxWidth: "5em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input style={{ maxWidth: "5em" }} />
                </Form.Field>
              </Form.Group>
              <Form.Field inline>
                <label style={{ minWidth: "5em" }}></label>
                <Input style={{ minWidth: "15em" }} />
              </Form.Field>
              <Form.Field inline>
                <label style={{ minWidth: "5em" }}></label>
                <Input style={{ minWidth: "15em" }} />
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
                <Input style={{ minWidth: "15em" }} />
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
                  <Input style={{ maxWidth: "10em" }} />
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
                <Input style={{ minWidth: "15em" }} />
              </Form.Field>
            </Form>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Form>
              <Form.Field inline>
                <label style={{ minWidth: "6em" }}>비밀번호</label>
                <Input style={{ minWidth: "15em" }} />
              </Form.Field>
            </Form>
          </Table.Cell>
          <Table.Cell />
          <Table.Cell />
          <Table.Cell>
            <Form>
              <Form.Field inline>
                <label></label>
              </Form.Field>
              <Form.Field inline>
                <label></label>
              </Form.Field>
              <Form.Field inline>
                <label></label>
              </Form.Field>
            </Form>
            <Button attached="bottom">접수 완료</Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    {children}
  </Responsive>
);

const ResponsiveContainer = ({ children, getWidth }) => (
  <React.Fragment>
    <DesktopContainer getWidth={getWidth}>{children}</DesktopContainer>
    <MobileContainer getWidth={getWidth}>{children}</MobileContainer>
  </React.Fragment>
);

const Homepage = ({ deviceInfo, isMobileFromSSR }) => (
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
      <ResponsiveContainer getWidth={getWidthFactory(isMobileFromSSR)} />
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

function jusoPopup() {
  window.open("juso", "주소창", "width=508, height=453, location = no");
}

class App extends Component {
  componentDidUpdate() {
    //주소 갱신하는거 넣어야함
    window.addEventListener("message");
  }
  render() {
    return <Homepage />;
  }
}

export default App;
