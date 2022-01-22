import React from "react";

import { AuthTitleHeader } from "elements";

const CreateAccount = () => {
  return (
    <div>
      <AuthTitleHeader title="Create NEAR account" />
      <div className="px-7">
        <div className="flex flex-col">
          <div className="max-w-[310px] text-[14px] leading-[19px] text-[#808080] pt-[26px]">
            Enter an Account ID to use with your NEAR account. Your Account ID
            will be used for all NEAR operations, including sending and
            receiving assets.
          </div>
          <div className="pt-6">
            <div className="flex flex-col">
              <label className="text-[14px] leading-[19px] text-[#6F6E73]">
                Full Name
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
