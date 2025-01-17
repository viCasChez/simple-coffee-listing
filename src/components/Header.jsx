import React from "react";

import '../style/components/Header.css'

export const Header = () => {

  return (
    <>
      <div className="header-image">
        <img src='./background-coffee.svg' />
      </div>
      <header>
        <h1>
          <img src="./coffee-cup.png" alt="Simple Coffee Listing" />
          Our Collection
        </h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
          expertly roasted in small batches and shipped fresh weekly.
        </p>
      </header>
    </>
  );

}
