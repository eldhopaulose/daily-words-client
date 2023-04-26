import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAsync, clearSearch } from "../slices/searchSlice";
import { Waveform } from "@uiball/loaders";

function Search() {
  // Get the search-related state and dispatch from the Redux store using useSelector and useDispatch
  const dispatch = useDispatch();
  const { searchQuery, searchResults, isLoading } = useSelector(
    (state) => state.search
  );
  // Use useState to keep track of the search query entered by the user
  const [query, setQuery] = useState("");

  // Define a function to handle the search button click event
  const handleSearch = () => {
    // Dispatch an async search action with the query as a parameter
    dispatch(searchAsync(query));
  };

  // Define a function to handle the clear button click event
  const handleClear = () => {
    // Dispatch a clear search action to reset the search state
    dispatch(clearSearch());
    // Reset the query in the component state to an empty string
    setQuery("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="sm-col-6 col-12">
          {/* Input field to allow the user to enter a search query */}
          <input
            className="w-100"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="mt-5">
          {/* Button to trigger the search action */}
          <button onClick={handleSearch}>Search</button>
          {/* Button to clear the search results and query */}
          <button onClick={handleClear}>Clear</button>
        </div>
        {/* Display the search results if available and hide if not */}
        {isLoading ? (
          // <p>Loading...</p>
          <div className="col-12 d-flex align-items-center justify-content-center mt-5">
              <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
          </div>
        ) : searchResults && searchResults.word ? (
          <>
            {/* Display the word being searched for */}
            <h1>{searchResults.word}</h1>
            {/* Display the meanings of the word if available */}
            {searchResults.meaning.length > 0 ? (
              <div>
                {searchResults.meaning.map((result, index) => (
                  <p key={index}>{result}</p>
                ))}
              </div>
            ) : null}
          </>
        ) : (
          // Display a message indicating that no results were found
          <p className="mt-5">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
