import { useEffect, useState } from "react";
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
    <div
      className=" h-40 bg-transparent w-full fixed"
      style={{ backgroundColor }}
    >
      <div className="bg-navbarColor mt-4 flex m-auto w-fit px-6 rounded-lg shadow-lg ">
        <NavbarData />
      </div>
    </div>
  );
};

export default Navbar;
