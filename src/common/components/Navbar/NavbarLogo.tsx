import { FC } from "react";

type navbarLogoProps = {
  navbarLogo: string;
};

const NavbarLogo: FC<navbarLogoProps> = ({ navbarLogo }) => {
  return (
    <div className="flex mt-5 ">
      <div className="w-[15px] h-auto bg-logoColor"></div>
      <div className="bg-logoColor w-[180px] max-h-[100px] relative">
        <img
          src={navbarLogo}
          alt="ProperLogo"
          className="w-full h-full object-cover object-center"
        />
        <div className="flex absolute -bottom-13 -right-4  w-[210px] h-[50px]">
          <div className="w-1/2  border-r-logoColor border-b-transparent border-r-[105px] border-b-[50px]"></div>
          <div className="w-1/2  border-l-logoColor border-b-transparent border-l-[105px] border-b-[50px]"></div>
        </div>
      </div>
      <div className="w-[15px] h-auto bg-logoColor"></div>
    </div>
  );
};

export default NavbarLogo;
