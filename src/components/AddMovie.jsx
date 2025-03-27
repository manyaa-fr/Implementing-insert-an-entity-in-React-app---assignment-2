import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AddMovie.css";

const AddMovie = () => {
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the addMovie function from location.state
  const addMovie = location.state?.addMovie;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieDetails({ ...movieDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addMovie) {
      addMovie(movieDetails); // Add the new movie to the movies array
    }
    navigate("/"); // Navigate back to the dashboard
  };

  return (
    <div className="add-movie-container">
      <h1>Add a New Movie</h1>

      <form onSubmit={handleSubmit} className="add-movie-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={movieDetails.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="director"
          placeholder="Director"
          value={movieDetails.director}
          onChange={handleChange}
          required
        />

        <select
          name="genre"
          value={movieDetails.genre}
          onChange={handleChange}
          required
        >
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Animation">Animation</option>
        </select>

        <input
          type="number"
          name="releaseYear"
          placeholder="Release Year"
          value={movieDetails.releaseYear}
          onChange={handleChange}
          required
          min="1900"
          max="2099"
        />

        <textarea
          name="synopsis"
          placeholder="Synopsis"
          value={movieDetails.synopsis}
          onChange={handleChange}
          rows={4}
          required
        />

        <input
          type="url"
          name="posterUrl"
          placeholder="Poster Image URL"
          value={movieDetails.posterUrl}
          onChange={handleChange}
          required
        />

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;