import React, { Component } from 'react';

export default class Login extends Component {
  login() {

  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <input type="email" />
        <input type="password" />
        <button kind="primary" handleClick={this.login}>Login</button>
      </div>
    );
  }
}
