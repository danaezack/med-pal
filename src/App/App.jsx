import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import MedList from '../MedList/MedList';
import Modal from '../Modal/Modal';
import NotFound from '../NotFound/NotFound';

function App() {
  const [keyword, setKeyword] = useState('');
  const [meds, setMeds] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [medication, setMedication] = useState('');
  const [medList, setMedList] = useState([]);
  const [quantity, setQuantity] = useState('')
  const [frequency, setFrequency] = useState('')
  const [match, setMatch] = useState(true)

  const clearResults = () => {
    setKeyword('');
    setMeds([]);
    setMatch(true);
  }

  const selectMedication = (event) => {
    const selectedMed = meds.filter(med => med === event.target.value);
    setMedication(selectedMed.join(''));
  }
  
  const closeModal = () => setIsSelected(false);
  const openModal = (event) => {
    setIsSelected(true);
    selectMedication(event);
  }

  const addMed = (med) => {
    const newMed = {
      name: med,
      quantity,
      frequency
    }
    setMedList([...medList, newMed]);
  }

  return (
    <main>
      <Header clearResults={clearResults} />
      <Routes>
        <Route path='/' element={<Home meds={meds} setMeds={setMeds} match={match} setMatch={setMatch} keyword={keyword} setKeyword={setKeyword} openModal={openModal} />} />
        <Route path='/med-list' element={<MedList medList={medList}/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      { isSelected &&
        <Modal
          medication={medication}
          closeModal={closeModal}
          addMed={addMed}
          quantity={quantity}
          setQuantity={setQuantity}
          frequency={frequency}
          setFrequency={setFrequency}
          clearResults={clearResults}
        />
      }
    </main>
  );
}

export default App;
