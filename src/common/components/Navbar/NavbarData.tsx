import properLogo from "../../../utils/images/properLogo.jpg";
import NavbarLogo from "./NavbarLogo";
const NavbarData = () => {
  const NAVBAR_DUMMY_DATA = [
    { id: 1, label: "HOME", link: "/" },
    { id: 2, label: "DESPRE PROPER PIZZA", link: "/despre" },
    { id: 3, label: "BLOG", link: "/blog" },
    { id: 4, picture: properLogo },
    { id: 5, label: "COMANDA ONLINE", link: "/comanda" },
    { id: 6, label: "LOCATII", link: "/locatii" },
    { id: 7, label: "CONTACT", link: "/contact" },
  ];

  const getNavbarData = () => {
    return NAVBAR_DUMMY_DATA.map((option) => (
      <div className="text-center" key={option.id}>
        <a
          href={option.link as string}
          className={`cursor-pointer text-sm font-medium ${
            location.pathname === option.link ? "text-logoColor" : ""
          }`}
        >
          {option.label}
        </a>
        {option.picture && (
          <a href="/">
            <NavbarLogo navbarLogo={option.picture} />
          </a>
        )}
      </div>
    ));
  };

  return (
    <div className="m-auto flex h-16 items-center justify-evenly gap-x-6">
      {getNavbarData()}
    </div>
  );
};

export default NavbarData;
