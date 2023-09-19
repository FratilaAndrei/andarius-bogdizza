import { useEffect, useState } from "react";
import OptionMenu from "../OptionsMenu/OptionMenu";
import NavbarData from "./NavbarData";

const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 0
        ? setBackgroundColor("white")
        : setBackgroundColor("transparent");
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <div
        className=" fixed z-50 h-40 w-full bg-transparent"
        style={{ backgroundColor }}
      >
        <div className="m-auto mt-4 flex w-fit rounded-lg bg-navbarColor px-6 shadow-lg ">
          <NavbarData />
        </div>
      </div>
      <OptionMenu />
    </>
  );
};

export default Navbar;
