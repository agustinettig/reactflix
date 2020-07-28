import React from 'react';

import styled from 'styled-components';
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
  const href = { props };
  return (
    <a href={href}>
      <LogoImage />
    </a>
  );
};
