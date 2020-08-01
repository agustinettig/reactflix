/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import categoryRepository from '../../repositories/category';
import Spinner from '../../components/Spinner';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

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
    <>
      <Menu />

      {
        categoryList.length === 0 && (
        <Spinner />
        )
      }

      {
        categoryList.map((category, index) => {
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

      <Footer />
    </>
  );
}

export default Home;
