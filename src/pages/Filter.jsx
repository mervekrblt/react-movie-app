import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getFilter } from "../api";
import FilterBox from "../components/FilterBox";

const Filter = ({props}) => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  const films = useQuery(["filteredMovie", pathname], () =>
    getFilter(pathname)
  );
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <FilterBox></FilterBox>
          </div>
          <div className="col-md-6">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {films?.data?.data.results.map((film) => {
                return (
                  <>
                    <div className="col" key={film.id}>
                      <div className="w-100">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                          className="card-img-top"
                        />
                        <div className="card-body"></div>
                      </div>
                    </div>
                  </>
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
