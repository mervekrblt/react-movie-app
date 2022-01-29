import { useQuery } from "react-query";
import MovieCard from "../MovieCard";
import { fetchDiscover } from "../../api";
import Loading from "../Loading";
import "./Listing.css"

const Discover = () => {
  const { isLoading, data } = useQuery("discover", fetchDiscover, {
    retry: false,
  });
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="container w-75">
          <div className="row flex-row flex-nowrap overflow-auto" id="scrollbar">
            {data?.data?.results.map((discover) => (
              <MovieCard
                key={discover.id}
                id={discover.id}
                img={discover.poster_path}
                title={discover.title ? discover.title : discover.original_name}
                release={discover.release_date}
                genres={discover.genre_ids}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Discover;
