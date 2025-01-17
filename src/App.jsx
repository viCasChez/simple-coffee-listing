import Header from './components/Header';
import Menu from './components/Filters'
import List from './components/List'

import './style/App.css'
import { useFetchCoffees } from './hooks/useFetchCoffees';

function App() {

  const { coffeeList, error, loading, allCoffees, handleFilterChange } = useFetchCoffees();

  return (
    <>
      <Header />
      {loading && (<p>Loading...</p>)}
      {error && (<p>Error: {error.message}</p>)}
      {!loading && !error && (
        <>
          <Menu allCoffees={allCoffees} onFilterChange={handleFilterChange} />
          <List coffeeList={coffeeList} />
        </>
      )}
    </>
  )
}

export default App
