import { useEffect, useState } from 'react';

const urlAPI = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';
let coffeeListAll = [];

export const useFetchCoffees = () => {
  
  const [coffeeList, setCoffeeList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allCoffees, setAvailable] = useState(true);
  
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

  const handleFilterChange = (allCoffees) => {
    setAvailable(!allCoffees);
    allCoffees ? getListAvailable() : getListAll();
  };

  const getListAvailable = () => {
    setCoffeeList(coffeeListAll.filter(coffee => coffee.available));
  }

  const getListAll = () => {
    setCoffeeList(coffeeListAll);
  }

  return {
    coffeeList,
    error,
    loading,
    allCoffees,
    handleFilterChange,
  }

}