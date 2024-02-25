import './SearchResults.css';

function SearchResults({ meds }) {
  
  function renderResults() {
    const medCards = meds.map(med => {
      return (
        <section className='results-container'>
          <p className='med-card'>{med}</p>
        </section>
      )
    })
    if (meds.length) {
      return (
        <section>
          <h2 className='results-title'>Search results:</h2>
          {medCards}
        </section>
      )
    } else {
      return (
        <>
          <h2 className='results-title'>Search results:</h2>
          <p className='no-match-msg'>No matching results. Triple check your spelling and try again!</p>
        </>
      )
    }
  }

  return (
    <section>
      { meds && renderResults() }
    </section>
  )
}

export default SearchResults;