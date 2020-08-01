import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import useAlert from '../../../hooks/useAlert';
import categoryRepository from '../../../repositories/category';
import videoRepository from '../../../repositories/video';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CategoryLink = styled.span`

    display: block;
    margin-top: -15px;
    margin-bottom: 20px;
`;

function VideoRegister() {
  const initialValues = {
    name: '',
    url: '',
    categoryId: undefined,
  };

  function validate(values) {
    const errors = {};
    if (values.name.trim().length < 1) {
      errors.name = 'Name is required';
    }
    if (values.url.trim().length < 1) {
      errors.url = 'Url is required';
    } else if (!validYoutubeUrl(values.url.trim())) {
      errors.url = 'Url must be from YouTube';
    }
    if (!values.categoryId) {
      errors.categoryId = 'Category is required';
    }
    return errors;
  }

  function validYoutubeUrl(url) {
    const p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(p)) {
      return url.match(p)[1];
    }
    return false;
  }

  async function onSubmit() {
    try {
      const { values } = form;
      values.categoryId = parseInt(values.categoryId, 2);
      await videoRepository.create(values);
      form.clearValues();
      showMessage({
        type: alertType.success,
        title: 'Success',
        message: 'Video registered successfully',
      });
    } catch (err) {
      showMessage({
        type: alertType.danger,
        title: 'Error',
        message: 'There was an error saving the video',
      });
    }
  }

  const [categoryOptions, setCategoryOptions] = useState([]);
  const form = useForm({ initialValues, validate, onSubmit });
  const { alertType, showMessage, alert } = useAlert({});

  useEffect(() => {
    async function fetchAll() {
      try {
        const categories = await categoryRepository.getAll();
        const mappedCategories = categories.map((category) => ({
          value: category.id,
          text: category.name,
        }));
        setCategoryOptions(mappedCategories);
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

  return (
    <PageDefault>
      <h1>New Video</h1>

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
          label="URL"
          name="url"
          value={form.values.url}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          touched={form.touched.url}
          error={form.errors.url}
        />

        <FormField
          label="Category"
          name="categoryId"
          type="select"
          options={categoryOptions}
          value={form.values.categoryId}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          touched={form.touched.categoryId}
          error={form.errors.categoryId}
        />
        <CategoryLink as={Link} to="/register/category">Want a new Category? Click here!</CategoryLink>

        <Button addCss="background-color: var(--primary); margin-right: 20px;">
          Save
        </Button>
        <Button as={Link} to="/">
          Cancel
        </Button>
      </form>

    </PageDefault>
  );
}

export default VideoRegister;
