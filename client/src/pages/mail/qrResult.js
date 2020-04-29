import React, { Component } from "react";
import { Button, Dimmer, Loader } from "semantic-ui-react";
import { post } from "axios";
import Web3 from "web3";

class qrResult extends Component {
  getAdminMail = () => {
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
        { data }
      );
      //console.log(this.props.history);
    });
  };

  getDeliveryMail = () => {
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
      const index = this.props.match.params.index;
      this.props.history.push(
        "/mail/" + this.props.match.params.address + "/mailDeliveryInform",
        { data, index }
      );
      //console.log(this.props.history);
    });
  };

  getHubMail = () => {
    const url = "/api/getship";
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
      const index = this.props.match.params.index;
      this.props.history.push(
        "/mail/" + this.props.match.params.address + "/mailHubInform",
        { data, index }
      );
      //console.log(this.props.history);
    });
  };

  getMail = () => {
    const url = "/api/getusermail";
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
      const index = this.props.match.params.index;
      console.log(data);
      this.props.history.push(
        "/mail/" + this.props.match.params.address + "/mailUserInform",
        { data, index }
      );
      //console.log(this.props.history);
    });
  };

  constructor(props) {
    super(props);
    window.addEventListener("load", () => {
      if (typeof web3 !== "undefined") {
        window.web3 = new Web3(window.ethereum);
        window.web3.eth.getAccounts().then(account => {
          console.log(account);
          if (account[0] == "0x6CcEf8229c07c937A22437eeb13261c4e4b7e835") {
            this.getAdminMail();
          } else if (
            account[0] == "0x0F66CDf7fEA7697f0269be6fdEB15Ed1d10D8560"
          ) {
            this.getHubMail();
          } else if (
            account[0] == "0x5312eCc1BA898b251ce09d480e5Ea84D4d19e109"
          ) {
            this.getDeliveryMail();
          } else if (
            account[0] == "0x50FE4cBC3C1E70A3B28590959Dc6aa7906829706"
          ) {
            this.getMail();
          }
        });
      } else {
        this.getMail();
      }
    });
  }

  render() {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    );
  }
}

export default qrResult;
