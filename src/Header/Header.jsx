import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header({ clearResults }) {
  return (
    <section className='heading'>
      <Link to='/'>
        <section className='full-title' onClick={() => clearResults()}>
          <h1 className='title-1'>Med</h1>
          <h1 className='title-2'>Pal</h1>
        </section>
      </Link>
      <nav className='nav-bar'>
        <NavLink to='/'>
          <button className='nav-btn' onClick={() => clearResults()}>Home</button>
        </NavLink>
        <NavLink to='/med-list'>
          <button className='nav-btn'>Med List</button>
        </NavLink>
      </nav>
    </section>
  );
}

export default Header;