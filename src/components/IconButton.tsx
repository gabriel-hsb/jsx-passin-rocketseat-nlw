import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

const IconButton = ({ transparent, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      className={
        transparent
          ? "bg-transparent rounded-md p-1 border-solid border border-white/10"
          : "bg-white/10 rounded-md p-1 border-solid border border-white/10"
      }
    >
      {props.children}
    </button>
  );
};

export default IconButton;
