import PropTypes from "prop-types";

function NavbarLink({ name, link }) {
  return (
    <a
      href={link}
      className=" font-bold border-b-2 border-white hover:border-[#023] transition-all duration-300"
    >
      {name}
    </a>
  );
}

NavbarLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavbarLink;
