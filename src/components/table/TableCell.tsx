import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<"td"> {}

const TableCell = (props: TableCellProps) => {
  return (
    <>
      <td
        {...props}
        className="py-3 p-4 border-b-2 border-solid border-white/10 text-white/80"
      />
    </>
  );
};

export default TableCell;
