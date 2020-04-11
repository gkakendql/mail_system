import React, { Component } from "react";
import { Route } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";

class App extends Component {
  render() {
    return (
        <DaumPostcode onComplete={handleData} height={450} />
    );
  }
}

const handleData = data => {
  window.postMessage(data);
  window.close();
};

export default App;
