import { useEffect, useState } from 'react';
import { api } from '../../api';

export const useApiLoader = () => {
  const [db, setDb] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [isClientError, setClientError] = useState(false);
  const [isServerError, setServerError] = useState(false);

  useEffect(() => {
    setFetching(true);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const images = await api.news.fetch();
        setFetching(false);
        setDb(db => [...db, ...images]);
      } catch ({ message }) {
        setFetching(false);

        if (message === 'Неправильный запрос') {
          setClientError(true);
        }

        if (message === 'Сервер не отвечает') {
          setServerError(true);
        }
      }
    })();
  }, []);

  return { db, isFetching, isServerError, isClientError };
};
