import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  type,
  genres,
  setGenres,
  setSelectedGenres,
  setPage,
  selectedGenres,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  }

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
    console.log(data);
  };
  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          label={genre.name}
          style={{ margin: 2 }}
          size="small"
          color="primary"
          key={genre.id}
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          label={genre.name}
          style={{ margin: 2 }}
          size="small"
          key={genre.id}
          sx={{ color: "white",cursor:"pointer",backgroundColor: "grey" }}
          clickable
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
