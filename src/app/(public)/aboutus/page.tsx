import FeatureSection from "@/components/Feature";
import Image from "next/image";
import React from "react";
import CoutAboutUs from "./components/CountAboutUs";

const AboutUsPage = () => {
  return (
    <div className="container space-y-[6.25rem] py-[6.25rem]">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-[1.625rem]">
          <div className="font-sans text-4xl leading-tight text-[#212529] font-bold">
            About The Carrot
          </div>
          <div className="space-y-[1.594rem]">
            <div className=" font-sans text-base leading-relaxed text-[#7a7a7a] font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              recusandae necessitatibus quasi incidunt alias adipisci pariatur
              earum iure beatae assumenda rerum quod. Tempora magni autem a
              voluptatibus neque.
            </div>
            <div className="font-sans text-base leading-relaxed text-[#7a7a7a] font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              recusandae necessitatibus quasi incidunt alias adipisci pariatur
              earum iure beatae assumenda rerum quod. Tempora magni autem a
              voluptatibus neque.
            </div>
            <div className="font-sans text-base leading-relaxed text-[#7a7a7a] font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              recusandae necessitatibus quasi incidunt alias adipisci pariatur
              earum iure beatae assumenda rerum quod. Tempora magni autem a
              voluptatibus neque.
            </div>
          </div>
          <div className="grid grid-cols-3 rounded-[0.313rem] bg-[#f7f7f8] py-6 px-3">
            <CoutAboutUs value={0.1} title={"Vendor"} />
            <CoutAboutUs value={23} title={"Customers"} />
            <CoutAboutUs value={2} title={"Products"} />
          </div>
        </div>
        <div className="relative w-full h-full">
          <Image src={"/images/imageAboutUs.webp"} alt="imageAboutUs" fill />
        </div>
      </div>
      <FeatureSection />
    </div>
  );
};

export default AboutUsPage;
