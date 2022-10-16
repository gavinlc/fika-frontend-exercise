import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

interface ErrorMessagegComponentProps {
  message: string;
}

const ErrorMessagegComponent = (props: ErrorMessagegComponentProps) => {
  const { message } = props;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Typography>{message}</Typography>
      </Grid>
    </Grid>
  );
};

export default ErrorMessagegComponent;
