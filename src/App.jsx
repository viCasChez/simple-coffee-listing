import { useFetchCoffees } from './hooks/useFetchCoffees';
import { Header, Menu, List} from './components'

import './style/App.css'

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
