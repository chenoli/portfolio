import { type PropsWithChildren } from "react";

function Main({ children }: PropsWithChildren): React.ReactElement {
  return <div>{children}</div>;
}

export default Main;
