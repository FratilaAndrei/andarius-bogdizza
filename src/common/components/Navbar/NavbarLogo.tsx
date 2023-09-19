import { FC } from "react";

type navbarLogoProps = {
  navbarLogo: string;
};

const NavbarLogo: FC<navbarLogoProps> = ({ navbarLogo }) => {
  return (
    <div className="xs:w-full xs:mt-5 mt-0 flex w-2/3 sm:w-full">
      <div className="h-auto w-[15px] bg-logoColor"></div>
      <div className="xs:max-h-[100px] relative min-h-[80px] w-[180px] bg-logoColor">
        <img
          src={navbarLogo}
          alt="ProperLogo"
          className="h-full w-full object-contain object-center"
        />
        <div className="-bottom-13  xs:h-[50px] absolute right-1/2 flex w-[210px] translate-x-1/2">
          <div className="xs:border-r-[105px] xs:border-b-[50px] w-1/2 border-b-[40px] border-r-[70px] border-b-transparent border-r-logoColor"></div>
          <div className="xs:border-l-[105px] xs:border-b-[50px] w-1/2 border-b-[40px] border-l-[70px] border-b-transparent border-l-logoColor"></div>
        </div>
      </div>
      <div className="h-auto w-[15px] bg-logoColor"></div>
    </div>
  );
};

export default NavbarLogo;
