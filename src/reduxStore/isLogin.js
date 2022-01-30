// ACTION TYPES
const IS_LOGIN = "IS_LOGIN";
const LOG_OUT = "LOG_OUT";

//ACTION
export const isLogin = (value = true) => {
  return {
    type: IS_LOGIN,
    payload: value,
  };
};

export const logOut = (value = false) => {
  return {
    type: LOG_OUT,
    payload: value,
  };
};

//REDUCERS
const isLoginReducer = (isLogin = false, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return action.payload;
    case LOG_OUT:
      return action.payload;
    default:
      return isLogin;
  }
};
export default isLoginReducer;
