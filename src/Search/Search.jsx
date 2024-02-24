import './Search.css';
import { useState } from 'react';

function Search({ requestMeds, keyword, setKeyword }) {
  
  return (
    <form>
      <input 
        name='search-input'
        type='text'
        value={keyword}
        placeholder='Search for medication'
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button onClick={(event) => requestMeds(event, keyword)}>Submit</button>
    </form>
  );
}

export default Search;