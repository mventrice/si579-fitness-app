import React, { useState } from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Form({ handleAddWorkout }) {
  //Prevents numbers from being entered in  input form
  React.useEffect(() => {
    document
      .querySelector("input[type='number']")
      .addEventListener('keypress', (evt) => {
        if (evt.which === 8) {
          return;
        }
        if (evt.which < 48 || evt.which > 57) {
          evt.preventDefault();
        }
      });
  }, []);

  function resetForm() {
    setWorkoutDetails({
      duration: '',
      type: '',
      category: '',
      day: '',
    });
  }

  const [workoutDetails, setWorkoutDetails] = useState({
    duration: '',
    type: '',
    category: '',
    day: '',
  });

  const cardio = ['run', 'cycling', 'hiit'];
  const stretch = ['yoga', 'pilates'];
  const strength = [
    'weight lifting',
    'resistance training',
  ];

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (cardio.includes(value)) {
      setWorkoutDetails((prevState) => ({
        ...prevState,
        [name]: value,
        category: 'cardio',
      }));
    } else if (stretch.includes(value)) {
      setWorkoutDetails((prevState) => ({
        ...prevState,
        [name]: value,
        category: 'stretch',
      }));
    } else {
      setWorkoutDetails((prevState) => ({
        ...prevState,
        [name]: value,
        category: 'strength',
      }));
    }
  };

  console.log(workoutDetails);

  return (
    <Box sx={{ py: 2 }}>
      <Stack direction="row" spacing={2}>
        <FormControl required sx={{ m: 0, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">
            Day
          </InputLabel>
          <Select
            value={workoutDetails.day}
            name="day"
            label="day"
            onChange={handleChange}
          >
            <MenuItem value={'monday'}>Monday</MenuItem>
            <MenuItem value={'tuesday'}>Tuesday</MenuItem>
            <MenuItem value={'wednesday'}>
              Wednesday
            </MenuItem>
            <MenuItem value={'thursday'}>Thurday</MenuItem>
            <MenuItem value={'friday'}>Friday</MenuItem>
            <MenuItem value={'saturday'}>Saturday</MenuItem>
            <MenuItem value={'sunday'}>Sunday</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="duration"
          label="Duration (min)"
          value={workoutDetails.duration}
          onChange={handleChange}
          type="number"
          required
        />
        <FormControl required sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">
            Activity
          </InputLabel>
          <Select
            value={workoutDetails.type}
            name="type"
            label="Activity"
            onChange={handleChange}
          >
            <MenuItem value={'run'}>Run</MenuItem>
            <MenuItem value={'cycling'}>Cycling</MenuItem>
            <MenuItem value={'hiit'}>HIIT</MenuItem>
            <MenuItem value={'pilates'}>Pilates</MenuItem>
            <MenuItem value={'yoga'}>Yoga</MenuItem>
            <MenuItem value={'weight lifting'}>
              Weight lifting
            </MenuItem>
            <MenuItem value={'resistance training'}>
              Resistance training
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          size="large"
          disabled={
            workoutDetails.duration &&
            workoutDetails.day &&
            workoutDetails.type
              ? false
              : true
          }
          onClick={(event) => {
            handleAddWorkout(workoutDetails);
            resetForm();
          }}
        >
          Add
        </Button>
      </Stack>
    </Box>
  );
}
