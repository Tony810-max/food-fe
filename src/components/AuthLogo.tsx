import Image from "next/image";
import React from "react";

const AuthLogo = () => {
  return (
    <div className="relative w-[10rem] h-[5.5rem]">
      <Image src={"/images/logo.webp"} alt="logo" fill />
    </div>
  );
};

export default AuthLogo;
