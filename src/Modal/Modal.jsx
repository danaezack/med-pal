import './Modal.css';
import { Link } from 'react-router-dom';
import Form from '../Form/Form'
import PropTypes from 'prop-types';

function Modal({ medication, closeModal, addMed, frequency, setFrequency, quantity, setQuantity, clearResults }) {

  const clearForm = () => {
    setFrequency('');
    setQuantity('');
  }

  return (
    <section className='overlay'>
      <section className='modal'>
        <div className='close-btn-container'>
          <button className='close-btn' onClick={() => closeModal()}>X</button>
        </div>
        <p className='modal-title'>You have selected:</p>
        <p className='medication-name'>{medication}</p>
        <Form
          quantity={quantity}
          setQuantity={setQuantity}
          frequency={frequency}
          setFrequency={setFrequency}
        />
        <Link to='/med-list'>
          <button className='add-btn' onClick={() => {
            addMed(medication);
            closeModal();
            clearResults();
            clearForm()
          }}>Add Medication</button>
        </Link>
      </section>
    </section>
  );
}

export default Modal;

Modal.propTypes = {
  medication: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  addMed: PropTypes.func.isRequired,
  frequency: PropTypes.string.isRequired,
  setFrequency: PropTypes.func.isRequired,
  quantity: PropTypes.string.isRequired,
  setQuantity: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired
};