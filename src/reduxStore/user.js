//ACTION TYPES
const SET_USER = "SET_USER";
//ACTION METHODS

export const setUser = (value) => {
  return {
    type: SET_USER,
    payload: value,
  };
};


//REDUCER

const userReducer = (userProfile = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return userProfile;
  }
};

export default userReducer;
