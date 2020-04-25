import React, { Component } from "react";
import { Button, Dimmer, Loader } from "semantic-ui-react";
import { post } from "axios";

class Pass extends Component {
  getMail = () => {
    const url = "/api/getonemail";
    const formData = new FormData();
    formData.append("address", this.props.match.params.address);
    formData.append("index", this.props.match.params.index);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    post(url, formData, config).then(res => {
      const data = res.data;
      this.props.history.push(
        "/mail/" + this.props.match.params.address + "/mailInform",
        {data}
      );
      //console.log(this.props.history);
    });
  };

  constructor(props) {
    super(props);
    this.getMail();
  }

  render() {
    return(
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>);

  }
}

export default Pass;
