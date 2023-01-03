import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ButtonSize } from "../utils/types";
import { ReactNode } from "react";
export type ButtonProps = {
  onClick: () => void;
  size: ButtonSize;
  content: string;
  children: ReactNode;
};

export const IconButton = ({
  onClick,
  size,
  content,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-md ${
        size == ButtonSize.SM ? "h-4 w-4 text-xs" : "h-10 w-10 text-base"
      } font-bold hover:scale-105 transition-all duration-200`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
