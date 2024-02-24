import './SearchResults.css';
// import MedCard from './MedCard/MedCard';

function SearchResults({ meds }) {
  
  const medCards = meds.map(med => {
    return (
      <section>
        <p>{med}</p>
      </section>
    )
  })

  return (
    <section>
      {medCards}
    </section>
  )
}

export default SearchResults;