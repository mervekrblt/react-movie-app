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
    console.log(e.target.value)
    if (e.target.value === "fav") {
      setItems(favorites.favoriteFilms);
    } else if (e.target.value === "seen") {
      setItems(seenlist.seenFilms);
    } else {
      setItems(films);
    }
  };

  return (
    <>
      <select
        className="form-select w-50 my-5 mx-auto"
        onChange={selectHandler}
        aria-label="Default select example"
      >
        <option value="date">Closest Release Date</option>
        <option value="fav">Favorites</option>
        <option value="seen">Seenlist</option>
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
                    .map((item, i) => (
                      <span key={i}>{item[0]?.name} </span>
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
