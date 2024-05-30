import { useMemo } from "react";

import Text from "./text";

import logo from "../assets/logo-chenoli.png";

function Footer(): React.ReactElement {
  const FooterItem = useMemo(
    () => (title: string) => {
      return <Text className="text-white font-bold">{title}</Text>;
    },
    [],
  );

  return (
    <footer className="flex justify-center pt-8 pb-8 bg-black">
      <div className="flex max-w-base justify-between w-base">
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            {FooterItem("HOME")}
            {FooterItem("EXPERIENCE")}
          </div>
          <div className="flex flex-col ml-16  gap-2">
            {FooterItem("PROJECTS")}
            {FooterItem("CONTACT")}
          </div>
        </div>
        <div>
          <Text className="text-white">DEVELOPED BY</Text>
          <img src={logo} alt="" className="mt-2" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
