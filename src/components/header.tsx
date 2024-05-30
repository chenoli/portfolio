import { useMemo } from "react";

import Link from "./link";

import logo from "../assets/logo-chenoli.png";

function Header(): React.ReactElement {
  const HeaderItem = useMemo(
    () => (title: string, selected?: boolean) => {
      return (
        <Link
          section={title.toLowerCase()}
          className="text-white"
          bold={selected}
        >
          {title}
        </Link>
      );
    },
    [],
  );

  return (
    <header className="bg-primary flex justify-center">
      <div className="flex items-center max-w-base w-base py-4">
        <img src={logo} alt="" />
        <div className="ml-16 flex gap-8 flex-1 justify-end">
          {HeaderItem("HOME", true)}
          {HeaderItem("EXPERIENCE")}
          {HeaderItem("PROJECTS")}
          {HeaderItem("CONTACT")}
        </div>
      </div>
    </header>
  );
}

export default Header;
