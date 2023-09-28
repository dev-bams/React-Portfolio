import links from "../../data/links";
import SideBarLink from "./SideBarLink";
function SideBarLinks() {
  return (
    <div className=" hidden sm:flex gap-8 flex-col bg-primary text-slate-50 w-1/2 justify-center items-center h-full">
      {links.map(({ name, link }, id) => {
        return <SideBarLink key={id} name={name} link={link} />;
      })}
    </div>
  );
}

export default SideBarLinks;
