import React from 'react';
import { useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import NavBar from './NavBar';
import logo from '../../../images/logo.png';

import styles from './header.module.css';

export default function Header(props) {
          
  const { categories, subCategories } = props;
  const { loggingIn } = props;
  const [ render, setRender ] = useState("");
  var loginOrSignout;

  const handleSubmit = event => { 
    setRender("");
  };

  console.log(loggingIn);
  if(loggingIn != true) {
    loginOrSignout =  <Col xs={4} md={3} lg={2}>
                        <Row>
                          <Col>
                            <LinkContainer to="/login" onClick={handleSubmit}>
                              <h6>Login</h6>
                            </LinkContainer>
                          </Col>
                          <Col>
                            <LinkContainer to="/signup" onClick={handleSubmit}>
                              <h6>SignUp</h6>
                            </LinkContainer>
                          </Col>
                          <Col>
                            <LinkContainer to="/basket">
                              <h6>Basket</h6>
                            </LinkContainer>
                          </Col>
                        </Row>
                      </Col>
  } else {
    loginOrSignout= <Col xs={4} md={3} lg={2}>
                      <Row>
                        <Col>
                          <LinkContainer to="/login" onClick={handleSubmit}>
                            <h6>SignUp</h6>
                          </LinkContainer>
                        </Col>
                        <Col>
                          <LinkContainer to="/signup" onClick={handleSubmit}>
                            <h6>Profile</h6>
                          </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to="/basket">
                              <h6>Basket</h6>
                            </LinkContainer>
                          </Col>
                      </Row>
                    </Col>
  }

  return (
    <div>
      <Row className={styles.row_margin}> 
        <Col className={styles.col_padding} xs={4} md={3} lg={2} >
          <img className={styles.logo_profile} src={logo} />
        </Col>
        <Col className={styles.col_padding} xs={4} md={6} lg={8} >
          <NavBar categories={categories} subCategories={subCategories} />
        </Col>
        {loginOrSignout}
      </Row>
    </div>
  );

}


