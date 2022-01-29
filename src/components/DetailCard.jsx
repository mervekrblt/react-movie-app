import { useSelector } from "react-redux";
import theme from "../theme";

const DetailCard = ({
  img,
  name,
  genres,
  release_date,
  overview,
  time,
  crew,
}) => {
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4 text-center">
            <img
              className="w-75 rounded-3"
              src={`https://image.tmdb.org/t/p/w500/${img}`}
              alt=""
            />
          </div>

          <div className="col-lg-8 d-flex flex-column align-items-start justify-content-around">
            <h2 className={`${currentTheme.text}`}>{name}</h2>
            <div>{genres?.map((genre, i) => (
              <span key={i} className={`badge p-2 rounded-pill ${currentTheme.button} me-3`}>
                {genre.name}
              </span>
            ))}</div>
              <p className={`${currentTheme.text}`}>Release Date: {release_date}</p>
              <p className={`${currentTheme.text}`}>Overview: {overview}</p>
            <div className={`${currentTheme.text} `}>
              {crew?.map((person) => (
                <span className="me-5" key={person.id}>
                  {person.name} - {person.known_for_department}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailCard;
