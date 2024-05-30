import { type PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  className?: string;
  bold?: boolean;
  section: string;
}

function Link({
  children,
  className,
  bold,
  section,
}: LinkProps): React.ReactElement {
  return (
    <a
      href={`/#${section}`}
      className={`font-poppins ${className} ${bold && "font-bold"}`}
    >
      {children}
    </a>
  );
}

export default Link;
