import { useQuery } from "react-query";
import MovieCard from "../components/MovieCard";
import { fetchTrends } from "../api";
const Home = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    isFetched,
    isFetching,
    ...query
  } = useQuery("trends", fetchTrends, { retry: false });

  console.log(data?.data?.results);
  return (
    <>
      <div className="container w-75">
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
      </div>
    </>
  );
};
export default Home;
