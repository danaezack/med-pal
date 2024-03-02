import './Search.css';
import PropTypes from 'prop-types';

function Search({ requestMeds, keyword, setKeyword }) {
  
  return (
    <form className='form'>
      <input 
        className='search-input'
        name='search-input'
        type='text'
        value={keyword}
        placeholder='Search for a medication to add to your med list'
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button className='search-btn' onClick={(event) => requestMeds(event)}>Submit</button>
    </form>
  );
}

export default Search;

Search.propTypes = {
  requestMeds: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
};