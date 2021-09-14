import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  span: {
    color: "red",
    margin: "10px",
  },
  dialog: {
    textAlign: "center",
  },
  title: {
    padding: "100px",
  },
  btn: {
    marginBottom: "25px",
  },
  closeButton: {
    marginLeft: "auto",
  },
});

export default function AlertDialog({
  title,
  open,
  winner,
  handleStartAgain,
  handleClose,
}) {
  const classes = useStyles();

  return (
    <div>
      <Dialog className={classes.dialog} open={open} onClose={handleClose}>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle className={classes.title} id="alert-dialog-title">
          {title}
          <span className={classes.span}>{winner}</span>
        </DialogTitle>
        <Button
          className={classes.btn}
          onClick={handleStartAgain}
          color="primary"
          autoFocus
        >
          Start Again ?
        </Button>
      </Dialog>
    </div>
  );
}
