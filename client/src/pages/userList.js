import React, { Component } from "react";
import UserTable from "../components/List/UserTable";
import Layout from "../components/Layout";

class userList extends Component {
  state = {
    users: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ users: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/users");
    const body = await response.json();
    return body;
  };
  render() {
    return (
    <Layout>
        <UserTable users={this.state.users}/>
    </Layout>
    );
  }
}

export default userList;
