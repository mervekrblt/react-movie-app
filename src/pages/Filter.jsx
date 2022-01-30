import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getFilter } from "../api";
import genres from "../genres";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";

const Filter = ({ props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  const [genreList, setGenreList] = useState([]);
  const [sort, setSort] = useState("");
  const genrepath = genreList.map((genre) => `&with_genres=${genre}`).join("");

  useEffect(() => {
    navigate(`?sort_by=${sort}${genrepath}`);
  }, [genrepath, sort]);

  const selectGenres = (e) => {
    if (e.target.checked === true) {
      setGenreList([...genreList, e.target.id]);
    } else {
      const deleted = genreList.indexOf(e.target.id);
      genreList.splice(deleted, 1);
      setGenreList((prev) => prev.filter((genre) => genre.id !== e.target.id));
    }
  };

  const selectSort = (e) => {
    setSort(e.target.value);
  };

  const { data, isLoading } = useQuery(
    ["filteredMovie", { pathname, genrepath, sort }],
    () => getFilter(pathname, genrepath, sort)
  );

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="filter">
              <h3>Sort Results By</h3>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={selectSort}
              >
                <option value="popularity.desc" selected>
                  Popularity Descending
                </option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="vote_average.desc">Rating Descending</option>
                <option value="vote_average.asc">Rating Ascending</option>
                <option value="primary_release_date.desc">
                  Release Date Descending
                </option>
                <option value="primary_release_date.asc">
                  Release Date Ascending
                </option>
                <option value="title.asc">Title (A-Z)</option>
                <option value="title.desc">Title (Z-A)</option>
              </select>
            </div>

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
            {isLoading && <Loading />}
            {!isLoading && (
              <div
                className="row flex-row flex-nowrap overflow-auto g-4"
                id="scrollbar"
              >
                {data?.data.results.map((film) => {
                  return (
                    <MovieCard
                      key={film.id}
                      img={film.poster_path}
                      title={film.title}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
