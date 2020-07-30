import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

const CategoryRegister = () => {
  const initialValue = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(initialValue);

  function handleSubmit(event) {
    event.preventDefault();
    setCategories([
      ...categories,
      value,
    ]);
    setValue(initialValue);
  }

  function handleChange(event) {
    const { target } = event;
    setValue({
      ...value,
      [target.getAttribute('name')]: target.value,
    });
  }

  return (
    <PageDefault>
      <h1>New Category</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Name: "
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrption: "
          type="textarea"
          name="description"
          value={value.description}
          onChange={handleChange}
        />

        <FormField
          label="Color: "
          type="color"
          name="color"
          value={value.color}
          onChange={handleChange}
        />

        <button type="submit">
          Save
        </button>
      </form>

      <h1>Current Categories</h1>
      <ul>
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">Cancel</Link>
    </PageDefault>
  );
};

export default CategoryRegister;
