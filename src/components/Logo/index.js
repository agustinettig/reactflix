import React from 'react';

import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

const LogoImage = styled.img.attrs({
  src: logo,
  alt: 'Reactflix logo',
})`
    height: 40px;
`;

export default (props) => {
  const href = { props };
  return (
    <a href={href}>
      <LogoImage />
    </a>
  );
};
