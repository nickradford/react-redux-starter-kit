const _actions = [
  'LOGOUT',
  'LOGIN',
  'SHOW_MODAL',
  'CLOSE_MODAL',
];

const Actions = {};

_actions.forEach(action => {
  Actions[action] = Symbol(action);
});

export default Actions;
