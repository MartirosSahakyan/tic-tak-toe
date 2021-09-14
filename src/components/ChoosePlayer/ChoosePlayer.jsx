import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    margin: "80px",
  },
  title: {
    marginBottom: "40px",
    fontWeight: "bold",
    fontSize: "larger",
  },
  radioBtn: {
    margin: "10px auto",
  },
  btn: {
    marginTop: "30px",
  },
});

export default function ChoosePlayer({
  handleBtnClick,
  handleRadioBtn,
  open,
}) {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleBtnClick}>
      <FormControl className={classes.form} component="fieldset">
        <FormLabel className={classes.title} component="legend">
          Choose Player to start
        </FormLabel>
        <RadioGroup onChange={handleRadioBtn}>
          <FormControlLabel
            className={classes.radioBtn}
            value="X"
            control={<Radio />}
            labelPlacement="start"
            label="X::  "
          />
          <FormControlLabel
            className={classes.radioBtn}
            value="O"
            control={<Radio />}
            labelPlacement="start"
            label="O::  "
          />
        </RadioGroup>
        <Button
          onClick={handleBtnClick}
          variant="contained"
          color="primary"
          className={classes.btn}
        >
          Start Game
        </Button>
      </FormControl>
    </Dialog>
  );
}
