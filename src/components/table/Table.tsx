import { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table"> {}

const Table = (props: TableProps) => {
  return (
    <div className="border-2 border-solid border-white/10 rounded-lg ">
      {/* o {children} será aplicado dentro do spread props */}
      <table {...props} className="w-full" />
    </div>
  );
};

export default Table;
