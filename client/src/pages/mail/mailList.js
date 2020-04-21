import React, { Component } from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import MailRow from "../../components/List/MailRow";
import { Link } from "react-router-dom";
import { post } from "axios";
import mailInform  from "../mailInform";

class mailList extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: "initial"
    };
  }
  async componentWillMount(props) {
    //console.log(this);
    const url = "/api/getmail";
    const formData = new FormData();
    formData.append("address", this.props.match.params.address);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    let response = await post(url, formData, config);
    console.log(response.data);
    if(response.data.senderLength != 0 ){
    
        let data= response.data.datas;
        let length = response.data.length;

        this.testdata = {
          data, length
        };

    }

    else {
      let length = response.data.senderLength;
      this.testdata = {
        length
      };
    }
    this.setState({
      loading: "false"
    });
  }

  mailButton = () => {
    return this.props.history.push(window.location.pathname + "/addMail");
  };

  renderRow() {
    console.log(this.testdata);
    if(this.testdata.length != 0){
      return this.testdata.data.map((data) => {
        return <MailRow
          data={data}
          length={this.testdata.length}
          />;
        })
      }
  }

  render() {
    if (this.state.loading === "initial") {
      console.log(
        "This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM."
      );
      return <h2>Intializing...</h2>;
    }
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <Button
          icon
          labelPosition="left"
          onClick={this.mailButton}
          basic
          color="purple"
          floated="left"
          style={{ marginBottom: "10px" }}
        >
          <Icon name="add" />
          택배 접수
        </Button>

        <Table>
          <Header>
            <Row>
              <HeaderCell style={{ minWidth: "6em" }}>받는 사람</HeaderCell>
              <HeaderCell>주소</HeaderCell>
              <HeaderCell style={{ minWidth: "9em" }}>연락처</HeaderCell>
              <HeaderCell style={{ minWidth: "6em" }}>상품명</HeaderCell>
              <HeaderCell style={{ minWidth: "6em" }}>배송 상태</HeaderCell>
              <HeaderCell style={{ minWidth: "7em" }}>QR코드</HeaderCell>
              <HeaderCell style={{ minWidth: "7em" }}>상세 정보</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRow()}</Body>
        </Table>
      </Layout>
    );
  }
}

export default mailList;
