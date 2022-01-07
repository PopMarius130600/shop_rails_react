import React from 'react';

import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import ListCategory from './ListCategory'

export default class Header extends React.Component {

  constructor() {
    super();
  }

  render() {
    const { categories, subCategories } = this.props;
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <LinkContainer to="/">
                <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ListCategory categories={categories} subCategories={subCategories} />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

}


