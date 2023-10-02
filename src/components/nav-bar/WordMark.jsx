import Logo from "../../svgcomponents/Logo";

function WordMark() {
  return (
    <div>
      <a className="flex items-center" href="#">
        <Logo />
        <h1 className=" font-bold text-2xl text-accent">
          {/* Khaleed Opeloyeru */}
        </h1>
      </a>
    </div>
  );
}

export default WordMark;
