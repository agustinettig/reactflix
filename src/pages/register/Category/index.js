import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';

const CategoryRegister = () => (
  <PageDefault>
    <h1>New Category</h1>

    <Button as={Link} to="/">Cancel</Button>
  </PageDefault>
);

export default CategoryRegister;
