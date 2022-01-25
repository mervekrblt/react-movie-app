import * as React from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieCard = () => {
  return (
    <Card sx={{ width: {
      xs: 100, // theme.breakpoints.up('xs')
      md: 250, // theme.breakpoints.up('md')
    }, }}>
      <CardMedia
        component="img"
        height="50"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => console.log("bookmarked")}>
          <BookmarkIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
