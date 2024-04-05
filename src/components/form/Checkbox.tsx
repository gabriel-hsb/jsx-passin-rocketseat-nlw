import { ComponentProps } from "react";

interface CheckboxProps extends ComponentProps<"input"> {}

const Checkbox = (props: CheckboxProps) => {
  return (
    <input
      {...props}
      type="checkbox"
      className="bg-transparent rounded-[4px] cursor-pointer hover:bg-zinc-800 text-orange-400 ring-0 focus:ring-0 focus:ring-offset-0"
    />
  );
};

export default Checkbox;
