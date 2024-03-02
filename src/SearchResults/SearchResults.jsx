import './SearchResults.css';
import PropTypes from 'prop-types';

function SearchResults({ match, meds, openModal }) {
  
  if (!match) {
    return (
      <p className='no-match-msg'>Sorry! There are no matching results. Triple check your spelling and try again!</p>
    )
  }

  if (meds.length) {
    const medCards = meds.map(med => {
      return (
        <button type='button' value={med} key={Date.Now} onClick={(event) => openModal(event)} className='result'>{med}</button>
      )
    })
    return (
      <section className='results-container'>
        <h2 className='results-title'>Search results:</h2>
        {medCards}
      </section>
    )
  } 
}

export default SearchResults;

SearchResults.propTypes = {
  match: PropTypes.bool.isRequired,
  meds: PropTypes.arrayOf(PropTypes.string).isRequired,
  openModal: PropTypes.func.isRequired
};