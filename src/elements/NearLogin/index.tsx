import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const NearLogin = () => {
  return (
    <div className="flex flex-col justify-center pt-6">
      <div className="text-[14px] text-[#414047] text-center leading-[19px]">
        Already have NEAR account?
      </div>
      <div className="flex items max-w-[190px] w-full btn btn-neutral rounded-[10px] capitalize mt-[10px] m-auto">
        <div className="text-[16px] leading-[22px] mr-1">Log in with NEAR</div>
        <RiArrowRightSLine fontSize={20} />
      </div>
    </div>
  );
};

export default NearLogin;
