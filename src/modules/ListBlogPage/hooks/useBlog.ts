'use client';

import { API_URL, IBlogMain } from '@/types/common';
import axios from 'axios';
import React, { useState } from 'react';

const useBlog = () => {
  const [dataBlog, setDataBlog] = useState<IBlogMain[]>();

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/post?isApprove=true`);
      if (response) {
        setDataBlog(response?.data?.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchBlog();
  }, []);

  return {
    dataBlog,
    fetchBlog,
  };
};

export default useBlog;
