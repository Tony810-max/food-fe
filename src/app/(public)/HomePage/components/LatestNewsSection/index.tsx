import HeadingHomePage from "@/components/Heading";

import React from "react";
import NewsCard from "./NewsCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const LatestNewsSection = () => {
  return (
    <div className="container py-[3.125rem] space-y-5">
      <HeadingHomePage
        title="Latest News"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore lacus vel facilisis."
      />
        <Carousel className=" relative left-1/2 -translate-x-1/2">
          <CarouselContent>
            <CarouselItem>
              <NewsCard
                role="by admin"
                category="Snacks"
                description="Urna pretium elit mauris cursus at elit Vestibulum."
                image={"/images/lastestNews1.webp"}
                date={10}
                month={"oct"}
              />
            </CarouselItem>
            <CarouselItem>
              <NewsCard
                role="by admin"
                category="food"
                description="Best guide to Shopping for organic ingredients."
                image={"/images/lastestNews2.webp"}
                date={10}
                month={"oct"}
              />
            </CarouselItem>
            <CarouselItem>
              <NewsCard
                role="by admin"
                category="snacks"
                description="Cursus at elit vestibulum urna pretium elit mauris."
                image={"/images/lastestNews3.webp"}
                date={10}
                month={"oct"}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
  );
};

export default LatestNewsSection;
