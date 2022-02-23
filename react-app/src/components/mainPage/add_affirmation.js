import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createNewAff } from "../../store/affirmations";
import "./main_page.css";
// import { FormControlUnstyledContext } from "@mui/base";
import { Typography } from "@mui/material";

export default function NewAffirmationForm() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [affirmation, setAffirmation] = useState("");
  const user = useSelector((state) => state.session.user);
  const affirmations = useSelector((state) => state.affirmations.all);
  let todayRaw = new Date(Date.now()).toString().split();
  let today = todayRaw[2] + todayRaw[1] + todayRaw[3];
  let todaysAff = affirmations.filter((affirmation)=> affirmation.created_at.split(" ").slice(1, 4).join("") === today)
  const [postedAff, setPostedAff] = useState(todaysAff.length === 0);


  useEffect(() => {}, [affirmations]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      body: affirmation,
    };
    dispatch(createNewAff(payload, user.id));
    setOpen(false);
    setPostedAff(true);
  };

  return (
    <div>
      {!postedAff ? (
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Add a new affirmation
        </Button>
      ) : (
        <Typography>
          Yay! You're Affirmation is posted! See you tomorrow
        </Typography>
      )}

      <Dialog
        id="vew_aff_dialog"
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle>What is the highlight of your day?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="new_affirmation_body"
            label="Affirmation"
            type="text"
            fullWidth
            rows={4}
            multiline
            variant="filled"
            color="secondary"
            value={affirmation}
            onChange={(e) => setAffirmation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="secondary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
