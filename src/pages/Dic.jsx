import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAsync, clearSearch } from '../slices/words';

function Search() {
  const dispatch = useDispatch();
  const { searchQuery, searchResults, isLoading } = useSelector((state) => state.search);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(searchAsync(query));
  };

  const handleClear = () => {
    dispatch(clearSearch());
    setQuery('');
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Clear</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {searchResults.word ? (
            <>
              <h1>{searchResults.word}</h1>
              {searchResults && searchResults.meaning.length > 0 ? (
                <div>
                  {searchResults.meaning.map((result, index) => <p key={index}>{result}</p>)}
                </div>
              ) : (
                <p>No results found</p>
              )}
            </>
          ) : null}
        </>
      )}
    </div>
  );
}

export default Search;
