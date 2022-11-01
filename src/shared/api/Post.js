import axios from 'axios';
const URL = `https://pixabay.com/api/?q=cat&page=1&key=29239921-6824171c8e67d20083e37057c&image_type=photo&orientation=horizontal&per_page=12`;
const LIMIT = 12;

const instance = axios.create({
  baseURL: URL,
  params: {
    limit: LIMIT,
  },
});

export const getPosts = async (page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      page,
    },
  });
  return data;
};

export const searchPosts = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      page,
      q,
    },
  });
  return data;
};
