/* eslint-disable react/prop-types */
import React from 'react';

const FormField = ({
  label, type, name, value, onChange,
}) => (
  <div>
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default FormField;
