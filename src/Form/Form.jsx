import './Form.css';
import PropTypes from 'prop-types';

function Form({ quantity, setQuantity, frequency, setFrequency }) {
  return (
    <form className='modal-form'>
      <select value={quantity} className='quantity dropdown' onChange={(event) => setQuantity(event.target.value)}>
        <option value=''>Specify Quantity</option>
        <option value='0.5'>0.5</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
      <select value={frequency} className='frequency dropdown' onChange={(event) => setFrequency(event.target.value)}>
        <option value=''>Specify Frequency</option>
        <option value='1x daily'>1x daily</option>
        <option value='2x daily'>2x daily</option>
        <option value='3x daily'>3x daily</option>
        <option value='4x daily'>4x daily</option>
        <option value='1x weekly'>1x weekly</option>
        <option value='2x weekly'>2x weekly</option>
        <option value='as needed'>as needed</option>
      </select>
    </form>
  );
}

export default Form;

Form.propTypes = {
  quantity: PropTypes.string.isRequired,
  setQuantity: PropTypes.func.isRequired,
  frequency: PropTypes.string.isRequired,
  setFrequency:PropTypes.func.isRequired
};