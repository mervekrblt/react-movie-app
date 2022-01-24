const user = {
  avatarURL: null,
  username: null,
  password: null,
  socials: {},
  seenList: {
    seenFilms: [],
    totalCounts: 0,
  },
  favorites: {
    favoriteFilms: [],
    totalCounts: 0,
  },
  joinDate: "",
};

//ACTION TYPES
const SET_USERNAME = "SET_USERNAME";
const SET_PASSWORD = "SET_PASSWORD";
//ACTION METHODS

export const setUsername = (value) => {
  return {
    type: SET_USERNAME,
    payload: value,
  };
};

export const setPassword = (value) => {
  return {
    type: SET_PASSWORD,
    payload: value,
  };
};

//REDUCER

const userReducer = (userProfile = user, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...userProfile, username: action.payload };
    case SET_PASSWORD:
      return { ...userProfile, password: action.payload };
    default:
      return userProfile;
  }
};

export default userReducer;
