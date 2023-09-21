import { FC } from "react";

type navbarLogoProps = {
  navbarLogo: string;
};

const NavbarLogo: FC<navbarLogoProps> = ({ navbarLogo }) => {
  return (
    <div className="mt-0 flex w-2/3 xs:mt-5 xs:w-full">
      <div className="h-auto w-3.5 bg-logoColor"></div>
      <div className="min-h-20 relative w-44 bg-logoColor">
        <img
          src={navbarLogo}
          alt="ProperLogo"
          className="h-full w-full object-contain object-center"
        />
        <div className="-bottom-13  absolute right-1/2 flex h-12 w-52 translate-x-1/2 ">
          <div className="w-1/2 border-b-[40px] border-r-[68px] border-b-transparent border-r-logoColor xs:border-b-[50px] xs:border-r-[103px]"></div>
          <div className="w-1/2 border-b-[40px] border-l-[68px] border-b-transparent border-l-logoColor xs:border-b-[50px] xs:border-l-[103px]"></div>
        </div>
      </div>
      <div className="h-auto w-3.5 bg-logoColor"></div>
    </div>
  );
};

export default NavbarLogo;
