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

export default function NavBar() {
  const user = useSelector((state) => state.session.user);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h2"
          noWrap
          component="div"
          //   sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
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
      </Container>
    </AppBar>
  );
}
