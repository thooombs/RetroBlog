'use client'


import React, { useEffect, useState } from 'react';
import { connectToDatabase } from '../../../config/mongodb';


const PostComp = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);

  // useEffect runs when the component mounts
  useEffect(() => {
    // Define the API endpoint
    const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || 'http://localhost:3000';

    // Fetch data from the API
    const fetchData = async () => {
      try {
        let client;

        // Connect to MongoDB
        client = await connectToDatabase();

        // Fetch data from the server
        const res = await fetch(`${SERVER_ENDPOINT}/api/getPosts`, {
          cache: 'no-cache',
        });

        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }

        // Update the component state with the fetched data
        const postData = await res.json();
        setData(postData);
      } catch (error) {
        console.error('Error loading posts: ', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // The empty dependency array ensures that useEffect runs only once when the component mounts

  // Render your component with the fetched data
  return (
    data
  );
};

export default PostComp;
