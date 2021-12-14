import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProgressCircle(props) {
  return (
    <>
      <Typography
        variant="h6"
        component="h2"
        sx={{ py: 3 }}
      >
        Your Weekly Progress
      </Typography>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex',
        }}
      >
        <CircularProgress
          variant="determinate"
          value={props.percentComplete}
          label="percent complete"
          size={200}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            component="div"
            color="text.secondary"
          >
            {props.completedWorkouts}/{props.totalWorkouts}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
