const base = 'https://pixabay.com/api/';
const key = '19475707-408c9466706baaa6817e821a9';
const searchParams = `?q=forest&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

const uri = `${base}${searchParams}`;

export const api = {
  news: {
    fetch: async () => {
      const response = await fetch(uri);

      if (response.status >= 400 && response.status < 500) {
        throw new Error('Неправильный запрос');
      }

      if (response.status >= 500) {
        throw new Error('Сервер не отвечает');
      }

      const { hits } = await response.json();

      return hits;
    },
  },
};
