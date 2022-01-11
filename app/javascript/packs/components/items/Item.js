import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import geaca from '../../../images/geaca.jpeg';


export default function Filter(props) {
  const { item } = props;
  let id = useParams();
  useEffect(() =>{
    props.getItem(id);
  }, [])


  return (
    <div>
      <Row>
        <Col xs={12} lg={6} style={{ margin: '0rem', padding: '0rem' }}>
          <img src={geaca} />
        </Col>
        <Col xs={12} lg={6} style={{ margin: '0rem', padding: '0rem' }}>
          <Row>{item.name}</Row>
          <Row>{item.description}</Row>
          
          
        </Col>
      </Row>
    </div>
    
  );
}


