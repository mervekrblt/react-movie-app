// ACTION TYPES
const IS_LOGIN = "IS_LOGIN"

//ACTION
export const isLogin = (value = true) => {
  return {
    type: IS_LOGIN,
    payload: value
  }
}

//REDUCERS
const isLoginReducer = (isLogin = false, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return action.payload
    default:
      return isLogin
  }
}
export default isLoginReducer