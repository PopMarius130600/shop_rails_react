import React from 'react';

import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const SubCategoryRow = (props) => {
	const { subCategory } = props;
	return (
    <LinkContainer to={`/sub_categories/${subCategory.id}/items`}>
      <NavDropdown.Item >{subCategory.name}</NavDropdown.Item>
    </LinkContainer>
  )
}

export default SubCategoryRow;

