import BookmarkIcon from "@mui/icons-material/Bookmark";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import theme from "../theme";
import { useSelector } from "react-redux";

const MovieCard = ({ id, img, release, title }) => {
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
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
      <CardMedia
        component="img"
        src={`https://image.tmdb.org/t/p/w500/${img}`}
        alt="Paella dish"
      />
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          onClick={() => console.log("bookmarked")}
        >
          <BookmarkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
