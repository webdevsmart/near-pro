import { useRouter } from "next/router";
import React from "react";

import { FaTimes } from "react-icons/fa";

interface AuthTitleHeaderProps {
  title: string;
}

const AuthTitleHeader = ({ title }: AuthTitleHeaderProps) => {
  const router = useRouter();
  return (
    <div>
      <div className="text-[16px] font-semibold leading-[22px] text-center bg-[#EAEFFF] border-b border-b-[#DFDFE0] py-[15px] cursor-pointer">
        {title}
      </div>
      <div className="absolute flex top-3 right-4 bg-[#6F6E7315] rounded-full p-1">
        <FaTimes color="#6F6E73" onClick={() => router.back()} />
      </div>
    </div>
  );
};

export default AuthTitleHeader;
