import './Modal.css';
import { Link } from 'react-router-dom';
import Form from '../Form/Form'

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