import { genres } from "../genres";
console.log(genres);
const FilterBox = () => {
  return (
    <>
      <div
        className="btn-group mt-5 d-flex flex-wrap"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        {genres.map((genre) => {
          return (
            <div className=" m-2" key={genre.id}>
              <input
                type="checkbox"
                className="btn-check"
                id={genre.name}
                autoComplete="off"
              />
              <label className="btn btn-outline-warning" htmlFor={genre.name}>
                {genre.name}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default FilterBox;
