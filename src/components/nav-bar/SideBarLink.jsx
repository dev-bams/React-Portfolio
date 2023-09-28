import PropTypes from "prop-types";

function SideBarLink({ name, link }) {
  return (
    <a href={link} className=" font-bold">
      {name}
    </a>
  );
}

SideBarLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SideBarLink;
