import MovieCard from "../MovieCard";
import "./Listing.css";

const DetailsListing = ({ cast, recom }) => {
  console.log(recom)
  return (
    <>
      <div className="container">
        {cast && <div
          className="row d-flex flex-row flex-nowrap overflow-auto"
          id="scrollbar"
        >
          {cast?.map((people) => (
            <MovieCard
              key={people.id}
              id={people.id}
              img={people.profile_path}
              character={people.character}
              original_name={people.original_name}
            />
          ))}
        </div>}

        {recom && <div
          className="row d-flex flex-row flex-nowrap overflow-auto"
          id="scrollbar"
        >
          {recom?.map((people) => (
            <MovieCard
              key={people.id}
              id={people.id}
              img={people.poster_path}
            />
          ))}
        </div>}
      </div>
    </>
  );
};
export default DetailsListing;
