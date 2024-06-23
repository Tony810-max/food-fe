import React from 'react';

import MainBlog from './components/MainBlog';
import SideRightBLog from './components/SideRightBLog';
import { TextProvider } from '@/contexts/useTextContext';

const BlogPage = () => {
  return (
    <div className="py-24 grid grid-cols-1 gap-2 lg:grid-cols-3 container">
      <TextProvider>
        <MainBlog />
        <SideRightBLog />
      </TextProvider>
    </div>
  );
};

export default BlogPage;
