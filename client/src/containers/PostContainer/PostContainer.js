import React, { Component } from "react";
import { PostWrapper, Post } from "../../components";

class PostContainer extends Component {
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
      <PostWrapper>
        <Post users={this.state.users}/>
      </PostWrapper>
    );
  }
}

export default PostContainer;
