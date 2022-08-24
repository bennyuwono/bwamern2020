/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Header from "parts/Header";

export default class LandingPages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}
