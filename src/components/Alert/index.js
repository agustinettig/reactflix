import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlertWrapper = styled.div`
    
    padding-right: 35px;
    padding: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
    
    ${({ type }) => type === 'success'
            && `color: #3c763d;
            background-color: #dff0d8;
            border-color: #d6e9c6;`}

    ${({ type }) => type === 'warning'
            && `color: #8a6d3b;
            background-color: #fcf8e3;
            border-color: #faebcc;`}

    ${({ type }) => type === 'danger'
            && `color: #a94442;;
            background-color: #f2dede;
            border-color: #ebccd1;`}
`;

const AlertDismiss = styled.a`
    position: relative;
    top: -2px;
    color: inherit;
    text-shadow: 0 1px 0 #fff;
    font-weight: 700;
    float: right;
    opacity: .5;
    cursor: pointer;
`;

function Alert({
  type, title, message, onDismiss,
}) {
  return (
    <AlertWrapper type={type}>
      <strong>{title}</strong>
      {' '}
      {message}
      <AlertDismiss onClick={onDismiss}>x</AlertDismiss>
    </AlertWrapper>
  );
}

Alert.defaultProps = {
  type: 'info',
  title: '',
};

Alert.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Alert;
