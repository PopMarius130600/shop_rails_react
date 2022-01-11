import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import geaca from '../../../images/geaca.jpeg';
import { useNavigate } from 'react-router-dom';


export default function Filter(props) {
  var item;
  if (props.item.item){
    item = props.item.item;
  } else {
    item = []
  }
  console.log(props.item)
  console.log(item)
  const navigate = useNavigate();
  let id = useParams();
  useEffect(() =>{
    props.getItem(id);
  }, [])

  const handleAddToBasket = event => {
    
  };


  return (
    <div>
      <Row style={{alignItems: 'right'}}>
        <Col xs={4} md={3} style={{  margin: '0rem', padding: '5rem' }}>
          <Row>
            <h3>{item.name}</h3>
          </Row>
          <Row>
            <h5>Description: {item.description}</h5>
          </Row>
          <Row>
            <Col>
              <button onClick={handleAddToBasket} >
                <h6>Add to basket</h6>
              </button>
            </Col>
            <Col>
              <button onClick={() => navigate(-1)}>go back</button>
            </Col>
          </Row>
        </Col>

        <Col xs={4} md={6} style={{ margin: '0rem', padding: '5rem' }}>
          <img style={{ width: '22rem', height: '35rem', margin: '2px' }} variant="top" src={item.image} />
        </Col>
        <Col xs={4} md={3} style={{ margin: '0rem', padding: '5rem' }}>
          <Row>
            <h5>Size: {item.size}</h5>
          </Row>
          <Row>
            <h5>Color: {item.color}</h5>
          </Row>
          <Row>
            <h5>Price: {item.price}</h5>
          </Row>
          <Row>
            <h5>Stock: {item.stock}</h5>
          </Row>
          <Row>
            <h5>Gender: {item.gender}</h5>
          </Row>
        </Col>
      </Row>
    </div>
    
  );
}


