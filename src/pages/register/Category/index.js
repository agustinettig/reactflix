import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Container, Row, Column } from '../../../components/Grid';
import Spinner from '../../../components/Spinner';
import categoryRepository from '../../../repositories/category';
import useForm from '../../../hooks/useForm';

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
  const initialValues = {
    name: '',
    description: '',
  };

  function validate(values) {
    const errors = {};
    if (values.name.length < 1) {
      errors.name = 'Name is required';
    }
    return errors;
  }

  async function onSubmit() {
    try {
      const category = await categoryRepository.create(form.values);
      setCategories([
        ...categories,
        category,
      ]);
      form.clearValues();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  const form = useForm({ initialValues, validate, onSubmit });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      try {
        setCategories(await categoryRepository.getAll());
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
    fetchAll();
  }, []);

  return (
    <PageDefault>
      <Container>
        <Row>
          <Column sm="12" md="6">
            <h1>
              New Category
            </h1>

            <form onSubmit={form.handleSubmit}>

              <FormField
                label="Name"
                name="name"
                value={form.values.name}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                touched={form.touched.name}
                error={form.errors.name}
              />

              <FormField
                label="Description"
                type="textarea"
                name="description"
                value={form.values.description}
                onChange={form.handleChange}
              />

              <SubmitButton backgroundColor="#aaa">
                Save
              </SubmitButton>
              <Link to="/">Cancel</Link>
            </form>
          </Column>
          <Column sm="12" md="6">
            <h1>Categories</h1>

            {
                categories.length === 0
                && (
                <div>
                  <Spinner />
                </div>
                )
            }

            <ul>
              {categories.map((category) => (
                <li key={category.id}>
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
