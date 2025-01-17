import React from "react";
import Card from "./Card";

import '../style/components/List.css'

export const List = ({ coffeeList}) => {

  return (
    <div className="coffe-list">
      {coffeeList.map( ( coffee ) => (
        <Card key={ coffee.id } { ...coffee } />
      ))}
    </div>
  )

}
