import { useState } from "react";
import { useSelector } from "react-redux";
import theme from "../theme";
import genres from "../genres";

const Profile = () => {
  const stateTheme = useSelector((state) => state.theme);
  const stateUser = useSelector((state) => state.user);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
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
    console.log(e.target.value);
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
      <div className="card mb-3 w-75 m-auto mt-5" style={{backgroundColor: `${currentTheme.card}`}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${stateUser.avatarUrl}`}
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-8 my-auto">
            <div className="card-body text-center">
              <h5 className={`${currentTheme.text}`}>{`${stateUser?.name} ${stateUser?.surname}`}</h5>
              <p className={`${currentTheme.text}`}>Member since : {stateUser?.joinDate}</p>
              <div className="d-flex justify-content-center">
                <p className={`${currentTheme.text} me-3`}>
                  Seen List {seenlist.totalCount} - Favori List{" "}
                  {favorites.totalCount}
                </p>
                <section>
                  <a href={stateUser?.socials.github} target="_blank">
                    <i className="bi bi-github me-3"></i>
                  </a>
                  <a href={stateUser?.socials.twitter} target="_blank">
                    <i class="bi bi-twitter"></i>
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <select
        className={`form-select w-25 my-5 m-auto`}
        onChange={selectHandler}
        aria-label="Default select example"
      >
        <option value="date">Closest Release Date</option>
        <option value="fav">Favorites</option>
        <option value="seen">Seenlist</option>
      </select>
      <table className={`table w-75 mx-auto border ${currentTheme.text}`}>
        <thead>
          <tr>
            <th className={`${currentTheme.p}`} scope="col">
              Film ID
            </th>
            <th className={`${currentTheme.p}`} scope="col">
              Title
            </th>
            <th className={`${currentTheme.p}`} scope="col">
              Genre
            </th>
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
                    ?.map((id) => genres.filter((genre) => genre.id === id))
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
