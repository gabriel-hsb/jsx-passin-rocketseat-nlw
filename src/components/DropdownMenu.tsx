import { Pencil, Trash2 } from "lucide-react";

const DropdownMenu = () => {
  return (
    <ul className="text-sm text-white/85 flex flex-col z-50 border border-solid border-white/10 rounded-lg max-w-32 absolute top-7 bg-zinc-900">
      <li className="flex items-center gap-2 group p-3 border-b-2 border-solid border-white/10 hover:cursor-pointer ">
        {" "}
        <Trash2 className="size-4 group-hover:text-[#f43737] " /> Remover
      </li>
      <li className="flex items-center gap-2 group p-3  border-solid border-white/10 hover:cursor-pointer ">
        {" "}
        <Pencil className="size-4 group-hover:text-[#F48F56] " /> Editar
      </li>
    </ul>
  );
};

export default DropdownMenu;
