import { type PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren): React.ReactElement {
  return <div>{children}</div>;
}

export default Container;
