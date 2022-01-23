//ACTION TYPES

//ACTION METHODS

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
//REDUCER

const userReducer = (userProfile = user, action) => {
  return userProfile;
};

export default userReducer;
