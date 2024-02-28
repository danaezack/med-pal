import './MedList.css';
import SavedCard from '../SavedCard/SavedCard';
import { Link } from 'react-router-dom';

function MedList({ medList }) {
  
  const savedCards = medList.map(med => {
    return (
      <SavedCard med={med} />
    )
  })
  
  return (
    <main className='med-list-page'>
      <h2 className='med-list-title'>My Medication List:</h2>
      {savedCards}
      <Link to='/'>
        <button className='return-btn'>Click to add more</button>
      </Link>
    </main>
  );
}

export default MedList;