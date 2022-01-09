import React from 'react';

import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import ListCategory from './ListCategory';
import styles from './header.module.css';

const NavBar = (props) => {
	const {categories, subCategories} = props;
	return (
    <Navbar className={styles.navbar} bg="light" expand="lg">
      <Container className={styles.container} >
        <LinkContainer className={styles.home_button} to="/">
            <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ListCategory categories={categories} subCategories={subCategories} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;

