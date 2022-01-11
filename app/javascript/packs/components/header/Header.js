import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
          <Col className={styles.col_padding} xs={4} md={6} lg={8} >
            <NavBar categories={categories} subCategories={subCategories} />
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Row>
              <Col>
                <LinkContainer to="/login" >
                  <h6>Login</h6>
                </LinkContainer>
              </Col>
              <Col>
                <LinkContainer to="/signup" >
                  <h6>SignUp</h6>
                </LinkContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }

}


