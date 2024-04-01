import ROUTES from "@/types/routes";
import Link from "next/link";
import React from "react";

const CompanyFooter = () => {
  return (
    <div className="pt-7 flex flex-col justify-between">
      <span className="font-sans text-lg leading-snug text-[#000000] font-bold">
        Company
      </span>
      <div className="flex flex-col gap-5">
        <Link
          href={ROUTES.ABOUTUS}
          className="font-sans leading-relaxed text-[#777777] capitalize hover:opacity-70"
        >
          About us
        </Link>
        <Link
          href={ROUTES.BLOGS}
          className="font-sans leading-relaxed text-[#777777] capitalize hover:opacity-70"
        >
          Blogs
        </Link>
        <Link
          href={ROUTES.HOME}
          className="font-sans leading-relaxed text-[#777777] capitalize hover:opacity-70"
        >
          Privacy Policy
        </Link>
        <Link
          href={ROUTES.HOME}
          className="font-sans leading-relaxed text-[#777777] capitalize hover:opacity-70"
        >
          Terms & Conditions
        </Link>
        <Link
          href={ROUTES.CONTACTUS}
          className="font-sans leading-relaxed text-[#777777] capitalize hover:opacity-70"
        >
          contact Us
        </Link>
        <Link
          href={ROUTES.HOME}
          className="font-sans leading-relaxed text-[#777777] capitalize hover:opacity-70"
        >
          Support Center
        </Link>
      </div>
    </div>
  );
};

export default CompanyFooter;
