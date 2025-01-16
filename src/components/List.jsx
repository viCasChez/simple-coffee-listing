import React, { useState } from "react";
import Card from "./Card";

import '../style/components/List.css'

const List = ({ coffeeList}) => {

  return (
    <div className="coffe-list">
      {coffeeList.map( ( coffee ) => (
        <Card key={ coffee.id } coffee={ coffee } />
      ))}
    </div>
  )

}

export default List;
