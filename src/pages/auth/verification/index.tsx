import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RiArrowRightSLine } from "react-icons/ri";

import { AuthTitleHeader } from "elements";
import VerificationInput from "elements/VerificationInput";
import AuthInfoContext from "context/AuthInfoContext";

const Verification = () => {
  const router = useRouter();

  const { context } = useContext<any>(AuthInfoContext);
  const [authInfo, setAuthInfo] = useState<any>({});

  useEffect(() => {
    setAuthInfo({
      inputValue: context?.inputValue,
      emailOrPhoneFlag: context?.emailOrPhoneFlag,
    });
  }, [context]);

  const CODE_LENGTH = new Array(6).fill(0);

  return (
    <div>
      <AuthTitleHeader title="Verification" />
      <div className="px-7">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[306px] m-auto text-[14px] text-[#414047 font-medium leading-6 text-center pt-[30px]">
            We've sent a 6-digit verification code to{" "}
            {authInfo.emailOrPhoneFlag ? "the emai address" : "your phone"}
            <a href="#" className="block text-[16px] pt-1">
              +1 {authInfo.inputValue}
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-[14px] leading-[19px] text-[#808080] text-center pt-[22px]">
              Enter verification code
            </div>
            <div className="flex space-x-[10px] pt-[10px]">
              {CODE_LENGTH.map((v, index) => (
                <VerificationInput key={index} />
              ))}
            </div>
            <button
              disabled={false}
              className="flex items btn btn-primary rounded-[10px] capitalize mt-8"
              onClick={() => router.push("create-account")}
            >
              <div className="max-w-[124px] text-[16px] leading-[22px] mr-2">
                Continue
              </div>
              <RiArrowRightSLine fontSize={20} />
            </button>
          </div>
          <div className="w-full border border-[#E9E6E6] m-8"></div>
          <div className="pt-[25px] text-center">
            Didn't receive your code?
            <a href="#" className="block text-[16px] pt-[25px]">
              Send to a different email address
            </a>
            <a href="#" className="block text-[16px] pt-[22px]">
              Resend your code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
