import React from 'react';

import ErrorComponent from '../error/ErrorComponent';
import Spinner from '../spinner/Spinner';
import ItemCard from './ItemCard';

import { Col, CardGroup } from 'react-bootstrap';
import styles from './item.module.css';


export default function ItemList(props) {
  const { items } = props;

  const { error, isFetchingItems } = props
  if (error) {
    return <ErrorComponent errorMessage={error} handleError={props.fetchNameListIfNeeded}/>
  }
  if (isFetchingItems) {
    return <Spinner />
  } 
  return (
    <Col xs={12} lg={10} style={{ margin: '0rem', padding: '0rem' , margin_right: '10px'}}>
      <CardGroup>
        {items.map((item) => 
            <div className={styles.item} >
              <ItemCard item={item} /> 
            </div>
        )}
      </CardGroup>
    </Col>
  );

}


