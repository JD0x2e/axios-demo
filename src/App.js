import "./App.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setMovie] = useState({});

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getMovie = async () => {
    const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${searchQuery}`;
    const res = await axios.get(API);
    console.log(API);
    setMovie(res.data);
  };

  return (
    <div className="App">
      <input onChange={handleChange} />
      <p>{searchQuery}</p>
      <button onClick={getMovie}>Explore!</button>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
}
