import Header from "./Header";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class HomePage extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false,
  };

  componentDidMount() {
    fetch("http://localhost:4000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((responseJson) => {
        this.setState({
          authenticated: true,
          user: responseJson.user,
        });
        console.log(this.state);
      })
      .catch((error) => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user",
        });
      });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Header
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <div>
          {!authenticated ? (
            <h1>Welcome! to DscKode</h1>
          ) : (
            <div>
              <h1>You have login succcessfully!</h1>
              <h2>Welcome {this.state.user.username}!</h2>
              <img src={this.state.user.thumbnail} width="100" />
            </div>
          )}
        </div>
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}
