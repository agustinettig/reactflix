import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  textarea {
    min-height: 150px;
  }
`;

const ValidationError = styled.span`
  display: block;
  color: #d93025;
  font-size: 16px;
  margin-top: 5px;
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

const FormField = ({
  label, type, name, value, onChange, onBlur, touched, error,
}) => {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  const id = `id_${name}`;
  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>
        <Input
          as={tag}
          id={id}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
        />
        <Label.Text>
          {label}
        </Label.Text>
        {touched && error && <ValidationError>{error}</ValidationError>}
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  onBlur: () => {},
  touched: false,
  error: undefined,
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.string,
};

export default FormField;
