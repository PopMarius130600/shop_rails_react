import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

import styles from './item.module.css';
import { LinkContainer } from 'react-router-bootstrap';

export default function ItemCard(props) {

  const { item, productCount } = props;
  const [ count, setCount ] = useState(productCount);

  const handleReduceQuantity = event => {
    if(cout > 1) {
      const id = {
        id: ""  + item.id,
      }
      props.removeItemToBasket(id);
      setCount(count - 1);
    }
  }

  const handleAddQuantity = event => {
    if(cout < item.stock) {
      const id = {
        id: ""  + item.id,
      }
      props.addItemToBasket(id);
      setCount(count + 1);
    }
  }

  const handleDeleteItem = event => {
    const id = {
      id: ""  + item.id,
    }
    props.deleteItemToBasket(id);
    props.getItemsBasket();
    props.getItemsBasket();
  }

  return (
    <Card style={{ width: '18rem', height: '29rem', margin: '0rem', padding: '0rem' }}>
      <LinkContainer to={`/items/${item.id}`} style={{ width: '17rem', height: '23rem'}}>
        <Card.Img style={{ width: '17rem', height: '23rem', margin: '2px' }} variant="top" src={item.image} />
      </LinkContainer>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Price: {item.price} LEI 
        </Card.Text>
        <Card.Text>
          Quantity: {count}  
          <button onClick={handleReduceQuantity}>-</button>
          <button onClick={handleAddQuantity}>+</button>
          <button onClick={handleDeleteItem}>remove</button>
        </Card.Text>
      </Card.Body>
    </Card>
  )

}


