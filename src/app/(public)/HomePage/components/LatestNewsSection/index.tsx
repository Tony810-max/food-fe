import HeadingHomePage from "@/components/Heading";

import React from "react";
import NewsCard from "./NewsCard";

const LatestNewsSection = () => {
  return (
    <div className="container mt-24">
      <HeadingHomePage
        title="Latest News"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore lacus vel facilisis."
      />
      <div className="grid grid-cols-3  gap-x-6 mt-8">
        <NewsCard
          role="by admin"
          category="Snacks"
          description="Urna pretium elit mauris cursus at elit Vestibulum."
          image={"/images/lastestNews1.webp"}
          date={10}
          month={"oct"}
        />
        <NewsCard
          role="by admin"
          category="food"
          description="Best guide to Shopping for organic ingredients."
          image={"/images/lastestNews2.webp"}
          date={10}
          month={"oct"}
        />
        <NewsCard
          role="by admin"
          category="snacks"
          description="Cursus at elit vestibulum urna pretium elit mauris."
          image={"/images/lastestNews3.webp"}
          date={10}
          month={"oct"}
        />
      </div>
    </div>
  );
};

export default LatestNewsSection;
