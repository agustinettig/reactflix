import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import notfound from '../../assets/img/notfound.svg';

const Wrapper = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    color: var(--blackLighter);
    margin-bottom: 0px;
`;

const BlueBar = styled.img.attrs({
  src: notfound,
  alt: 'Not Found icon',
})`
      max-width: 512px;
      height: 512px;
      @media (max-width: 800px) {
          max-width: 160px;
      }
  `;

const NotFound = () => (
  <PageDefault>
    <Wrapper>
      <Title>404 - Content not found</Title>
      <BlueBar />
    </Wrapper>
  </PageDefault>
);

export default NotFound;
