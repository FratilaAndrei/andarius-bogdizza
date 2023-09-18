import properLogo from "../../../utils/properLogo.jpg";
import NavbarLogo from "./NavbarLogo";
const NavbarData = () => {
  const NavbarDummyData = [
    { id: 1, label: "HOME", link: "/" },
    { id: 2, label: "DESPRE PROPER PIZZA", link: "/despre" },
    { id: 3, label: "BLOG", link: "/blog" },
    { id: 4, picture: properLogo },
    { id: 5, label: "COMANDA ONLINE", link: "/comanda" },
    { id: 6, label: "LOCATII", link: "/locatii" },
    { id: 7, label: "CONTACT", link: "/contact" },
  ];

  const getNavbarData = () => {
    return NavbarDummyData.map((option) => (
      <div className="text-center" key={option.id}>
        <a
          href={option.link as string}
          className={`text-sm font-medium cursor-pointer ${
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
    <div className="flex items-center h-16 m-auto justify-evenly gap-x-6">
      {getNavbarData()}
    </div>
  );
};

export default NavbarData;
