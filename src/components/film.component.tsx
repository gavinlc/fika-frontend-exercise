import React from "react";

interface FilmComponentProps {
  film: FilmWithGenres;
}

const FilmComponent = (props: FilmComponentProps) => {
  const { film } = props;

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        className="film-poster"
        alt={`${film.title} Poster`}
      />
      <div className="film-component-genre">{`Genre: ${film.genre_names.join(
        ", "
      )}`}</div>
    </div>
  );
};

export default FilmComponent;
