function HamBurger() {
  return (
    <div className=" flex gap-2 flex-col p-1 cursor-pointer sm:hidden">
      <div className=" h-1 w-10 rounded-md bg-primary"></div>
      <div className=" h-1 w-10 rounded-md bg-primary"></div>
      <div className=" h-1 w-10 rounded-md bg-primary"></div>
    </div>
  );
}

export default HamBurger;
