import { useQuery } from 'react-query';
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
      <MovieCard />
    </>
  );
};
export default Home;
