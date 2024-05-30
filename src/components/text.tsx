import { type PropsWithChildren } from "react";

interface TextProps extends PropsWithChildren {
  className?: string;
  bold?: boolean;
}

function Text({ children, className, bold }: TextProps): React.ReactElement {
  return (
    <span className={`font-poppins ${className} ${bold && "font-bold"}`}>
      {children}
    </span>
  );
}

export default Text;
