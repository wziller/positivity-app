import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import "./navbar.css"
import { ClassNames } from "@emotion/react";

export default function ProfileDrawer() {
  const dispatch = useDispatch();
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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <p>{"Profile"}</p>
        {/* {["Name", "Email"].map((text, index) => (
          
        ))} */}
        <ListItem button>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
        <ListItemText primary="name" />
          </ListItem>
      </List>
      <Divider />
      <div className="profile_buttons_box">
        <Button variant="contained">Edit Profile</Button>
        <Button variant="contained" onClick={logUserOut}>
          Log Out
        </Button>
      </div>
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
