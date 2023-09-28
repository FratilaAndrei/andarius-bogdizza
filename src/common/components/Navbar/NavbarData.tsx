import { Link } from "react-router-dom";
import properLogo from "../../../utils/images/properLogo.jpg";
import NavbarLogo from "./NavbarLogo";

interface NavbarOption {
  id: string;
  label?: string;
  link: string;
  picture?: string;
}

const NavbarData = () => {
  const NAVBAR_DUMMY_DATA: NavbarOption[] = [
    { id: "0", label: "HOME", link: "/" },
    { id: "1", label: "DESPRE PROPER PIZZA", link: "/despre" },
    { id: "2", label: "BLOG", link: "/blog" },
    { id: "3", picture: properLogo, link: "/" },
    { id: "4", label: "COMANDA ONLINE", link: "/comanda" },
    { id: "5", label: "LOCATII", link: "/locatii" },
    { id: "6", label: "CONTACT", link: "/contact" },
  ];

  const getNavbarData = () => {
    return NAVBAR_DUMMY_DATA.map((option) => (
      <div className="text-center" key={option.id}>
        <Link
          to={option.link}
          className={`hidden cursor-pointer text-sm font-medium xl:flex  ${
            location.pathname === option.link ? "text-logoColor" : ""
          }`}
        >
          {option.label}
        </Link>
        {option.picture && (
          <Link to="/">
            <NavbarLogo navbarLogo={option.picture} />
          </Link>
        )}
      </div>
    ));
  };

  return (
    <div className="m-auto flex h-16 min-w-[75vw] items-center justify-evenly gap-x-6">
      {getNavbarData()}
    </div>
  );
};

export default NavbarData;
