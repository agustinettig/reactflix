import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Logo from '../Logo';
import Button from '../Button';

// eslint-disable-next-line react/prop-types
export default ({ newVideo }) => (
  <nav className="Menu">
    <Logo to="/" />
    {newVideo && <Button mobile="true" as={Link} to="/register/video">New video</Button>}
  </nav>
);
