import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getFilter } from "../api";
import { genres } from "../genres";
import { useEffect, useState } from "react";

const Filter = ({ props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  const [genreList, setGenreList] = useState([]);
  const genrepath = genreList.map(genre => `&with_genres=${genre}`).join("")

  useEffect(() => {
    navigate(`?${genrepath}`)
  }, [ genrepath])

  const selectGenres = (e) => {
    if (e.target.checked === true) {
      setGenreList([...genreList, e.target.id]);
    } else {
      const deleted = genreList.indexOf(e.target.id);
      genreList.splice(deleted, 1)
      setGenreList((prev) => prev.filter((genre) => genre.id !== e.target.id));
    }
  };

  const films = useQuery(
    ["filteredMovie", { pathname, genrepath }],
    () => getFilter(pathname, genrepath)
  );
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="btn-group mt-5 d-flex flex-wrap"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              {genres.map((genre) => {
                return (
                  <div className=" m-2" key={genre.id}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={genre.id}
                      autoComplete="off"
                      onClick={selectGenres}
                    />
                    <label
                      className="btn btn-outline-warning"
                      htmlFor={genre.id}
                    >
                      {genre.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {films?.data?.data.results.map((film) => {
                return (
                  <div className="col" key={film.id}>
                    <div className="w-100">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                        className="card-img-top"
                      />
                      <div className="card-body"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
