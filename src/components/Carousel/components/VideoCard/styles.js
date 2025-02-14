/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border-radius: 2px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: transparent;
  flex: 0 0 298px;
  width: 298px;
  height: 165px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 5px;

  transition: transform .3s;

  &:hover, 
  &:focus {
    color: white;  
    transform: scale(1.05);
  }
  
  &::after {
    content : "${({ title }) => title}";    
    font-weight: 700;
    background-color: rgba(0,0,0,0);
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    text-align:center;
    padding-top: 23%;
  }

  &:hover:after {
    background-color: rgba(0,0,0,0.5);
  }

  
  &:not(:first-child) {
    margin-left: 15px;
  }
`;
