import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  &:after {
    content: " ";
    
    width: 20px;
    height: 20px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

function Spinner() {
  return (
    <>
      <Icon />
    </>
  );
}

export default Spinner;
