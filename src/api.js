const base = 'https://pixabay.com/api/';
const key = '19475707-408c9466706baaa6817e821a9';
const searchParams = `?q=forest&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

const uri = `${base}${searchParams}`;

export const api = {
  news: {
    fetch: async () => {
      return await fetch(`${uri}/news`);
    },
  },
};
