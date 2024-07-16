'use client';
import HeadingHomePage from '@/components/Heading';

import React from 'react';
import NewsCard from './NewsCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { TextContext } from '@/contexts/useTextContext';
import { format } from 'date-fns';
import Autoplay from 'embla-carousel-autoplay';

const LatestNewsSection = () => {
  const context = React.useContext(TextContext);
  const dataBlog = context.dataBlog;

  return (
    <div className="container py-[3.125rem] space-y-5">
      <HeadingHomePage
        title="Latest News"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore lacus vel facilisis."
      />
      <Carousel
        className=" relative left-1/2 -translate-x-1/2"
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {dataBlog?.map((blog) => (
            <CarouselItem key={blog?.id}>
              <NewsCard
                role={
                  blog?.author?.roles?.includes('admin') ? 'admin' : 'client'
                }
                category={blog?.title}
                description={blog?.description}
                image={blog?.images[0]}
                date={format(new Date(blog?.createdAt), 'dd-MM-yyyy HH:mm')}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LatestNewsSection;
