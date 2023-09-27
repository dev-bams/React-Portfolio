import Logo from "../../svgcomponents/Logo";
// import HamBurger from "../svgcomponents/Hamburger";
import NavbarLink from "./NavbarLink";
import links from "../../data/links";

function Navbar() {
  return (
    <nav className="flex gap-4 justify-between items-center">
      <div className=" sm:hidden">
        {/* <HamBurger /> */}
      </div>
      <div>
        <a className="flex items-center" href="#">
          <Logo />
          <h1>JobPortalX</h1>
        </a>
      </div>
      <div className=" hidden sm:flex gap-8">
        {links.map(({ name, link }, id) => {
          return <NavbarLink key={id} name={name} link={link} />;
        })}
      </div>
      <div className=" mr-2 sm:mr-3  ">
        <a className="pt-2 pb-2 pl-7 pr-7 bg-[#023] text-white rounded-md">
          Start free
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
