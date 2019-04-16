import Axios from 'axios';

const baseURL = 'https://content.guardianapis.com';

export const Http = Axios.create({
  baseURL,
  params: {
    'api-key': process.env.REACT_APP_API_KEY || '',
  },
});
