import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import { NearLogin } from "elements";

import { isEmpty } from "utils/isEmpty";
import { isEmail } from "utils/isEmail";
import { isPhone } from "utils/isPhone";

const AuthHome = () => {
  const [emailOrPhoneFlag, setEmailOrPhone] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [enable, setEnable] = useState(true);

  useEffect(() => {
    setInputValue("");
  }, [emailOrPhoneFlag]);

  useEffect(() => {
    if (isEmpty(inputValue)) {
      setEnable(true);
    } else {
      if (emailOrPhoneFlag) {
        if (isEmail(inputValue)) {
          setEnable(false);
        } else {
          setEnable(true);
        }
      } else {
        if (isPhone(inputValue)) {
          setEnable(false);
        } else {
          setEnable(true);
        }
      }
    }
  }, [inputValue, emailOrPhoneFlag]);

  const typeValue = (value: any) => {
    setInputValue(value);
  };

  return (
    <div className="flex flex-col px-7">
      <div className="flex justify-center space-x-[22px] pt-[21px]">
        <div
          className={`text-[14px] leading-[18px] font-medium rounded-[10px] px-3 py-[6px] cursor-pointer hover:opacity-70 ${
            emailOrPhoneFlag && ` border-[#BEBEC2] border`
          }`}
          onClick={() => setEmailOrPhone(true)}
        >
          Email
        </div>
        <div
          className={`text-[14px] leading-[18px] font-medium rounded-[10px] px-3 py-[6px] cursor-pointer hover:opacity-70 ${
            !emailOrPhoneFlag && ` border-[#BEBEC2] border`
          }`}
          onClick={() => setEmailOrPhone(false)}
        >
          Phone
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-[26px]">
        {emailOrPhoneFlag ? (
          <input
            type="text"
            placeholder="Ex johndoe@gmail.com"
            value={inputValue}
            onChange={(event) => typeValue(event?.target.value)}
            className={`input max-w-[306px] w-full text-[16px] text-[#828282] border-[#BEBEC2] ${
              !enable && "border-primary"
            }`}
          />
        ) : (
          <input
            type="text"
            value={inputValue}
            onChange={(event) => typeValue(event?.target.value)}
            placeholder="Ex (337) 378 8383"
            className={`input max-w-[306px] w-full text-[16px] text-[#828282] border-[#BEBEC2] ${
              !enable && "border-primary"
            }`}
          />
        )}
        <button
          disabled={enable}
          className="flex items btn btn-primary rounded-[10px] capitalize mt-5"
        >
          <div className="text-[16px] leading-[22px] mr-2">Continue</div>
          <RiArrowRightSLine fontSize={20} />
        </button>
        <div className="max-w-[281px] text-[12px] text-[#828282] text-center leading-[16px] pt-6 pb-8">
          by clicking continue you must agree to near labs{" "}
          <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="w-full m-auto border border-[#DFDFE0]"></div>
      <NearLogin />
    </div>
  );
};

export default AuthHome;
