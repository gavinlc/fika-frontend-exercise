import Grid from '@mui/material/Unstable_Grid2';
import FilmComponent from "./Film.component";

interface FilmGridComponentProps {
  films: FilmWithGenres[];
}

const FilmGridComponent = (props: FilmGridComponentProps) => {
  const { films } = props;

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {films.map((film, index) => (
        <Grid xs={4} sm={4} md={4} key={index}>
          <FilmComponent film={film}></FilmComponent>
        </Grid>
      ))}
    </Grid>
  );
};

export default FilmGridComponent;
