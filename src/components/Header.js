import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
  };

  render() {
    const { authenticated } = this.props;
    return (
      <ul className="menu">
        <li>
          <Link to="/">
            <h2>
              Home
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2086/859e9317-d715-4a2b-b88e-61cdfd379039.png"
                width="100"
              ></img>
            </h2>
          </Link>
        </li>
        {authenticated ? (
          <button
            class="btn btn-primary mt-3 "
            onClick={this._handleLogoutClick}
          >
            Logout
          </button>
        ) : (
          <button
            class="btn btn-primary mt-3"
            onClick={this._handleSignInClick}
          >
            Login
          </button>
        )}
      </ul>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Google login page
    window.open("http://localhost:4000/auth/google", "_self");
  };

  _handleLogoutClick = () => {
    // Logout using Google passport api
    // Set authenticated state to false in the HomePage component
    window.open("http://localhost:4000/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };
}
