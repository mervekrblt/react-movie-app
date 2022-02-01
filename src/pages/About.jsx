import { useSelector } from "react-redux";
import theme from "../theme";

const About = () => {
  const tech = [
    "React",
    "React-Router-Dom",
    "Axios",
    "Redux",
    "Redux-Persist",
    "Material UI",
    "Bootstrap 5",
    "React-Redux",
    "Dotenv",
    "Movie DB"
  ];
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
  return (
    <>
      <div className="container my-5">
        <header className={`text-center ${currentTheme.p}`}>
          <h3>TECHNOLOGIES</h3>
        </header>

        <main  className={`pt-3 text-center mt-4 ${currentTheme.text}`}>
          {tech.map((item) => (
            <span
              key={item}
              className={`badge p-3 me-3 btn-lg rounded-pill ${currentTheme.outline}`}
            >
              {item}
            </span>
          ))}
          <h3 className={`mt-4 ${currentTheme.text}`}>INFORMATION ABOUT PROJECT</h3>
          <h4>
            You shall not pass. You need to login, Balrog !!! Here is the clue,
            merve - 123456. I can't give the ring, but this information is
            enough to pass.
          </h4>
          <h4>
            If you understand the clue correctly, you can see trending, discover
            movies on the home page. Maybe you want to see movie's details, why
            you are waiting... Just click on the movie's image, then you can see
            the details.
          </h4>
          <h4>
            Also, there are error, about, profile and filter pages. You can
            discover.
          </h4>
        </main>
      </div>
    </>
  );
};
export default About;
