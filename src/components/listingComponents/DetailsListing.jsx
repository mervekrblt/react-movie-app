import MovieCard from "../MovieCard";

const DetailsListing = ({ cast }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row d-flex flex-row flex-nowrap overflow-auto">
              {cast?.map((people) => (
              <MovieCard
                key={people.id}
                id={people.id}
                img={people.profile_path}
                character={people.character}
                original_name={people.original_name}
              />
            ))}
            </div>
            
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};
export default DetailsListing;
