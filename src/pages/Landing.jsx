import { useNavigate } from "react-router-dom";

function Landing() {
  const navigete = useNavigate();

  const signup = () => {
    navigete("/signup");
  };
  const login = () => {
    navigete("/login");
  };

  return (
    <>
      <div className="flex flex-col h-full gap-[29px] justify-end pb-[21px]">
        <div>
          <div className="font-medium text-[28px]  text-primary">
            Welcome to PopX
          </div>
          <p className=" text-[18px] text-primary opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <button
            className="bg-[#6C25FF] hover:bg-[#6e25ffdc] h-[46px] rounded-[6px] text-white font-medium cursor-pointer"
            onClick={signup}
          >
            Create Account
          </button>
          <button
            className="bg-[#6C25FF4B] hover:bg-[#6e25ff6a] h-[46px] rounded-[6px] text-primary font-medium cursor-pointer"
            onClick={login}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
