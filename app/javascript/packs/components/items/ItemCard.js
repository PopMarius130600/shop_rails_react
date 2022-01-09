import React from 'react';
import { Card, Button } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import geaca from '../../../images/geaca.jpeg';
import styles from './item.module.css';



export default function ItemCard(props) {

  const { item } = props;

  return (
    <div>
      <Card style={{ width: '18rem', margin: '0rem', padding: '0rem' }}>
        <Card.Img ClassName={styles.img_card} variant="top" src={geaca} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Price: {item.price} LEI 
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )

}


