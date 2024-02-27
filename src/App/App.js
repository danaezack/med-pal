import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import MedList from '../MedList/MedList';

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/med-list' element={<MedList />} />
      </Routes>
    </main>
  );
}

export default App;
