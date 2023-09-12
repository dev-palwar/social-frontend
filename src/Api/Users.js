import axios from "axios";

const userRouter = async (method, endPoint, data) => {
  const axiosConfig = {
    withCredentials: true,
  };

  if (method === 'GET') {
    const response = await axios.get(
      `http://localhost:9000/user/${endPoint}`,
      axiosConfig
    );
    return response.data;
  } else if (method === 'POST') {
    const response = await axios.post(
      `http://localhost:9000/user/${endPoint}`,
      data,
      axiosConfig
    );
    return response.data;
  } else {
    throw new Error(`Invalid HTTP method: ${method}`);
  }
};

export default userRouter;