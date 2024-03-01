import './SavedCard.css';

function SavedCard({ name, quantity, frequency }) {
  return (
    <article className='saved-card'>
      <p className='saved-name'>{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Frequency: {frequency}</p>
    </article>
  );
}

export default SavedCard;