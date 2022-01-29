const ADD_FAVORITES = "ADD_FAVORITES";
const DELETE_FAVORITES = "DELETE_FAVORITES";

export const addFavorites = (id, title, genre) => ({
  type: ADD_FAVORITES,
  payload: { id, title, genre },
});

export const deleteFavorites = (id) => ({
  type: DELETE_FAVORITES,
  payload: id,
});

const favoritesReducer = (
  favorites = { favoriteFilms: [], totalCount: 0 },
  action
) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...favorites,
        favoriteFilms: [...favorites.favoriteFilms, action.payload],
        totalCount: [...favorites.favoriteFilms].length + 1,
      };
    case DELETE_FAVORITES:
      if (favorites.totalCount > 0) {
        return {
          ...favorites,
          favoriteFilms: [
            ...favorites.favoriteFilms.filter(
              (item) => item.id !== action.payload
            ),
          ],
          totalCount: [...favorites.favoriteFilms].length - 1,
        };
      } else {
        return favorites;
      }
    default:
      return favorites;
  }
};

export default favoritesReducer;
