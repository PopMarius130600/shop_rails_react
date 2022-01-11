import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import Filter from './Filter';
import PriceBar from './PriceBar';

import { Col } from 'react-bootstrap';
import styles from './item.module.css';

export default function FilterItems(props) {
  let paramsPath = useParams();
  const colors = ["Black", "Blue", "Green", "Yellow", "Red", "White"];
  const size = ["S", "M", "L", "XL", "XXL"];
  const [colorsCopy, setColorsCopy] = useState([]);
  const [sizesCopy, setSizesCopy] = useState([]);
  const [price, setPrice] = useState([0, 1000]);

  useEffect(() =>{
    getItemList();
  }, [paramsPath, colorsCopy, sizesCopy, price])

  const changeColor = (color) => {
    if(!colorsCopy.find(c => c === color)){
      setColorsCopy(colorsCopy => [...colorsCopy, color])
    } else {
      setColorsCopy(colorsCopy => colorsCopy.filter(c => c !== color));
    }
  }

  const changeSize = (size) => {
    if(!sizesCopy.find(c => c === size)){
      setSizesCopy(sizesCopy => [...sizesCopy, size])
    } else {
      setSizesCopy(sizesCopy => sizesCopy.filter(c => c !== size));
    }
  }

  const changePrice = (valMin, valMax) => {
    if(price[0] != valMin || price[1] != valMax) {
      setPrice([valMin, valMax]);
    }
  }

  const getItemList = () => {
    const params = {
      keyword: paramsPath.keyword,
      id: paramsPath.id,
      colors: colorsCopy,
      sizes: sizesCopy,
      priceLow: price[0],
      priceHigh: price[1]
    }
    console.log(params);
    props.getItems(params)
  }

  return (
    <Col xs={12} lg={2} style={{ margin: '0rem', padding: '0rem' }}>
      <Filter filter="Colour" filters={colors} changeByFilter={changeColor} />
      <Filter filter="Size" filters={size} changeByFilter={changeSize} />
      <div className={styles.div_filter}>
        <div className={styles.title_filter}>Price</div>
        <PriceBar
          min={0}
          max={1000}
          onChange={({ min, max }) => changePrice(min, max)} />
      </div>
    </Col>
  );

}


