import React from 'react';
import SliderReviewSection from './SliderReviewSection';
import HeadingHomePage from '@/components/Heading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import axios from 'axios';
import { API_URL } from '@/types/common';
import Autoplay from 'embla-carousel-autoplay';

interface IReview {
  id: number;
  ratings: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

const ReviewSection = () => {
  const [dataReview, setDataReview] = React.useState<IReview[]>();
  
  const fetchReview = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      const response = await axios.get(`${API_URL}/api/v1/reviews`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response) {
        setDataReview(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchReview();
  }, []);

  return (
    <div className="container py-[3.125rem] flex flex-col items-center gap-16">
      <HeadingHomePage
        title="Great Words From People"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore lacus vel facilisis."
      />
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {dataReview?.map((data) => (
            <CarouselItem key={data?.id}>
              <SliderReviewSection
                rate={data?.ratings}
                name="Stephen Smith"
                description={`“${data?.comment}”`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ReviewSection;
