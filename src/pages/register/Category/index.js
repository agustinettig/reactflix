import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Container, Row, Column } from '../../../components/Grid';
import Spinner from '../../../components/Spinner';

const SubmitButton = styled.button`
      color: var(--white);
      border: 1px solid var(--white);
      background-color: #53585D;
      box-sizing: border-box;
      cursor: pointer;
      padding: 16px 24px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      outline: none;
      border-radius: 5px;
      text-decoration: none;
      display: inline-block;
      transition: opacity .3s;
      &:hover,
      &:focus {
          opacity: .5;
      }
  `;

const CategoryRegister = () => {
  const initialValue = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(initialValue);

  const URL = 'http://localhost:8080/categories';

  useEffect(() => {
    fetch(URL).then(async (response) => {
      if (response.ok) {
        const categoryList = await response.json();
        setCategories(categoryList);
        return;
      }
      throw new Error('Não foi possível pegar os dados');
    });
  }, []);

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
      <Container>
        <Row>
          <Column mobile="12" tablet="6" desktop="6">
            <h1>
              New Category
            </h1>

            <form onSubmit={handleSubmit}>

              <FormField
                label="Name"
                name="name"
                value={value.name}
                onChange={handleChange}
              />

              <FormField
                label="Descrption"
                type="textarea"
                name="description"
                value={value.description}
                onChange={handleChange}
              />

              <FormField
                label="Color"
                type="color"
                name="color"
                value={value.color}
                onChange={handleChange}
              />

              <SubmitButton backgroundColor="#aaa">
                Save
              </SubmitButton>
              <Link to="/">Cancel</Link>
            </form>
          </Column>
          <Column mobile="12" tablet="6" desktop="6">
            <h1>Categories</h1>

            { categories.lenght === 0
                && (
                <div>
                  <Spinner />
                </div>
                )}

            <ul>
              {categories.map((category) => (
                <li key="category.id">
                  {category.name}
                </li>
              ))}
            </ul>
          </Column>
        </Row>
      </Container>
    </PageDefault>
  );
};

export default CategoryRegister;
