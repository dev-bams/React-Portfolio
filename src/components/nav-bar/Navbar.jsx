import WordMark from "./WordMark";
import HamBurger from "./HamBurger";
import NavBarLinks from "./NavBarLinks";

function Navbar() {
  return (
    <nav className="flex gap-4 justify-between items-center">
      <HamBurger />
      <WordMark />
      <NavBarLinks />

    </nav>
  );
}

export default Navbar;
