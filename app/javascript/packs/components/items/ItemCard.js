import React from 'react';
import { Card } from 'react-bootstrap';

import geaca from '../../../images/geaca.jpeg';
import styles from './item.module.css';
import { LinkContainer } from 'react-router-bootstrap';

export default function ItemCard(props) {

  const { item } = props;

  return (
    <LinkContainer to={`/items/${item.id}`} style={{ width: '18rem', height: '29rem'}}>
      <Card style={{ width: '18rem', height: '29rem', margin: '0rem', padding: '0rem' }}>
        <Card.Img ClassName={styles.img_card} variant="top" src={geaca} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Price: {item.price} LEI 
          </Card.Text>
        </Card.Body>
      </Card>
    </LinkContainer>
  )

}


