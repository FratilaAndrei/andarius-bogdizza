import { Link } from "react-router-dom";
import properLogo from "../../../utils/images/properLogo.jpg";
import NavbarLogo from "./NavbarLogo";

interface NavbarOption {
  id: number;
  label?: string;
  link: string;
  picture?: string;
}

const NavbarData = () => {
  const NAVBAR_DUMMY_DATA: NavbarOption[] = [
    { id: 1, label: "HOME", link: "/" },
    { id: 2, label: "DESPRE PROPER PIZZA", link: "/despre" },
    { id: 3, label: "BLOG", link: "/blog" },
    { id: 4, picture: properLogo, link: "/" },
    { id: 5, label: "COMANDA ONLINE", link: "/comanda" },
    { id: 6, label: "LOCATII", link: "/locatii" },
    { id: 7, label: "CONTACT", link: "/contact" },
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
