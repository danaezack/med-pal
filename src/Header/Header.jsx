import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <section>
      <h1>MedPal</h1>
      <nav>
        <NavLink to='/' className='nav'>Home</NavLink>
        <NavLink to='/med-list' className='nav'>Med List</NavLink>
      </nav>
    </section>
  );
}

export default Header;