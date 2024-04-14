import { Pencil, Trash2 } from "lucide-react";

interface DropdownMenuProps {
  index: number;
  attendees: Array<Object>;
  setLine: Function;
  attendeeName?: string;
  attendeeId?: number;
  onQuery: Function;
  Query: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  attendees,
  index,
  setLine,
  onQuery,
  Query,
}) => {
  function deleteAttendee(arr: Array<Object>, index: number) {
    arr.splice(index, 1);
    setLine(null);
  }

  return (
    <>
      <ul className="text-sm text-white/85 flex flex-col z-50 border border-solid border-white/10 rounded-lg max-w-32 absolute top-7 bg-zinc-900">
        <li>
          <button
            className="flex items-center gap-2 group p-3 border-b-2 border-solid border-white/10 hover:cursor-pointer"
            onClick={() => deleteAttendee(attendees, index)}
          >
            <Trash2 className="size-4 group-hover:text-[#f43737] " /> Remover
          </button>
        </li>
        <li>
          <button
            className="flex items-center gap-2 group p-3  border-solid border-white/10 hover:cursor-pointer "
            onClick={(e) => onQuery(!Query, e.stopPropagation())}
          >
            <Pencil className="size-4 group-hover:text-[#F48F56] " /> Editar
          </button>
        </li>
      </ul>
    </>
  );
};

export default DropdownMenu;
