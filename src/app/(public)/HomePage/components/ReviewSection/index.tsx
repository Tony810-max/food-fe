import React from "react";
import SliderReviewSection from "./SliderReviewSection";
import HeadingHomePage from "@/components/Heading";

const ReviewSection = () => {
  return (
    <div className="container py-[3.125rem] flex flex-col items-center gap-16">
      <HeadingHomePage
        title="Great Words From People"
        des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore lacus vel facilisis."
      />
      <div className="grid grid-cols-3 gap-x-6">
        <SliderReviewSection
          image="/images/AvtReview.webp"
          name="Stephen Smith"
          role="Co Founder"
          description="“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem
          lacus vel facilisis.”"
        />
        <SliderReviewSection
          image="/images/AvtReview2.webp"
          name="Lorem Robinson"
          role="Manager"
          description="“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem
          lacus vel facilisis.”"
        />
        <SliderReviewSection
          image="/images/AvtReview3.webp"
          name="Saddika Alard"
          role="Team Leader"
          description="“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem
          lacus vel facilisis.”"
        />
      </div>
    </div>
  );
};

export default ReviewSection;
