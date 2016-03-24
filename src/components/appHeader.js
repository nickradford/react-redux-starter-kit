import React, { Component } from 'react';
import Radium from 'radium';
import colors from 'utils/colors';

let styles;

@Radium
class AppHeader extends Component {

  render() {
    return (
      <div style={ { ...styles.base, ...this.props.styles } }>
        <h1 style={styles.heading}>{this.props.name}</h1>
        <nav style={styles.actions}>{this.props.actions}</nav>
      </div>
    );
  }
}

AppHeader.defaultProps = {
  name: 'Application Name',
};

AppHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
  styles: React.PropTypes.object,
  actions: React.PropTypes.object,
};

export default AppHeader;

const BAR_HEIGHT = 64;

styles = {
  base: {
    background: colors.brand.dark,
    color: colors.text.gray,
    fontFamily: 'Helvetica Neue',
    height: BAR_HEIGHT,
    lineHeight: `${BAR_HEIGHT}px`,
    padding: '0 1em',
  },

  heading: {
    letterSpacing: 1.75,
    height: BAR_HEIGHT,
    lineHeight: `${BAR_HEIGHT}px`,
    display: 'inline-block',
    padding: 0,
    margin: 0,
    fontWeight: 100,
    fontSize: 32,
  },

  actions: {
    display: 'inline',
    float: 'right',
    color: colors.text.gray,
    lineHeight: `${BAR_HEIGHT}px`,
    padding: 0,
    height: 'inherit',
  },
};
