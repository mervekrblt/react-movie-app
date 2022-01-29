import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red, orange } from "@mui/material/colors";
import theme from "../theme";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../reduxStore/favorites";
import { addSeenlist, deleteSeenlist } from "../reduxStore/seenlist";

const MovieCard = ({
  id,
  img,
  release,
  title,
  character,
  original_name,
  genres,
}) => {
  const dispatch = useDispatch();
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;

  const favorites = useSelector((state) => state.favorites);
  const seenlist = useSelector((state) => state.seenlist);

  return (
    <Card
      style={{ backgroundColor: currentTheme.card }}
      sx={{
        width: {
          md: 250, // theme.breakpoints.up('md')
        },
        margin: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link to={`/movie/${id}`}>
      <CardMedia
        component="img"
        sx={{ margin: "auto" }}
        src={
          img
            ? `https://image.tmdb.org/t/p/w500/${img}`
            : `https://i.ytimg.com/vi/jYcQrIAOap4/maxresdefault.jpg`
        }
        alt="Paella dish"
      />
      </Link>

      {title && (
        <>
          <CardContent>
            <Typography
              color="text.primary"
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              {title}
            </Typography>
            <Typography
              color="primary.main"
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              {release}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-around" }}>
            {favorites.favoriteFilms.some((film) => film.id === id) ? (
              <IconButton
                aria-label="favorite"
                onClick={() => dispatch(deleteFavorites(id, title, genres))}
              >
                <FavoriteIcon sx={{ color: red[600] }} />
              </IconButton>
            ) : (
              <IconButton
                aria-label="favorite"
                onClick={() => dispatch(addFavorites(id, title, genres))}
              >
                <FavoriteIcon />
              </IconButton>
            )}

            {seenlist.seenFilms.some((film) => film.id === id) ? (
              <IconButton
                aria-label="bookmarked"
                onClick={() => dispatch(deleteSeenlist(id, title, genres))}
              >
                <BookmarkIcon sx={{ color: orange[600] }} />
              </IconButton>
            ) : (
              <IconButton
                aria-label="bookmarked"
                onClick={() => dispatch(addSeenlist(id, title, genres))}
              >
                <BookmarkIcon />
              </IconButton>
            )}
          </CardActions>
        </>
      )}
      {character && (
        <>
          <Typography
            color="text.primary"
            sx={{ textTransform: "uppercase", fontWeight: 600 }}
          >
            {character}
          </Typography>
          <Typography
            color="primary.main"
            sx={{ textTransform: "uppercase", fontWeight: 600 }}
          >
            {original_name}
          </Typography>
        </>
      )}
    </Card>
  );
};

export default MovieCard;
