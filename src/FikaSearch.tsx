import FilmComponent from "./components/film.component";
import InputComponent from "./components/input.component";
import LoadingComponent from "./components/loading.component";

import useFikaSearch from "./hooks/UseFikaSearch.hook";

const FikaSearch = () => {
  const { errorMessage, filmsWithGenres, loading, searchTerm, setSearchTerm } = useFikaSearch();

  return (
    <div>
      <h1>Fika Search</h1>
      <pre>Loading: {loading}</pre>
      <pre>Error: {errorMessage}</pre>
      <InputComponent
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <div>

        { loading ? <LoadingComponent /> : null }

        {filmsWithGenres.map((film) => (
          <FilmComponent film={film} />
        ))}
      </div>
    </div>
  );
};

export default FikaSearch;
