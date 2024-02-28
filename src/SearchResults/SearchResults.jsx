import './SearchResults.css';

function SearchResults({ meds, openModal }) {

  const renderResults = () => {
    const medCards = meds.map(med => {
      return (
        <button type='button' value={med} onClick={(event) => openModal(event)} className='result'>{med}</button>
      )
    })
    if (meds.length) {
      return (
        <section className='results-container'>
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