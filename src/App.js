import './App.css';
import RenderCards from './components/RenderCards';
import movies from './components/MovieDatabase';
import { useState } from 'react';

function App() {

  const [ascendingArr, setAscendingArr] = useState([]);
  const [descendingArr, setDescendingArr] = useState([]);
  const [rateArr, setRateArr] = useState([]);
  const [azArr, setAzArr] = useState([]);
  const [zaArr, setZaArr] = useState([]);

  const pushToAscendingArray = () => {
    let arr = [movies.sort((a, b) => a.year - b.year)]
    setAscendingArr([...ascendingArr, arr]);
  }

  const pushToDescendingArray = () => {
    let arr = [movies.sort((a, b) => b.year - a.year)]
    setDescendingArr([...descendingArr, arr]);
  }

  const pushToRateArr = () => {
    let arr = [movies.sort((a, b) => b.rate - a.rate)]
    setRateArr([...rateArr, arr]);
  }

  const pushToAzArr = () => {
    let arr = [movies.sort((a, b) => a.title.localeCompare(b.title))]
    setAzArr([...azArr, arr]);
  }

  const pushToZaArr = () => {
    let arr = [movies.sort((a, b) => b.title.localeCompare(a.title))]
    setZaArr([...zaArr, arr]);
  }


  return (
    <div className="App">
      <div className="buttons">
        <button onClick={pushToAscendingArray}>Sort by Date Ascending</button>
        <button onClick={pushToDescendingArray}>Sort by Date Descending</button>
        <button onClick={pushToRateArr}>Best Rate</button>
        <button onClick={pushToAzArr}>A-Z</button>
        <button onClick={pushToZaArr}>Z-A</button>
      </div>
      <RenderCards />
    </div>
  );
}

export default App;
