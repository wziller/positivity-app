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

  //   return (
  //     <AppBar
  //       id="nav_bar"
  //       position="static"
  //       sx={{ width: "100vw", height: "fit-content" }}
  //     >
  //       <Container
  //         maxWidth={false}
  //         sx={{
  //           maxWidth: "100%",
  //           display: { xs: "none", md: "flex" },
  //           justifyContent: "space-between",
  //         }}
  //       >
  //         {/* <Container maxWidth={false} sx={{ width: "auto", margin: 0 }}> */}
  //         <Typography></Typography>

  //         <Typography
  //           variant="h6"
  //           noWrap
  //           component="div"
  //           sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
  //         >
  //
  //         </Typography>
  //         {/* </Container> */}
  //         <Box
  //           sx={{
  //             display: { xs: "none", md: "flex" },
  //             justifyContent: "space-between",
  //             alignItems: "center",
  //             width: "4 rem",
  //             height: "fit-content",
  //           }}
  //         >
  //           {!user && (
  //             <LoginButton
  //               setSignUpOpen={setSignUpOpen}
  //               setLoginOpen={setLoginOpen}
  //               open={loginOpen}
  //             />
  //           )}
  //           {!user && (
  //             <SignUpButton
  //               setSignUpOpen={setSignUpOpen}
  //               setLoginOpen={setLoginOpen}
  //               open={signUpOpen}
  //             />
  //           )}
  //           {user && <ProfileDrawer />}
  //         </Box>
  //       </Container>
  //     </AppBar>
  //   );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            id="logo"
            src="https://consoul-log.s3.amazonaws.com/production-images/logo.png"
            alt="logo"
          ></img>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
              <Box
             sx={{
               display: { xs: "none", md: "flex" },
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
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
