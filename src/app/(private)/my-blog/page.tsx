'use client';
import React from 'react';
import { API_URL, IBlogMe } from '@/types/common';
import axios from 'axios';
import ImageMyBlog from './components/ImageMyBlog';
import ContentMyBlog from './components/ContentMyBlog';

const MyBlog = () => {
  const [dataMyBlog, setDataMyBlog] = React.useState<IBlogMe>();
  dataMyBlog;
  const fetchMyBlog = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.get(`${API_URL}/api/v1/post/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response) {
        setDataMyBlog(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchMyBlog();
  }, []);
  return (
    <div className="container py-20 space-y-4">
      {dataMyBlog?.posts?.map((data) => (
        <div className="flex gap-2 flex-col sm:flex-row" key={data?.id}>
          <ImageMyBlog img={data?.images[0]} />
          <ContentMyBlog
            status={data?.isApproved}
            title={data?.title}
            description={data?.description}
          />
        </div>
      ))}
    </div>
  );
};

export default MyBlog;
