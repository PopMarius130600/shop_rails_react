import React from 'react';
import { Col, CardGroup } from 'react-bootstrap';
import ItemCard from './ItemCard';

export default function Basket(props) {
  const { itemsBasket } = props;

  return <div>
    <CardGroup style={{marginBottom: '200px'}}>
      {itemsBasket.map((item) => 
          <div >
            <ItemCard item={item.item} productCount={item.productCount} 
              addItemToBasket={props.addItemToBasket} getItemsBasket={props.getItemsBasket}
              removeItemToBasket={props.removeItemToBasket} deleteItemToBasket={props.deleteItemToBasket}/> 
          </div>
      )}
    </CardGroup>
  </div>
}