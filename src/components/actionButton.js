import React, { Component } from 'react';
import Radium from 'radium';

import colors from 'utils/colors';

let styles;

@Radium
class ActionButton extends Component {
  render() {
    return (
      <button
        style={styles.base}
        onClick={this.props.handleClick}
      >{this.props.children}</button>
    );
  }
}

ActionButton.propTypes = {
  handleClick: React.PropTypes.function,
  children: React.PropTypes.string,
};

ActionButton.defaultProps = {
  handleClick: () => {},
  children: 'Hello',
};

export default ActionButton;

styles = {
  base: {
    boxSizing: 'border-box',
    border: '1px solid transparent',
    background: 'transparent',
    outline: 0,
    padding: '0 .5em',
    fontSize: 14,
    lineHeight: 'inherit',
    height: 'inherit',
    color: colors.text.gray,

    ':hover': {
      color: colors.text.lightest,
      background: colors.hoversOver(colors.brand.dark),
    },
    ':active': {
      background: colors.brand.dark,
    },
  },
};
