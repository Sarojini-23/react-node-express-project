import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>

      {Object.entries(movie).map(([key, value]) => {
        if (key === "release_date") {
          value = new Date(value).toLocaleDateString();
        }

        if (key === "runtime") {
          value = `${value} minutes`;
        }

        return (
          <p key={key}>
            <strong>{key}:</strong> {String(value)}
          </p>
        );
      })}

      <Link to="/">⬅ Back</Link>
    </div>
  );
}

export default MovieDetail;