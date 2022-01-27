import { useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useQuery } from "react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import Search from "../components/Search";
import { searchMovie } from "../api";
import theme from "../theme";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import NotFound from "../components/NotFound";

const SearchPage = () => {
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const search = urlParams.get("q");

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data, isLoading } = useQuery(
    ["search", search],
    () => searchMovie(search),
    {
      retry: false,
    }
  );

  return (
    <>
      <Search />
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="container w-75">
          <div className="row flex-row justify-content-around">
            {data?.data?.results.slice((page*4 - 3), page*4 ).map((item) => (
              <MovieCard
                key={item.id}
                id={item.id}
                img={item.poster_path}
                title={item.title ? item.title : item.original_name}
                release={item.release_date}
              />
            ))}
          </div>
        </div>
      )}
      {data?.data?.total_pages ? <div className="d-flex justify-content-center">
        <Pagination
        count={5}
        onChange={handleChange}
        color={`${currentTheme.pagination}`}
      />
      </div> : <NotFound/>}
      
    </>
  );
};
export default SearchPage;
