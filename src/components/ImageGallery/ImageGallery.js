import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import { useApiLoader } from './useApiLoader';

const ImageGallery = () => {
  const { db, isFetching, isClientError, isServerError } = useApiLoader();
  const ImageGalleryJSX = db.map(({ id, webformatURL, tags }) => {
    return (
      <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
    );
  });

  return (
    <section className={s.App}>
      <h2>ImageGallery</h2>
      {isFetching && <p>Загрузка данных</p>}
      {isClientError && <p>Неправильный запрос</p>}
      {isServerError && <p>Сервер не отвечает</p>}
      {!isServerError && !isClientError && (
        <ul className={s.ImageGallery}>{ImageGalleryJSX}</ul>
      )}
    </section>
  );
};

export default ImageGallery;
