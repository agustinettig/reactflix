import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const LogoImage = styled.img.attrs({
  src: logo,
  alt: 'Reactflix logo',
})`
    max-width: 168px;
    height: 40px;
    @media (max-width: 800px) {
        max-width: 160px;
    }
`;

export default (props) => {
  // eslint-disable-next-line react/prop-types
  const { to } = props;
  return (
    <Link to={to}>
      <LogoImage />
    </Link>
  );
};
