import React from 'react';

import './styles.css';
import Logo from '../Logo';
import Button from '../Button';

export default () => (
  <nav className="Menu">
    <Logo href="/" />
    <Button as="a" href="/">Novo filme</Button>
  </nav>
);
