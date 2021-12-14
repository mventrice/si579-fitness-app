import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

function Legend() {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Stack direction="row" spacing={1}>
          <Box
            sx={{
              backgroundColor: '#002984',
              width: 20,
              height: 20,
            }}
          ></Box>
          <Typography>{`Stretch & Tone`}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Box
            sx={{
              backgroundColor: '#00675b',
              width: 20,
              height: 20,
            }}
          ></Box>
          <Typography>Strength</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Box
            sx={{
              backgroundColor: '#d81b60',
              width: 20,
              height: 20,
            }}
          ></Box>
          <Typography>Cardio</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Legend;
