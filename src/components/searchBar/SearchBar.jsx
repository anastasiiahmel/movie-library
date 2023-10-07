import { useState } from "react";

import { SearchStyles } from './SearchBar.styled'


export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");


  const handleChange = (event) => {
    setValue(event.target.value.toLowerCase());
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      return console.log("Please enter key words for search");
    }
    onSubmit(value);
    setValue("");
  };



  return (
    <SearchStyles>
        <form className="form" onSubmit={handleSubmit}>
            <button type="submit" className="button button-large button-primary">
               Search
            </button>
            <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={value}
                onChange={handleChange}
            />
        </form>
    </SearchStyles>
  );
};




