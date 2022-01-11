import React from 'react';

export default function Basket(props) {
  const { itemsBasket } = props;

  return <div>
      {itemsBasket}
  </div>
}