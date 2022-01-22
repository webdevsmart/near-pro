import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RiArrowRightSLine } from "react-icons/ri";

import { AuthTitleHeader, NearLogin } from "elements";
import { isEmpty } from "utils/isEmpty";

const CreateAccount = () => {
  const router = useRouter();
  const [accountInfo, setAccountInfo] = useState<any>({});
  const [enable, setEnable] = useState(true);

  const changeAccountInfo = (e: any) => {
    setAccountInfo({ ...accountInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isEmpty(accountInfo.name) || isEmpty(accountInfo.id)) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  });

  return (
    <div>
      <AuthTitleHeader title="Create NEAR account" />
      <div className="px-7 flex justify-center">
        <div className="flex flex-col">
          <div className="max-w-[310px] text-[14px] leading-[19px] text-[#808080] pt-[26px]">
            Enter an Account ID to use with your NEAR account. Your Account ID
            will be used for all NEAR operations, including sending and
            receiving assets.
          </div>
          <div className="pt-6 space-y-4">
            <div className="flex flex-col">
              <label className="text-[14px] leading-[19px] text-[#6F6E73]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Ex. John doe"
                className="input max-w-[306px] w-full text-[16px] text-[#33373B] placeholder:text-[#828282] font-bold placeholder:font-medium border-[#BEBEC2] mt-[10px]"
                onChange={(e) => changeAccountInfo(e)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[14px] leading-[19px] text-[#6F6E73]">
                Account ID
              </label>
              <div className="inline-flex">
                <input
                  type="text"
                  name="id"
                  placeholder="yourname"
                  className="input max-w-[306px] w-full text-[16px] text-[#33373B] placeholder:text-[#828282] font-bold placeholder:font-medium border-[#BEBEC2] mt-[10px]"
                  onChange={(e) => changeAccountInfo(e)}
                />
              </div>
            </div>
          </div>
          <div className="self-center">
            <button
              disabled={enable}
              className=" flex items btn btn-primary rounded-[10px] capitalize mt-5"
              onClick={() => router.push("secure-account")}
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
      <div className="border border-[#DFDFE0] mt-5"></div>
      <NearLogin />
    </div>
  );
};

export default CreateAccount;
