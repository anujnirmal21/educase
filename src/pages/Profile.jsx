function Profile() {
  return (
    <div className=" relative">
      <div className="w-full h-[68px] bg-white absolute top-0 left-0">
        <p className="text-[18px] pt-[27px] text-[#1D2226]">Account Settings</p>
      </div>
      <div className="grid grid-cols-[76px_1fr] grid-rows-2 h-[max-content] pt-[78px] gap-5 justify-start relative">
        <div className="w-[76px] h-[76px] rounded-full bg-amber-300 relative">
          <img src="./images/Ellipse2x.png" alt="" />
          <img
            src={"./images/camera.svg"}
            alt=""
            className="absolute bottom-0 right-0"
          />
        </div>
        <div className="flex flex-col">
          <p className="name font-medium text-[15px]">Marry Doe</p>
          <p className="email text-[14px] text-[#1D2226]">Marry@Gmail.Com</p>
        </div>
        <div className="content capitalize col-span-2 w-fit text-[14px] ">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
      <div className=" absolute top-[287px] left-0 w-[375px] border-1 border-dashed border-[#CBCBCB] "></div>
    </div>
  );
}

export default Profile;
