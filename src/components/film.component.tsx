import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface FilmComponentProps {
  film: FilmWithGenres;
}

const FilmComponent = (props: FilmComponentProps) => {
  const { film } = props;

  return (

    <Card sx={{ display: 'flex', marginBottom: 2, height: 250 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        alt={`${film.title} Poster`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
          <Typography component="div" variant="h5" >
          {film.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p" sx={{marginTop: 'auto'}}>
          {`Genre: ${film.genre_names.join(", ")}`}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default FilmComponent;
