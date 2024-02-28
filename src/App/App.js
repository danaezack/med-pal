import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import MedList from '../MedList/MedList';
import Modal from '../Modal/Modal';

function App() {
  const [keyword, setKeyword] = useState('');
  const [meds, setMeds] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [medication, setMedication] = useState('');
  const [medList, setMedList] = useState([]);

  const clearResults = () => {
    setKeyword('');
    setMeds(null);
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

  const addMed = (newMed) => {
    setMedList([...medList, newMed]);
  }

  return (
    <main>
      <Header clearResults={clearResults}/>
      <Routes>
        <Route path='/' element={<Home meds={meds} setMeds={setMeds} keyword={keyword} setKeyword={setKeyword} openModal={openModal} setMedication={setMedication}/>} />
        <Route path='/med-list' element={<MedList medList={medList}/>} />
      </Routes>
      { isSelected && <Modal medication={medication} closeModal={closeModal} addMed={addMed} clearResults={clearResults}/>}
    </main>
  );
}

export default App;
