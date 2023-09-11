import axios from 'axios';

const postRouter = async (method, endPoint, data) => {
  const axiosConfig = {
    withCredentials: true,
  };

  if (method === 'GET') {
    const response = await axios.get(`http://localhost:9000/post/${endPoint}`, axiosConfig);
    return response.data;
  } else if (method === 'POST') {
    const response = await axios.post(`http://localhost:9000/post/${endPoint}`, data, axiosConfig);
    return response.data;
  } else if (method === 'PUT') {
    const response = await axios.put(`http://localhost:9000/post/${endPoint}`, data, axiosConfig);
    return response.data;
  } else if (method === 'DELETE') {
    const response = await axios.delete(`http://localhost:9000/post/${endPoint}`, axiosConfig);
    console.log(response.data)
    return response.data;
  } else {
    throw new Error(`Invalid HTTP method: ${method}`);
  }
};

export default postRouter;
