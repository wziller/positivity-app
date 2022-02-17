import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/session";
import { Container } from "@mui/material";
import "./navbar.css";

function SimpleDialog(props) {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onClose, open, setSignUpOpen } = props;

  const closeLoginModel = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(userEmail, password));
  };

   const LogInSignUpClick = () => {
     setSignUpOpen(true);
     onClose();
   };

  return (
    <Dialog open={open}>
      {/* <Backdrop
        sx={{ color: "primary", zIndex: (theme) => theme.zIndex.drawer - 1 }}
        open={open}
        onClick={closeLoginModel}
        > */}
      <DialogTitle>Login Into Your Account</DialogTitle>
      <Box
        id="login_form"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="email-input"
          label="Email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          required
          type="password"
          id="password-input"
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Container id="login_buttons_box">
          <Button
            className="login_form_button"
            size="large"
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Button
            className="login_form_button"
            size="large"
            variant="contained"
            onClick={closeLoginModel}
          >
            Cancel
          </Button>
        </Container>
        <Container>
          Become a member
          <Button variant="text" onClick={LogInSignUpClick}>
            Sign Up!
          </Button>
        </Container>
      </Box>
      {/* </Backdrop> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function LoginButton({ open, setLoginOpen, setSignUpOpen }) {
  const handleClickOpen = () => {
    setLoginOpen(true);
  };

  const handleClose = (value) => {
    setLoginOpen(false);
  };

  return (
    <div className="navbar_buttons">
      <Typography variant="subtitle1" component="div"></Typography>
      <br />
      <Button variant="contained" onClick={handleClickOpen}>
        Login
      </Button>
      <SimpleDialog
        setSignUpOpen={setSignUpOpen}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
