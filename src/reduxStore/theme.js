//ACTION TYPES
const CHANGE_THEME = "CHANGE_THEME";

//ACTION METHODS
export const changeTheme = () => {
  return {
    type: CHANGE_THEME,
  };
};

const themeReducer = (dark = true, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return (dark = !dark);
    default:
      return dark;
  }
};

export default themeReducer;
