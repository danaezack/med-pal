import './MedList.css';
import SavedCard from '../SavedCard/SavedCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MedList({ medList }) {
  
  const savedCards = medList.map(med => {
    return (
      <SavedCard
        name={med.name}
        quantity={med.quantity}
        frequency={med.frequency}
      />
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

MedList.propTypes = {
  medList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
};