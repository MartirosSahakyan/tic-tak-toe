import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function ChoosePlayer({value, handleChange}) {
//   const [value, setValue] = React.useState('female');

  

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose Player to start</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="X" control={<Radio />} labelPlacement="start" label="X::" />
        <FormControlLabel value="O" control={<Radio />} labelPlacement="start" label="O::" />
      </RadioGroup>
    </FormControl>
  );
}