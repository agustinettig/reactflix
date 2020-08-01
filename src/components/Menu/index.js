import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Logo from '../Logo';
import Button from '../Button';

export default () => (
  <nav className="Menu">
    <Logo to="/" />
    <Button mobile="true" as={Link} to="/register/video">New video</Button>
  </nav>
);
