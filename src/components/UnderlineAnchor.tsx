import { type ReactNode } from "react";

interface UnderlineAnchorProps {
  href: string;
  children: ReactNode;
  classname?: string;
  onClick?: () => void;
}

export default function UnderlineAnchor({
  href,
  children,
  classname,
  onClick,
}: UnderlineAnchorProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-block text-white text-md overflow-hidden ${classname}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
    </a>
  );
}
