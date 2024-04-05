import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {}

const TableHeader = (props: TableHeaderProps) => {
  return <th {...props} className="py-3 px-4 size-4" />;
};

export default TableHeader;
