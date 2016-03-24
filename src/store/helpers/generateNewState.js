import React from 'react';

const generateNewState = () => {
  const obj = {
    loggedIn: false,
    modalOptions: {
      visible: true,
      content: <div><h1>This is a modal</h1></div>,
    },
  };
  return obj;
};

export default generateNewState;
