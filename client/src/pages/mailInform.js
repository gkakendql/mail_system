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

  mailButton = () => {
    return this.props.history.push(window.location.pathname + "/addMail");
  };

  renderRow() {
    console.log(this);
  }

  exit = () => {
    window.close();
  }


  render() {
  let  read = ()  =>{
      console.log(this.props.data);
    }

    return (
      <Button color="purple" basic onClick={read}>
        test
      </Button>

    );
}
}

export default mailInform;
