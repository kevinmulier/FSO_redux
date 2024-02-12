import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, important: false };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const toggle = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  const objectData = response.data;
  const updatedObject = {
    ...objectData,
    important: !objectData.important,
  };
  const updateResponse = await axios.put(`${baseUrl}/${id}`, updatedObject);
  return updateResponse.data;
};

export default { getAll, createNew, toggle };
