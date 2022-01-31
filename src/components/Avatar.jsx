import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../reduxStore/isLogin";
import { setUser } from "../reduxStore/user";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AvatarImg = ({ img, profile }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.user);
  console.log(stateUser)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const exit = () => {
    dispatch(logOut())
    dispatch(setUser(null));
    navigate("/")
    //localStorage.removeItem("persist:root")
  }
  return (
    <>
      {img && <Avatar src={img}></Avatar>}
      {profile && (
        <>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            {stateUser && <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }} src={profile}></Avatar>
              </IconButton>
            </Tooltip>}
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Link to={"/profile"} style={{textDecoration: "none"}}>
              <MenuItem>
                <p>Profile</p>
              </MenuItem>
            </Link>
            <Link to={"/about"} style={{textDecoration: "none"}}>
              <MenuItem>
                <p>About</p>
              </MenuItem>
            </Link>
            <MenuItem onClick={exit}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </>
  );
};

export default AvatarImg;
