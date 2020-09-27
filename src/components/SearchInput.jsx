import React, { useState } from "react";

const SearchInput = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search images"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
