import { format, startOfWeek, add } from 'date-fns';
import Typography from '@mui/material/Typography';

const weekStart = add(startOfWeek(new Date()), {
  days: 1,
});
const weekEnd = add(startOfWeek(new Date()), { days: 7 });

const formattedWeekStart = format(weekStart, 'E dd MMMM');

const formattedWeekEnd = format(weekEnd, 'E dd MMMM ');

function DateHeading() {
  return (
    <Typography
      variant="h5"
      component="h2"
      gutterBottom
      sx={{ py: 2 }}
    >
      {formattedWeekStart} – {formattedWeekEnd}
    </Typography>
  );
}

export default DateHeading;
