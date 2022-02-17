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
import "./navbar.css";

function SimpleDialog(props) {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");


  const { onClose, open } = props;

  const closeLoginModel = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // let userLogin = {
    //   email: userEmail,
    //   password: password,
    // };
    console.log("------------->hit")
    dispatch(loginUser(userEmail, password));
  };

  return (
    <Dialog  open={open}>
      <DialogTitle>Login Into Your Account</DialogTitle>
      <form>
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
            id="username-input"
            label="Email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <TextField
            required
            id="password-input"
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div id="login_buttons_box">
            <Button
              className="login_form_button"
              size="large"
              variant="contained"
              color="secondary"
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
          </div>
        </Box>
      </form>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function LoginButton() {
  const [open, setOpen] = useState(false);
// console.log("OPEn", open)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className="navbar_buttons">
      <Typography variant="subtitle1" component="div"></Typography>
      <br />
      <Button variant="contained" onClick={handleClickOpen}>
        Login
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}