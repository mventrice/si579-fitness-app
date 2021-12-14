import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import ProgressCircle from './ProgressCircle';
import Form from './Form';
import DateHeading from './Date';
import Legend from './Legend';
import Button from '@mui/material/Button';
import './styles.css';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'Copyright © '}
      <Link color="inherit" href="https:marielev.com">
        Mariele Ventrice
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  const [workouts, setWorkouts] = useState([]);
  const handleAddWorkout = (workoutDetails) => {
    setWorkouts((prevState) => [
      ...prevState,
      workoutDetails,
    ]);
    setTotalWorkouts(totalWorkouts + 1);
    console.log('workouts:' + workouts);
  };

  function clearWorkouts() {
    setWorkouts([{}]);
    setCompletedWorkouts(0);
    setTotalWorkouts(0);
    console.log('total workouts:' + totalWorkouts);
  }

  const [completedWorkouts, setCompletedWorkouts] =
    useState(0);

  const handleComplete = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCompletedWorkouts(completedWorkouts + 1);
    } else {
      setCompletedWorkouts(completedWorkouts - 1);
    }
  };

  const sortingArray = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  function groupBy(objects, property) {
    if (typeof property !== 'function') {
      const propName = property;
      property = (obj) => obj[propName];
    }

    const groupedObjects = new Map();
    for (const object of objects) {
      const groupName = property(object);
      if (!groupedObjects.has(groupName)) {
        groupedObjects.set(groupName, []);
      }
      groupedObjects.get(groupName).push(object);
    }

    const result = {};
    for (const key of Array.from(
      groupedObjects.keys()
    ).sort(function (a, b) {
      return (
        sortingArray.indexOf(a) - sortingArray.indexOf(b)
      );
    })) {
      result[key] = groupedObjects.get(key);
    }
    return result;
  }

  let dayElement = null;
  const groups = groupBy(workouts, 'day');
  const workout_elements = [];

  for (let obj in groups) {
    if (sortingArray.includes(obj)) {
      let objCapital =
        obj.charAt(0).toUpperCase() + obj.slice(1);
      dayElement = (
        <Typography variant="h6" component="h3">
          {objCapital}
        </Typography>
      );
      workout_elements.push(dayElement);
      for (const workout of groups[obj]) {
        const list_el = (
          <li
            key={workout.index}
            className={`nobullet + ${workout.category}`}
          >
            {workout.type === 'hiit'
              ? workout.type.toUpperCase() +
                ' ( ' +
                parseInt(workout.duration) +
                'min )'
              : workout.type.charAt(0).toUpperCase() +
                workout.type.slice(1) +
                ' ( ' +
                parseInt(workout.duration) +
                'min )'}
            <Checkbox
              checked={workout.checked}
              onChange={handleComplete}
              color="success"
            ></Checkbox>
          </li>
        );
        workout_elements.push(list_el);
      }
    } else {
      workout_elements;
    }
    console.log(obj);
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 4,
          py: 2,
          px: 2,
          border: 1,
          borderColor: '#ccc',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
        >
          Workout Scheduler and Tracker
        </Typography>

        <Form handleAddWorkout={handleAddWorkout} />

        <DateHeading />
        <Legend />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            sx={{ minWidth: 300, minHeight: 400, py: 2 }}
          >
            <ul>{workout_elements}</ul>
          </Box>

          <Box sx={{ minWidth: 300, minHeight: 200 }}>
            <ProgressCircle
              totalWorkouts={totalWorkouts}
              completedWorkouts={completedWorkouts}
              percentComplete={
                totalWorkouts
                  ? (completedWorkouts / totalWorkouts) *
                    100
                  : 0
              }
            />{' '}
          </Box>
        </Stack>
        {totalWorkouts ? (
          <Button
            onClick={() => {
              clearWorkouts();
            }}
          >
            Clear Workouts
          </Button>
        ) : null}
        <Copyright />
      </Box>
    </Container>
    // </LocalizationProvider>
  );
}
