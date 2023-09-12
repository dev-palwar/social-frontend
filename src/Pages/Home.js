import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Postcard from '../Components/Postcard';
import postRouter from '../Api/Post';
import { formatDateString, decodeJwtToken } from '../Utils/Functions';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
  const [userId, setUserId] = useState();
  const [data, setData] = useState([]);
  const [caption, setCaption] = useState('');

  const sortedPosts = data.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateA - dateB;
  });

  // useEffect(() => {
  //   const decoded = decodeJwtToken(
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTAwM2ZlYzAzNDU5YzZiMmZjY2I4NjMiLCJpYXQiOjE2OTQ1MjAwNTJ9.XoXb82wxVoPSFLY67PdqWFCnE0aYtpwQA5hNPyHdf1o'
  //   );
  //   setUserId(decoded._id);
  // }, []);
  
  console.log("document.cookie");



  //Poster functions starts


  const dataToPost = {
    caption: caption,
  };

  const postData = async () => {
    const response = await postRouter('POST', 'add', dataToPost);
    toast.success(response.message);
    document.getElementById('post_input_box').value = '';
  };

  // Poster functions ends

  const logout = async () => {
    const response = await axios.get('http://localhost:9000/user/logout', {
      withCredentials: true,
    });
    if (response) {
      window.location.reload();
    }
    console.log(response);
  };

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await postRouter('GET', 'getAllPost');
        setData(response.resFromDB);
      } catch (error) {
        toast.error('Some error occurred');
      }
    };
    getAllPosts();
  }, [postData]);

  return (
    <>
      <ToastContainer />
      <div className="flex justify-between">
        <h1 className="text-[25px]">SASTA TWITTER</h1>
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mt-4 max-w-[30rem] m-auto">
        <textarea
          className="w-full rounded-md p-2"
          placeholder="What's happening?"
          id="post_input_box"
          onChange={e => setCaption(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <i className="far fa-image mr-2"></i>
            <i className="fas fa-poll-h mr-2"></i>
            <i className="far fa-smile"></i>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 
        rounded-md hover:bg-blue-600"
            onClick={() => postData()}
          >
            Tweet
          </button>
        </div>
      </div>

      <div className="container mt-4 max-w-[30rem] h-[70vh] m-auto overflow-scroll">
        {sortedPosts.map(value => {
          return (
            <Postcard
              key={value._id}
              post_id={value._id}
              caption={value.caption}
              name={value.owner.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
