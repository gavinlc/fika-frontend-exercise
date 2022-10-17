import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const LoadingComponent = () => {
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
        <Typography>loading...</Typography>
      </Grid>
    </Grid>
  );
};

export default LoadingComponent;
