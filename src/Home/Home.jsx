import './Home.css';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import { useState } from 'react';
import { getMeds } from '../apiCalls';

function Home() {
  const [meds, setMeds] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState('')

  const requestMeds = (event) => {
    event.preventDefault()
    getMeds(keyword)
      .then(data => {
        setMeds(data.drugGroup.conceptGroup.find(result => result.tty === "SBD").conceptProperties.map(result => result.name))
      })
      .catch(error => {
        setMeds([]);
        setError(error.message);
      })
    setKeyword('')
  }
  
  return (
    <main>
      <Search requestMeds={requestMeds} keyword={keyword} setKeyword={setKeyword}/>
      <SearchResults meds={meds}/>
    </main>
  )
};

export default Home;