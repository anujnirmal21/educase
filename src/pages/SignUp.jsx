import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigete = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigete("/profile");
  };

  return (
    <>
      <div className="flex flex-col h-full gap-[31px] justify-start">
        <div className="text-primary text-[1.75rem] font-medium leading-9 h-[69px] w-[188px] mt-5 mb-0.5">
          Create your PopX account
        </div>
        <form className="flex flex-col gap-[29px] h-full relative">
          <div className="relative text-[13px]">
            <input
              className="border border-[#CBCBCB] rounded-[6px] w-full h-[40px] pl-[17.22px] placeholder-h-[12.46px]"
              name="name"
              placeholder="Enter full name"
            />
            <p className="absolute -top-1/2 translate-y-1/2 left-[9px] pl-[5px] w-[96px] h-[17px] bg-[#F7F8F9] text-[#6C25FF]">
              Full Name<span className="text-[#DD4A3D]">*</span>
            </p>
          </div>

          <div className="relative text-[13px]">
            <input
              className="border border-[#CBCBCB] rounded-[6px] w-full h-[40px] pl-[17.22px]"
              name="phone"
              placeholder="Enter phone number"
              type="tel"
              maxLength={10}
            />
            <p className="absolute -top-1/2 translate-y-1/2 left-[9px] pl-[5px] w-[96px] h-[17px] bg-[#F7F8F9] text-[#6C25FF]">
              <span className="absolute w-[max-content]">
                Phone Number<span className="text-[#DD4A3D]">*</span>
              </span>
            </p>
          </div>

          <div className="relative text-[13px]">
            <input
              className="border border-[#CBCBCB] rounded-[6px] w-full h-[40px] pl-[17.22px] "
              name="email"
              placeholder="Enter email address"
              type="email"
            />
            <p className="absolute -top-1/2 translate-y-1/2 left-[9px] pl-[5px] w-[96px] h-[17px] bg-[#F7F8F9] text-[#6C25FF]">
              Email address<span className="text-[#DD4A3D]">*</span>
            </p>
          </div>

          <div className="relative text-[13px]">
            <input
              className="border border-[#CBCBCB] rounded-[6px] w-full h-[40px] pl-[17.22px] "
              name="password"
              placeholder="Enter password"
              type="password"
              minLength={8}
            />
            <p className="absolute -top-1/2 translate-y-1/2 left-[9px] pl-[5px] w-[96px] h-[17px] bg-[#F7F8F9] text-[#6C25FF]">
              Password<span className="text-[#DD4A3D]">*</span>
            </p>
          </div>

          <div className="relative text-[13px]">
            <input
              className="border border-[#CBCBCB] rounded-[6px] w-full h-[40px] pl-[17.22px] "
              name="company"
              placeholder="Enter company name"
            />
            <p className="absolute -top-1/2 left-[9px] pl-[5px] translate-y-1/2  w-[96px] h-[17px] bg-[#F7F8F9] text-[#6C25FF]">
              <span className="absolute w-[max-content]">Company Name</span>
            </p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <p className=" text-[13px]">
              Are you an Agency?<span className="text-[#DD4A3D]">*</span>
            </p>

            <div className="flex gap-[23px] text-[14px]">
              <label className="flex items-center space-x-2">
                <input
                  className="text-[#6C25FF] accent-[#6C25FF] w-[22px] h-[22px]"
                  name="agency"
                  type="radio"
                  value="yes"
                />
                <span>Yes</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  className="text-[#6C25FF] accent-[#6C25FF] w-[22px] h-[22px]"
                  name="agency"
                  type="radio"
                  value="no"
                />
                <span>No</span>
              </label>
            </div>
          </div>
          <div className="h-max mt-auto w-full">
            <button
              className="w-full bottom-0 bg-[#6C25FF] hover:bg-[#CBCBCB] h-[46px] rounded-[6px] text-white font-medium cursor-pointer mb-[10px]"
              type="submit"
              onClick={handleClick}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
