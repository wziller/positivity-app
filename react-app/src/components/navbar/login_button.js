import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import "./navbar.css";



function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = () => {
    onClose();
  };

  return (

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Login Into Your Account</DialogTitle>
        <Box
          id='login_form'
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="username-input"
            label="Username"
          />
          <TextField
            required
            id="password-input"
            label="Password"
            placeholder="Password"
          />
        </Box>
        <Box id='login_buttons_box'>
          <Button className='login_form_button' size='large' variant="contained" color='secondary'>
            Login
          </Button>
          <Button className='login_form_button' size='large' variant="contained">
            Cancel
          </Button>
        </Box>
      </Dialog>

  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function LoginButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className='navbar_buttons'>
      <Typography variant="subtitle1" component="div">
      </Typography>
      <br />
      <Button variant="contained" onClick={handleClickOpen}>
        Login
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
