import React from "react";

import MainBlog from "./components/MainBlog";
import SideRightBLog from "./components/SideRightBLog";

const BlogPage = () => {
  return (
    <div className="py-[6.25rem] grid grid-cols-3 container">
      <MainBlog />
      <SideRightBLog />
    </div>
  );
};

export default BlogPage;
