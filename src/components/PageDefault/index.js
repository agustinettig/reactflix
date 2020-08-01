import React from 'react';

import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: #2d2d2d;
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ mainPadding }) => css`padding: ${mainPadding}`};
  ${({ background }) => css`background-color: ${background}`};
`;

const PageDefault = ({
  // eslint-disable-next-line react/prop-types
  children, mainPadding, background, newVideo,
}) => (
  <>
    <Menu newVideo={newVideo} />
    <Main mainPadding={mainPadding} background={background}>
      {children}
    </Main>
    <Footer />
  </>
);

export default PageDefault;
