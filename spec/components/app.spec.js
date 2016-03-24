import React from 'react';
import TestUtils from 'react-addons-test-utils'
import expect from 'expect';

import Store from 'store';
import Actions from 'store/actions';

import App from 'components/app';

describe('<App />', () => {
  it('is defined', () => {
    expect(App)
      .toExist()
      .toBeA('function')
  });

  it('renders', () => {
    const renderer = TestUtils.createRenderer();
    const appState = {
      loggedIn: false,
      modalOptions: {
        visible: false,
        content: <h1>Hi</h1>,
      },
    };
    renderer.render(<App appState={ appState } />);
    const output = renderer.getRenderOutput();
    console.log(output);

  });

});
