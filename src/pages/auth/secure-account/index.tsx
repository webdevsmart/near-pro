import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { AuthTitleHeader } from "elements";

const SecureAccount = () => {
  const handlePassword = (e: any) => {};
  return (
    <div className="flex flex-col justify-center">
      <AuthTitleHeader title="Secure your account" />
      <div className="px-7 flex justify-center">
        <div className="flex flex-col space-y-[15px]">
          <div className="max-w-[310px] text-[14px] leading-[19px] text-[#808080] pt-6">
            Keep your apps safe from other with access to your computer.
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] leading-[19px] text-[#6F6E73]">
              Password
            </label>
            <input
              type="password"
              className="input max-w-[306px] w-full text-[16px] text-[#33373B] placeholder:text-[#828282] font-bold placeholder:font-medium border-[#BEBEC2] mt-[10px]"
              onChange={(e) => handlePassword(e)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] leading-[19px] text-[#6F6E73]">
              Confirm Password
            </label>
            <input
              type="password"
              className="input max-w-[306px] w-full text-[16px] text-[#33373B] placeholder:text-[#828282] font-bold placeholder:font-medium border-[#BEBEC2] mt-[10px]"
              onChange={(e) => handlePassword(e)}
            />
          </div>
          <div className="self-center">
            <button
              disabled={true}
              className=" flex items btn btn-primary rounded-[10px] capitalize mt-5"
            >
              <div className="text-[16px] leading-[22px] mr-2">Continue</div>
              <RiArrowRightSLine fontSize={20} />
            </button>
          </div>
          <div className="max-w-[281px] text-[12px] leading-[16px] text-center pt-6">
            By creating a NEAR account, you agree to the NEAR Wallet{" "}
            <a href="#" className="text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary">
              Privacy Policy.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureAccount;
