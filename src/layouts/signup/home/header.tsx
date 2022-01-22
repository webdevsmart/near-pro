import React from "react";
import Image from "next/image";

import NearLogo from "assets/images/near-logo.png";

const HomeHeader = () => {
  return (
    <div className="flex justify-center items-center bg-[#EAEFFF] border-b border-b-[#DFDFE0] py-[15px] cursor-pointer">
      <Image src={NearLogo} alt="NearLogo" width={17} height={18} />
      <span className="font-bold text-[20px] text-[#B072FF]">Home</span>
      <span className="font-bold text-[20px] text-[#33373B]">Page</span>
    </div>
  );
};

export default HomeHeader;
