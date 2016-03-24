import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import colors from 'utils/colors';
import Store from 'store';
import Actions from 'store/actions';

let styles;

@Radium
class AppModal extends Component {
  closeModal() {
    Store.dispatch({
      type: Actions.CLOSE_MODAL,
    });
  }

  render() {
    if (this.props.options.visible) {
      const _styles = [styles.base, styles.visible];
      return (
        <div style={styles.container}>
          <div style={styles.overlay} onClick={this.closeModal}></div>
          <div style={_styles}>
            <span style="position: relative">
              <div style={styles.closeButton} onClick={this.closeModal}>&#10005;</div>
              <div>{this.props.options.content}</div>
            </span>
          </div>
        </div>
      );
    }

    return <div></div>;
  }
}

AppModal.propTypes = {
  options: PropTypes.shape({
    content: PropTypes.object,
    hideOnOverlayClick: PropTypes.boolean,
    visible: PropTypes.boolean,
  }),
};

export default AppModal;

styles = {
  container: {
    position: 'fixed',
    display: 'block',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  base: {
    display: 'none',
    position: 'absolute',
    width: 250,
    height: 150,
    background: '#fff',
    zIndex: 100,
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -25%)',
    padding: '1em',
    boxShadow: '0 0 8px #585858',
  },
  closeButton: {
    position: 'absolute',
    right: '.5em',
    top: '.5em',
    color: colors.text.gray,
    cursor: 'pointer',

    ':hover': {
      color: colors.brand.dark,
    },
  },
  visible: {
    display: 'block',
  },
  overlay: {
    opacity: 0.25,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: '#000',
    zIndex: 10,
  },
};
