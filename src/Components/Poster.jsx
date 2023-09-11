import React, { useState } from 'react';
import postRouter from '../Api/Post';
import { ToastContainer, toast } from 'react-toastify';

const Poster = () => {
  const [caption, setCaption] = useState('');

  const dataToPost = {
    caption: caption
  }

  const postData = async () => {
    const response = await postRouter('POST', 'add', dataToPost);
    toast.success(response.message);
  };

  return (
    <>
     <ToastContainer />
      <div className="bg-white shadow-md rounded-lg p-4 mt-4 max-w-[30rem] m-auto">
        <textarea
          className="w-full rounded-md p-2"
          placeholder="What's happening?"
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
    </>
  );
};

export default Poster;
