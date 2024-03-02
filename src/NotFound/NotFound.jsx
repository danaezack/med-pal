import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='not-found-page'>
      <h2 className='not-found-msg'>Page not found!</h2>
      <Link to='/'>
        <button className='return-btn'>Return to home</button>
      </Link>
    </section>
  )
}

export default NotFound;