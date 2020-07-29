import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

const CategoryRegister = () => (
  <PageDefault>
    <h1>New Category</h1>

    <Link to="/">Cancel</Link>
  </PageDefault>
);

export default CategoryRegister;
