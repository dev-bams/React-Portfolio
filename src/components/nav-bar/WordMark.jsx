import Logo from "../../svgcomponents/Logo";

function WordMark() {
  return (
    <div>
      <a className="flex items-center" href="#">
        <Logo />
        <h1 className=" font-semibold text-2xl ">
          Khaleed Opeloyeru
        </h1>
      </a>
    </div>
  );
}

export default WordMark;
