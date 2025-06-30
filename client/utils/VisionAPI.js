import axios from 'axios';

export const detectText = function (imageUri) {
  return axios.post('http://localhost:3000/api/vision/', imageUri);
};