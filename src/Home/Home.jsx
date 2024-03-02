import './Home.css';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import { getMeds } from '../apiCalls';
import PropTypes from 'prop-types';

function Home({ meds, setMeds, match, setMatch, keyword, setKeyword, openModal }) {

  const requestMeds = (event) => {
    event.preventDefault()
    getMeds(keyword)
      .then(data => {
        setMeds(data.drugGroup.conceptGroup.find(result => result.tty === "SBD").conceptProperties.map(result => result.name))
        setMatch(true)
      })
      .catch(error => {
        setMeds([]);
        setMatch(false)
      })
  };

  return (
    <main>
      <Search requestMeds={requestMeds} keyword={keyword} setKeyword={setKeyword}/>
      <SearchResults match={match} meds={meds} openModal={openModal}/>
    </main>
  )
};

export default Home;

Home.propTypes = {
  meds: PropTypes.arrayOf(PropTypes.string).isRequired,
  setMeds: PropTypes.func.isRequired,
  match: PropTypes.bool.isRequired,
  setMatch: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};