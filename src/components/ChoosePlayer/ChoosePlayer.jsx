import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Dialog from "@material-ui/core/Dialog";
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
});

export default function ChoosePlayer({ handleChange, open }) {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleChange}>
      <FormControl className={classes.form} component="fieldset">
        <FormLabel className={classes.title} component="legend">
          Choose Player to start
        </FormLabel>
        <RadioGroup onChange={handleChange}>
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
      </FormControl>
    </Dialog>
  );
}
