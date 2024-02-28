import './Modal.css';

function Modal({ medication, closeModal }) {
  // if (!medication) return

  return (
    <section className='overlay'>
      {/* <section className='overlay-background'></section> */}
      <section className='modal'>
        <div className='close-btn-container'>
          <button className='close-btn' onClick={() => closeModal()}>X</button>
        </div>
        <p>You have selected:</p>
        <p className='medication-name'>{medication}</p>
        <button className='add-btn'>Add Medication</button>
      </section>
    </section>
  );
}

export default Modal;