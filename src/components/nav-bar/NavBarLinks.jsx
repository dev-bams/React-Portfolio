import NavbarLink from "./NavbarLink";
import links from "../../data/links";

function NavBarLinks() {
  return (
    <div className=" hidden sm:flex gap-8">
      {links.map(({ name, link }, id) => {
        return <NavbarLink key={id} name={name} link={link} />;
      })}
    </div>
  );
}

export default NavBarLinks;