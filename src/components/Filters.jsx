import React from "react";

import '../style/components/Filters.css'

const Filters = ({allCoffees, onFilterChange}) => {
  return (
    <nav className="filters">
      <button
        className={`filter-btn ${allCoffees ? 'active' : ''}`}
        onClick={() => onFilterChange(allCoffees)}
      >All Products</button>
      <button
        className={`filter-btn ${!allCoffees ? 'active' : ''}`}
        onClick={() => onFilterChange(allCoffees)}
      >Availlable Now</button>
    </nav>
  )
}

export default Filters;