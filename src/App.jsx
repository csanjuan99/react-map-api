import { useState } from 'react'
import './App.css'
import GoogleMapComponent from './components/GoogleMapComponent'

function App() {
  const [query, setQuery] = useState("")
  const [showMap, setShowMap] = useState(false)

  const onHandleSearch = (e) => {
    e.preventDefault();
    if (!query) {
      alert('¡Nothing to search!');
      return;
    }
    setShowMap(true);
  }

  const handlingSearch = (e) => {
    setQuery(e.target.value);
    setShowMap(false);
  }

  return (
    <>
      <form onSubmit={onHandleSearch} className="container">
        <div className='container__field'>
          <label htmlFor="query">Query:</label>
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => handlingSearch(e)}
          />
        </div>
        <button type="submit">
          Search
        </button>
      </form>
      {
        showMap ?
          <GoogleMapComponent query={query} /> :
          <p>¡Nothing to search!</p>
      }
    </>
  )
}

export default App
