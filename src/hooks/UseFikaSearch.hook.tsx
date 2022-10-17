import { useEffect, useState } from "react";

export default function useFikaSearch() {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [films, setFilms] = useState<Film[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [filmsWithGenres, setFilmsWithGenres] = useState<FilmWithGenres[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const genresEndpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const moviesEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`;
  const searchEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=`;


  /*
   * Generic wrapper for getting data from API via fetch
   */
  async function getResources<T>(
    endpoint: string,
    callback: (result: T) => void
  ) {

    setLoading(true);
    setErrorMessage(null);

    fetch(endpoint).then(response => response.json()).then(jsonResponse => {
      if (jsonResponse.success === false){
        setErrorMessage(jsonResponse.status_message);
        setLoading(false);
      } else {
        callback(jsonResponse);
        setLoading(false);
      }
    })

  }

  /*
   * On init get the list of genres
   * NOTE: in development, this will run twice
   * see: https://beta.reactjs.org/learn/you-might-not-need-an-effect#fetching-data
   */
  useEffect(() => {

    getResources<GenreResponse>(genresEndpoint, (result) => {
      setGenres(result.genres);
    });
  }, [genresEndpoint]);

  /*
   * On searchTerm change, go fetch the titles matching
   * Add 500ms throttle to requests
   */
  useEffect(() => {
    const timeout = setTimeout(
      getResources,
      500,
      searchTerm === "" ? moviesEndpoint : `${searchEndpoint}${searchTerm}`,
      (result: FilmResponse) => {
        setFilms(result.results);
      }
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [moviesEndpoint, searchEndpoint, searchTerm]);

  /*
   * On films or genres change, map the ID's to the genres and push the
   * text name to the `genres` array
   */
  useEffect(() => {
    const filmsWithGenres = films.map((film) => {
      const genreList: string[] = [];
      film.genre_ids.forEach((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        if (genre) {
          genreList.push(genre.name);
        }
      });
      return { ...film, genre_names: genreList };
    });
    setFilmsWithGenres(filmsWithGenres);
  }, [films, genres]);

  return { errorMessage, filmsWithGenres, loading, searchTerm, setSearchTerm };
}
