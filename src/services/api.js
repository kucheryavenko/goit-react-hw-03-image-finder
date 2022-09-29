import axios from 'axios';

const KEY_API = '28454528-1e3cb033326c6dab929ab8bef';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchData = async searchQuery => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: KEY_API,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'orientation',
        safesearch: true,
        per_page: 12,
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
