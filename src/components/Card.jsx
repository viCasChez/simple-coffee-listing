import React from "react";

import '../style/components/Card.css'

const Card = ({coffee}) => {

  const { name, image, price, rating, votes, popular, available } = coffee;

  return (
    <>
      <article className="coffee-card">
        {popular && <span className="badge">Popular</span>}
        <img src={image} alt={name} className="coffee-image" />
        <div className="coffee-info">
          <span className="title">{name}</span>
          <span className="price">{price}</span>
          <span className="rating">
            <span className={`${votes === 0 ? 'no-start' : 'start'}`}>★</span>
            <span className="point">{rating}</span>
            <span className="votes">{ votes === 0 ? 'None' : `(${votes} votes)` }</span>
          </span>
          {!available && <span className="available">Sould out</span>}
        </div>
      </article>
    </>
  )

}

export default Card;