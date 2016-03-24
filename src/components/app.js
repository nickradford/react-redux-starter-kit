import React, { Component } from 'react';

import AppHeader from 'components/appHeader';
import AppModal from 'components/appModal';
import ActionButton from 'components/actionButton';
import Login from 'components/login';


import Store from 'store';
import Actions from 'store/actions';

export default class App extends Component {
  login() {
    Store.dispatch({
      type: Actions.SHOW_MODAL,
      modalOptions: {
        content: <Login />,
      },
    });
  }

  logout() {
    Store.dispatch({
      type: Actions.LOGOUT,
    });
  }

  renderActions() {
    if (this.props.appState.loggedIn) {
      return <ActionButton handleClick={this.logout}>Logout</ActionButton>;
    }
    return <ActionButton handleClick={this.login}>Login</ActionButton>;
  }

  render() {
    return (
      <main>
        <AppHeader
          name="Hello there!"
          actions={this.renderActions()}
        />
        <AppModal options={this.props.appState.modalOptions} />
      </main>
    );
  }
}

App.propTypes = {
  appState: React.PropTypes.object.isRequired,
};
