import './Home.css';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import { useState } from 'react';
import { getMeds } from '../apiCalls';

function Home() {
  const [meds, setMeds] = useState([]);
  const [keyword, setKeyword] = useState('');

  const requestMeds = (event) => {
    event.preventDefault()
    getMeds(keyword)
      .then(data => setMeds(data.drugGroup.conceptGroup.find(result => result.tty === "SBD").conceptProperties.map(result => result.name)))
  }
  
  return (
    <main>
      <h1>MedPal</h1>
      <Search requestMeds={requestMeds} keyword={keyword} setKeyword={setKeyword}/>
      <SearchResults meds={meds}/>
    </main>
  )
};

export default Home;