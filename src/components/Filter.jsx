import React, { useState } from "react";

const Filter = ({ filterByTitle, filterByRating }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    filterByTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    filterByRating(e.target.value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
        min="0"
        max="5"
      />
    </div>
  );
};

export default Filter;
