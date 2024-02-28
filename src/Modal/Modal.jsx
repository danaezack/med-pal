import './Modal.css';
import { Link } from 'react-router-dom';

function Modal({ medication, closeModal, addMed, clearResults }) {

  return (
    <section className='overlay'>
      <section className='modal'>
        <div className='close-btn-container'>
          <button className='close-btn' onClick={() => closeModal()}>X</button>
        </div>
        <p>You have selected:</p>
        <p className='medication-name'>{medication}</p>
        <Link to='/med-list'>
          <button className='add-btn' onClick={() => {
            addMed(medication);
            closeModal();
            clearResults();
          }}>Add Medication</button>
        </Link>
      </section>
    </section>
  );
}

export default Modal;