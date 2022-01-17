import React from "react";

function MovieCard({
  titleTest,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={titleTest} />
      <h2>{titleTest}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;
