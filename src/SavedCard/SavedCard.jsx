import './SavedCard.css';

function SavedCard({ med }) {
  return (
    <article className='saved-card'>
      <p>{med}</p>
    </article>
  );
}

export default SavedCard;