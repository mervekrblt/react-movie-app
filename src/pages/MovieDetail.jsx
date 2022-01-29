import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import {
  getPeople,
  getRecommendations,
  getReview,
  searchMovieDetail,
} from "../api";
import AvatarImg from "../components/Avatar";
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
  console.log(recommendations)
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
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <DetailsListing cast={people?.data?.data.cast} />
              </div>
              <div className="col-lg-4 my-auto">
                <div className="card">
                  <div className="card-body">
                    <AvatarImg
                      img={
                        review?.data?.data?.results[0]?.author_details
                          .avatar_path ||
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Favatar%2Favatar_PNG48.png%3Fi%3D1&f=1&nofb=1"
                      }
                    />
                    <h3 className="card-text">
                      {review?.data?.data?.results[0]?.author_details?.name ||
                        review?.data?.data?.results[0]?.author_details
                          ?.username}
                    </h3>
                    <p className="card-text">
                      {review?.data?.data?.results[0]?.content.substring(0, 400) || "Empty Review"}
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DetailsListing recom={recommendations?.data?.data.results} />
        </>
      )}
    </>
  );
};
export default MovieDetail;
