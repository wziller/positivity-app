import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoginButton from "./login_button";
import { useSelector } from "react-redux";
import ProfileDrawer from "./profile_drawer";
import SignUpButton from "./signup_button";
import { useState } from "react";
import "./navbar.css";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Avatar } from "@mui/material";
import { Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
    const user = useSelector((state) => state.session.user);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <AppBar sx={{display:'flex', justifyContent:'center'}}  position="static">
      <Container sx={{display:'flex', justifyContent:'center', width:'100vw', margin: '0px',}}  >
        <Toolbar disableGutters sx={{width:'80vw'}}>
          <img
            id="logo"
            src="https://consoul-log.s3.amazonaws.com/production-images/logo.png"
            alt="logo"
          ></img>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box >
              <Box
              id='button_container'
             sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               width: "4 rem",
               height: "fit-content",
             }}
          >
             {!user && (
               <LoginButton
                 setSignUpOpen={setSignUpOpen}
                 setLoginOpen={setLoginOpen}
                 open={loginOpen}
               />
             )}
             {!user && (
               <SignUpButton
                 setSignUpOpen={setSignUpOpen}
                 setLoginOpen={setLoginOpen}
                 open={signUpOpen}
               />
             )}
             {user && <ProfileDrawer />}
           </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
