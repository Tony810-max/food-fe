'use client';

import { API_URL, IBlog } from '@/types/common';
import axios from 'axios';
import { useState } from 'react';

const useDetailBlog = () => {
  const [dataDetailBlog, setDataDetailBlog] = useState<IBlog>();

  const fetchDetailBlog = async (id: number | string) => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/post/${id}`);
      if (response) {
        console.log("response dataDetailBlog",response);
        setDataDetailBlog(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchDetailBlog,
    dataDetailBlog,
  };
};

export default useDetailBlog;
