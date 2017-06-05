const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, action.user);
      break;
    case 'LOGOUT':
      return Object.assign({}, state, initialState);
    default:
      return initialState;
  }
};

export default authReducer;
