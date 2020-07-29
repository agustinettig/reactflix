import React from 'react';

import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

const VideoRegister = () => (
  <PageDefault>
    <h1>New Video</h1>
    <Link to="/register/category">New Category</Link>
  </PageDefault>
);

export default VideoRegister;
