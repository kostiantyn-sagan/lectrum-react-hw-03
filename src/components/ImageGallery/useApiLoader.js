import { useEffect, useState } from 'react';
import { api } from '../../api';

export const useApiLoader = () => {
  const [db, setDb] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    console.log('Пошел запрос');
    setIsFetching({ isFetching: true });
    (async () => {
      const response = await api.news.fetch();
      const { hits } = await response.json();
      console.log(db);
      console.log(hits);
      console.log([...db, ...hits]);

      setDb(db => [...db, ...hits]);
    })();

    return () => {
      // setIsFetching({ isFetching: false });
    };
  }, []);
  return { db, isFetching };
};
