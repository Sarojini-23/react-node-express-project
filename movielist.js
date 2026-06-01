import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movies</h1>

      <div className="grid">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <h3>{movie.title}</h3>
              <p>{movie.tagline}</p>
              <p>⭐ {movie.vote_average}/10</p>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
        }

        .card{
          border:1px solid #ddd;
          padding:15px;
          border-radius:10px;
        }
      `}</style>
    </div>
  );
}

export default MovieList;