'use client';

import { API_URL, IBlog } from '@/types/common';
import axios from 'axios';
import React, { useState } from 'react';

export const TextContext = React.createContext({});

export const TextProvider = ({ children }: { children: React.ReactNode }) => {
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

  React.useEffect(() => {
    fetchBlog();
  }, []);

  const context = React.useMemo(() => {
    return {
      dataBlog,
      fetchBlog,
    };
  }, [dataBlog, fetchBlog]);

  return (
    <TextContext.Provider value={context}>{children}</TextContext.Provider>
  );
};
