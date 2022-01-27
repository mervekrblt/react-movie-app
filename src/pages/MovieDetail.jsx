import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import {
  getPeople,
  getRecommendations,
  getReview,
  searchMovieDetail,
} from "../api";
import DetailCard from "../components/DetailCard";
import Loading from "../components/Loading";
import DetailsListing from "../components/listingComponents/DetailsListing";

const MovieDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, isLoading } = useQuery(
    ["movieDetail", id],
    () => searchMovieDetail(id),
    {
      retry: false,
    }
  );
  const people = useQuery(["cast", id], () => getPeople(id));
  const review = useQuery(["review", id], () => getReview(id));
  const recommendations = useQuery(["recommendations", id], () =>
    getRecommendations(id)
  );
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DetailCard
            img={data?.data.poster_path}
            name={data?.data.original_title}
            genres={data?.data.genres}
            release_date={data?.data.release_date}
            overview={data?.data.overview}
            time={data?.data.runtime}
            crew={people?.data?.data.crew.slice(0, 3)}
            review={review?.data?.data.results[0]}
            recom={recommendations?.data?.data?.results}
          />
          <DetailsListing cast={people?.data?.data.cast} />
        </>
      )}
    </>
  );
};
export default MovieDetail;
