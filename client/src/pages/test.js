import React, { Component } from "react";
<<<<<<< HEAD
import { Button, Dimmer, Loader } from "semantic-ui-react";
=======
import { Button } from "semantic-ui-react";
>>>>>>> 3000c8dc2f47d0d1706f1407d3a55ade036e43d2
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
<<<<<<< HEAD
    return(
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>);
=======
    return <h2>Intializing...</h2>;
>>>>>>> 3000c8dc2f47d0d1706f1407d3a55ade036e43d2
  }
}

export default Pass;
