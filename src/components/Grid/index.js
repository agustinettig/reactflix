import styled from 'styled-components';

function getGridWidth(value) {
  if (!value) return;

  const width = (value / 12) * 100;
  // eslint-disable-next-line consistent-return
  return `width: ${width}%;`;
}

export const Container = styled.div`
      margin-right: auto;
      margin-left: auto;
          box-sizing: border-box;
          &:before, 
          &:after { 
              content: " ";
              display: table;
          }
          &:after { clear: both; }
  `;

export const Row = styled.div`
      width: 100%;
      height: auto; 
      float: left; 
      box-sizing: border-box;
      &:before, 
      &:after { 
          content: " ";
           display: table; 
      }
      &:after { 
          clear: both; 
      }    
  `;

export const Column = styled.div`
      float: left; 
      padding: .25rem;
      min-height: 1px;
      box-sizing: border-box;
  
      @media only screen and (max-width:768px) {
          ${({ mobile }) => mobile && getGridWidth(mobile)}
      }
      @media only screen and (min-width:768px) {
          ${({ tablet }) => tablet && getGridWidth(tablet)}
      }
      @media only screen and (min-width:1000px) {
          ${({ desktop }) => desktop && getGridWidth(desktop)}
      }
  `;
