import ROUTES from "@/types/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialSubcribe = () => {
  return (
    <div className="flex gap-1">
      <Link href={ROUTES.HOME}>
        <div className="relative w-9 h-9 ">
          <Image
            src={"/images/facebookIcon.webp"}
            alt="facebookIcon"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <Link href={ROUTES.HOME}>
        <div className="relative w-9 h-9 ">
          <Image
            src={"/images/iconSub.webp"}
            alt="facebookIcon"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <Link href={ROUTES.HOME}>
        <div className="relative w-9 h-9 ">
          <Image
            src={"/images/internetSub.webp"}
            alt="facebookIcon"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <Link href={ROUTES.HOME}>
        <div className="relative w-9 h-9 ">
          <Image
            src={"/images/telegramSub.webp"}
            alt="facebookIcon"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
    </div>
  );
};

export default SocialSubcribe;
