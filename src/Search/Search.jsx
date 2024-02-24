import './Search.css';

function Search({ requestMeds, keyword, setKeyword }) {
  
  return (
    <form className='form'>
      <input 
        className='search-input'
        name='search-input'
        type='text'
        value={keyword}
        placeholder='Search for medication'
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button className='search-btn' onClick={(event) => requestMeds(event, keyword)}>Submit</button>
    </form>
  );
}

export default Search;