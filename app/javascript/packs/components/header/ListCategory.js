import React from 'react';

import { Nav } from 'react-bootstrap';

import ListSubCategory from './ListSubCategory';

const ListCategory = (props) => {
	const {categories, subCategories} = props;
	return (
    <Nav className="me-auto">
      {categories.map((category) => 
        <ListSubCategory subCategories={subCategories} category={category} />
      )}
    </Nav>
  )
}

export default ListCategory;

