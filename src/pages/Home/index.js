/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import categoryRepository from '../../repositories/category';
import Spinner from '../../components/Spinner';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setCategoryList(await categoryRepository.getAllWithVideos());
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <PageDefault newVideo="true" mainPadding="0" background="#141414">

      {
        categoryList.length === 0 && (
        <Spinner />
        )
      }

      {
        categoryList.map((category, index) => {
          if (!category.videos || category.videos.length === 0) { return false; }

          if (index === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={category.videos[0].name}
                  url={category.videos[0].url}
                  videoDescription={category.videos[0].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={category}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={category.id}
              category={category}
            />
          );
        })

      }

    </PageDefault>
  );
}

export default Home;
