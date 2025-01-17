import { useEffect, useState } from 'react';
import Header from './components/Header';
import Menu from './components/Filters'
import List from './components/List'

import './style/App.css'

const urlAPI = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';
let coffeeListAll = [];

function App() {
  
  const [coffeeList, setCoffeeList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState(false);
  
  const fetchCoffeeList = async () => {
    try {
      const response = await fetch(urlAPI);
      const data = await response.json();
      setLoading(false);
      setCoffeeList(data);
      coffeeListAll = data;
    } catch (error) {
      setCoffeeList([]);
      setError(error);
    }
  }

  useEffect(() => {
    fetchCoffeeList();
  }, []);

  const handleFilterChange = (available) => {
    setAvailable(!available);
    !available ? getListAvailable() : getListAll();
  };

  const getListAvailable = () => {
    setCoffeeList(coffeeListAll.filter(coffee => coffee.available !== available));
  }

  const getListAll = () => {
    setCoffeeList(coffeeListAll);
  }

  return (
    <>
      <Header />
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
