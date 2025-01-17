import React from "react";

import '../style/components/Filters.css'

const Filters = ({available, onFilterChange}) => {
  return (
    <nav className="filters">
      <button
        className={`filter-btn ${!available ? 'active' : ''}`}
        onClick={() => onFilterChange(available)}
      >All Products</button>
      <button
        className={`filter-btn ${available ? 'active' : ''}`}
        onClick={() => onFilterChange(available)}
      >Availlable Now</button>
    </nav>
  )
}

export default Filters;