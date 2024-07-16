'use client';

import { API_URL, IBlogMain } from '@/types/common';
import axios from 'axios';
import { useState } from 'react';

const useDetailBlog = () => {
  const [dataDetailBlog, setDataDetailBlog] = useState<IBlogMain>();

  const fetchDetailBlog = async (id: number | string) => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/post/${id}`);
      if (response) {
        setDataDetailBlog(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchDetailBlog,
    dataDetailBlog,
  };
};

export default useDetailBlog;
