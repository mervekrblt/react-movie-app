import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();
    navigate(`/search?q=${e.target.q.value.toLowerCase()}`);
  };
  return (
    <>
      <div className="container" onSubmit={formHandler}>
        <form className="d-flex flex-row justify-content-center">
          <div className="mb-3 mt-5 w-75">
            <input name="q" type="text" className="form-control" id="search" />
          </div>
          <button type="submit" className="btn btn-dark ms-5 mt-5 h-50">
            Search
          </button>
        </form>
      </div>
    </>
  );
};
export default Search;
