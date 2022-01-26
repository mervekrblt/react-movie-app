import { useQuery } from "react-query";
import { useState } from "react";
import MovieCard from "../MovieCard";
import { fetchTrends } from "../../api";
import Loading from "../Loading";

const Trend = () => {
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
          className="btn btn-warning me-3"
          onClick={() => setSelect("day")}
        >
          Today
        </button>
        <button
          className="btn btn-warning"
          name="week"
          onClick={() => setSelect("week")}
        >
          Week
        </button>
      </section>
      {!isLoading &&<div className="container w-75">
        <div className="row flex-row flex-nowrap overflow-auto">
          {data?.data?.results.map((trend) => (
            <MovieCard
              key={trend.id}
              id={trend.id}
              img={trend.poster_path}
              title={trend.title ? trend.title : trend.original_name}
              release={trend.release_date}
            />
          ))}
        </div>
      </div>}
    </>
  );
};
export default Trend;
