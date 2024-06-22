import { API_URL, IBlog } from '@/types/common';
import axios from 'axios';
import { useState } from 'react';

const useBlog = () => {
  const [dataBlog, setDataBlog] = useState<IBlog[]>();

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/post?isApprove=true`);
      if (response) {
        setDataBlog(response?.data?.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    dataBlog,
    fetchBlog,
  };
};

export default useBlog;
