import properLogo from "../../../utils/properLogo.jpg";
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

  //TODO Make this getNavbarData into a component
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
            <div className="flex mt-5 ">
              <div className="w-[15px] h-auto bg-logoColor"></div>
              <div className="bg-logoColor w-[180px] max-h-[100px] relative">
                <img
                  src={option.picture}
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
