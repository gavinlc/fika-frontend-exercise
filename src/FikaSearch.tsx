import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import InputComponent from "./components/Input.component";
import LoadingComponent from "./components/Loading.component";
import useFikaSearch from "./hooks/UseFikaSearch.hook";
import FilmGridComponent from "./components/FilmGrid.component";
import ErrorMessagegComponent from "./components/ErrorMessage.component";

const FikaSearch = () => {
  const { errorMessage, filmsWithGenres, loading, searchTerm, setSearchTerm } =
    useFikaSearch();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              FikaSearch
            </Typography>
            <InputComponent
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        {errorMessage ? (
          <ErrorMessagegComponent message={errorMessage} />
        ) : null}
        {loading && !errorMessage ? (
          <LoadingComponent />
        ) : (
          <FilmGridComponent films={filmsWithGenres} />
        )}
      </Container>
    </>
  );
};

export default FikaSearch;
