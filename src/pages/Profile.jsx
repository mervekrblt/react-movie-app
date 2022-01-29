import { useState } from "react";
import { useSelector } from "react-redux";
import { genres } from "../genres";

const Profile = () => {
  const seenlist = useSelector((state) => state.seenlist);
  const favorites = useSelector((state) => state.favorites);

  const films = [...seenlist.seenFilms, ...favorites.favoriteFilms]
    .filter((obj, index, arr) => {
      return arr.map((mapObj) => mapObj.id).indexOf(obj.id) === index;
    })
    .sort(function(a, b) {
      return new Date(b.release_date) - new Date(a.release_date);
    });
  const [items, setItems] = useState(films);

  const selectHandler = (e) => {
    if (e.target.value === "Favorites") {
      setItems(favorites.favoriteFilms);
    } else if (e.target.value === "Seenlist") {
      setItems(seenlist.seenFilms);
    } else {
      setItems(films);
    }
  };
  console.log(favorites);

  return (
    <>
      <select
        className="form-select w-50 my-5 mx-auto"
        onClick={selectHandler}
        aria-label="Default select example"
      >
        <option name="date">Closest Release Date</option>
        <option name="fav">Favorites</option>
        <option name="seen">Seenlist</option>
      </select>
      <table className="table w-75 mx-auto border">
        <thead>
          <tr>
            <th scope="col">Film ID</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((film) => {
            return (
              <tr key={film.id}>
                <th scope={film.id}>{film.id}</th>
                <td>{film.title}</td>
                <td>
                  {film?.genre
                    .map((id) => genres.filter((genre) => genre.id === id))
                    .map((item) => (
                      <span>{item[0]?.name} </span>
                    ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Profile;
