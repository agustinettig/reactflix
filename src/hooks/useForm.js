import { useState, useEffect } from 'react';

function useForm({ initialValues, validate, onSubmit }) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValue] = useState(initialValues);

  function validateValues(valuesToValidate) {
    setErrors(validate(valuesToValidate));
  }

  useEffect(() => {
    validateValues(values);
    // eslint-disable-next-line
  }, [values]);

  function handleChange(event) {
    const { target } = event;
    setValue({
      ...values,
      [target.getAttribute('name')]: target.value,
    });
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute('name');
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  function clearValues() {
    setValue(initialValues);
    setErrors({});
    setTouchedFields({});
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTouched = {};
    Object.keys(initialValues).forEach((key) => {
      newTouched[key] = true;
    });
    setTouchedFields(newTouched);
    if (Object.keys(errors).length === 0) {
      onSubmit();
    }
  }

  return {
    values,
    handleChange,
    clearValues,
    errors,
    touched,
    handleBlur,
    handleSubmit,
  };
}

export default useForm;
