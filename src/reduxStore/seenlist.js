const ADD_SEENLIST = "ADD_SEENLIST";
const DELETE_SEENLIST = "DELETE_SEENLIST";

export const addSeenlist = (id, title, genre) => ({
  type: ADD_SEENLIST,
  payload: { id, title, genre },
});

export const deleteSeenlist = (id) => ({
  type: DELETE_SEENLIST,
  payload: id,
});

const seenlistReducer = (
  seenlist = { seenFilms: [], totalCount: 0 },
  action
) => {
  switch (action.type) {
    case ADD_SEENLIST:
      return {
        ...seenlist,
        seenFilms: [...seenlist.seenFilms, action.payload],
        totalCount: [...seenlist.seenFilms].length + 1,
      };
    case DELETE_SEENLIST:
      if (seenlist.totalCount > 0) {
        return {
          ...seenlist,
          seenFilms: [
            ...seenlist.seenFilms.filter(
              (item) => item.id !== action.payload
            ),
          ],
          totalCount: [...seenlist.seenFilms].length - 1,
        };
      } else {
        return seenlist;
      }
    default:
      return seenlist;
  }
};

export default seenlistReducer;