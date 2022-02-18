import * as React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Avatar, Typography } from "@mui/material";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import "./navbar.css";


export default function ProfileDrawer() {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.session.user)
  const firstAndLast= `${user.firstName} ${user.lastName}`

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logUserOut = () => {
    dispatch(logout());
  };

  const list = (anchor) => (
    <Box
      id="profile_drawer"
      sx={{ width: 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List id='profile_list'>
        <Box id='profile_title'>
          <Typography  variant="h3">Profile</Typography>
        </Box>
        <Box id="avatar_box">
          <Avatar sx={{ width: 100, height: 100 }} src="https://www.wallpapers4u.org/wp-content/uploads/elijah_wood_actor_person_profile_brunette_smile_18910_1920x1080.jpg"/>
          <Box>
            <Typography  variant="h4">{firstAndLast}</Typography>
            <Typography variant="h6">{user.email}</Typography>
            <Typography variant="h6">{user.username}</Typography>
          </Box>
        </Box>
        <Divider/>
      </List>

      <Box className="profile_buttons_box">
        <Button variant="contained">Edit Profile</Button>
        <Button variant="contained" onClick={logUserOut}>
          Log Out
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("right", true)} variant="contained">
          {"Profile"}
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
