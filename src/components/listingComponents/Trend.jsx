import { useQuery } from "react-query";
import { useState } from "react";
import MovieCard from "../MovieCard";
import { fetchTrends } from "../../api";
import Loading from "../Loading";
import theme from "../../theme";
import { useSelector } from "react-redux";
import "./Listing.css"

const Trend = () => {
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
  const [select, setSelect] = useState("day");

  const { isLoading, data } = useQuery(
    ["trends", select],
    async () => fetchTrends(select),
    {
      retry: false,
    }
  );
  return (
    <>
    {isLoading && <Loading />}
      <section className="text-center">
        <button
          className={`${currentTheme.button} me-3`}
          onClick={() => setSelect("day")}
        >
          Today
        </button>
        <button
          className={`${currentTheme.button}`}
          name="week"
          onClick={() => setSelect("week")}
        >
          Week
        </button>
      </section>
      {!isLoading &&<div className="container w-75">
        <div className="row flex-row flex-nowrap overflow-auto" id="scrollbar">
          {data?.data?.results.map((trend) => (
            <MovieCard
              key={trend.id}
              id={trend.id}
              img={trend.poster_path}
              title={trend.title ? trend.title : trend.original_name}
              release={trend.release_date}
              genres={trend.genre_ids}
            />
          ))}
        </div>
      </div>}
    </>
  );
};
export default Trend;
