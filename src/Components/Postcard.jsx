import React, { useEffect, useState } from 'react';
import postRouter from '../Api/Post';
import { ToastContainer, toast } from 'react-toastify';

const Postcard = ({ name, caption, createdAt, post_id }) => {


  const deletePost = async () => {
    const response = await postRouter('DELETE', `delete/${post_id}`)
    toast.success(response.message);
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-white shadow-md rounded-lg p-4 mt-4 m-auto max-w-[35rem]">
        <div className="flex">
          {/* <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="rounded-full w-10 h-10 mr-4"
        /> */}
          <div className="w-[-moz-available]">
            <div className="flex justify-between">
              <p className="font-semibold">{name}</p>
              <button onClick={() => deletePost()}>Delete</button>
            </div>
            <p className="text-gray-500 text-sm">{createdAt}</p>
          </div>
        </div>
        <p className="mt-4 text-[25px]">{caption}</p>
        {/* <div className="mt-4">
        <img
          src="https://via.placeholder.com/500x300"
          alt="Post"
          className="w-full rounded-lg"
        />
      </div> */}
        {/* <div className="mt-4 flex justify-between">
          <div className="flex">
            <div className="mr-2">
              <i className="far fa-thumbs-up"></i>
            </div>
            <div>
              <i className="far fa-heart"></i>
            </div>
            <p className="ml-2">15 Likes</p>
          </div>
          <p className="text-gray-500">5 Comments</p>
        </div> */}
      </div>
    </>
  );
};

export default Postcard;
