import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <Stack sx={{ color: 'grey.500', justifyContent: "space-around" }} spacing={2} direction="row">
      <CircularProgress color="warning"/>
    </Stack>
  );
}

export default Loading