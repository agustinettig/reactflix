import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Container, Row, Column } from '../../../components/Grid';
import { ListWrapper, ListItem } from '../../../components/SimpleList';
import Spinner from '../../../components/Spinner';
import Button from '../../../components/Button';
import categoryRepository from '../../../repositories/category';
import useForm from '../../../hooks/useForm';
import useAlert from '../../../hooks/useAlert';

const CategoryRegister = () => {
  const initialValues = {
    name: '',
    description: '',
  };

  function validate(values) {
    const errors = {};
    if (values.name.trim().length < 1) {
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
      showMessage({
        type: alertType.success,
        title: 'Success',
        message: 'Category registered successfully',
      });
    } catch (err) {
      showMessage({
        type: alertType.danger,
        title: 'Error',
        message: 'There was an error saving the category',
      });
    }
  }

  const form = useForm({ initialValues, validate, onSubmit });
  const [categories, setCategories] = useState([]);
  const { alertType, showMessage, alert } = useAlert({});

  useEffect(() => {
    async function fetchAll() {
      try {
        setCategories(await categoryRepository.getAll());
      } catch (err) {
        showMessage({
          type: alertType.danger,
          title: 'Error',
          message: 'There was an error fetching the categories',
        });
      }
    }
    fetchAll();
    // eslint-disable-next-line
  }, []);

  async function remove(category) {
    try {
      await categoryRepository.remove(category.id);
      const newCategoryList = categories.filter((cat) => cat.id !== category.id);
      setCategories([
        ...newCategoryList,
      ]);
      showMessage({
        type: alertType.success,
        title: 'Success',
        message: 'Category removed successfully',
      });
    } catch (err) {
      showMessage({
        type: alertType.danger,
        title: 'Error',
        message: 'There was an error removing the category',
      });
    }
  }

  return (
    <PageDefault>
      <Container>
        <Row>
          <Column sm="12" md="6">
            <h1>
              New Category
            </h1>

            {alert()}

            <form onSubmit={form.handleSubmit}>

              <FormField
                label="Name"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
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

              <Button addCss="background-color: var(--primary); margin-right: 20px;">
                Save
              </Button>
              <Button as={Link} to="/">
                Cancel
              </Button>
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

            <ListWrapper>
              {categories.map((category) => (
                <ListItem key={category.id}>
                  {category.name}
                  <ActionIcon color="#c22323" onClick={() => remove(category)}>x</ActionIcon>
                </ListItem>
              ))}
            </ListWrapper>
          </Column>
        </Row>
      </Container>
    </PageDefault>
  );
};

const ActionIcon = styled.button`
    background: transparent;
    border: transparent;
    float: right;
    cursor: pointer;
    height: 20px;
    width: 30px;
    font-weight: 700;
    text-shadow: 0 1px 0 #1a1a1a;
    font-size: 18px;
    margin-bottom: 5px;    
    height: 100%;


    ${({ color }) => `color: ${color}`};

    &:hover {
        border: 1px solid var(--grayMedium);
        border-radius: 5px;
    }
`;

export default CategoryRegister;
