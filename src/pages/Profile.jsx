import { useSelector } from "react-redux";

const Profile = () => {
  const seenlist = useSelector((state) => state.seenlist);
  const favorites = useSelector((state) => state.favorites);

  const films = [...seenlist.seenFilms, ...favorites.favoriteFilms].filter(
    (obj, index, arr) => {
      return arr.map((mapObj) => mapObj.id).indexOf(obj.id) === index;
    }
  );

  return <>Profile</>;
};
export default Profile;
