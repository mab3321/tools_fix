import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai"; // Import React Icons

// Create a styled search bar component
const StyledSearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 20px;
  padding: 6px 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  outline: none;
  background-color: transparent;
  color: black;

  &::placeholder {
    color: #5f6368;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SearchBar({ setResults }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch(`http://127.0.0.1:5000/api/search?query=${value}&limit=10`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.map((posts) => {
          return posts;
        });

        setResults(results);
      });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to fetch data from the backend
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/search?query=${keyword}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // Process the data and update the UI (e.g., display elongated cards)
      // You should have a component to render the data as elongated cards

      // Example: navigate to a search results page
      navigate(`/search-results`, {
        state: { searchData: data }, // Pass the data to the search results page
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <StyledSearchBar role="search" onSubmit={handleSearch}>
      <StyledInput
        type="search"
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setKeyword(e.target.value);
          setInput(e.target.value);
          fetchData(e.target.value);
        }}
      />
      <StyledButton type="submit">
        <AiOutlineSearch size={20} />
      </StyledButton>
    </StyledSearchBar>
  );
}

export default SearchBar;
