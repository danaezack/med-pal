import './App.css';
import Home from '../Home/Home';
import { useEffect, useState } from 'react';
import { getMeds } from '../apiCalls';

function App() {
  const [meds, setMeds] = useState([]);
  
  useEffect(() => {
    getMeds()
      .then(data => setMeds(data.drugGroup.conceptGroup.find(result => result.tty === "SBD").conceptProperties))
  }, [])
  
  return (
      <Home meds={meds} />
  );
}

export default App;
