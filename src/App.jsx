import { useEffect, useState } from 'react';
import Menu from './components/Filters'
import List from './components/List'

import './style/App.css'

const urlAPI = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';
let cofeeList = [];

function App() {
  
  const [coffeeList, setCoffeeList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState(false);
  
  useEffect(() => {
    const fetchCoffeeList = async () => {
      try {
        const response = await fetch(urlAPI);
        const data = await response.json();
        setLoading(false);
        setCoffeeList(data);
        cofeeList = data;
      } catch (error) {
        setCoffeeList([]);
        setError(error);
      }
    }

    fetchCoffeeList();
  }, []);

  const handleFilterChange = (available) => {
    setAvailable(!available);
    !available ? getListAvailable() : getListAll();
  };

  const getListAvailable = () => {
    setCoffeeList(cofeeList.filter(coffee => coffee.available !== available));
  }

  const getListAll = () => {
    setCoffeeList(cofeeList);
  }

  return (
    <>
      <div className="header-image">
        <img src='./background-coffee.svg' />
      </div>
      <header>
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
          expertly roasted in small batches and shipped fresh weekly.
        </p>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : 
      error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <Menu available={available} onFilterChange={handleFilterChange} />
          <List coffeeList={coffeeList} />
        </>
      )}
    </>
  )
}

export default App
