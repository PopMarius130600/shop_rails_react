import React from 'react';

import { NavDropdown } from 'react-bootstrap';

import SubCategoryRow from './SubCategoryRow'

const ListSubCategory = (props) => {
	const {subCategories, category} = props;
	return (
    <NavDropdown title={category.name} id="basic-nav-dropdown">{
        subCategories.filter((subCategory) => subCategory.category_id == category.id).map((subCategory) =>
          <SubCategoryRow subCategory={ subCategory } />
        )
      }
    </NavDropdown>
  )
}

export default ListSubCategory;

