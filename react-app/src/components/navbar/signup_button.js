import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/session";
import Container from "@mui/material/Container";
import "./navbar.css";

function SimpleDialog(props) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onClose, open, setLoginOpen } = props;

  const closeSignUpModel = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(firstName, lastName, username, email, password));
  };


  const SignUpLogInClick = () => {
      setLoginOpen(true);
       onClose();
  }

  return (
    <Dialog open={open}>
      {/* <Backdrop
        sx={{ color: "primary", zIndex: (theme) => theme.zIndex.drawer - 1 }}
        open={open}
        onClick={closeLoginModel}
        > */}
      <DialogTitle>Sign Up!</DialogTitle>
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
          id="firstname-input"
          label="First Name"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          required
          id="lastname-input"
          label="Last Name"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          required
          id="username-input"
          label="Username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          type="email"
          id="email-input"
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            Sign Up
          </Button>
          <Button
            className="login_form_button"
            size="large"
            variant="contained"
            onClick={closeSignUpModel}
          >
            Cancel
          </Button>
        </Container>
        <Container>
          Already a member?
          <Button variant="text" onClick={SignUpLogInClick}>
            Log In
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

export default function SignUpButton({ setLoginOpen, setSignUpOpen, open}) {
//   const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setSignUpOpen(true);
  };

  const handleClose = (value) => {
    setSignUpOpen(false);
  };

  return (
    <div className="navbar_buttons">
      <Typography variant="subtitle1" component="div"></Typography>
      <br />
      <Button variant="contained" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <SimpleDialog
        setLoginOpen={setLoginOpen}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
