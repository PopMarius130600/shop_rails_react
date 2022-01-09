import React from 'react';

import { Col, Row } from 'react-bootstrap';

import NavBar from './NavBar';
import logo from '../../../images/logo.png';

import styles from './header.module.css';

export default class Header extends React.Component {

  constructor() {
    super();
  }
          
  render() {  
    const { categories, subCategories } = this.props;
    return (
      <div>
        <Row className={styles.row_margin}> 
          <Col className={styles.col_padding} xs={4} md={3} lg={2} >
            <img className={styles.logo_profile} src={logo} />
          </Col>
          <Col className={styles.col_padding} xs={8} md={9} lg={10} >
            <NavBar categories={categories} subCategories={subCategories} />
          </Col>
          
        </Row>
      </div>
    );
  }

}


