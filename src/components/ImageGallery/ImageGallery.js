import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import { useApiLoader } from './useApiLoader';

const ImageGallery = () => {
  const { db } = useApiLoader();
  const ImageGalleryJSX = db.map(({ id, webformatURL }) => {
    return <ImageGalleryItem key={id} webformatURL={webformatURL} />;
  });

  return (
    <section>
      <h2>ImageGallery</h2>
      <ul className="ImageGallery">{ImageGalleryJSX}</ul>
    </section>
  );
};

export default ImageGallery;
